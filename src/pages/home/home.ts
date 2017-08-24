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
      // let limit = 10;
      // let offset = 0;

		// get tracks api
		this.http.get('http://radioblackbrasil.com/api/tracks/latest/').map(res => res.json()).subscribe(
			data => {
            this.trackList = data.tracks;
            this.trackList.forEach((e, i) => {
               if(i < 5){
                  this.trackListSplited.push(e);
               }
            });
			},
			error => { console.warn(';( error calling tracks service'); }
		);
   }

	play(_pos, _index): void {
      console.log(_pos);
      console.log(_index);
      console.log(this.trackList[_index].url);
      this.playerService.smCreateSound(this.trackList[_index].url, 'outPlayer');
	}

}
