import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

declare var smPlayer: any;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;
  smTracks: any;
  smIsPlaying: boolean = false;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public http: Http) {
    this.initializeApp();

    // menu itens
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];

    // get tracks api
    this.http.get('http://radioblackbrasil.com/api/tracks/').map(res => res.json()).subscribe(
      data => {
        this.smTracks = data.tracks;
        smPlayer.playTrackByUrl(this.smTracks[0].url);
        this.smIsPlaying = true;
      },
      error => { console.warn('error calling tracks service'); }
    );

  }

  /* -------------------------------------------------------------
  ** player functions
  */
  smTogglePlayPause(): void {
    if(this.smIsPlaying){
      smPlayer.pause();
      this.smIsPlaying = false;
    }
    else{
      smPlayer.play();
      this.smIsPlaying = true;
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
