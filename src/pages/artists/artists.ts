import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

// import { PlayerService } from '../../app/player.service';
// import { ListPage } from '../list/list';

@Component({
   selector: 'page-artists',
   templateUrl: 'artists.html'
})
export class ArtistsPage {
  selectedItem: any;
   artistList: any = [];
   artistListSplited: any = [];
   artistObj: any = {};

   constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

    this.selectedItem = navParams.get('item');
    
    if(this.selectedItem){
      // get artists profile
      this.http.get('http://radioblackbrasil.com/api/artist/?id='+ this.selectedItem.id).map(res => res.json()).subscribe(
        data => {
          this.artistObj = data.artist;
console.warn(this.artistObj);
        },
        error => { console.warn(';( error calling artists service'); }
      );
    }
    else {
      // get artists list
      this.http.get('http://radioblackbrasil.com/api/artists/').map(res => res.json()).subscribe(
          data => {
            this.artistList = data.artists;
            this.artistList.forEach((e, i) => {
                if(i < 10){
                  this.artistListSplited.push(e);
                }
                else {
                  return;
                }
            });
          },
          error => { console.warn(';( error calling artists service'); }
      );
    }
   } // end constructor

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArtistsPage');
  }
  
  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ArtistsPage, {
      item: item
    });
  }

}
