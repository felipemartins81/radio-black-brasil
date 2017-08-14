import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { MissionService }     from './app.service';

declare var soundManager: any;

@Component({
	templateUrl: 'app.html',
   providers: [MissionService]
})
export class app {
	@ViewChild(Nav) nav: Nav;

	rootPage: any = HomePage;
	pages: Array<{title: string, component: any}>;

	smTrackList: any;
	smPlaying: boolean = false;
	smCounter: number = 0;
	smTrackStr: string = 'track_';
	smActualTrack: any;
	smPlayerMode: string = 'info';
	smWaiting: boolean = true;

	constructor(private missionService: MissionService, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public http: Http) {
		this.initializeApp();

		// menu itens
		this.pages = [
			{ title: 'Home', component: HomePage },
			{ title: 'List', component: ListPage },
         { title: missionService.getStr(), component: null }
		];

		// get tracks api
		this.http.get('http://radioblackbrasil.com/api/tracks/random/').map(res => res.json()).subscribe(
			data => {
				this.smTrackList = data.tracks;
				this.smCreateSound(this.smTrackList[0].url, 'firstCall');
			},
			error => { console.warn(';( error calling tracks service'); }
		);
	}

	/* -------------------------------------------------------------
	** player functions
	*/
	smCreateSound(_url, _firstCall): void{
		this.smActualTrack = this.smTrackList[ this.smCounter ];
		if(!this.smActualTrack.smTrackId){
			this.smWaiting = true;
			this.smActualTrack.smTrackId = this.smTrackStr + this.smCounter.toString();
			soundManager.createSound({
				id: this.smActualTrack.smTrackId,
				url: _url,
				autoPlay: _firstCall ? true : false,
				onload: function() {
					if(_firstCall) 
						soundManager.pauseAll();
					setAfterCreate('onload');
				}
			});
		}
		let setAfterCreate = (_type) => {
			switch(_type){
				case 'onload': this.smWaiting = false;
			}
		}
	}

	smPlay(_pos): void {
		switch(_pos){
			// play ot pause
			case 'self':
				if(this.smPlaying){
					soundManager.pauseAll();
					this.smPlaying = false;
				}
				else{
					soundManager.resumeAll();
					this.smPlaying = true;
				}
				break;
			// next or prev
			default:
				if(_pos === 'prev'){
					if(this.smCounter === 0) return; // first
					soundManager.stop(this.smActualTrack.smTrackId);
					this.smCounter--;
				}
				if(_pos === 'next'){
					if(this.smCounter === this.smTrackList.length - 1) return; // last
					soundManager.stop(this.smActualTrack.smTrackId);
					this.smCounter++; 
				}
				this.smCreateSound(this.smTrackList[ this.smCounter ].url, null); 
				soundManager.play(this.smActualTrack.smTrackId);
				this.smPlaying = true;
				break;
		}
	}

	smChangePlayerMode(): void {
		switch(this.smPlayerMode){
			case 'controls':
				this.smPlayerMode = 'info';
				break;
			case 'info':
				this.smPlayerMode = 'controls';
				break;
		}
	}
	/* 
	** ------------------------------------------------------------- */

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}

	openPage(page) {
		this.nav.setRoot(page.component);
	}
}
