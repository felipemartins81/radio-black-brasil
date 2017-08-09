import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   trackList: any = [];
   trackListSplited: any = [];

   constructor(public navCtrl: NavController, public http: Http) {
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

}
