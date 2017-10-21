import { Component, ViewChild } 	from '@angular/core';
import { Http } 						from '@angular/http';
import { Nav, Platform } 			from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { StatusBar } 				from '@ionic-native/status-bar';
import { SplashScreen } 			from '@ionic-native/splash-screen';
import { HomePage } 					from '../pages/home/home';
import { ArtistsPage }  			from '../pages/artists/artists';
import { ListPage } 					from '../pages/list/list';
import { Subscription } 			from 'rxjs/Subscription';
import 'rxjs/add/operator/map';

import { PlayerService }     from './player.service';

@Component({
	templateUrl: 'app.html',
   providers: [PlayerService]
})
export class app {
	@ViewChild(Nav) nav: Nav;

	rootPage: any = HomePage;
	pages: Array<{title: string, component: any}>;

	isPlaying: boolean = false;
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
			{ title: 'Destaques', component: HomePage },
			{ title: 'Artistas', component: ArtistsPage },
			{ title: 'test item', component: ListPage }
		];

		// get tracks api
		this.http.get('http://radioblackbrasil.com/api/tracks/random/').map(res => res.json()).subscribe(
			data => {
				playerService.smTrackList = data.tracks;
				this.play('firstCall');
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

	ngOnInit() {
		this.subscription = this.playerService.smWaiting$.subscribe(
			(item) => { 
				this.isWaiting = item;
				this.actualTrack = this.playerService.getTrackInfo();
			}
		);
	}
	ngOnDestroy() {
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
