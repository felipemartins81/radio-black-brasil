webpackJsonp([0],{

/***/ 106:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 106;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
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
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/marlenejej/Documents/Felipe/radio-black-brasil/radio-black-brasil/src/pages/home/home.html"*/'<ion-header>\n   <ion-navbar>\n      <button ion-button menuToggle>\n         <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Dj recomenda</ion-title>\n   </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n   <ion-card img-mini>\n      <img src="assets/img/nin-live.png"/>\n      <ion-card-content>\n         <ion-card-title>\n            Nine Inch Nails Live\n         </ion-card-title>\n         <p>\n            The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.\n         </p>\n      </ion-card-content>\n      <ion-row no-padding>\n         <ion-col>\n            <button ion-button clear small color="danger" icon-start>\n               <ion-icon name=\'star\'></ion-icon>\n               Favorite\n            </button>\n         </ion-col>\n         <ion-col text-center>\n            <button ion-button clear small color="danger" icon-start>\n               <ion-icon name=\'musical-notes\'></ion-icon>\n               Listen\n            </button>\n         </ion-col>\n         <ion-col text-right>\n            <button ion-button clear small color="danger" icon-start>\n               <ion-icon name=\'share-alt\'></ion-icon>\n               Share\n            </button>\n         </ion-col>\n      </ion-row>\n   </ion-card>\n   \n</ion-content>'/*ion-inline-end:"/Users/marlenejej/Documents/Felipe/radio-black-brasil/radio-black-brasil/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
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
        selector: 'page-list',template:/*ion-inline-start:"/Users/marlenejej/Documents/Felipe/radio-black-brasil/radio-black-brasil/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/marlenejej/Documents/Felipe/radio-black-brasil/radio-black-brasil/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(214);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(194);
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
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* app */]),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* app */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return app; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
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
    function app(platform, statusBar, splashScreen, http) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.http = http;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.smPlaying = false;
        this.smCounter = 0;
        this.smTrackStr = 'track_';
        this.smPlayerMode = 'info';
        this.smWaiting = true;
        this.initializeApp();
        // menu itens
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] }
        ];
        // get tracks api
        this.http.get('http://radioblackbrasil.com/api/tracks/').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.smTrackList = data.tracks;
            _this.smCreateSound(_this.smTrackList[0].url, 'firstCall');
        }, function (error) { console.warn(';( error calling tracks service'); });
    }
    /* -------------------------------------------------------------
    ** player functions
    */
    app.prototype.smCreateSound = function (_url, _firstCall) {
        var _this = this;
        this.smActualTrack = this.smTrackList[this.smCounter];
        if (!this.smActualTrack.smTrackId) {
            this.smWaiting = true;
            this.smActualTrack.smTrackId = this.smTrackStr + this.smCounter.toString();
            soundManager.createSound({
                id: this.smActualTrack.smTrackId,
                url: _url,
                autoPlay: _firstCall ? true : false,
                onload: function () {
                    if (_firstCall)
                        soundManager.pauseAll();
                    setAfterCreate('onload');
                }
            });
        }
        var setAfterCreate = function (_type) {
            switch (_type) {
                case 'onload': _this.smWaiting = false;
            }
        };
    };
    app.prototype.smPlay = function (_pos) {
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
                    this.smCounter--;
                }
                if (_pos === 'next') {
                    if (this.smCounter === this.smTrackList.length - 1)
                        return; // last
                    soundManager.stop(this.smActualTrack.smTrackId);
                    this.smCounter++;
                }
                this.smCreateSound(this.smTrackList[this.smCounter].url, null);
                soundManager.play(this.smActualTrack.smTrackId);
                this.smPlaying = true;
                break;
        }
    };
    app.prototype.smChangePlayerMode = function () {
        switch (this.smPlayerMode) {
            case 'controls':
                this.smPlayerMode = 'info';
                break;
            case 'info':
                this.smPlayerMode = 'controls';
                break;
        }
    };
    /*
    ** ------------------------------------------------------------- */
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
], app.prototype, "nav", void 0);
app = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/marlenejej/Documents/Felipe/radio-black-brasil/radio-black-brasil/src/app/app.html"*/'   <ion-menu [content]="content">\n   <ion-header>\n      <ion-toolbar>\n      <ion-title>Menu</ion-title>\n      </ion-toolbar>\n   </ion-header>\n   <ion-content>\n      <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n         {{p.title}}\n      </button>\n      </ion-list>\n   </ion-content>\n   </ion-menu>\n\n   <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n   <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n   <ion-footer>\n   <ion-toolbar>\n      <ion-grid>\n      <ion-row justify-content-between>\n         <!-- prev -->\n         <ion-col col-4 offset-1 class="txt-center" *ngIf="smPlayerMode === \'controls\'">\n            <a (click)="smPlay(\'prev\')">\n               <i class="fa fa-angle-left fa-4x"></i>\n            </a>\n         </ion-col>\n         <!-- play / pause -->\n         <div *ngIf="smWaiting; then tplLoading else tplPlayPause"></div>\n         <ng-template #tplLoading>\n            <ion-col col-1 class="txt-center">\n               <a><i class="fa fa-spinner fa-pulse fa-fw fa-4x"></i></a>\n            </ion-col>\n         </ng-template>\n         <ng-template #tplPlayPause>\n            <ion-col col-1 class="txt-center">\n               <a (click)="smPlay(\'self\')">\n                  <i class="fa fa-{{ smPlaying ? \'pause\' : \'play\' }}-circle fa-4x"></i>\n               </a>\n            </ion-col>\n         </ng-template>\n         <!-- Track info -->\n         <ion-col *ngIf="smPlayerMode === \'info\'" col-10>\n            <p class="txt-bold">{{ smActualTrack ? smActualTrack.artist : \'\' }}</p>\n            <p>{{ smActualTrack ? smActualTrack.title : \'\' }}</p>\n         </ion-col>\n         <!-- next -->\n         <ion-col *ngIf="smPlayerMode === \'controls\'" col-4 class="txt-center">\n            <a (click)="smPlay(\'next\')">\n               <i class="fa fa-angle-right fa-4x"></i>\n            </a>\n         </ion-col>\n         <!-- change player mode -->\n         <ion-col col-1 class="txt-center">\n            <div *ngIf="smPlayerMode === \'controls\'; then tplPlayerModeOn else tplPlayerModeOff"></div>\n            <ng-template #tplPlayerModeOn>\n               <a (click)="smChangePlayerMode()">\n                  <i class="fa fa-toggle-on fa-2x"></i>\n               </a>\n            </ng-template>\n            <ng-template #tplPlayerModeOff>\n               <a (click)="smChangePlayerMode()">\n                  <i class="fa fa-toggle-off fa-2x"></i>\n               </a>\n            </ng-template>\n         </ion-col>\n      </ion-row>\n      </ion-grid>\n   </ion-toolbar>\n   </ion-footer>'/*ion-inline-end:"/Users/marlenejej/Documents/Felipe/radio-black-brasil/radio-black-brasil/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */]])
], app);

//# sourceMappingURL=app.component.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map