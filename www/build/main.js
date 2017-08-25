webpackJsonp([0],{

/***/ 107:
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
webpackEmptyAsyncContext.id = 107;

/***/ }),

/***/ 149:
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
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_player_service__ = __webpack_require__(195);
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
        // let limit = 10;
        // let offset = 0;
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.playerService = playerService;
        this.trackList = [];
        this.trackListSplited = [];
        // get tracks api
        this.http.get('http://radioblackbrasil.com/api/tracks/latest/').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.trackList = data.tracks;
            _this.trackList.forEach(function (e, i) {
                if (i < 5) {
                    _this.trackListSplited.push(e);
                }
            });
        }, function (error) { console.warn(';( error calling tracks service'); });
    }
    HomePage.prototype.play = function (_pos, _index) {
        console.log(_pos);
        console.log(_index);
        console.log(this.trackList[_index].url);
        this.playerService.smCreateSound(this.trackList[_index].url, 'outPlayer');
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Repos\radio-black-brasil\src\pages\home\home.html"*/'<ion-header>\n\n   <ion-navbar>\n\n      <button ion-button menuToggle>\n\n         <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Dj recomenda</ion-title>\n\n   </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n   <ion-card img-mini *ngFor="let track of trackListSplited; let i = index">\n\n      <img *ngIf="track.capa" src="http://radioblackbrasil.com/files/albums/{{ track.capa }}"/>\n\n      <ion-card-content>\n\n         <ion-card-title class="txt-no-break">{{ track.artist }}</ion-card-title>\n\n         <p class="txt-bold txt-no-break"> <i class="fa fa-music"></i> &nbsp; {{ track.title }}</p>\n\n         <p class="txt-italic txt-no-break">{{ track.genero }}</p>\n\n      </ion-card-content>\n\n      <ion-row no-padding>\n\n         <ion-col>\n\n            <button ion-button clear small color="danger" icon-start>\n\n               <!-- <ion-icon name=\'share-alt\'></ion-icon>\n\n               Share -->\n\n            </button>\n\n         </ion-col>\n\n         <ion-col text-center>\n\n            <button ion-button clear small color="danger" icon-start>\n\n               <!-- <ion-icon name=\'musical-notes\'></ion-icon>\n\n               Listen -->\n\n            </button>\n\n         </ion-col>\n\n         <ion-col text-right>\n\n            <button ion-button clear icon-start (click)="play(\'self\', i)">\n\n               <ion-icon name=\'play\'></ion-icon> Ouvir\n\n            </button>\n\n         </ion-col>\n\n      </ion-row>\n\n   </ion-card>\n\n\n\n   <!-- behind player space -->\n\n   <br>\n\n   <br>\n\n   <br>\n\n   <br>\n\n   \n\n</ion-content>'/*ion-inline-end:"C:\Repos\radio-black-brasil\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__app_player_service__["a" /* PlayerService */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PlayerService = (function () {
    function PlayerService() {
        // Observable string sources
        this.strTeste = 'str service teste';
        this.smPlaying = false;
        this.smCounter = 0;
        this.smTrackStr = 'track_';
        // smPlayerMode: string = 'info';
        // smWaiting: boolean = true;
        this.smWaiting = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](true);
        this.smWaiting$ = this.smWaiting.asObservable();
        // smChangePlayerMode(): void {
        // 	switch(this.smPlayerMode){
        // 		case 'controls':
        // 			this.smPlayerMode = 'info';
        // 			break;
        // 		case 'info':
        // 			this.smPlayerMode = 'controls';
        // 			break;
        // 	}
        // }
    }
    // private testeObs = new BehaviorSubject<string>('111');
    // streamObs$ = this.testeObs.asObservable();
    // Observable string streams
    //   missionAnnounced$ = this.missionAnnouncedSource.asObservable();
    //   missionConfirmed$ = this.missionConfirmedSource.asObservable();
    // Service message commands
    PlayerService.prototype.announceMission = function (mission) {
        // this.missionAnnouncedSource.next(mission);
        this.strTeste = mission;
    };
    PlayerService.prototype.confirmMission = function (astronaut) {
        // this.missionConfirmedSource.next(astronaut);
    };
    //
    PlayerService.prototype.smCreateSound = function (_url, _type) {
        var _this = this;
        if (_type === 'outPlayer') {
            this.smCounter++;
        }
        // this.testeObs.next('222');
        this.smActualTrack = this.smTrackList[this.smCounter];
        if (!this.smActualTrack.smTrackId) {
            // this.smWaiting = true;
            this.smWaiting.next(true);
            this.smActualTrack.smTrackId = this.smTrackStr + this.smCounter.toString();
            soundManager.createSound({
                id: this.smActualTrack.smTrackId,
                url: _url,
                autoPlay: _type ? true : false,
                onload: function () {
                    if (_type === 'firstCall') {
                        soundManager.pauseAll();
                    }
                    setAfterCreate('onload');
                }
            });
        }
        var setAfterCreate = function (_type) {
            switch (_type) {
                // case 'onload': this.smWaiting = false;
                case 'onload': _this.smWaiting.next(false);
            }
        };
    };
    PlayerService.prototype.smPlay = function (_pos) {
        switch (_pos) {
            // play ot pause
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
            default:
                if (_pos === 'prev') {
                    if (this.smCounter === 0)
                        return; // first
                    soundManager.stop(this.smActualTrack.smTrackId);
                    soundManager.unload(this.smActualTrack.smTrackId);
                    this.smCounter--;
                }
                if (_pos === 'next') {
                    if (this.smCounter === this.smTrackList.length - 1)
                        return; // last
                    soundManager.stop(this.smActualTrack.smTrackId);
                    soundManager.unload(this.smActualTrack.smTrackId);
                    this.smCounter++;
                }
                this.smCreateSound(this.smTrackList[this.smCounter].url, null);
                soundManager.play(this.smActualTrack.smTrackId);
                this.smPlaying = true;
                break;
        }
        return this.smPlaying;
    };
    PlayerService.prototype.trackIsLoaded = function () {
        return !this.smWaiting;
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

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
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

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(216);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(192);
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
            __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */]
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
            __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return app; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__player_service__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










