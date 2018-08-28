(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".litenary{\r\n    display: flex;\r\n}\r\n.header-label-div{\r\n    border-bottom: 1px solid lightblue;\r\n    color: lightcoral;\r\n}\r\n.button-part{\r\n        /*border-right: 1px solid lightblue;*/\r\n            padding-top: 35vh;\r\n                min-height: 75vh;\r\n                    text-align: center;\r\n}\r\n.sub-div{\r\n        border: 1px solid lightblue;\r\n            border-radius: 20px;\r\n    margin-top: 3%;\r\n}\r\n.dining{\r\n        margin-top: 3%;\r\n}\r\n.details-div{\r\n        display: flex;\r\n    margin-top: 3%;\r\n        margin-bottom: 2%;\r\n}\r\n.item{\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n        font-size: 0.8em;\r\n}\r\n.itinerary-button{\r\n        margin: 10px;\r\n}\r\n.itinerary-button:disabled{\r\n    background: gray;\r\n    border-color: gray;\r\n}\r\nli{\r\n        padding-right: 2%;\r\n        width:20%;\r\n        cursor: pointer;\r\n}\r\nul{\r\n    list-style: none;\r\n}\r\n.header-div{\r\n    background: black;\r\n    color: gray;\r\n    font-weight: bold;\r\n}\r\n.container{\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n}\r\n.header{\r\n    margin-top: 3px;\r\n        margin-bottom: 3px;\r\n}\r\n.header1\r\n{\r\n    font-weight: 1;\r\n    font-size: -3em;\r\n     margin-top: 3px;\r\n}\r\n.header-div{\r\n    display: flex;\r\n        height: 30px;\r\n}\r\n.header2{\r\n       font-size: 22px;\r\n    font-style: normal;\r\n    color: black;\r\n    font-family: cursive;\r\n}\r\n.division2{\r\n        display: flex;\r\n    /* margin-top: 0px; */\r\n    font-size: 16px;\r\n    background-color: white;\r\n}\r\n.logout\r\n{\r\n        text-align: right;\r\n        color:black;\r\n            margin-top: 6px;\r\n}\r\n#logout\r\n{\r\n    color:#156ac4;\r\n    cursor: pointer;\r\n}\r\n.english{\r\n        padding-left: 10px;\r\n    border-left: 1px solid #156ac4;\r\n        width: 25%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"singlepage\">\n  <router-outlet></router-outlet>\n</div>\n<div class=\"container\" *ngIf=\"!singlepage\">\n  <div class=\"col-md-12 col-sm-12 header-div\">\n    <div class=\"col-md-2 col-sm-2 header\">\n      &nbsp;\n    </div>\n    <div class=\"col-md-3 col-sm-3 header\">\n      <strong><i class=\"fa fa-plane\" aria-hidden=\"true\"></i> Capgemini Travel Company</strong>\n    </div>\n    <div class=\"col-md-6 col-sm-6 header1\">\n      Discover the magic at Capgemini and onboard Capgemini Cruise Line\n    </div>\n    <div class=\"col-md-1 col-sm-1 header\">\n      &nbsp;\n    </div>\n  </div>\n  <div class=\"col-md-12 col-sm-12 division2\">\n    <div class=\"col-md-2 col-sm-2\">\n      &nbsp;\n    </div>\n    <div class=\"col-md-2 col-sm-2 header2\">\n      Capgemini World\n    </div>\n    <ul class=\"col-md-5 col-sm-5  sublinks\" style=\"display:flex;    margin-top: 6px; margin-bottom: 6px;color: #007bff;\">\n      <li class=\"sublink blank\" (click)=\"goto('BookResort')\">Book Resort</li>\n      <li class=\"sublink manage\"  (click)=\"goto('BookDining')\">Book Dining</li>\n      <li class=\"sublink signup\"  (click)=\"goto('ViewItinerary')\">View Itinerary</li>\n      <li class=\"sublink geo icon english\"><a><i class=\"fa fa-globe\"></i> English (UK)</a></li>\n    </ul>\n    <div class=\"col-md-2 col-sm-2 logout\">\n      Hi {{guest?.firstName}}!\n    </div>\n    <div class=\"col-md-1 col-sm-1 logout\">\n      <span (click)=\"logout()\" id=\"logout\"> Logout  <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i></span>\n    </div>\n  </div>\n  <router-outlet></router-outlet>\n</div>\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content \">\n      <div class=\"modal-body\">\n        <div class=\"col-md-12 col-sm-12 close-div-new\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <div class=\"col-md-12 col-sm-12 body-div\">\n          <p>{{message}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_Entity_guest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Entity/guest */ "./src/app/components/Entity/guest.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(router, appService) {
        this.router = router;
        this.appService = appService;
        this.title = 'resort';
        this.singlepage = true;
        this.guest = new _components_Entity_guest__WEBPACK_IMPORTED_MODULE_2__["Guest"]();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (events) {
            if (events instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (events.url === '/' || events.url === '/login' || events
                    .url === '/register') {
                    _this.singlepage = true;
                }
                else {
                    _this.singlepage = false;
                    _this.guest = JSON.parse(window.localStorage.getItem("guest"));
                }
                _this.url = events.url;
            }
        });
    };
    AppComponent.prototype.isSelected = function (selected) {
        if (("/" + selected) == this.url) {
            return true;
        }
    };
    AppComponent.prototype.logout = function () {
        this.appService.logout();
        this.router.navigate(['/login']);
    };
    AppComponent.prototype.goto = function (page) {
        this.router.navigate(['/' + page]);
    };
    AppComponent.prototype.modalCall = function (message) {
        this.message = message;
        $('#myModal').modal('show');
        setTimeout(function () {
            $('#myModal').modal('hide');
        }, 5000);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_demo_demo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/demo/demo.component */ "./src/app/components/demo/demo.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _book_dining_book_dining_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./book-dining/book-dining.component */ "./src/app/book-dining/book-dining.component.ts");
/* harmony import */ var _book_dining_confirmation_book_dining_confirmation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./book-dining-confirmation/book-dining-confirmation.component */ "./src/app/book-dining-confirmation/book-dining-confirmation.component.ts");
/* harmony import */ var _book_resort_book_resort_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./book-resort/book-resort.component */ "./src/app/book-resort/book-resort.component.ts");
/* harmony import */ var _book_resort_confirmation_book_resort_confirmation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./book-resort-confirmation/book-resort-confirmation.component */ "./src/app/book-resort-confirmation/book-resort-confirmation.component.ts");
/* harmony import */ var _view_itinerary_view_itinerary_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./view-itinerary/view-itinerary.component */ "./src/app/view-itinerary/view-itinerary.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _components_demo_demo_component__WEBPACK_IMPORTED_MODULE_4__["DemoComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'BookResort', component: _book_resort_book_resort_component__WEBPACK_IMPORTED_MODULE_11__["BookResortComponent"] },
    { path: 'BookDining', component: _book_dining_book_dining_component__WEBPACK_IMPORTED_MODULE_9__["BookDiningComponent"] },
    { path: 'ViewItinerary', component: _view_itinerary_view_itinerary_component__WEBPACK_IMPORTED_MODULE_13__["ViewItineraryComponent"] },
    { path: 'BookResortConfirmation/:id', component: _book_resort_confirmation_book_resort_confirmation_component__WEBPACK_IMPORTED_MODULE_12__["BookResortConfirmationComponent"] },
    { path: 'BookDiningConfirmation/:id', component: _book_dining_confirmation_book_dining_confirmation_component__WEBPACK_IMPORTED_MODULE_10__["BookDiningConfirmationComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_demo_demo_component__WEBPACK_IMPORTED_MODULE_4__["DemoComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
                _book_resort_book_resort_component__WEBPACK_IMPORTED_MODULE_11__["BookResortComponent"], _book_dining_book_dining_component__WEBPACK_IMPORTED_MODULE_9__["BookDiningComponent"], _view_itinerary_view_itinerary_component__WEBPACK_IMPORTED_MODULE_13__["ViewItineraryComponent"], _book_resort_confirmation_book_resort_confirmation_component__WEBPACK_IMPORTED_MODULE_12__["BookResortConfirmationComponent"], _book_dining_confirmation_book_dining_confirmation_component__WEBPACK_IMPORTED_MODULE_10__["BookDiningConfirmationComponent"]
            ],
            imports: [
                _angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"].forRoot()
            ],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["DatePipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        this.basicUrl = "http://Myitinerary-env.u4pwqbu2uk.ap-south-1.elasticbeanstalk.com/";
    }
    AppService.prototype.getHeader = function () {
        return new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
                'Access-Control-Allow-Origin': '*'
            }) });
    };
    AppService.prototype.login = function (data) {
        return this.http.post(this.basicUrl + "guest/login", data, this.getHeader()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    AppService.prototype.getGuest = function (guestID) {
        return this.http.get(this.basicUrl + "guest/get/" + guestID, this.getHeader()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    AppService.prototype.getViewData = function (guestID) {
        return this.http.get(this.basicUrl + "guest/view/" + guestID, this.getHeader()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    AppService.prototype.save = function (data) {
        return this.http.post(this.basicUrl + "guest/register", data, this.getHeader()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    AppService.prototype.bookResort = function (data, id) {
        return this.http.post(this.basicUrl + "booking/resort/" + id, data, this.getHeader()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    AppService.prototype.bookDining = function (data, id) {
        return this.http.post(this.basicUrl + "booking/dining/" + id, data, this.getHeader()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    AppService.prototype.getResortData = function (id) {
        return this.http.get(this.basicUrl + "booking/resort/get/" + id, this.getHeader()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    AppService.prototype.getDiningData = function (id) {
        return this.http.get(this.basicUrl + "booking/dining/get/" + id, this.getHeader()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    AppService.prototype.cancelDining = function (id) {
        return this.http.put(this.basicUrl + "booking/cancel/dining/" + id, this.getHeader()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    AppService.prototype.cancelResort = function (id) {
        return this.http.put(this.basicUrl + "booking/cancel/resort/" + id, this.getHeader()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    AppService.prototype.logout = function () {
        window.localStorage.setItem("guest", null);
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/book-dining-confirmation/book-dining-confirmation.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/book-dining-confirmation/book-dining-confirmation.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detail {\r\n    border: 1px solid #007bff;\r\n    border-radius: 6px;\r\n    height: 300px;\r\n}\r\n\r\n/* .row {\r\n    position: absolute;\r\n    margin-top: 80px;\r\n  }\r\n  \r\n  .btn-block {  \r\n    text-align: -webkit-right;\r\n    margin-top: 350px;\r\n    margin-right: -150px;\r\n  }\r\n  \r\n  .btn-width {\r\n    margin-right: 10px;\r\n    width: 80px;\r\n  } */\r\n  "

/***/ }),

/***/ "./src/app/book-dining-confirmation/book-dining-confirmation.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/book-dining-confirmation/book-dining-confirmation.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"col-md-12 col-sm-12 new-home-head\">\n      <h2 class=\"mx-auto\" >Dining Reservation Confirmation</h2>\n\n  </div>\n  <div class=\"data-part\"> \n      <div class=\"col-md-12 col-sm-12 header-label-div dining\">\n        <h3 class=\"mx-auto\" style=\"width: 1000px;\">Your reservation is confirmed at Capgemini Fine Dining Restaurant.</h3>\n      </div>\n      <div  class=\"col-md-12 col-sm-12 \">\n        <div  class=\"col-md-12 col-sm-12 sub-div\">\n          <div class=\"col-md-12 col-sm-12 details-div\">\n            <div class=\"col-md-3 col-sm-3 item \">\n              <b class=\"n-label\">Reservation #:&nbsp;</b> {{dining.dReservationNumber}}\n            </div>\n            <div class=\"col-md-3 col-sm-3 item\">\n              <b class=\"n-label\"> Dining Type:&nbsp;</b> {{dining.diningType}}\n            </div>\n            <div class=\"col-md-3 col-sm-3 item \">\n             <b class=\"n-label\"> Number of guests:&nbsp;</b> {{dining.noOfPeople}}\n            </div>\n            <div class=\"col-md-3 col-sm-3 item \">\n              <b class=\"n-label\"> Status:&nbsp;</b> {{dining.status}}\n            </div>\n          </div>\n          <div class=\"col-md-12 col-sm-12 details-div\">\n            <div class=\"col-md-3 col-sm-3 item \">\n              <b class=\"n-label\"> Arrival Date:&nbsp;</b> {{dining.arrivalDate}}\n            </div>\n            <div class=\"col-md-3 col-sm-3 item \">\n              &nbsp;\n            </div>\n            <div class=\"col-md-3 col-sm-3 item \">\n            &nbsp;\n            </div>\n            <div class=\"col-md-3 col-sm-3 item \">\n               <button class=\"btn btn-primary cancel-booking\" [disabled]=\"dining.status!='booked'\" (click)=\"cancelDining(dining.dReservationNumber)\"> Cancel Booking</button>\n            </div>\n          </div>\n        </div>\n      </div>\n        </div>\n        <div class=\"modal fade\" id=\"cancelModal\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content \">\n      <div class=\"modal-body\">\n        <div class=\"col-md-12 col-sm-12 close-div-new\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <div class=\"col-md-12 col-sm-12 body-div\">\n          <p>Are you sure want to cancel booking?</p>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"cancelConfirm()\">Yes</button>\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/book-dining-confirmation/book-dining-confirmation.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/book-dining-confirmation/book-dining-confirmation.component.ts ***!
  \********************************************************************************/
/*! exports provided: BookDiningConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDiningConfirmationComponent", function() { return BookDiningConfirmationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_Entity_guest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Entity/guest */ "./src/app/components/Entity/guest.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_Entity_dining__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Entity/dining */ "./src/app/components/Entity/dining.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BookDiningConfirmationComponent = /** @class */ (function () {
    function BookDiningConfirmationComponent(appComponent, route, appService, router) {
        this.appComponent = appComponent;
        this.route = route;
        this.appService = appService;
        this.router = router;
        this.guest = new _components_Entity_guest__WEBPACK_IMPORTED_MODULE_1__["Guest"]();
        this.dining = new _components_Entity_dining__WEBPACK_IMPORTED_MODULE_3__["Dining"]();
        this.diningId = route.snapshot.params['id'];
    }
    BookDiningConfirmationComponent.prototype.ngOnInit = function () {
        this.guest = JSON.parse(window.localStorage.getItem("guest"));
        if (this.guest == null) {
            this.router.navigate(['/login']);
        }
        this.getResult();
    };
    BookDiningConfirmationComponent.prototype.getResult = function () {
        var _this = this;
        this.appService.getDiningData(this.diningId).subscribe(function (data) {
            _this.dining = JSON.parse(JSON.stringify(data));
        }, function (error) {
        });
    };
    BookDiningConfirmationComponent.prototype.cancelDining = function (id) {
        this.cancelId = id;
        $('#cancelModal').modal('show');
    };
    BookDiningConfirmationComponent.prototype.cancelConfirm = function () {
        var _this = this;
        this.appService.cancelDining(this.cancelId).subscribe(function (data) {
            // alert("Dining cancelled Succesfully");
            _this.appComponent.modalCall("Dining cancelled Succesfully");
            _this.getResult();
        }, function (error) {
            //  alert("Dining cancellation failed!!!");
            _this.appComponent.modalCall("Dining cancellation failed!!!");
        });
    };
    BookDiningConfirmationComponent.prototype.logout = function () {
        this.appService.logout();
        this.router.navigate(['/login']);
    };
    BookDiningConfirmationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-dining-confirmation',
            template: __webpack_require__(/*! ./book-dining-confirmation.component.html */ "./src/app/book-dining-confirmation/book-dining-confirmation.component.html"),
            styles: [__webpack_require__(/*! ./book-dining-confirmation.component.css */ "./src/app/book-dining-confirmation/book-dining-confirmation.component.css")]
        }),
        __metadata("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BookDiningConfirmationComponent);
    return BookDiningConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/book-dining/book-dining.component.css":
/*!*******************************************************!*\
  !*** ./src/app/book-dining/book-dining.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bookDiningForm{\r\n \r\n      margin-top: 4%;\r\n   \r\n}\r\n.n-dropdown{\r\n     padding: 9px;\r\n    width: 91%;\r\n    border-radius: 4px;\r\n    border-color: gainsboro;\r\n    font-size: 0.7em;\r\n}\r\n.guest-label{\r\n  font-size: 0.8em;\r\n}\r\n.checkdates{\r\n    margin-top: 6%;\r\n}\r\n.guest-div{\r\n      margin-top: 3px;\r\n}"

/***/ }),

/***/ "./src/app/book-dining/book-dining.component.html":
/*!********************************************************!*\
  !*** ./src/app/book-dining/book-dining.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 new-home-head\">\n    <h2 class=\"mx-auto \" > Welcome to Capgemini Fine Dining Restaurant </h2>\n\n</div>\n<div class=\"data-part\">\n  <div class=\"col-md-12 col-sm-12 header-label-div\">\n    <h3 class=\"sub-header\" style=\"width: 1000px;\">Book Dining</h3>\n  </div>\n  <form class=\"bookDiningForm\" [formGroup]=\"bookDiningForm\" (ngSubmit)=\"book()\">\n    <div class=\"col-md-12 col-sm-12 form-group login-detail-margin\">\n      <div class=\"col-sm-2\">\n        <label for=\"diningType\"><b>Dining Type</b></label>\n      </div>\n      <div class=\"col-sm-3\">\n        <select class=\"r-dropdown\" formControlName=\"diningType\" (change)=diningTypeSelect()>\n            <option default disabled value=\"-1\">Select DiningType</option>\n  <option  value=\"breakfast\">Breakfast</option>\n  <option value=\"lunch\">Lunch</option>\n  <option value=\"snacks\">Snacks</option>\n  <option value=\"dinner\">Dinner</option>\n</select>\n      </div>\n    </div>\n    <div class=\"col-md-12 col-sm-12 form-group login-detail-margin checkdates\" style=\"align-items: flex-end;\">\n      <div class=\"col-md-4 col-sm-4\">\n        <label for=\"arrivalDate\"><b>Select A Date</b></label>\n        <div class=\"input-group\">\n          <i class=\"fa fa-calendar calender-icon\" aria-hidden=\"true\"></i>\n          <input class=\"form-control\" formControlName=\"arrivalDate\" (click)=\"e.toggle()\" placeholder=\"yyyy-mm-dd\" [minDate]=\"minDate\" name=\"CheckIn\"\n            ngbDatepicker #e=\"ngbDatepicker\"style=\"margin-top: 0;\">\n          <!--<div class=\"input-group-append\">\n            <button class=\"btn btn-outline-secondary\"  type=\"button\">\n                        <img src=\"img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"/>\n                      </button>\n          </div>-->\n        </div>\n      </div>\n      <div class=\"col-md-4 col-sm-4 guest-div\">\n        <label class=\"guest-label\" for=\"noOfPeople\"><b>Number Of Guests</b></label>\n        <select class=\"n-dropdown\" formControlName=\"noOfPeople\">\n                   <option value =\"-2\"default disabled >Select Guests</option>\n  <option value=\"1\">1</option>\n  <option value=\"2\">2</option>\n  <option value=\"3\">3</option>\n   <option value=\"4\">4</option>\n</select>\n      </div>\n      <div class=\"col-md-4 col-sm-4 guest-div\">\n        <label class=\"guest-label\" for=\"time\"><b>Time &nbsp; &nbsp;</b></label>\n        <!--<select class=\"n-dropdown\" formControlName=\"time\">\n                  <option default disabled >Select time</option>\n                    <option value=\"7am-11am\">Breakfast (7am-11am)</option>\n                <option value=\"12pm-3pm\">Lunch (12pm-3pm)</option>\n                 <option value=\"4pm-6pm\">Snacks (4pm-6pm)</option>\n                <option value=\"7pm-11pm\">Dinner (7pm-11pm)</option>\n</select>-->\n  <input class=\"form-control\" formControlName=\"time\" placeholder=\"Select time\" style=\"margin-top: 0;\" disabled>\n      </div>\n      <!--<div class=\"col-sm-4 guest-div\" style=\"border-radius: 4px; border-color: gainsboro; font-size: 17px;\">\n        <label class=\"guest-label\" for=\"time\"><b>Time</b></label>\n        <select class=\"n-dropdown\"  formControlName=\"time\" >\n                   <option default disabled >Select time</option>\n                    <option value=\"7am-11am\">Breakfast (7am-11am)</option>\n                <option value=\"12pm-3pm\">Lunch (12pm-3pm)</option>\n                 <option value=\"4pm-6pm\">Snacks (4pm-6pm)</option>\n                <option value=\"7pm-11pm\">Dinner (7pm-11pm)</option>\n</select>\n      </div>-->\n\n    </div>\n    <div class=\"col-md-12 col-sm-12 align-right\" style=\"margin-top: 11%; text-align: center;\">\n      <input style='margin-left:16px' type=\"reset\" class=\"btn  btn-size\" ng-click=\"reset()\" value=\"Reset\">\n      <input style='margin-left:16px' type=\"submit\" class=\"btn btn-size\" value=\"Book\" [disabled]=\"!bookDiningForm.valid || bookDiningForm.controls['time'].value=='Select Time'|| bookDiningForm.controls['diningType'].value=='-1' || bookDiningForm.controls['noOfPeople'].value=='-2'\">\n\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/book-dining/book-dining.component.ts":
/*!******************************************************!*\
  !*** ./src/app/book-dining/book-dining.component.ts ***!
  \******************************************************/
/*! exports provided: BookDiningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDiningComponent", function() { return BookDiningComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _components_Entity_guest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Entity/guest */ "./src/app/components/Entity/guest.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_Entity_dining__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Entity/dining */ "./src/app/components/Entity/dining.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// declare var $;
var BookDiningComponent = /** @class */ (function () {
    function BookDiningComponent(appComponent, http, appService, formBuilder, router) {
        this.appComponent = appComponent;
        this.http = http;
        this.appService = appService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.guest = new _components_Entity_guest__WEBPACK_IMPORTED_MODULE_4__["Guest"]();
        this.dining = new _components_Entity_dining__WEBPACK_IMPORTED_MODULE_6__["Dining"]();
        this.today = new Date();
    }
    BookDiningComponent.prototype.ngOnInit = function () {
        var date = JSON.stringify(this.today);
        this.minDate = { year: +date.substring(1, 5), month: +date.substring(6, 8), day: +date.substring(9, 11) };
        this.guest = JSON.parse(window.localStorage.getItem("guest"));
        if (this.guest == null) {
            this.router.navigate(['/login']);
        }
        this.bookDiningForm = this.formBuilder.group({
            diningType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('-1', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            arrivalDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            time: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Select Time', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            noOfPeople: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('-2', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    };
    BookDiningComponent.prototype.book = function () {
        var _this = this;
        var arrivalmonth = '';
        if (this.bookDiningForm.controls['arrivalDate'].value.month < 10) {
            arrivalmonth = '0' + this.bookDiningForm.controls['arrivalDate'].value.month;
        }
        else {
            arrivalmonth = this.bookDiningForm.controls['arrivalDate'].value.month;
        }
        var arrivalday = '';
        if (this.bookDiningForm.controls['arrivalDate'].value.day < 10) {
            arrivalday = '0' + this.bookDiningForm.controls['arrivalDate'].value.day;
        }
        else {
            arrivalday = this.bookDiningForm.controls['arrivalDate'].value.day;
        }
        this.bookDiningForm.patchValue({ arrivalDate: this.bookDiningForm.controls['arrivalDate'].value.year + '-' + arrivalmonth + '-' + arrivalday });
        console.log(JSON.stringify(this.guest));
        this.appService.bookDining(this.bookDiningForm.value, this.guest.guestID).subscribe(function (data) {
            _this.dining = JSON.parse(JSON.stringify(data));
            _this.router.navigate(['/BookDiningConfirmation', _this.dining.dReservationNumber]);
            //  alert("Dining booking done Succesfully");
            _this.appComponent.modalCall("Dining booking done Succesfully");
            // this.reset();
        }, function (error) {
            // alert("Dining booking failed");
            _this.appComponent.modalCall("Dining booking failed");
        });
    };
    BookDiningComponent.prototype.reset = function () {
        this.bookDiningForm.reset();
    };
    BookDiningComponent.prototype.diningTypeSelect = function () {
        switch (this.bookDiningForm.controls['diningType'].value) {
            case 'breakfast':
                this.bookDiningForm.patchValue({ time: 'Breakfast (7am-11am)' });
                break;
            case 'lunch':
                this.bookDiningForm.patchValue({ time: 'Lunch (12pm-3pm)' });
                break;
            case 'dinner':
                this.bookDiningForm.patchValue({ time: 'Dinner (7pm-11pm)' });
                break;
            case 'snacks':
                this.bookDiningForm.patchValue({ time: 'Snacks (4pm-6pm)' });
                break;
            default:
                break;
        }
    };
    BookDiningComponent.prototype.logout = function () {
        this.appService.logout();
        this.router.navigate(['/login']);
    };
    BookDiningComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-dining',
            template: __webpack_require__(/*! ./book-dining.component.html */ "./src/app/book-dining/book-dining.component.html"),
            styles: [__webpack_require__(/*! ./book-dining.component.css */ "./src/app/book-dining/book-dining.component.css")]
        }),
        __metadata("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], BookDiningComponent);
    return BookDiningComponent;
}());



/***/ }),

/***/ "./src/app/book-resort-confirmation/book-resort-confirmation.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/book-resort-confirmation/book-resort-confirmation.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detail {\r\n    border: 1px solid #007bff;\r\n    border-radius: 6px;\r\n    height: 300px;\r\n}\r\n\r\n/* .row {\r\n    position: absolute;\r\n    margin-top: 80px;\r\n  }\r\n  \r\n  .btn-block {  \r\n    text-align: -webkit-right;\r\n    margin-top: 350px;\r\n    margin-right: -150px;\r\n  }\r\n  \r\n  .btn-width {\r\n    margin-right: 10px;\r\n    width: 80px;\r\n  } */\r\n  "

/***/ }),

/***/ "./src/app/book-resort-confirmation/book-resort-confirmation.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/book-resort-confirmation/book-resort-confirmation.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"col-md-12 col-sm-12 new-home-head\">\n      <h2 class=\"mx-auto\"> Resort Reservation Confirmation</h2>\n\n  </div>\n  <div class=\"data-part\">\n <div class=\"col-md-12 col-sm-12 header-label-div\">\n        <h3  style=\"width: 1000px;\">Your reservation is confirmed at Capgemini Resort.</h3>\n      </div>\n      <div  class=\"col-md-12 col-sm-12 \">\n        <div  class=\"col-md-12 col-sm-12 sub-div\">\n          <div class=\"col-md-12 col-sm-12 details-div\">\n            <div class=\"col-md-3 col-sm-3 item \">\n              <b class=\"n-label\">Reservation #:&nbsp;</b> {{resort.rReservationNumber}}\n            </div>\n            <div class=\"col-md-3 col-sm-3 item\">\n              <b class=\"n-label\"> Room Type:&nbsp;</b> {{resort.roomType}}\n            </div>\n            <div class=\"col-md-3 col-sm-3 item \">\n             <b class=\"n-label\"> Number of guests:&nbsp;</b> {{resort.noOfPeople}}\n            </div>\n            <div class=\"col-md-3 col-sm-3 item \">\n              <b class=\"n-label\"> Status:&nbsp;</b> {{resort.status}}\n            </div>\n          </div>\n          <div class=\"col-md-12 col-sm-12 details-div\">\n            <div class=\"col-md-3 col-sm-3 item \">\n              <b class=\"n-label\"> Arrival Date:&nbsp;</b> {{resort.arrivalDate}}\n            </div>\n            <div class=\"col-md-3 col-sm-3 item \">\n              <b class=\"n-label\"> Departure Date:&nbsp;</b> {{resort.departureDate}}\n            </div>\n            <div class=\"col-md-3 col-sm-3 item \">\n              &nbsp;\n            </div>\n            <div class=\"col-md-3 col-sm-3 item \">\n               <button class=\"btn btn-primary cancel-booking\" [disabled]=\"resort.status!='booked'\" (click)=\"cancelResort(resort.rReservationNumber)\"> Cancel Booking</button>\n            </div>\n          </div>\n        </div>\n      </div>\n\n        </div>\n        <div class=\"modal fade\" id=\"cancelModal\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content \">\n      <div class=\"modal-body\">\n        <div class=\"col-md-12 col-sm-12 close-div-new\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <div class=\"col-md-12 col-sm-12 body-div\">\n          <p>Are you sure want to cancel booking?</p>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"cancelConfirm()\">Yes</button>\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/book-resort-confirmation/book-resort-confirmation.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/book-resort-confirmation/book-resort-confirmation.component.ts ***!
  \********************************************************************************/
/*! exports provided: BookResortConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookResortConfirmationComponent", function() { return BookResortConfirmationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_Entity_guest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Entity/guest */ "./src/app/components/Entity/guest.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_Entity_resort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Entity/resort */ "./src/app/components/Entity/resort.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BookResortConfirmationComponent = /** @class */ (function () {
    function BookResortConfirmationComponent(appComponent, route, appService, router) {
        this.appComponent = appComponent;
        this.route = route;
        this.appService = appService;
        this.router = router;
        this.guest = new _components_Entity_guest__WEBPACK_IMPORTED_MODULE_1__["Guest"]();
        this.resort = new _components_Entity_resort__WEBPACK_IMPORTED_MODULE_3__["Resort"]();
        this.resortId = route.snapshot.params['id'];
    }
    BookResortConfirmationComponent.prototype.ngOnInit = function () {
        this.guest = JSON.parse(window.localStorage.getItem("guest"));
        if (this.guest == null) {
            this.router.navigate(['/login']);
        }
        this.getResult();
    };
    BookResortConfirmationComponent.prototype.getResult = function () {
        var _this = this;
        this.appService.getResortData(this.resortId).subscribe(function (data) {
            _this.resort = JSON.parse(JSON.stringify(data));
        }, function (error) {
        });
    };
    BookResortConfirmationComponent.prototype.cancelResort = function (id) {
        this.cancelId = id;
        $('#cancelModal').modal('show');
    };
    BookResortConfirmationComponent.prototype.cancelConfirm = function () {
        var _this = this;
        this.appService.cancelResort(this.cancelId).subscribe(function (data) {
            _this.appComponent.modalCall("Resort cancelled Succesfully");
            // alert("Resort cancelled Succesfully");
            _this.getResult();
        }, function (error) {
            // alert("resort cancellation failed");
            _this.appComponent.modalCall("Resort cancelled Succesfully");
        });
    };
    BookResortConfirmationComponent.prototype.logout = function () {
        this.appService.logout();
        this.router.navigate(['/login']);
    };
    BookResortConfirmationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-resort-confirmation',
            template: __webpack_require__(/*! ./book-resort-confirmation.component.html */ "./src/app/book-resort-confirmation/book-resort-confirmation.component.html"),
            styles: [__webpack_require__(/*! ./book-resort-confirmation.component.css */ "./src/app/book-resort-confirmation/book-resort-confirmation.component.css")]
        }),
        __metadata("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BookResortConfirmationComponent);
    return BookResortConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/book-resort/book-resort.component.css":
/*!*******************************************************!*\
  !*** ./src/app/book-resort/book-resort.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bookResortForm{\r\n  margin-top:4%;\r\n  \r\n}\r\n.n-dropdown{\r\n     padding: 9px;\r\n    width: 91%;\r\n    border-radius: 4px;\r\n    border-color: gainsboro;\r\n    font-size: 0.7em;\r\n}\r\n.guest-label{\r\n  font-size: 0.8em;\r\n}\r\n.checkdates{\r\n    margin-top: 6%;\r\n     \r\n}\r\n.guest-div{\r\n      margin-top: 3px;\r\n}\r\n.login-a\r\n{\r\n   text-align: right;\r\n    padding-top: 0;\r\n  font-size: 1.5em;\r\n}\r\n.new-home-head{\r\n    text-align: center;\r\n    margin-bottom: 2%;\r\n    margin-top: 1%;\r\n    display: flex;\r\n}\r\n"

/***/ }),

/***/ "./src/app/book-resort/book-resort.component.html":
/*!********************************************************!*\
  !*** ./src/app/book-resort/book-resort.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 new-home-head\">\n \n    <h2 class=\"mx-auto\" >Welcome to Capgemini Resort </h2>\n \n</div>\n<div class=\"data-part\">\n  <div class=\"col-md-12 col-sm-12 header-label-div\">\n    <h3  class=\"sub-header\"style=\"width: 1000px;\">Book Resort</h3>\n  </div>\n  <form class=\"bookResortForm\" [formGroup]=\"bookResortForm\" (ngSubmit)=\"book()\">\n    <div class=\"col-md-12 col-sm-12 form-group login-detail-margin\" >\n      <div class=\"col-sm-2\">\n        <label for=\"roomType\"><b>Room Type</b></label>\n      </div>\n      <div class=\"col-md-3 col-sm-3\"style=\"color:white\">\n        <select class=\"r-dropdown\" formControlName=\"roomType\">\n              <option value=\"-1\" default disabled>Select RoomType</option>\n  <option  value=\"standarad\">Standarad</option>\n  <option value=\"deluxe\">Deluxe</option>\n  <option value=\"suite\">Suite</option>\n</select>\n      </div>\n    </div>\n    <div class=\"col-md-12 col-sm-12 form-group login-detail-margin checkdates\">\n      <div class=\"col-md-4 col-sm-4 \">\n        <label for=\"arrivalDate\"><b>CheckIn</b></label>\n        <div class=\"input-group\">\n          <i class=\"fa fa-calendar calender-icon\" aria-hidden=\"true\"></i>\n          <input class=\"form-control\" formControlName=\"arrivalDate\" (click)=\"e.toggle()\" placeholder=\"yyyy-mm-dd\" [minDate]=\"minDate\" name=\"CheckIn\"\n            ngbDatepicker #e=\"ngbDatepicker\" (ngModelChange)=\"getDate()\"style=\"margin-top: 0;\">\n        </div>\n      </div>\n      <div class=\"col-md-4 col-sm-4 \">\n        <label for=\"departureDate\"><b>Checkout</b></label>\n        <div class=\"input-group\" >\n          <i class=\"fa fa-calendar calender-icon\" aria-hidden=\"true\"></i>\n          <input class=\"form-control\" formControlName=\"departureDate\" (click)=\"d.toggle()\" placeholder=\"yyyy-mm-dd\" [minDate]=\"checkinDate\"\n            name=\"CheckOut\" ngbDatepicker #d=\"ngbDatepicker\" style=\"margin-top: 0;\">\n        </div>\n      </div>\n       <!--<div class=\"col-sm-2 guest-div\">\n        <label class=\"guest-label\" for=\"nights\">Nights</label>\n        <select class=\"n-dropdown\" formControlName=\"nights\">\n                   <option default disabled >Select Nights</option>\n  <option value=\"1\">1</option>\n  <option value=\"2\">2</option>\n  <option value=\"3\">3</option>\n   <option value=\"4\">4</option>\n</select>\n      </div>-->\n      <div class=\"col-md-4 col-sm-4 guest-div\">\n        <label class=\"guest-label\" for=\"noOfPeople\" ><b>Number Of Guests</b></label>\n        <select class=\"n-dropdown\" formControlName=\"noOfPeople\">\n    <option value=\"-1\" default disabled  style=\"color:blue\">Select Guests</option>\n  <option value=\"1\">1</option>\n  <option value=\"2\">2</option>\n  <option value=\"3\">3</option>\n   <option value=\"4\">4</option>\n</select>\n      </div>\n\n    </div>\n    <div class=\"col-md-12 col-sm-12 align-right\" style=\"margin-top: 11%;text-align:center\">\n      <input style='margin-left:-222px' type=\"reset\" class=\"btn  btn-size\" ng-click=\"reset()\" value=\"Reset\">\n      <input style='margin-left:16px' type=\"submit\" class=\"btn btn-size\" value=\"Book\" [disabled]=\"!bookResortForm.valid || bookResortForm.controls['noOfPeople'].value=='-1' || bookResortForm.controls['roomType'].value=='-1'\">\n\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/book-resort/book-resort.component.ts":
/*!******************************************************!*\
  !*** ./src/app/book-resort/book-resort.component.ts ***!
  \******************************************************/
/*! exports provided: BookResortComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookResortComponent", function() { return BookResortComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _components_Entity_guest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Entity/guest */ "./src/app/components/Entity/guest.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_Entity_resort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Entity/resort */ "./src/app/components/Entity/resort.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BookResortComponent = /** @class */ (function () {
    function BookResortComponent(appComponent, http, appService, formBuilder, router, datePipe) {
        this.appComponent = appComponent;
        this.http = http;
        this.appService = appService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.datePipe = datePipe;
        this.guest = new _components_Entity_guest__WEBPACK_IMPORTED_MODULE_4__["Guest"]();
        this.resort = new _components_Entity_resort__WEBPACK_IMPORTED_MODULE_7__["Resort"]();
        this.today = new Date();
    }
    BookResortComponent.prototype.ngOnInit = function () {
        var date = JSON.stringify(this.today);
        this.minDate = { year: +date.substring(1, 5), month: +date.substring(6, 8), day: +date.substring(9, 11) };
        this.checkinDate = { year: +date.substring(1, 5), month: +date.substring(6, 8), day: +date.substring(9, 11) };
        this.guest = JSON.parse(window.localStorage.getItem("guest"));
        if (this.guest == null) {
            this.router.navigate(['/login']);
        }
        this.bookResortForm = this.formBuilder.group({
            roomType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('-1', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            arrivalDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            departureDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            noOfPeople: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('-1', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    };
    BookResortComponent.prototype.CompareDate = function () {
        var dateTwo = new Date(this.bookResortForm.controls['departureDate'].value.year, this.bookResortForm.controls['departureDate'].value.month, this.bookResortForm.controls['departureDate'].value.day); //Year, Month, Date
        var dateOne = new Date(this.bookResortForm.controls['arrivalDate'].value.year, this.bookResortForm.controls['arrivalDate'].value.month, this.bookResortForm.controls['arrivalDate'].value.day); //Year, Month, Date
        if (dateOne > dateTwo) {
            return true;
        }
        else {
            return false;
        }
    };
    BookResortComponent.prototype.getDate = function () {
        if (this.bookResortForm.controls['arrivalDate'].value != null && this.bookResortForm.controls['arrivalDate'].value != undefined) {
            this.checkinDate = { year: this.bookResortForm.controls['arrivalDate'].value.year, month: this.bookResortForm.controls['arrivalDate'].value.month, day: this.bookResortForm.controls['arrivalDate'].value.day };
            if (this.bookResortForm.controls['departureDate'].value.year != undefined && this.CompareDate()) {
                this.bookResortForm.patchValue({ departureDate: this.checkinDate });
            }
        }
    };
    BookResortComponent.prototype.book = function () {
        var _this = this;
        var arrivalmonth = '';
        if (this.bookResortForm.controls['arrivalDate'].value.month < 10) {
            arrivalmonth = '0' + this.bookResortForm.controls['arrivalDate'].value.month;
        }
        else {
            arrivalmonth = this.bookResortForm.controls['arrivalDate'].value.month;
        }
        var departuremonth = '';
        if (this.bookResortForm.controls['departureDate'].value.month < 10) {
            departuremonth = '0' + this.bookResortForm.controls['departureDate'].value.month;
        }
        else {
            departuremonth = this.bookResortForm.controls['departureDate'].value.month;
        }
        var arrivaldate = '';
        if (this.bookResortForm.controls['arrivalDate'].value.day < 10) {
            arrivaldate = '0' + this.bookResortForm.controls['arrivalDate'].value.day;
        }
        else {
            arrivaldate = this.bookResortForm.controls['arrivalDate'].value.day;
        }
        var departuredate = '';
        if (this.bookResortForm.controls['departureDate'].value.day < 10) {
            departuredate = '0' + this.bookResortForm.controls['departureDate'].value.day;
        }
        else {
            departuredate = this.bookResortForm.controls['departureDate'].value.day;
        }
        this.bookResortForm.patchValue({ arrivalDate: this.bookResortForm.controls['arrivalDate'].value.year + '-' + arrivalmonth + '-' + arrivaldate });
        this.bookResortForm.patchValue({ departureDate: this.bookResortForm.controls['departureDate'].value.year + '-' + departuremonth + '-' + departuredate });
        this.appService.bookResort(this.bookResortForm.value, this.guest.guestID).subscribe(function (data) {
            _this.resort = JSON.parse(JSON.stringify(data));
            // this.reset();
            _this.router.navigate(['/BookResortConfirmation', _this.resort.rReservationNumber]);
            _this.appComponent.modalCall("Resort booking done Succesfully");
            // alert("Resort booking done Succesfully");
        }, function (error) {
            _this.appComponent.modalCall("Resort booking failed");
            // alert("Resort booking failed");
        });
    };
    BookResortComponent.prototype.reset = function () {
        this.bookResortForm.reset();
    };
    BookResortComponent.prototype.logout = function () {
        this.appService.logout();
        this.router.navigate(['/login']);
    };
    BookResortComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-resort',
            template: __webpack_require__(/*! ./book-resort.component.html */ "./src/app/book-resort/book-resort.component.html"),
            styles: [__webpack_require__(/*! ./book-resort.component.css */ "./src/app/book-resort/book-resort.component.css")]
        }),
        __metadata("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]])
    ], BookResortComponent);
    return BookResortComponent;
}());



/***/ }),

/***/ "./src/app/components/Entity/dining.ts":
/*!*********************************************!*\
  !*** ./src/app/components/Entity/dining.ts ***!
  \*********************************************/
/*! exports provided: Dining */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dining", function() { return Dining; });
var Dining = /** @class */ (function () {
    function Dining() {
    }
    return Dining;
}());



/***/ }),

/***/ "./src/app/components/Entity/guest.ts":
/*!********************************************!*\
  !*** ./src/app/components/Entity/guest.ts ***!
  \********************************************/
/*! exports provided: Guest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Guest", function() { return Guest; });
var Guest = /** @class */ (function () {
    function Guest() {
    }
    return Guest;
}());



/***/ }),

/***/ "./src/app/components/Entity/resort.ts":
/*!*********************************************!*\
  !*** ./src/app/components/Entity/resort.ts ***!
  \*********************************************/
/*! exports provided: Resort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resort", function() { return Resort; });
var Resort = /** @class */ (function () {
    function Resort() {
    }
    return Resort;
}());



/***/ }),

/***/ "./src/app/components/demo/demo.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/demo/demo.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    margin-top: 25vh;\r\n}\r\n.card-container.card {\r\n    max-width: 390px;\r\n    }"

/***/ }),

/***/ "./src/app/components/demo/demo.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/demo/demo.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"row\">\n      <div class=\"col-md-12 col-sm-12\">\n    <form [formGroup]=\"loginForm\" class=\"loginForm\">\n        <div class=\"col-md-12 col-sm-12 login-header\">\n        <h2 class=\"\" >Login Page</h2>\n    </div>\n        <div *ngIf=\"isFailed\" class=\"col-md-12 col-sm-12 login-warning\">\n            <span class=\"warning\">  \n          Warning message:</span> Username/password is not valid\n        </div>\n        <div class=\"col-md-12 col-sm-12 form-group login-detail-margin\">\n            <div class=\"col-sm-2\">\n                <label for=\"email\">Email</label>\n            </div>\n            <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" formControlName=\"email\">\n            </div>\n        </div>\n        <div class=\"col-md-12 col-sm-12 form-group login-detail-margin\">\n            <div class=\"col-sm-2\">\n                <label for=\"password\">Password</label>\n            </div>\n            <div class=\"col-sm-10\">\n                <input type=\"password\" class=\"form-control\" formControlName=\"password\">\n            </div>\n        </div>\n        <div class=\"col-md-12 col-sm-12\">\n            <button class=\"btn  new-register btn-size\" (click)=\"newRegister()\">New User?Register</button>\n            <button class=\"btn  btn-size\" (click)=\"login()\">LOGIN</button>\n        </div>\n    </form>\n    </div>\n</div>-->\n<div class=\"container\">\n    <div class=\"card card-container\">\n        <form [formGroup]=\"loginForm\" class=\"form-signin\">\n            <h3 class=\"login-header\">Login Page</h3>\n            <input type=\"email\" class=\"form-control\" placeholder=\"Email address\" formControlName=\"email\" required>\n            <input type=\"password\" class=\"form-control\" placeholder=\"Password\"  formControlName=\"password\" required>\n            <button class=\"btn btn-lg btn-primary btn-block btn-signin login\" type=\"submit\" (click)=\"login()\">Log in</button>\n            <button class=\"btn btn-lg btn-primary btn-block btn-signin\" type=\"submit\" (click)=\"newRegister()\">New Register</button>\n                <span *ngIf=\"isFailed\" class=\" warning\">  \n          Username/password is not valid</span>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/demo/demo.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/demo/demo.component.ts ***!
  \***************************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// declare var $;
var DemoComponent = /** @class */ (function () {
    function DemoComponent(appService, formBuilder, router) {
        this.appService = appService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.isFailed = false;
    }
    DemoComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)])
        });
    };
    DemoComponent.prototype.login = function () {
        var _this = this;
        console.log(JSON.stringify(this.loginForm.value));
        this.appService.login(this.loginForm.value).subscribe(function (data) {
            window.localStorage.setItem("guest", JSON.stringify(data));
            _this.router.navigate(['/ViewItinerary']);
            _this.isFailed = false;
        }, function (error) {
            _this.isFailed = true;
            window.localStorage.setItem("guest", null);
        });
    };
    DemoComponent.prototype.newRegister = function () {
        this.router.navigate(['/register']);
    };
    DemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'demo',
            template: __webpack_require__(/*! ./demo.component.html */ "./src/app/components/demo/demo.component.html"),
            styles: [__webpack_require__(/*! ./demo.component.css */ "./src/app/components/demo/demo.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "./src/app/components/password-validation.ts":
/*!***************************************************!*\
  !*** ./src/app/components/password-validation.ts ***!
  \***************************************************/
/*! exports provided: PasswordValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidation", function() { return PasswordValidation; });
var PasswordValidation = /** @class */ (function () {
    function PasswordValidation() {
    }
    PasswordValidation.MatchPassword = function (AC) {
        var password = AC.get('password').value; // to get value in input tag
        var confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
        if (password != confirmPassword) {
            console.log('false');
            AC.get('confirmPassword').setErrors({ MatchPassword: true });
        }
        else {
            console.log('true');
            return null;
        }
    };
    return PasswordValidation;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".new-registration-head{\r\n        text-align: center;\r\n    margin-bottom: 5%;\r\n    margin-top: 2%;\r\n    display: flex;\r\n}\r\n\r\n.lastname{\r\n        margin-top: 1%;\r\n}\r\n\r\n.login-detail-margin{\r\n     margin-right: 20%;\r\n         margin-top: 2%;\r\n    margin-bottom: 5%;\r\n}\r\n\r\n.registerForm{\r\n    width: 100%;\r\n    margin-bottom: 3%;\r\n}\r\n\r\n.register-body{\r\n        padding-left: 15%;\r\n}\r\n\r\n.reg-login{\r\n        text-align: right;\r\n    margin-top: 1%;\r\n}\r\n\r\na{\r\n    color: black;\r\n        font-size: 1.3em;\r\n    font-weight: initial;;\r\n}\r\n\r\n.card-container.card {\r\n    max-width: 500px;\r\n    }"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"col-md-12 col-sm-12 reg-login\">\r\n        <a routerLink=\"/login\"> <i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i> Login</a>\r\n    </div>\r\n    <div class=\"card card-container\">\r\n        <form [formGroup]=\"resortForm\" class=\"form-signin\">\r\n            <h3 class=\"login-header\">Guest registration</h3>\r\n            <input type=\"email\" class=\"form-control\" placeholder=\"Email address\" formControlName=\"email\" required>\r\n            <div *ngIf=\"resortForm.controls['email'].touched && !resortForm.controls['email'].valid\">\r\n                <span class=\"warning\" *ngIf=\"resortForm.controls['email'].hasError('required') \">  \r\n           Email ID is required  \r\n             </span>\r\n                <span class=\"warning\" *ngIf=\"resortForm.controls['email'].hasError('email') \">  \r\n           Invalid Email ID  \r\n            </span>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"FirstName\" formControlName=\"firstName\"  (keydown)=\"restrictNumeric($event)\" required>\r\n            <div *ngIf=\"resortForm.controls['firstName'].touched && !resortForm.controls['firstName'].valid\">\r\n                <span class=\"warning\" *ngIf=\"resortForm.controls['firstName'].hasError('required') \">  \r\n           FirstName is required  \r\n             </span>\r\n             <span class=\"warning\" *ngIf=\"resortForm.controls['firstName'].hasError('pattern') \">  \r\n           Only  alphabets are allowed \r\n             </span>\r\n                <span class=\"warning\" *ngIf=\"resortForm.controls['firstName'].hasError('minlength') \">  \r\n             Min length is 2 \r\n            </span>\r\n                <span class=\"warning\" *ngIf=\"resortForm.controls['firstName'].hasError('maxlength') \">  \r\n            max length is 50 \r\n        </span>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"LastName\" formControlName=\"lastName\"  (keydown)=\"restrictNumeric($event)\" required>\r\n            <div *ngIf=\"resortForm.controls['lastName'].touched && !resortForm.controls['lastName'].valid\">\r\n                <span class=\"warning\" *ngIf=\"resortForm.controls['lastName'].hasError('required') \">  \r\n           lastName is required  \r\n             </span>\r\n                <span class=\"warning\" *ngIf=\"resortForm.controls['lastName'].hasError('minlength') \">  \r\n             Min length is 2 \r\n            </span>\r\n                <span class=\"warning\" *ngIf=\"resortForm.controls['lastName'].hasError('maxlength') \">  \r\n            max length is 50 \r\n        </span>\r\n            </div>\r\n            <textarea type=\"text\" rows=\"5\" class=\"form-control\" placeholder=\"Address\" formControlName=\"address\" required></textarea>\r\n            <div *ngIf=\"resortForm.controls['address'].touched && !resortForm.controls['address'].valid\">\r\n                <span class=\"warning\" *ngIf=\"resortForm.controls['address'].hasError('required') \">  \r\n           Address is required  \r\n             </span>\r\n                <span class=\"warning\" *ngIf=\"resortForm.controls['address'].hasError('maxlength') \">  \r\n            max length is 255 \r\n        </span>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Phone\" formControlName=\"phone\"  (keydown)=\"restrictAlpha($event)\" required>\r\n            <div *ngIf=\"resortForm.controls['phone'].touched && !resortForm.controls['phone'].valid\">\r\n                <span class=\"warning\" *ngIf=\"resortForm.controls['phone'].hasError('required') \">  \r\n           phone is required  \r\n             </span>\r\n                <span class=\"warning\" *ngIf=\"resortForm.controls['phone'].hasError('minLength') \">  \r\n            max length is 10\r\n        </span>\r\n                <span class=\"warning\" *ngIf=\"resortForm.controls['phone'].hasError('maxlength') \">  \r\n            max length is 11\r\n        </span>\r\n            </div>\r\n            <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\" required>\r\n            <div *ngIf=\"resortForm.controls['password'].touched && !resortForm.controls['password'].valid\">\r\n                <span class=\"warning\" *ngIf=\"!resortForm.controls['password'].hasError('required')  && resortForm.controls['password'].hasError('maxlength') \">  \r\n            max length is 20 \r\n        </span>\r\n                <span class=\"warning\" *ngIf=\"resortForm.controls['password'].hasError('required') \">  \r\n           password is required\r\n        </span>\r\n            </div>\r\n            <input type=\"password\" class=\"form-control\" placeholder=\"ConfirmPassword\" id=\"confirmPassword\" formControlName=\"confirmPassword\"\r\n                required>\r\n       <div class=\"alert alert-danger\" *ngIf=\"resortForm.controls['confirmPassword'].touched && !resortForm.controls['confirmPassword'].valid && resortForm.controls.confirmPassword.errors?.MatchPassword\">\r\n           Password not match</div>\r\n                 <div *ngIf=\"resortForm.controls['confirmPassword'].touched && !resortForm.controls['confirmPassword'].valid && !resortForm.controls.confirmPassword.errors?.MatchPassword\">\r\n        <span class=\"warning\" *ngIf=\"resortForm.controls['confirmPassword'].hasError('required') \">  \r\n           Confirm Password is required\r\n        </span>\r\n                 </div>\r\n    <button class=\"btn btn-lg btn-primary btn-block btn-signin login\" type=\"submit\" [disabled]=\"!resortForm.valid\" (click)=\"onSubmit()\">Submit</button>\r\n    <button class=\"btn btn-lg btn-primary btn-block btn-signin\" type=\"submit\" (click)=\"reset()\">Reset</button>\r\n    </form>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _password_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../password-validation */ "./src/app/components/password-validation.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// declare var $;
var RegisterComponent = /** @class */ (function () {
    //    password: '',
    //    confirmPassword: '',
    function RegisterComponent(appComponent, appService, formBuilder) {
        this.appComponent = appComponent;
        this.appService = appService;
        this.formBuilder = formBuilder;
        this.email = "";
        this.firstName = "";
        this.lastName = "";
        this.address = "";
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.resortForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z \-\']+')]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z \-\']+')]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255)]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(11)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)])
        }, {
            validator: _password_validation__WEBPACK_IMPORTED_MODULE_2__["PasswordValidation"].MatchPassword
        });
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        var request = {
            email: this.resortForm.value.email,
        };
        this.appService.save(this.resortForm.value).subscribe(function (data) {
            // alert("registered Succesfully");
            _this.appComponent.modalCall("Registered Succesfully");
            _this.reset();
        }, function (error) {
            //  alert("Registration failed");
            if (error.status == 400) {
                _this.appComponent.modalCall("Email Already Exist");
            }
            else
                _this.appComponent.modalCall("Registration failed");
        });
        //  console.log(this.resortForm)
        //  localStorage.setItem('registration', this.resortForm.value.email);
    };
    RegisterComponent.prototype.reset = function () {
        this.resortForm.reset();
    };
    RegisterComponent.prototype.restrictNumeric = function (e) {
        if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) {
            e.preventDefault();
        }
    };
    RegisterComponent.prototype.restrictAlpha = function (e) {
        if (((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) && e.keyCode != 8) {
            e.preventDefault();
        }
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/view-itinerary/view-itinerary.component.css":
/*!*************************************************************!*\
  !*** ./src/app/view-itinerary/view-itinerary.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.sidenav {\r\n    width: 130px;\r\n    position: fixed;\r\n    z-index: 1;\r\n  align-content: center;\r\n    left: 10px;\r\n    background: #eee;\r\n    overflow-x: hidden;\r\n    padding: 8px 0;\r\n  \r\n}\r\n\r\n.sidenav a {\r\n    padding: 6px 8px 6px 16px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    color: #2196F3;\r\n    display: block;\r\n}\r\n\r\n.sidenav a:hover {\r\n    color: #064579;\r\n}\r\n\r\n/*.bookings-div{\r\n    overflow-y: auto;\r\n    max-height: 250px;\r\n}*/\r\n\r\n.data-part{\r\n        /*max-height: 600px;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;*/\r\n}\r\n\r\n.grid{\r\n    border: 1px solid white;\r\n    background: white;\r\n    border-radius: 6px;\r\n    padding: 2%;\r\n    margin-right: 2%;\r\n        /*padding-top: 6px;*/\r\n            /*display: inline-block;*/\r\n            /*width: 280px;*/\r\n                margin-bottom: 2%;\r\n}\r\n\r\n.sub-div-new{\r\n    /*display: flex;*/\r\n    padding-left: 0px;\r\n     margin-bottom: 3%;\r\n         margin-top: 3%;\r\n}\r\n\r\n.grid-sub{\r\n    display: flex;\r\n}\r\n\r\n.cancel-booking{\r\n    width: 145px;\r\n}\r\n\r\n.sub-grid{\r\n    display: flex;\r\n    padding-left: 0px;\r\n        padding-right: 0px;\r\n}\r\n\r\n.r-number{\r\n    font-size: 2em;\r\n     padding-left: 0px;\r\n}\r\n\r\n.r-type{\r\n    text-align: left;\r\n    font-size: 1em;\r\n        padding-right: 0px;\r\n        padding-left: 0px;\r\n    /*padding-top: 6px;*/\r\n}\r\n\r\n.guests{\r\n    font-size: 1.5em;\r\n        padding-right: 0px;\r\n            text-align: right;\r\n    padding-top: 2%;\r\n}\r\n\r\n.data{\r\n    text-align: right;\r\n}\r\n\r\n.on{\r\n        padding-top: 16px;\r\n}\r\n\r\n.arrive{\r\n    margin-top: 5%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/view-itinerary/view-itinerary.component.html":
/*!**************************************************************!*\
  !*** ./src/app/view-itinerary/view-itinerary.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 new-home-head\">\n\n  <h2 class=\"mx-auto\" >Bookings</h2>\n\n</div>\n<div class=\"data-part\">\n  <div class=\"col-md-12 col-sm-12 header-label-div sub-header\">\n    <h3 style=\"width: 1000px;\">Resort reservations</h3>\n  </div>\n  <div *ngIf=\"resortList?.length>0\" class=\"col-md-12 col-sm-12 bookings-div\">\n    <div *ngFor=\"let resort of resortList\" class=\"col-md-12 col-sm-12 sub-div\">\n      <div class=\"col-md-12 col-sm-12 details-div\">\n        <div class=\"col-md-3 col-sm-3 item \">\n         <b class=\"n-label\"> Reservation #:&nbsp;</b> {{resort.rReservationNumber}}\n        </div>\n        <div class=\"col-md-3 col-sm-3 item\">\n           <b class=\"n-label\"> Room Type:&nbsp;</b> {{resort.roomType}}\n        </div>\n        <div class=\"col-md-3 col-sm-3 item \">\n          <b class=\"n-label\"> Number of guests:&nbsp;</b> {{resort.noOfPeople}}\n        </div>\n        <div class=\"col-md-3 col-sm-3 item \">\n           <b class=\"n-label\"> Status:&nbsp;</b> {{resort.status}}\n        </div>\n      </div>\n      <div class=\"col-md-12 col-sm-12 details-div\">\n        <div class=\"col-md-3 col-sm-3 item \">\n          <b class=\"n-label\"> Arrival Date:&nbsp;</b> {{resort.arrivalDate}}\n        </div>\n        <div class=\"col-md-3 col-sm-3 item \">\n           <b class=\"n-label\">Departure Date:&nbsp;</b> {{resort.departureDate}}\n        </div>\n        <div class=\"col-md-3 col-sm-3 item \">\n          &nbsp;\n        </div>\n        <div class=\"col-md-3 col-sm-3 item \">\n          <button class=\"btn btn-primary cancel-booking\" [disabled]=\"resort.status!='booked'\" (click)=\"cancelResort(resort.rReservationNumber)\"> Cancel Booking</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"resortList?.length<=0\" class=\"col-md-12 col-sm-12 no-booking\">\n    <h5>No Resort Bookings Found</h5>\n    <button class=\"btn btn-primary cancel-booking\" (click)=\"bookResort()\"> Book Resort</button>\n  </div>\n  <div class=\"col-md-12 col-sm-12 header-label-div dining \">\n    <h3 class=\"sub-header\" style=\"width: 1000px;\">Dining reservations</h3>\n  </div>\n  <div *ngIf=\"diningList?.length>0\" class=\"col-md-12 col-sm-12 bookings-div\">\n    <div *ngFor=\"let dining of diningList\" class=\"col-md-12 col-sm-12 sub-div\">\n      <div class=\"col-md-12 col-sm-12 details-div\">\n        <div class=\"col-md-3 col-sm-3 item \">\n          <b class=\"n-label\"> Reservation #:&nbsp;</b> {{dining.dReservationNumber}}\n        </div>\n        <div class=\"col-md-3 col-sm-3 item\">\n           <b class=\"n-label\">Dining Type:&nbsp;</b> {{dining.diningType}}\n        </div>\n        <div class=\"col-md-3 col-sm-3 item \">\n          <b class=\"n-label\"> Number of guests:&nbsp;</b> {{dining.noOfPeople}}\n        </div>\n        <div class=\"col-md-3 col-sm-3 item \">\n          <b class=\"n-label\"> Status:&nbsp;</b> {{dining.status}}\n        </div>\n      </div>\n      <div class=\"col-md-12 col-sm-12 details-div\">\n        <div class=\"col-md-3 col-sm-3 item \">\n          <b class=\"n-label\"> Arrival Date:&nbsp;</b> {{dining.arrivalDate}}\n        </div>\n        <div class=\"col-md-3 col-sm-3 item \">\n          &nbsp;\n        </div>\n        <div class=\"col-md-3 col-sm-3 item \">\n          &nbsp;\n        </div>\n        <div class=\"col-md-3 col-sm-3 item \">\n          <button class=\"btn btn-primary cancel-booking\" [disabled]=\"dining.status!='booked'\" (click)=\"cancelDining(dining.dReservationNumber)\"> Cancel Booking</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"diningList?.length<=0\" class=\"col-md-12 col-sm-12 no-booking\">\n    <h5>No Dining Bookings Found</h5>\n    <button class=\"btn btn-primary cancel-booking\" (click)=\"bookDining()\"> Book Dining</button>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"cancelModal\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content \">\n      <div class=\"modal-body\">\n        <div class=\"col-md-12 col-sm-12 close-div-new\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <div class=\"col-md-12 col-sm-12 body-div\">\n          <p>Are you sure want to cancel booking?</p>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"cancelConfirm()\">Yes</button>\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/view-itinerary/view-itinerary.component.ts":
/*!************************************************************!*\
  !*** ./src/app/view-itinerary/view-itinerary.component.ts ***!
  \************************************************************/
/*! exports provided: ViewItineraryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewItineraryComponent", function() { return ViewItineraryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _components_Entity_guest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Entity/guest */ "./src/app/components/Entity/guest.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewItineraryComponent = /** @class */ (function () {
    function ViewItineraryComponent(appService, router, appComponent) {
        this.appService = appService;
        this.router = router;
        this.appComponent = appComponent;
        this.guest = new _components_Entity_guest__WEBPACK_IMPORTED_MODULE_2__["Guest"]();
        this.login = false;
    }
    ViewItineraryComponent.prototype.ngOnInit = function () {
        this.getGuest();
    };
    ViewItineraryComponent.prototype.getGuest = function () {
        this.guest = JSON.parse(window.localStorage.getItem("guest"));
        if (this.guest == null) {
            this.router.navigate(['/login']);
        }
        this.getViewData();
    };
    ViewItineraryComponent.prototype.getViewData = function () {
        var _this = this;
        this.appService.getViewData(this.guest.guestID).subscribe(function (data) {
            _this.resortList = [];
            _this.diningList = [];
            _this.resortList = JSON.parse(JSON.stringify(data[0]));
            _this.diningList = JSON.parse(JSON.stringify(data[1]));
        }, function (error) {
        });
    };
    ViewItineraryComponent.prototype.cancelDining = function (id) {
        this.cancelId = id;
        this.isDining = true;
        $('#cancelModal').modal('show');
    };
    ViewItineraryComponent.prototype.cancelResort = function (id) {
        this.cancelId = id;
        this.isDining = false;
        $('#cancelModal').modal('show');
    };
    ViewItineraryComponent.prototype.bookDining = function () {
        this.router.navigate(['/BookDining']);
    };
    ViewItineraryComponent.prototype.bookResort = function () {
        this.router.navigate(['/BookResort']);
    };
    ViewItineraryComponent.prototype.cancelConfirm = function () {
        var _this = this;
        if (this.isDining) {
            this.appService.cancelDining(this.cancelId).subscribe(function (data) {
                _this.resortList = [];
                _this.diningList = [];
                // alert("Dining cancelled Succesfully");
                _this.appComponent.modalCall("Dining cancelled Succesfully");
                _this.getViewData();
            }, function (error) {
                //  alert("Dining cancellation failed");
                _this.appComponent.modalCall("Dining cancellation failed");
            });
        }
        else {
            this.appService.cancelResort(this.cancelId).subscribe(function (data) {
                _this.resortList = [];
                _this.diningList = [];
                //  alert("Resort cancelled Succesfully");
                _this.appComponent.modalCall("Resort cancelled Succesfully");
                _this.getViewData();
            }, function (error) {
                //  alert("Resort cancellation failed");
                _this.appComponent.modalCall("Resort cancellation failed");
            });
        }
    };
    ViewItineraryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-itinerary',
            template: __webpack_require__(/*! ./view-itinerary.component.html */ "./src/app/view-itinerary/view-itinerary.component.html"),
            styles: [__webpack_require__(/*! ./view-itinerary.component.css */ "./src/app/view-itinerary/view-itinerary.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]])
    ], ViewItineraryComponent);
    return ViewItineraryComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\sourabh\final work\frontend-angular\myItinerary\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map