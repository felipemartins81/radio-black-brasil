import { Component, ViewChild } 	from '@angular/core';
import { Http } 						from '@angular/http';
import { Nav, Platform } 			from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { StatusBar } 				from '@ionic-native/status-bar';
import { SplashScreen } 			from '@ionic-native/splash-screen';
import { HomePage } 					from '../pages/home/home';
import { ListPage } 					from '../pages/list/list';
import { Subscription } 			from 'rxjs/Subscription';
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
	actualTrack: any;
	playerMode: string = 'info';
	isWaiting: boolean = false;
	
	subscription: Subscription;

	constructor(
		private playerService: PlayerService, 
		public platform: Platform, 
		public statusBar: StatusBar, 
		public splashScreen: SplashScreen, 
		public http: Http,
		public actionSheetCtrl: ActionSheetController) {
		this.initializeApp();

		// menu itens
		this.pages = [
			{ title: 'test', component: HomePage },
			{ title: 'test item', component: ListPage }
		];

		// this.smPlaying = playerService.smPlaying;
		// this.smPlayerMode = playerService.smPlayerMode;

		// this.isWaiting = playerService.smWaiting;

		// get tracks api
		this.http.get('http://radioblackbrasil.com/api/tracks/random/').map(res => res.json()).subscribe(
			data => {
				playerService.smTrackList = data.tracks;
				// playerService.smCreateSound(playerService.smTrackList[0].url, null);
				this.play('firstCall');

				// let interval = setInterval(()=>{
				// 	// if(playerService.trackIsLoaded()){
				// 	if(!this.isWaiting){
				// 		// this.isWaiting = false;
				// 		this.actualTrack = playerService.getTrackInfo();
				// 		clearInterval(interval);
				// 	}
				// }, 1000);
				
			},
			error => { console.warn(';( error calling tracks service'); }
		);
	} // constructor
	
	presentActionSheet = () => {
		let actionSheet = this.actionSheetCtrl.create({
			title: this.actualTrack.artist +' - '+ this.actualTrack.title,
			buttons: [
				{
					icon: 'rewind',
					handler: () => {
						this.play('prev')
					}
				},
				{
					icon: this.isPlaying ? 'pause' : 'play',
					handler: () => {
						this.play('self');
					}
				},
				{
					icon: 'fastforward',
					handler: () => {
						this.play('next')
					}
				}
			]
		});
		actionSheet.present();
	}

	// obsStr: string = 'asa';

	ngOnInit() {
		this.subscription = this.playerService.smWaiting$.subscribe(
			(item) => { 
				this.isWaiting = item;
				console.log('+_+_+_+_+_+_+_+_+_+_+_+_+_'); 
				this.actualTrack = this.playerService.getTrackInfo();
			}
		);
		// this.subscription = this.playerService.smActualTrack$.subscribe(item => this.actualTrack = item);
	}
	ngOnDestroy() {
		// prevent memory leak when component is destroyed
		this.subscription.unsubscribe();
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
