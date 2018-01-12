import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { PlayerService } from '../../app/player.service';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  trackList: any = [];
  trackListSplited: any = [];
  tracksInList: number = 0;    
  loader: any;
  
  constructor(public navCtrl: NavController, private playerService: PlayerService, public http: Http, public navParams: NavParams, public loadingCtrl: LoadingController) {

    this.loader = this.loadingCtrl.create({ content: "Carregando..." });
    this.loader.present();

    this.getTracks();
  }

  getTracks() {
    this.http.get('http://radioblackbrasil.com/api/tracks/random/').map(res => res.json()).subscribe(
      data => {
        this.trackList = data.tracks;
        this.showTracks();
      },
      error => { console.warn(';( error calling tracks service'); }
    );
  }

  showTracks() {
    this.loader.present();

    const amountToAdd = 20;
    
    this.trackList.forEach((e, i) => {
      if(i >= this.tracksInList && i < this.tracksInList + amountToAdd){
        this.trackListSplited.push(e);
      }
      else { return true; }
    });
    this.tracksInList += amountToAdd;
    setTimeout(() => { this.loader.dismiss() }, 500);
  }

  getItems(ev: any) {
    const txt = ev.target.value;

    if (txt && txt.trim() != '') {
      this.trackListSplited = this.trackList.filter((item) => {
        return (
          item.artist.toLowerCase().indexOf(txt.toLowerCase()) > -1 ||
          item.title.toLowerCase().indexOf(txt.toLowerCase()) > -1
        );
      })
    }
    else {
      this.tracksInList = 0;
      this.showTracks();
    }
  }

   play(_pos, _id, _artist, _title): void {
    let newTrack = {
        artist: _artist,
        title: _title,
        pos: _pos
    };
    const track = this.trackList.find(e => e.id === _id);
    this.playerService.smCreateSound(track.url, newTrack);
   }
}
