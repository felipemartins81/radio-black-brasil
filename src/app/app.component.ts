import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

declare var soundManager: any;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;

  smTrackList: any;
  smIsPlaying: boolean = false;
  smCounter: number = 0;
  smTrackStr: string = 'track_';
  smActualTrack: any;
  smPlayerMode: string = 'info';

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
        this.smTrackList = data.tracks;
        console.log(this.smTrackList[0]);
        this.smCreateSound(this.smTrackList[0].url, 'firstCall');
      },
      error => { console.warn(';( error calling tracks service'); }
    );

  }

  /* -------------------------------------------------------------
  ** player functions
  */
  smCreateSound(_url, _firstCall): void{
    soundManager.createSound({
      id: this.smTrackStr + this.smCounter.toString(),
      url: _url,
      autoPlay: _firstCall ? true : false,
      onload: function() {
        if(_firstCall) 
          soundManager.pauseAll();
      }
    });
    this.smActualTrack = this.smTrackList[ this.smCounter ];
  }

  smPlay(_pos): void {
    switch(_pos){
      // play ot pause
      case 'self':
        if(this.smIsPlaying){
          soundManager.pauseAll();
          this.smIsPlaying = false;
        }
        else{
          soundManager.resumeAll();
          this.smIsPlaying = true;
        }
        break;
      // next or prev
      default:        
        this.smIsPlaying = true;
        // stop actual
        soundManager.stop(this.smTrackStr + this.smCounter.toString());
        // go to nwxt or prev
        if(_pos === 'next'){ this.smCounter++ }
        if(_pos === 'prev'){ this.smCounter-- }
        this.smCreateSound(this.smTrackList[ this.smCounter ].url, null);
        soundManager.play(this.smTrackStr + this.smCounter.toString());
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
