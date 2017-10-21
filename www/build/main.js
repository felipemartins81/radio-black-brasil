webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_player_service__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, http, playerService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.playerService = playerService;
        this.trackList = [];
        this.trackListSplited = [];
        // get tracks api
        this.http.get('http://radioblackbrasil.com/api/tracks/latest/').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.trackList = data.tracks;
            _this.trackList.some(function (e, i) {
                if (i < 10) {
                    _this.trackListSplited.push(e);
                }
                else {
                    return true;
                }
            });
        }, function (error) { console.warn(';( error calling tracks service'); });
    }
    HomePage.prototype.play = function (_pos, _index, _artist, _title) {
        var newTrack = {
            artist: _artist,
            title: _title,
            pos: _pos,
            index: _index
        };
        this.playerService.smCreateSound(this.trackList[_index].url, newTrack);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Repos\radio-black-brasil\src\pages\home\home.html"*/'<ion-header>\n\n   <ion-navbar>\n\n      <button ion-button menuToggle>\n\n         <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Destaques</ion-title>\n\n   </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n   <ion-card img-mini *ngFor="let track of trackListSplited; let i = index">\n\n      <img *ngIf="track.capa" src="http://radioblackbrasil.com/files/albums/{{ track.capa }}"/>\n\n      <ion-card-content>\n\n         <ion-card-title class="txt-no-break">{{ track.artist }}</ion-card-title>\n\n         <p class="txt-bold txt-no-break"> <i class="fa fa-music"></i> &nbsp; {{ track.title }}</p>\n\n         <p class="txt-italic txt-no-break">{{ track.genero }}</p>\n\n      </ion-card-content>\n\n      <ion-row no-padding>\n\n         <ion-col>\n\n            <button ion-button clear small color="danger" icon-start>\n\n               <!-- <ion-icon name=\'share-alt\'></ion-icon>\n\n               Share -->\n\n            </button>\n\n         </ion-col>\n\n         <ion-col text-center>\n\n            <button ion-button clear small color="danger" icon-start>\n\n               <!-- <ion-icon name=\'musical-notes\'></ion-icon>\n\n               Listen -->\n\n            </button>\n\n         </ion-col>\n\n         <ion-col text-right>\n\n            <button ion-button clear icon-start (click)="play(\'self\', i, track.artist, track.title)">\n\n               <ion-icon name=\'play\'></ion-icon> Ouvir\n\n            </button>\n\n         </ion-col>\n\n      </ion-row>\n\n   </ion-card>\n\n\n\n   <!-- behind player space -->\n\n   <br>\n\n   <br>\n\n   <br>\n\n   <br>\n\n   \n\n</ion-content>'/*ion-inline-end:"C:\Repos\radio-black-brasil\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__app_player_service__["a" /* PlayerService */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PlayerService = (function () {
    function PlayerService() {
        this.smPlaying = false;
        this.smCounter = 0;
        this.smTrackStr = 'track_';
        this.smLastTrackId = 0;
        this.smCreatedFromOut = false;
        this.auxTrackList = [];
        this.smWaiting = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.smWaiting$ = this.smWaiting.asObservable();
    }
    PlayerService.prototype.smCreateSound = function (_url, _type) {
        var _this = this;
        // out player
        if (_type && typeof (_type) === 'object') {
            this.smCounter = this.smLastTrackId;
            this.smActualTrack = this.smTrackList[this.smCounter];
            this.smActualTrack.url = _url;
            this.smActualTrack.smTrackId = null;
            this.smActualTrack.artist = _type.artist;
            this.smActualTrack.title = _type.title;
            this.smCreatedFromOut = true;
        }
        else {
            this.smActualTrack = this.smTrackList[this.smCounter];
        }
        if (!this.smActualTrack.smTrackId) {
            if (_type !== 'firstCall') {
                this.smWaiting.next(true);
            }
            this.smActualTrack.smTrackId = this.smTrackStr + this.smCounter.toString();
            soundManager.createSound({
                id: this.smActualTrack.smTrackId,
                url: _url,
                autoPlay: true,
                onload: function () {
                    setAfterCreate('onload');
                },
                onbufferchange: function (state) {
                    if (this.smWaiting !== undefined && state === 0) {
                        console.warn('>> buffer change state 0');
                        this.smWaiting.next(false);
                    }
                    else if (this.smWaiting !== undefined && state === 1) {
                        console.warn('<< buffer change state 1');
                        this.smWaiting.next(true);
                    }
                },
                whileplaying: function () {
                    __WEBPACK_IMPORTED_MODULE_2_jquery__("#progress").css('width', ((this.position / this.duration) * 100) + '%');
                },
            });
        }
        var setAfterCreate = function (_onType) {
            switch (_onType) {
                case 'onload':
                    _this.smWaiting.next(false);
                    break;
            }
        };
        this.smLastTrackId = soundManager.soundIDs.length;
    };
    PlayerService.prototype.smPlay = function (_pos) {
        switch (_pos) {
            case 'firstCall':
                this.smCreateSound(this.smTrackList[this.smCounter].url, _pos);
                this.smPlaying = false;
                setTimeout(function () { soundManager.pauseAll(); }, 500);
                break;
            // play or pause
            case 'self':
                if (this.smPlaying) {
                    soundManager.pauseAll();
                    this.smPlaying = false;
                }
                else {
                    soundManager.resumeAll();
                    this.smPlaying = true;
                }
                break;
            // next or prev
            case 'prev':
                if (this.smCounter === 0)
                    return; // first
                soundManager.stop(this.smActualTrack.smTrackId);
                soundManager.unload(this.smActualTrack.smTrackId);
                this.smCounter--;
                this.smActualTrack = this.smTrackList[this.smCounter];
                soundManager.play(this.smTrackStr + this.smCounter.toString());
                this.smPlaying = true;
                break;
            case 'next':
                if (this.smCounter === this.smTrackList.length - 1)
                    return; // last
                soundManager.stop(this.smActualTrack.smTrackId);
                soundManager.unload(this.smActualTrack.smTrackId);
                this.smCounter++;
                this.smCreateSound(this.smTrackList[this.smCounter].url, null);
                soundManager.play(this.smActualTrack.smTrackId);
                this.smPlaying = true;
                break;
        }
        return this.smPlaying;
    };
    PlayerService.prototype.getTrackInfo = function () {
        return this.smActualTrack;
    };
    return PlayerService;
}());
PlayerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], PlayerService);

