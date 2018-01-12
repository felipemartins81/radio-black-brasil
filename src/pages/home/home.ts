import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { PlayerService } from '../../app/player.service';
import 'rxjs/add/operator/map';


@Component({
   selector: 'page-home',
   templateUrl: 'home.html'
})
export class HomePage {
   trackList: any = [];
   trackListSplited: any = [];
   loader: any;

   constructor(public navCtrl: NavController, public http: Http, private playerService: PlayerService, public loadingCtrl: LoadingController) {

    this.loader = this.loadingCtrl.create({ content: "Carregando..." });
    this.loader.present();

      // get tracks api
      this.http.get('http://radioblackbrasil.com/api/tracks/latest/').map(res => res.json()).subscribe(
         data => {
            this.trackList = data.tracks;
            this.trackList.forEach((e, i) => {
               if(i < 10){
                  this.trackListSplited.push(e);
               }
               else { return true; }
            });
            setTimeout(() => { this.loader.dismiss() }, 500);
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
