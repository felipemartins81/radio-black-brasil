import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { PlayerService }     from './player.service';

// declare var soundManager: any;

@Component({
	templateUrl: 'app.html',
   providers: [PlayerService]
})
export class app {
	@ViewChild(Nav) nav: Nav;

	rootPage: any = HomePage;
	pages: Array<{title: string, component: any}>;

	// smTrackList: any;
	isPlaying: boolean = false;
	// smCounter: number = 0;
	// smTrackStr: string = 'track_';
	actualTrack: object;
	playerMode: string = 'info';
	isWaiting: boolean = true;

	constructor(private playerService: PlayerService, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public http: Http) {
		this.initializeApp();

		// menu itens
		this.pages = [
			{ title: 'Home', component: HomePage },
			{ title: 'List', component: ListPage },
			{ title: playerService.getStr(), component: null }
		];

		// this.smPlaying = playerService.smPlaying;
		// this.smPlayerMode = playerService.smPlayerMode;
		this.isWaiting = playerService.smWaiting;

		// get tracks api
		this.http.get('http://radioblackbrasil.com/api/tracks/random/').map(res => res.json()).subscribe(
			data => {
				playerService.smTrackList = data.tracks;
				playerService.smCreateSound(playerService.smTrackList[0].url, 'firstCall');
				let interval = setInterval(()=>{
					if(playerService.trackIsLoaded()){
						this.isWaiting = false;
						this.actualTrack = playerService.getTrackInfo();
						clearInterval(interval);
					}
				}, 2000);
			},
			error => { console.warn(';( error calling tracks service'); }
		);
	}

	play(_pos): void {
		this.isPlaying = this.playerService.smPlay(_pos);
		this.actualTrack = this.playerService.getTrackInfo();
	}

	changePlayerMode(): void {
		switch(this.playerMode){
			case 'controls':
				this.playerMode = 'info';
				break;
			case 'info':
				this.playerMode = 'controls';
				break;
		}
	}

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