//# sourceMappingURL=player.service.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { PlayerService } from '../../app/player.service';
// import { ListPage } from '../list/list';
var ArtistsPage = ArtistsPage_1 = (function () {
    function ArtistsPage(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.artistList = [];
        this.artistListSplited = [];
        this.artistObj = {};
        this.selectedItem = navParams.get('item');
        if (this.selectedItem) {
            // get artists profile
            this.http.get('http://radioblackbrasil.com/api/artist/?id=' + this.selectedItem.id).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.artistObj = data.artist;
                console.warn(_this.artistObj);
            }, function (error) { console.warn(';( error calling artists service'); });
        }
        else {
            // get artists list
            this.http.get('http://radioblackbrasil.com/api/artists/').map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.artistList = data.artists;
                _this.artistList.forEach(function (e, i) {
                    if (i < 10) {
                        _this.artistListSplited.push(e);
                    }
                    else {
                        return;
                    }
                });
            }, function (error) { console.warn(';( error calling artists service'); });
        }
    } // end constructor
    ArtistsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ArtistsPage');
    };
    ArtistsPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ArtistsPage_1, {
            item: item
        });
    };
    return ArtistsPage;
}());
ArtistsPage = ArtistsPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-artists',template:/*ion-inline-start:"C:\Repos\radio-black-brasil\src\pages\artists\artists.html"*/'<ion-header>\n  <ion-navbar>\n     <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n     </button>\n     <ion-title>{{ artistObj.name ? artistObj.name : \'Artistas\' }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content *ngIf="artistObj.name" class="card-background-image">\n  <ion-card class="card-bg-image bg-profile" style="padding-top:200px" \n    [ngStyle]="{\'background-image\': \'url(http://radioblackbrasil.com/files/photos/\'+ artistObj.photo +\')\'}">\n    <ion-card-content></ion-card-content>\n    <ion-row no-padding><ion-col><ion-card-title class="txt-no-break">&nbsp;</ion-card-title></ion-col></ion-row>\n  </ion-card>\n</ion-content>\n\n<ion-content padding class="card-background-image">\n\n  <ion-card class="card-bg-image" \n    *ngFor="let artist of artistListSplited; let i = index" \n    [ngStyle]="{\'background-image\': \'url(http://radioblackbrasil.com/files/photos/\'+ artist.photo +\')\'}"\n    (click)="itemTapped($event, artist)">\n     <!-- <img *ngIf="track.capa" src="http://radioblackbrasil.com/files/albums/{{ track.capa }}"/> -->\n     <!-- <div class="img" [ngStyle]="{\'background\': \'url(http://radioblackbrasil.com/files/albums/\'+ track.capa +\')\'}"></div> -->\n     <ion-card-content>\n        <!-- <ion-card-title class="txt-no-break">{{ artist.name }}</ion-card-title> -->\n        <!-- <p class="txt-bold txt-no-break"> <i class="fa fa-music"></i> &nbsp; {{ artist.title }}</p>\n        <p class="txt-italic txt-no-break">{{ artist.genero }}</p> -->\n     </ion-card-content>\n     <ion-row no-padding>\n        <ion-col>\n            <ion-card-title class="txt-no-break">{{ artist.name }}</ion-card-title>\n        </ion-col>\n        <!-- <ion-col text-center>\n           <button ion-button clear small color="danger" icon-start>\n              <ion-icon name=\'musical-notes\'></ion-icon>\n              Listen\n           </button>\n        </ion-col>\n        <ion-col text-right>\n           <button ion-button clear icon-start (click)="play(\'self\', i, track.artist, track.title)">\n              <ion-icon name=\'play\'></ion-icon> Ouvir\n           </button>\n        </ion-col> -->\n     </ion-row>\n  </ion-card>\n\n  <!-- artist profile -->\n  <ion-grid *ngIf="artistObj.name" style="margin-top:180px; background:#242424; opacity:0.95">\n    <ion-row>\n      <ion-col>\n        <!-- <h1>{{ artistObj.name }}</h1> -->\n        <ion-item style="opacity:0.6">{{ artistObj.genre1 }}</ion-item>\n        <p style="opacity:0.6; margin:10px 0" [innerHTML]="artistObj.content"></p>\n        <ion-list>\n          <button ion-item *ngIf="artistObj.email">\n            <div class="item-note" item-left><i class="fa fa-envelope"></i></div>\n            {{ artistObj.email }}\n            <div class="item-note" item-right>&raquo;</div>\n          </button>\n          <button ion-item *ngIf="artistObj.facebook_url">\n            <div class="item-note" item-left><i class="fa fa-facebook"></i></div>\n            {{ artistObj.facebook_url }}\n            <div class="item-note" item-right>&raquo;</div>\n          </button>\n          <button ion-item *ngIf="artistObj.instagram_id">\n            <div class="item-note" item-left><i class="fa fa-instagram"></i></div>\n            {{ artistObj.instagram_id }}\n            <div class="item-note" item-right>&raquo;</div>\n          </button>\n          <button ion-item *ngIf="artistObj.twitter_url">\n            <div class="item-note" item-left><i class="fa fa-twitter"></i></div>\n            {{ artistObj.twitter_url }}\n            <div class="item-note" item-right>&raquo;</div>\n          </button>\n          <button ion-item *ngIf="artistObj.soundcloud_url">\n            <div class="item-note" item-left><i class="fa fa-soundcloud"></i></div>\n            {{ artistObj.soundcloud_url }}\n            <div class="item-note" item-right>&raquo;</div>\n          </button>\n          <button ion-item *ngIf="artistObj.website_url">\n            <div class="item-note" item-left><i class="fa fa-globe"></i></div>\n            {{ artistObj.website_url }}\n            <div class="item-note" item-right>&raquo;</div>\n          </button>\n          <button ion-item *ngIf="artistObj.youtube_url">\n            <div class="item-note" item-left><i class="fa fa-youtube"></i></div>\n            {{ artistObj.youtube_url }}\n            <div class="item-note" item-right>&raquo;</div>\n          </button>\n        </ion-list>\n      </ion-col>  \n    </ion-row>\n  </ion-grid>\n\n  <!-- behind player space -->\n  <br>\n  <br>\n  <br>\n  <br>\n  \n</ion-content>'/*ion-inline-end:"C:\Repos\radio-black-brasil\src\pages\artists\artists.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], ArtistsPage);

var ArtistsPage_1;
//# sourceMappingURL=artists.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"C:\Repos\radio-black-brasil\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-right>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Repos\radio-black-brasil\src\pages\list\list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_artists_artists__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* app */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_artists_artists__["a" /* ArtistsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* app */]),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* app */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_artists_artists__["a" /* ArtistsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return app; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_artists_artists__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__player_service__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var app = (function () {
    function app(playerService, platform, statusBar, splashScreen, http, actionSheetCtrl) {
        var _this = this;
        this.playerService = playerService;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.http = http;
        this.actionSheetCtrl = actionSheetCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.isPlaying = false;
        this.playerMode = 'info';
        this.isWaiting = false;
        this.presentActionSheet = function () {
            var actionSheet = _this.actionSheetCtrl.create({
                title: _this.actualTrack.artist + ' - ' + _this.actualTrack.title,
                buttons: [
                    {
                        icon: 'rewind',
                        handler: function () {
                            _this.play('prev');
                        }
                    },
                    {
                        icon: _this.isPlaying ? 'pause' : 'play',
                        handler: function () {
                            _this.play('self');
                        }
                    },
                    {
                        icon: 'fastforward',
                        handler: function () {
                            _this.play('next');
                        }
                    }
                ]
            });
            actionSheet.present();
        };
        this.initializeApp();
        // menu itens
        this.pages = [
            { title: 'Destaques', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { title: 'Artistas', component: __WEBPACK_IMPORTED_MODULE_6__pages_artists_artists__["a" /* ArtistsPage */] },
            { title: 'test item', component: __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */] }
        ];
        // get tracks api
        this.http.get('http://radioblackbrasil.com/api/tracks/random/').map(function (res) { return res.json(); }).subscribe(function (data) {
            playerService.smTrackList = data.tracks;
            _this.play('firstCall');
        }, function (error) { console.warn(';( error calling tracks service'); });
    } // constructor
    app.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.playerService.smWaiting$.subscribe(function (item) {
            _this.isWaiting = item;
            _this.actualTrack = _this.playerService.getTrackInfo();
        });
    };
    app.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    app.prototype.play = function (_pos) {
        this.isPlaying = this.playerService.smPlay(_pos);
        this.actualTrack = this.playerService.getTrackInfo();
    };
    app.prototype.changePlayerMode = function () {
        switch (this.playerMode) {
            case 'controls':
                this.playerMode = 'info';
                break;
            case 'info':
                this.playerMode = 'controls';
                break;
        }
    };
    app.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    app.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    return app;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Nav */])
], app.prototype, "nav", void 0);
app = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Repos\radio-black-brasil\src\app\app.html"*/'<ion-menu [content]="content">\n\n   <ion-header>\n\n      <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n      </ion-toolbar>\n\n   </ion-header>\n\n   <ion-content>\n\n      <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n         {{p.title}}\n\n      </button>\n\n      </ion-list>\n\n   </ion-content>\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n\n\n<ion-footer>\n\n   <ion-toolbar>\n\n      <ion-grid>\n\n      <ion-row id="progress"></ion-row>\n\n      <ion-row justify-content-between>\n\n         <!-- prev -->\n\n         <ion-col *ngIf="playerMode === \'controls\'" col-5 class="txt-center">\n\n            <a (click)="play(\'prev\')">\n\n               <i class="fa fa-angle-left fa-4x"></i>\n\n            </a>\n\n         </ion-col>\n\n         <!-- play / pause -->\n\n         <ion-col col-2 class="txt-center" [hidden]="!isWaiting">\n\n            <a><i class="fa fa-spinner fa-pulse fa-fw fa-4x"></i></a>\n\n         </ion-col>\n\n         <ion-col col-2 class="txt-center" [hidden]="isWaiting">\n\n            <a (click)="play(\'self\')">\n\n               <i class="fa fa-{{ isPlaying ? \'pause\' : \'play\' }}-circle fa-4x"></i>\n\n            </a>\n\n         </ion-col>\n\n         <!-- Track info -->\n\n         <ion-col *ngIf="playerMode === \'info\'" col-10>\n\n            <a *ngIf="actualTrack" (click)="presentActionSheet()" class="f-right"><i class="fa fa-angle-up fa-2x"></i></a>\n\n            <p class="txt-bold txt-no-break">{{ actualTrack ? actualTrack.artist : \'\' }}</p>\n\n            <p class="txt-no-break">{{ actualTrack ? actualTrack.title : \'\' }}</p>\n\n         </ion-col>\n\n         <!-- next -->\n\n         <ion-col *ngIf="playerMode === \'controls\'" col-5 class="txt-center">\n\n            <a (click)="play(\'next\')">\n\n               <i class="fa fa-angle-right fa-4x"></i>\n\n            </a>\n\n         </ion-col>\n\n      </ion-row>\n\n      </ion-grid>\n\n   </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Repos\radio-black-brasil\src\app\app.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_9__player_service__["a" /* PlayerService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__player_service__["a" /* PlayerService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */]])
], app);

//# sourceMappingURL=app.component.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map