// declare var soundManager: any;
var app = (function () {
    function app(playerService, platform, statusBar, splashScreen, http, actionSheetCtrl) {
        // this.initializeApp();
        var _this = this;
        this.playerService = playerService;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.http = http;
        this.actionSheetCtrl = actionSheetCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        // smTrackList: any;
        this.isPlaying = false;
        this.playerMode = 'info';
        this.isWaiting = true;
        this.presentActionSheet = function () {
            var actionSheet = _this.actionSheetCtrl.create({
                title: 'Modify your album',
                buttons: [
                    {
                        text: 'Destructive',
                        role: 'destructive',
                        handler: function () {
                            console.log('Destructive clicked');
                        }
                    }, {
                        text: 'Archive',
                        handler: function () {
                            console.log('Archive clicked');
                        }
                    }, {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            actionSheet.present();
        };
        // menu itens
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */] }
        ];
        // this.smPlaying = playerService.smPlaying;
        // this.smPlayerMode = playerService.smPlayerMode;
        // this.isWaiting = playerService.smWaiting;
        // get tracks api
        this.http.get('http://radioblackbrasil.com/api/tracks/random/').map(function (res) { return res.json(); }).subscribe(function (data) {
            playerService.smTrackList = data.tracks;
            playerService.smCreateSound(playerService.smTrackList[0].url, 'firstCall');
            var interval = setInterval(function () {
                // if(playerService.trackIsLoaded()){
                if (!_this.isWaiting) {
                    // this.isWaiting = false;
                    _this.actualTrack = playerService.getTrackInfo();
                    clearInterval(interval);
                }
            }, 2000);
        }, function (error) { console.warn(';( error calling tracks service'); });
    } // constructor
    // obsStr: string = 'asa';
    app.prototype.ngOnInit = function () {
        var _this = this;
        // this.subscription = this.playerService.streamObs$.subscribe(item => this.obsStr = item)
        this.subscription = this.playerService.smWaiting$.subscribe(function (item) { return _this.isWaiting = item; });
    };
    app.prototype.ngOnDestroy = function () {
        // prevent memory leak when component is destroyed
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
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Nav */]) === "function" && _a || Object)
], app.prototype, "nav", void 0);
app = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Repos\radio-black-brasil\src\app\app.html"*/'<ion-menu [content]="content">\n\n   <ion-header>\n\n      <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n      </ion-toolbar>\n\n   </ion-header>\n\n   <ion-content>\n\n      <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n         {{p.title}}\n\n      </button>\n\n      </ion-list>\n\n   </ion-content>\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n\n\n<ion-footer>\n\n   <ion-toolbar>\n\n      <ion-grid>\n\n      <ion-row justify-content-between>\n\n         ... {{ isWaiting }}\n\n         <!-- change player mode -->\n\n         <ion-col col-12 class="txt-right">\n\n            <div *ngIf="playerMode === \'controls\'; then tplPlayerModeOn else tplPlayerModeOff"></div>\n\n            <ng-template #tplPlayerModeOn>\n\n               <a (click)="presentActionSheet()">\n\n                  <i class="fa fa-toggle-on fa-2x"></i>\n\n               </a>\n\n            </ng-template>\n\n            <ng-template #tplPlayerModeOff>\n\n               <a (click)="presentActionSheet()">\n\n                  <i class="fa fa-toggle-off fa-2x"></i>\n\n               </a>\n\n            </ng-template>\n\n         </ion-col>\n\n         <!-- prev -->\n\n         <ion-col *ngIf="playerMode === \'controls\'" col-5 class="txt-center">\n\n            <a (click)="play(\'prev\')">\n\n               <i class="fa fa-angle-left fa-4x"></i>\n\n            </a>\n\n         </ion-col>\n\n         <!-- play / pause -->\n\n         <div *ngIf="isWaiting; then tplLoading else tplPlayPause"></div>\n\n         <ng-template #tplLoading>\n\n            <ion-col col-2 class="txt-center">\n\n               <a><i class="fa fa-spinner fa-pulse fa-fw fa-4x"></i></a>\n\n            </ion-col>\n\n         </ng-template>\n\n         <ng-template #tplPlayPause>\n\n            <ion-col col-2 class="txt-center">\n\n               <a (click)="play(\'self\')">\n\n                  <i class="fa fa-{{ isPlaying ? \'pause\' : \'play\' }}-circle fa-4x"></i>\n\n               </a>\n\n            </ion-col>\n\n         </ng-template>\n\n         <!-- Track info -->\n\n         <ion-col *ngIf="playerMode === \'info\'" col-10>\n\n            <p class="txt-bold txt-no-break">{{ actualTrack ? actualTrack.artist : \'\' }}</p>\n\n            <p class="txt-no-break">{{ actualTrack ? actualTrack.title : \'\' }}</p>\n\n         </ion-col>\n\n         <!-- next -->\n\n         <ion-col *ngIf="playerMode === \'controls\'" col-5 class="txt-center">\n\n            <a (click)="play(\'next\')">\n\n               <i class="fa fa-angle-right fa-4x"></i>\n\n            </a>\n\n         </ion-col>\n\n      </ion-row>\n\n      </ion-grid>\n\n   </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Repos\radio-black-brasil\src\app\app.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_8__player_service__["a" /* PlayerService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__player_service__["a" /* PlayerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Platform */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */]) === "function" && _g || Object])
], app);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=app.component.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map