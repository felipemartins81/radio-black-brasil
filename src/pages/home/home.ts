import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { PlayerService } from '../../app/player.service';

@Component({
   selector: 'page-home',
   templateUrl: 'home.html'
})
export class HomePage {
   trackList: any = [];
   trackListSplited: any = [];

   constructor(public navCtrl: NavController, public http: Http, private playerService: PlayerService) {

      // get tracks api
      this.http.get('http://radioblackbrasil.com/api/tracks/latest/').map(res => res.json()).subscribe(
         data => {
            this.trackList = data.tracks;
            this.trackList.some((e, i) => {
               if(i < 10){
                  this.trackListSplited.push(e);
               }
               else { return true; }
            });
         },
         error => { console.warn(';( error calling tracks service'); }
      );
   }

   play(_pos, _index, _artist, _title): void {
      let newTrack = {
         artist: _artist,
         title: _title,
         pos: _pos,
         index: _index
      };
      this.playerService.smCreateSound(this.trackList[_index].url, newTrack);
   }

}
