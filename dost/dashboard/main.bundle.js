webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__proposal_new_proposal_new_proposal_component__ = __webpack_require__("../../../../../src/app/proposal/new-proposal/new-proposal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__proposal_proposals_proposals_component__ = __webpack_require__("../../../../../src/app/proposal/proposals/proposals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__research_new_research_new_research_component__ = __webpack_require__("../../../../../src/app/research/new-research/new-research.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__research_researches_researches_component__ = __webpack_require__("../../../../../src/app/research/researches/researches.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__research_update_research_update_research_component__ = __webpack_require__("../../../../../src/app/research/update-research/update-research.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__control_panel_project_discipline_project_discipline_component__ = __webpack_require__("../../../../../src/app/control-panel/project-discipline/project-discipline.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'main',
        component: __WEBPACK_IMPORTED_MODULE_3__main_main_component__["a" /* MainComponent */],
        children: [
            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */], outlet: 'div' },
            { path: 'new-proposal', component: __WEBPACK_IMPORTED_MODULE_5__proposal_new_proposal_new_proposal_component__["a" /* NewProposalComponent */], outlet: 'div' },
            { path: 'proposals', component: __WEBPACK_IMPORTED_MODULE_6__proposal_proposals_proposals_component__["a" /* ProposalsComponent */], outlet: 'div' },
            { path: 'new-research', component: __WEBPACK_IMPORTED_MODULE_7__research_new_research_new_research_component__["a" /* NewResearchComponent */], outlet: 'div' },
            { path: 'researches', component: __WEBPACK_IMPORTED_MODULE_8__research_researches_researches_component__["a" /* ResearchesComponent */], outlet: 'div' },
            { path: 'discipline', component: __WEBPACK_IMPORTED_MODULE_10__control_panel_project_discipline_project_discipline_component__["a" /* ProjectDisciplineComponent */], outlet: 'div' },
            { path: 'update-research', component: __WEBPACK_IMPORTED_MODULE_9__research_update_research_update_research_component__["a" /* UpdateResearchComponent */], outlet: 'div' },
        ]
    },
    {
        path: '**', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <mat-toolbar-row>\r\n    <img src=\"assets/logo.png\" height=\"50px\">\r\n\r\n  \r\n    <span class=\"example-spacer\"></span>\r\n    \r\n    <button mat-button>About</button>\r\n    <button mat-button routerLink=\"main\">Services</button>\r\n    <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n  <mat-icon>more_vert</mat-icon>\r\n  </button>\r\n  <mat-menu #menu=\"matMenu\">\r\n    <button mat-menu-item>\r\n      <mat-icon>dialpad</mat-icon>\r\n      <span>Redial</span>\r\n    </button>\r\n    <button mat-menu-item (click)=\"logout()\">\r\n      <mat-icon>exit_to_app</mat-icon>\r\n      <span> Logout</span>\r\n    </button>\r\n  </mat-menu>\r\n  </mat-toolbar-row> \r\n</mat-toolbar>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<footer><!--position: absolute;z-index: 9999-->\r\n  \r\n    <mat-toolbar color='primary'> \r\n      <p style=\"font-size: 11px;line-height: 1.3;\"  >\r\n      ©2018 DOST<br>\r\n      DOST Tuguegarao<br>\r\n      Maintained by: Uslt CICT</p>\r\n    <span class='spacer'></span>\r\n  </mat-toolbar>\r\n</footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-icon {\n  padding: 0 14px; }\n\n.example-spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.spacer {\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_service__ = __webpack_require__("../../../../../src/app/global.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(global, router) {
        this.global = global;
        this.router = router;
        this.title = 'app';
        this.routerlink = "login";
        if (this.global.getSession() == null) {
            this.router.navigate(['login']);
        }
    }
    AppComponent.prototype.logout = function () {
        this.global.logout();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__global_service__ = __webpack_require__("../../../../../src/app/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular_webstorage_service__ = __webpack_require__("../../../../angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__proposal_new_proposal_new_proposal_component__ = __webpack_require__("../../../../../src/app/proposal/new-proposal/new-proposal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__proposal_proposals_proposals_component__ = __webpack_require__("../../../../../src/app/proposal/proposals/proposals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__research_new_research_new_research_component__ = __webpack_require__("../../../../../src/app/research/new-research/new-research.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__research_researches_researches_component__ = __webpack_require__("../../../../../src/app/research/researches/researches.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__control_panel_project_discipline_project_discipline_component__ = __webpack_require__("../../../../../src/app/control-panel/project-discipline/project-discipline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__control_panel_project_classification_type_project_classification_type_component__ = __webpack_require__("../../../../../src/app/control-panel/project-classification-type/project-classification-type.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__proposal_new_proposal_update_project_update_project_component__ = __webpack_require__("../../../../../src/app/proposal/new-proposal/update-project/update-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__research_new_research_manage_author_manage_author_component__ = __webpack_require__("../../../../../src/app/research/new-research/manage-author/manage-author.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__research_update_research_update_research_component__ = __webpack_require__("../../../../../src/app/research/update-research/update-research.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__research_researches_research_status_research_status_component__ = __webpack_require__("../../../../../src/app/research/researches/research-status/research-status.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__proposal_new_proposal_new_proposal_component__["a" /* NewProposalComponent */],
                __WEBPACK_IMPORTED_MODULE_13__proposal_proposals_proposals_component__["a" /* ProposalsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__research_new_research_new_research_component__["a" /* NewResearchComponent */],
                __WEBPACK_IMPORTED_MODULE_15__research_researches_researches_component__["a" /* ResearchesComponent */],
                __WEBPACK_IMPORTED_MODULE_16__control_panel_project_discipline_project_discipline_component__["a" /* ProjectDisciplineComponent */],
                __WEBPACK_IMPORTED_MODULE_17__control_panel_project_classification_type_project_classification_type_component__["a" /* ProjectClassificationTypeComponent */],
                __WEBPACK_IMPORTED_MODULE_18__proposal_new_proposal_update_project_update_project_component__["a" /* UpdateProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_19__research_new_research_manage_author_manage_author_component__["a" /* ManageAuthorComponent */],
                __WEBPACK_IMPORTED_MODULE_20__research_update_research_update_research_component__["a" /* UpdateResearchComponent */],
                __WEBPACK_IMPORTED_MODULE_21__research_researches_research_status_research_status_component__["a" /* ResearchStatusComponent */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_18__proposal_new_proposal_update_project_update_project_component__["a" /* UpdateProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_19__research_new_research_manage_author_manage_author_component__["a" /* ManageAuthorComponent */],
                __WEBPACK_IMPORTED_MODULE_21__research_researches_research_status_research_status_component__["a" /* ResearchStatusComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_11_angular_webstorage_service__["b" /* StorageServiceModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__global_service__["a" /* GlobalService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/control-panel/project-classification-type/project-classification-type.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  project-classification-type works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/control-panel/project-classification-type/project-classification-type.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/control-panel/project-classification-type/project-classification-type.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectClassificationTypeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectClassificationTypeComponent = /** @class */ (function () {
    function ProjectClassificationTypeComponent() {
    }
    ProjectClassificationTypeComponent.prototype.ngOnInit = function () {
    };
    ProjectClassificationTypeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-project-classification-type',
            template: __webpack_require__("../../../../../src/app/control-panel/project-classification-type/project-classification-type.component.html"),
            styles: [__webpack_require__("../../../../../src/app/control-panel/project-classification-type/project-classification-type.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectClassificationTypeComponent);
    return ProjectClassificationTypeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/control-panel/project-discipline/project-discipline.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  project-discipline works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/control-panel/project-discipline/project-discipline.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/control-panel/project-discipline/project-discipline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectDisciplineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectDisciplineComponent = /** @class */ (function () {
    function ProjectDisciplineComponent() {
    }
    ProjectDisciplineComponent.prototype.ngOnInit = function () {
    };
    ProjectDisciplineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-project-discipline',
            template: __webpack_require__("../../../../../src/app/control-panel/project-discipline/project-discipline.component.html"),
            styles: [__webpack_require__("../../../../../src/app/control-panel/project-discipline/project-discipline.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectDisciplineComponent);
    return ProjectDisciplineComponent;
}());



/***/ }),

/***/ "../../../../../src/app/global.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_webstorage_service__ = __webpack_require__("../../../../angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var swal = __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default.a;
var GlobalService = /** @class */ (function () {
    function GlobalService(storage, router, http) {
        this.storage = storage;
        this.router = router;
        this.http = http;
        this.api = "http://192.168.137.1/backend-dost/";
        this.header = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        this.userid = 1;
        if (this.storage.get('token') != null) {
            this.requestToken();
        }
        this.requestToken();
    }
    GlobalService.prototype.requestemail = function () { return this.storage.get('email'); };
    GlobalService.prototype.requestid = function () { return this.storage.get('id'); };
    GlobalService.prototype.setemail = function (val1, val2) {
        this.storage.set('email', val1);
        this.storage.set('id', val2);
    };
    GlobalService.prototype.requestToken = function () {
        this.header.append("Content-Type", "application/json");
        this.option = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: this.header });
    };
    GlobalService.prototype.swalAlert = function (title, text, type) {
        swal(title, text, type);
    };
    GlobalService.prototype.swalLoading = function (val) {
        swal({
            title: val, allowOutsideClick: false,
        });
        swal.showLoading();
    };
    GlobalService.prototype.swalClose = function () {
        swal.close();
    };
    GlobalService.prototype.swalAlertError = function () {
        swal('Oops...', 'Connection Error!', 'error');
    };
    GlobalService.prototype.setSession = function (val) {
        this.storage.set('token', val);
        this.storage.set('level', "1");
        this.storage.set('domain', "college");
        this.storage.set('yearlevel', "2");
    };
    GlobalService.prototype.getSession = function () {
        return this.storage.get('token');
    };
    GlobalService.prototype.removeSession = function () {
        this.storage.remove('token');
    };
    GlobalService.prototype.logout = function () {
        var _this = this;
        var timerInterval;
        swal({
            allowOutsideClick: false,
            title: 'Auto close alert!',
            html: 'You will be Logged out from the system.',
            timer: 2000,
            onOpen: function () {
                swal.showLoading();
                timerInterval = setInterval(function () {
                }, 100);
            },
            onClose: function () {
                clearInterval(timerInterval);
            }
        }).then(function (result) {
            if (
            // Read more about handling dismissals
            result.dismiss === swal.DismissReason.timer) {
                _this.storage.remove('token');
                window.location.reload();
            }
        });
    };
    GlobalService.prototype.swalSuccess = function (bat) {
        swal({
            type: 'success',
            title: bat,
            showConfirmButton: false,
            timer: 1500
        });
    };
    GlobalService.prototype.swalinfo = function (bat) {
        swal('', bat);
    };
    GlobalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6_angular_webstorage_service__["a" /* SESSION_STORAGE */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_angular_webstorage_service__["c" /* WebStorageService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], GlobalService);
    return GlobalService;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"padding:20px\"> <h3 style=\"margin-top: 0\">\r\n\tDOST\r\n</h3>\r\n<p>\r\n\tDashboard\r\n</p>\r\n\r\n<mat-card>\r\n\t<mat-card-content>\r\n\t\t<h4>Report Summary</h4>\r\n\t\t\r\n\t</mat-card-content>\r\n</mat-card>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_service__ = __webpack_require__("../../../../../src/app/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(http, global) {
        this.http = http;
        this.global = global;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1__global_service__["a" /* GlobalService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container style=\"background-image: url('assets/St.jpg');background-repeat: no-repeat; background-size: cover;height: calc(100vh - 128px);\" class=\"example-container\">\r\n<mat-card style=\"width: 350px;margin: 50px auto;padding:0\">\r\n\r\n\r\n<!-- \r\n    Login template using Angular Material\r\n    @author Shashank Tiwari \r\n-->\r\n \r\n \r\n    <!-- Writing markup for login starts -->\r\n        <div class=\"login-container\">\r\n \r\n            <!-- Template Header starts -->\r\n            <div class=\"login-box-header\">\r\n                <h3>Login</h3>\r\n            </div>\r\n            <!-- Template Header ends -->\r\n            \r\n            <!-- Template Body starts -->\r\n            <div class=\"login-box-body\" style=\"margin: 10px\">\r\n \r\n                <!-- Markup for getting Username starts -->\r\n                <mat-grid-list cols=\"9\" rowHeight=\"75px\">\r\n                    <mat-grid-tile [rowspan]=\"1\" class=\"login-icon\">\r\n                        <mat-icon>lock</mat-icon>\r\n                    </mat-grid-tile>\r\n                    <mat-grid-tile [colspan]=\"7\">\r\n                        <mat-input-container class=\"justifier\">\r\n                            <input matInput placeholder=\"ID Number\" text=\"text\" [(ngModel)]=\"username\">\r\n                        </mat-input-container>\r\n                    </mat-grid-tile>\r\n                </mat-grid-list>\r\n                <!-- Markup for getting Username ends -->\r\n \r\n                <!-- Markup for getting Password starts -->\r\n                <mat-grid-list cols=\"9\" rowHeight=\"100px\">\r\n                    <mat-grid-tile [rowspan]=\"1\"  class=\"login-icon\">\r\n                        <mat-icon>remove_red_eye</mat-icon>\r\n                    </mat-grid-tile>\r\n                    <mat-grid-tile [colspan]=\"7\">\r\n                        <mat-input-container class=\"justifier\">\r\n                            <input matInput placeholder=\"Password\" text=\"password\" type=\"password\"  [(ngModel)]=\"password\">\r\n                        </mat-input-container>\r\n                    </mat-grid-tile>\r\n                </mat-grid-list>\r\n                <!-- Markup for getting Password ends -->\r\n \r\n                <button  type='submit' class=\"buttonblue\"   mat-raised-button style=\"float: right;margin: 10px\" (click)=\"login()\"> \r\n                    <mat-icon>input</mat-icon> Login\r\n                </button>\r\n                <br>\r\n                <br>\r\n                <br>\r\n                \r\n            </div>\r\n            <!-- Template Body ends -->\r\n            \r\n        </div>\r\n\r\n</mat-card>\r\n</mat-drawer-container>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-form md-card {\n  padding: 0 !important; }\n  .login-form md-card md-card-title {\n    background-color: blue; }\n  /*\r\nLogin template using Angular Material\r\n@author Shashank Tiwari\r\n*/\n  .login-container {\n  margin: 0 auto;\n  width: 350px;\n  background-color: #fff; }\n  .login-box-header {\n  width: auto;\n  background: #262626;\n  text-align: center;\n  vertical-align: middle;\n  padding: 2%;\n  color: #fff; }\n  .login-box-body {\n  width: auto; }\n  .login-icon {\n  margin-top: -2px; }\n  .justifier {\n  width: 100%;\n  padding-bottom: 2%; }\n  .login-button {\n  width: 100%;\n  padding: 1.5% !important;\n  background: #ffab1f;\n  font-size: 1.5em;\n  color: #fff !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_service__ = __webpack_require__("../../../../../src/app/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var swal = __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default.a;
var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, global, router) {
        this.http = http;
        this.global = global;
        this.router = router;
        this.username = "admin@gmail.com";
        this.password = "admin";
        this.key = 1;
        this.header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        if (this.global.getSession() != null) {
            this.router.navigate(['main']);
        }
    }
    LoginComponent.prototype.handleKeyboardEvent = function (event) {
        if (event.key == 'Enter' && !(swal.isVisible())) {
            this.login();
        }
    };
    LoginComponent.prototype.login2 = function () { this.router.navigate(['../main']); };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.username == undefined || this.username == '' || this.password == undefined || this.password == '') {
            swal('', 'Username and Password are Required!', 'info');
        }
        else {
            if (this.username == undefined) {
                this.username = "";
            }
            if (this.password == undefined) {
                this.password = "";
            }
            swal({
                title: 'Logging In...', allowOutsideClick: false,
            });
            swal.showLoading();
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append("username", this.username);
            urlSearchParams.append('password', this.password);
            urlSearchParams.append('appname', 'CVRDKMS');
            urlSearchParams.append('appsecret', 'admin');
            var body = urlSearchParams.toString();
            var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            header.append("Accept", "application/json");
            header.append("Content-Type", "application/x-www-form-urlencoded");
            var option = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: header });
            this.http.post(this.global.api + 'api.php?action=login', body, option)
                .map(function (response) { return response.json(); })
                .subscribe(function (res) {
                swal.close();
                if (res.id == null) {
                    swal('', 'Incorrect Username or Password', 'info');
                }
                else {
                    _this.global.setemail(res.email, res.id);
                    _this.router.navigate(['main']);
                }
            }, function (error) {
                console.log(Error);
                _this.global.swalAlertError();
            });
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:keypress', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], LoginComponent.prototype, "handleKeyboardEvent", null);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1__global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<mat-drawer-container class=\"example-container\">\r\n  <mat-drawer mode=\"side\" opened=\"true\"  #drawer>\r\n  \t<div style=\"\" id=\"coverp\">\r\n\t<div style=\"\" id=\"fullname\">\r\n\t\t<table>\r\n\t\t\t<tr>\r\n\t\t\t\t<td width=\"60px\">\r\n\t  \t\t\t<img [src]=\"image\" width=\"50\" id=\"photop\" onError=\"this.src='assets/noimage.jpg'\"/>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td style=\"text-align: left\" >\r\n\t\t\t\t  {{user.fname}} {{user.mname}} {{user.surname}} {{user.ext}}\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t</table>\r\n\t</div> \r\n</div>\r\n  \t<mat-accordion>\r\n\r\n  <mat-expansion-panel>\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        <i class=\"material-icons iconsize\" >home</i><b>&nbsp; Home</b>\r\n      </mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n\t\t<mat-list>\r\n\t\t  <mat-list-item><button mat-button  [routerLink]=\"['../main',{outlets:{div:'person-information'}}]\" >Dashboard</button></mat-list-item>\r\n\t\t  <mat-divider></mat-divider>\r\n\t\t  <mat-list-item><button mat-button  [routerLink]=\"['../main',{outlets:{div:'update-person'}}]\" >Announcement</button></mat-list-item>\r\n\t\t</mat-list>\r\n  </mat-expansion-panel>\r\n  <mat-expansion-panel>\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        <i class=\"material-icons iconsize\" >assessment</i><b>&nbsp; Proposal</b>\r\n      </mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n\t\t<mat-list>\r\n\t\t  <mat-list-item><button mat-button  [routerLink]=\"['../main',{outlets:{div:'new-proposal'}}]\" >Create Capsule Proposal</button></mat-list-item>\r\n\t\t  <mat-divider></mat-divider>\r\n\t\t  <mat-list-item><button mat-button  [routerLink]=\"['../main',{outlets:{div:'proposals'}}]\" >Proposals</button></mat-list-item>\r\n\t\t</mat-list>\r\n  </mat-expansion-panel>\r\n\r\n  <mat-expansion-panel>\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        <i class=\"material-icons iconsize\" >chrome_reader_mode</i><b>&nbsp; Research</b>\r\n      </mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n\t\t<mat-list>\r\n\t\t  <mat-list-item><button mat-button [routerLink]=\"['../main',{outlets:{div:'new-research'}}]\" >New Research</button></mat-list-item>\r\n\t\t  <mat-divider></mat-divider>\r\n\t\t  <mat-list-item><button mat-button [routerLink]=\"['../main',{outlets:{div:'researches'}}]\" >Researches</button></mat-list-item>\r\n\t\t</mat-list>\r\n  </mat-expansion-panel>\r\n\r\n\r\n  <mat-expansion-panel>\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        <i class=\"material-icons\">settings_applications</i><b>&nbsp; Control Panel</b>\r\n      </mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n    <mat-list>\r\n      <mat-list-item><button mat-button  [routerLink]=\"['../main',{outlets:{div:'discipline'}}]\">Discipline</button></mat-list-item>\r\n      <mat-divider></mat-divider>\r\n      <mat-list-item><button mat-button>Classification Type</button>\r\n      </mat-list-item>\r\n      <mat-divider></mat-divider> \r\n      <mat-list-item><button mat-button>Mode of Implementation</button></mat-list-item>\r\n      <mat-divider></mat-divider> \r\n      <mat-list-item><button mat-button  [routerLink]=\"['../main',{outlets:{div:'user-management'}}]\">User Management</button></mat-list-item>\r\n      <mat-divider></mat-divider>\r\n    </mat-list>\r\n  </mat-expansion-panel>\r\n\r\n\r\n</mat-accordion>\r\n\r\n  </mat-drawer>\r\n  <mat-drawer-content>\r\n  \t<div style=\"margin-left: 10px;margin-top: 8px;\" class=\"hnav\">\r\n\r\n    </div>\r\n  \t<mat-card class=\"matcontainer\" style=\"padding: 0;overflow: hidden;overflow-y: scroll;\"> \r\n\r\n    <router-outlet name=\"div\"></router-outlet>\r\n\t\t\r\n  \t</mat-card></mat-drawer-content>\r\n</mat-drawer-container>\r\n"

/***/ }),

/***/ "../../../../../src/app/main/main.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-drawer {\n  width: 300px; }\n\n.mat-list .mat-list-item, .mat-nav-list .mat-list-item, .mat-selection-list .mat-list-item {\n  font-size: 14px; }\n\n.mat-list .mat-list-item, .mat-list .mat-list-option, .mat-nav-list .mat-list-item, .mat-nav-list .mat-list-option, .mat-selection-list .mat-list-item, .mat-selection-list .mat-list-option {\n  height: 38px; }\n\n.mat-list .mat-list-item, .mat-list .mat-list-option, .mat-nav-list .mat-list-item, .mat-nav-list .mat-list-option, .mat-selection-list .mat-list-item, .mat-selection-list .mat-list-option {\n  padding-top: 0; }\n\n.iconsize {\n  font-size: 18px; }\n\n.mat-button {\n  width: 100%;\n  text-align: left;\n  padding-left: 5px;\n  padding-right: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_service__ = __webpack_require__("../../../../../src/app/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MainComponent = /** @class */ (function () {
    function MainComponent(domSanitizer, global, http, route, router) {
        var _this = this;
        this.domSanitizer = domSanitizer;
        this.global = global;
        this.http = http;
        this.route = route;
        this.router = router;
        this.panelOpenState = false;
        this.image = 'assets/noimage.jpg';
        this.user = { fname: '', surname: '', mname: '', ext: '', sex: '', agency: '', address: '', telno: '', companyid: '', appname: '', companyname: '', roleid: '' };
        this.router.navigate(['../main', { outlets: { div: 'home' } }]);
        this.id = this.global.requestid();
        this.global.swalLoading('Loading User Information');
        this.http.get(this.global.api + 'api.php?action=getuserinfo&id=' + this.global.requestid(), this.global.option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.user = res;
            _this.user.sex = "male";
            _this.user.agency = "01001";
            _this.user.address = "address";
            _this.user.telno = "none";
            _this.global.user = res;
            _this.global.swalClose();
            _this.http.get(_this.global.api + 'api.php?action=spUserViewDomain_Company_By_Username&email=' + _this.global.requestemail(), _this.global.option)
                .map(function (response) { return response.json(); })
                .subscribe(function (res) {
                _this.global.useraccess = res[0];
            });
        });
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__("../../../../../src/app/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_2__global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_stepper__ = __webpack_require__("../../../material/esm5/stepper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_select__ = __webpack_require__("../../../material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_checkbox__ = __webpack_require__("../../../material/esm5/checkbox.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_list__ = __webpack_require__("../../../material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_grid_list__ = __webpack_require__("../../../material/esm5/grid-list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_sidenav__ = __webpack_require__("../../../material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_expansion__ = __webpack_require__("../../../material/esm5/expansion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_menu__ = __webpack_require__("../../../material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material_tabs__ = __webpack_require__("../../../material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_table__ = __webpack_require__("../../../material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_datepicker__ = __webpack_require__("../../../material/esm5/datepicker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material_radio__ = __webpack_require__("../../../material/esm5/radio.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material_chips__ = __webpack_require__("../../../material/esm5/chips.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material_icon__["a" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material_card__["a" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material_stepper__["a" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_form_field__["c" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_8__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_8__angular_forms__["i" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_checkbox__["a" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material_list__["a" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_10__angular_material_grid_list__["a" /* MatGridListModule */], __WEBPACK_IMPORTED_MODULE_11__angular_material_sidenav__["a" /* MatSidenavModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material_expansion__["a" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material_menu__["a" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_14__angular_material_tabs__["a" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_15__angular_material_table__["b" /* MatTableModule */], __WEBPACK_IMPORTED_MODULE_16__angular_material_datepicker__["a" /* MatDatepickerModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material_radio__["a" /* MatRadioModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatPaginatorModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_18__angular_material_chips__["a" /* MatChipsModule */],
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material_icon__["a" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material_card__["a" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material_stepper__["a" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_form_field__["c" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_8__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_8__angular_forms__["i" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_checkbox__["a" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material_list__["a" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_10__angular_material_grid_list__["a" /* MatGridListModule */], __WEBPACK_IMPORTED_MODULE_11__angular_material_sidenav__["a" /* MatSidenavModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material_expansion__["a" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material_menu__["a" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_14__angular_material_tabs__["a" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_15__angular_material_table__["b" /* MatTableModule */], __WEBPACK_IMPORTED_MODULE_16__angular_material_datepicker__["a" /* MatDatepickerModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material_radio__["a" /* MatRadioModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatPaginatorModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_18__angular_material_chips__["a" /* MatChipsModule */],
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/proposal/new-proposal/new-proposal.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"padding:20px\" id=\"new-proposal\">\r\n\t<h3>{{labeltitle}}</h3>\r\n\t<hr>\r\n\t<mat-horizontal-stepper   labelPostion=\"botton\" [linear]=\"true\" #stepper>\r\n       \r\n      <mat-step>\r\n\r\n          <ng-template matStepLabel>Create Capsule Proposal</ng-template>\r\n\r\n          <p style=\"text-align: center;margin:0px\"><i>Create Capsule Proposal</i></p>\r\n            <mat-form-field class=\"npinput\"  style=\"width: 100%\">\r\n              <input matInput placeholder=\"Title\" required  [(ngModel)]=\"title\" disabled=\"{{proposalcounter}}\">\r\n              <mat-hint>The identification of the program and the component projects.</mat-hint>\r\n            </mat-form-field>\r\n\r\n              <div style=\"height: 10px\"></div>\r\n            <mat-form-field class=\"npinput\" style=\"width: 40%\">\r\n              <input matInput placeholder=\"Duration\" required type=\"number\" min=\"0\"  [(ngModel)]=\"duration\" disabled=\"{{proposalcounter}}\">\r\n              <mat-hint>In Months \r\n                    <mat-hint><button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"infoduration()\">?</button></mat-hint> </mat-hint>\r\n            </mat-form-field>\r\n\r\n              <div style=\"height: 20px\"></div>\r\n            <mat-form-field  class=\"npinput2\" style=\"width: 40%\" required>\r\n              <mat-label>Funding Agency</mat-label>\r\n              <mat-select  [(ngModel)]=\"fagency\" disabled=\"{{proposalcounter}}\">\r\n                <mat-option value=\"{{f.id}}\"  *ngFor=\"let f of fundingagency\" (click)=\"see(f.name)\">\r\n                  {{f.name}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n\r\n          <div style=\"overflow: hidden;\">\r\n            <mat-card style=\"background-color: #f4f4f4;width:calc(100% - 43px);\">\r\n              I am applying for<br><br>\r\n              <div style=\"margin-left: 10px\">\r\n              <mat-checkbox (change)=\"proposaltype(0)\" [checked]=\"prog\"  disabled=\"{{proposalcounter}}\">\r\n                <h4 style=\"margin: 0px\">Program <small>(Form 1A)</small></h4>\r\n                <p style=\"margin: 0px;white-space:normal;\">A set of interrelated studies or a component of a program to meet pre-determined objectives within a specific time frame.</p>\r\n                \r\n              </mat-checkbox>\r\n              <div style=\"height: 10px\"></div>\r\n              <mat-checkbox (change)=\"proposaltype(1)\" [checked]=\"proj\"  disabled=\"{{proposalcounter}}\">\r\n                <h4 style=\"margin: 0px\">Project <small>(Form 1B)</small></h4>\r\n                <p style=\"margin: 0px;white-space:normal;\">a set of interrelated studies to meet pre-determined objective within a specific time frame.</p>\r\n                \r\n              </mat-checkbox>\r\n            </div>\r\n            </mat-card>\r\n          </div>\r\n  \r\n            <button mat-button class=\"buttonblue\" style=\"float: right;\"  (click)=\"proposalinsert(stepper)\">Next</button>\r\n     \r\n      </mat-step>\r\n      <mat-step>\r\n        <ng-template matStepLabel>Submit Proposal</ng-template>\r\n\r\n\r\n        <div id=\"1a\" *ngIf=\"prog===true\">\r\n          <h4>Program: {{title}}</h4>\r\n          <table style=\"width: 100%\">\r\n            <tr>\r\n              <td style=\"width: 50%\">\r\n            <mat-form-field class=\"npinput\"  style=\"width: 100%\">\r\n              <input matInput placeholder=\"Project Title\"  [(ngModel)]=\"protitle\" >\r\n              <mat-hint></mat-hint>\r\n            </mat-form-field></td>\r\n            <td style=\"width: 20%\">\r\n            <mat-form-field class=\"npinput\" style=\"width: 100%\">\r\n              <input matInput placeholder=\"Duration\" type=\"number\" min=\"0\" [(ngModel)]=\"produration\" >\r\n              <mat-hint>In Months</mat-hint>\r\n            </mat-form-field></td>\r\n            <td style=\"width: 27%\">\r\n                <button mat-raised-button (click)=\"addproject()\" class=\"buttonblue\" >\r\n                    <mat-icon style=\"font-size:20px\">add</mat-icon> Add Project Title</button>\r\n            </td>\r\n            </tr>\r\n          </table>\r\n\r\n          <div  *ngIf=\"projectlists!=undefined\" >\r\n            <div  *ngIf=\"projectlists[0].id!=null\" >\r\n              <table style=\"width: 100%\">\r\n                <tr>\r\n                  <td>Project Title</td>\r\n                  <td>Duration</td>\r\n                  <td> </td>\r\n                </tr>\r\n                <tr  *ngFor=\"let list of projectlists\">\r\n                  <td style=\"width: 40%\"><b>{{list.ptitle}}</b></td>\r\n                <td style=\"width: 20%\"><b>{{list.duration}} months</b></td>\r\n                <td style=\"width: 10%\">\r\n                    <button  mat-button (click)=\"openDialogUpdate(list)\" *ngIf=\"list.significance==null\">\r\n                        <mat-icon style=\"font-size:20px\">add</mat-icon> Add Form 2B &nbsp; &nbsp; &nbsp;</button>\r\n\r\n\r\n                    <button  mat-button (click)=\"openDialogUpdate(list)\" *ngIf=\"list.significance!=null\" >\r\n                        <mat-icon style=\"font-size:20px\">edit</mat-icon> Update Form 2B &nbsp; &nbsp; &nbsp;</button>\r\n                </td>\r\n                <td style=\"width: 27%\">\r\n                    <button  mat-button (click)=\"swalConfirm(list.id,'Remove Project Title?',1,null,null,null)\"  class=\"buttonred\" >\r\n                        <mat-icon style=\"font-size:20px\">remove</mat-icon> Remove</button>\r\n                </td>\r\n                </tr>\r\n              </table>\r\n          </div>\r\n          </div>\r\n          <hr>\r\n              <div style=\"height: 10px\"></div>\r\n              Executive Summary: <button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"summary()\">?</button>\r\n            <mat-form-field  class=\"npinput\" style=\"width: 100%\"> \r\n              <textarea matInput placeholder=\"(Significance, objectives, expected output, and methodology)\" required style=\"height: 80px\"  [(ngModel)]=\"esummary\" ></textarea>\r\n            </mat-form-field>\r\n\r\n          <p><b>Budget Summary for the whole program </b><button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"budget()\">?</button></p>\r\n\r\n          <div>\r\n            <div style=\"height: 5px;\"></div>\r\n            <table  style=\"width: 100%\"><tr>\r\n                <td>\r\n                  Source of Fund\r\n                </td>\r\n                <td> \r\n                  PS <button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"infops()\">?</button>\r\n                </td>\r\n                <td> \r\n                  MOE <button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"infomoe()\">?</button>\r\n                </td>\r\n                <td>\r\n                  CO <button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"infoco()\">?</button>\r\n                </td>\r\n                <td>\r\n                 Total\r\n                </td>\r\n                <td>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td style=\"width: 16%\">\r\n                    \r\n                  <mat-form-field style=\"width: 100%\">\r\n                    <input matInput placeholder=\"\" type=\"text\" [(ngModel)]=\"fangency1\"  readonly=\"readonly\">\r\n                  </mat-form-field>\r\n                </td>\r\n                <td  style=\"width: 16%\">\r\n                  <mat-form-field style=\"width: 100%\">\r\n                    <input matInput placeholder=\"\" type=\"number\" min=\"0\" [(ngModel)]=\"ps\" (change)=\"btotal()\">\r\n                  </mat-form-field>\r\n                </td>\r\n                <td  style=\"width: 16%\">\r\n                  <mat-form-field style=\"width: 100%;\">\r\n                    <input matInput placeholder=\"\"  type=\"number\" min=\"0\" [(ngModel)]=\"moe\" (change)=\"btotal()\">\r\n                  </mat-form-field>\r\n                </td>\r\n                <td style=\"width: 16%\">\r\n                  <mat-form-field style=\"width: 100%\">\r\n                    <input matInput placeholder=\"\" type=\"number\" min=\"0\" [(ngModel)]=\"co\" (change)=\"btotal()\">\r\n                  </mat-form-field>\r\n                </td>\r\n                <td style=\"width: 16%\">\r\n                  <b>{{budgettotal}}</b>\r\n                </td>\r\n                <td style=\"width: 16%\">\r\n                <button mat-button (click)=\"addbudget()\" class=\"buttonblue\">\r\n                    <mat-icon style=\"font-size:20px\">add</mat-icon> Add Budget</button>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n\r\n\r\n          <div  *ngIf=\"budgetlist!=undefined\" >\r\n            <div  *ngIf=\"budgetlist[0].id!=null\" >\r\n            <table  style=\"width: 100%\">\r\n              \r\n              <tr  *ngFor=\"let b of budgetlist\">\r\n                <td style=\"width: 16%\">\r\n                    <b>{{b.sof}}</b>\r\n                </td>\r\n                <td  style=\"width: 16%\">\r\n                  <b>{{b.ps}}</b>\r\n                </td>\r\n                \r\n                <td  style=\"width: 16%\">\r\n                  <b>{{b.moe}}</b>\r\n                </td>\r\n                \r\n                <td  style=\"width: 16%\">\r\n                  <b>{{b.co}}</b>\r\n                </td>\r\n                \r\n                <td  style=\"width: 16%\">\r\n                  <b>{{totalb2(b.ps,b.co,b.moe)}}</b>\r\n                </td>\r\n                <td style=\"width: 16%\">\r\n                <button mat-button (click)=\"swalConfirm(b.id,'Remove Budget?',2,b.ps,b.moe,b.co)\" class=\"buttonred\">\r\n                    <mat-icon style=\"font-size:20px\">remove</mat-icon> Remove</button>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n            </div>\r\n          </div>\r\n\r\n            <div style=\"height: 10px;\"></div>\r\n            <p style=\"margin:0\">Grand Total: <b>P{{balltotal}}</b> &nbsp; &nbsp;</p>\r\n            <hr>\r\n          </div>\r\n\r\n          </div>\r\n\r\n\r\n        <div id=\"1b\" *ngIf=\"proj===true\">\r\n          <p style=\"text-align: center;margin:0px\"><i>Submit Proposal</i></p>\r\n              <h4>Program: {{title}}</h4>\r\n          \r\n          <table style=\"width: 100%\">\r\n            <tr>\r\n              <td style=\"width: 60%\">\r\n            <mat-form-field class=\"npinput\"  style=\"width: 100%\">\r\n              <input matInput placeholder=\"Project Title\"  [(ngModel)]=\"projecttitle\" >\r\n            </mat-form-field></td>\r\n            <td style=\"width: 20%\">\r\n            <mat-form-field class=\"npinput\" style=\"width: 100%\">\r\n              <input matInput placeholder=\"Duration\" type=\"number\" min=\"0\" [(ngModel)]=\"projectduration\" >\r\n              <mat-hint>In Months</mat-hint>\r\n            </mat-form-field></td>\r\n            </tr>\r\n          </table>\r\n\r\n            <table style=\"width: 100%\">\r\n              <tr>\r\n                <td style=\"width: 80%\"> \r\n                  <p style=\"margin: 0\"><b>Proponent</b> <small></small></p>\r\n                  <div style=\"height: 5px\"></div>\r\n                  <table style=\"width: 100%\">\r\n                    <tr>\r\n                      <td style=\"width: 29%\">\r\n                  <mat-form-field  class=\"npinput2\" style=\"width: 100%\">\r\n                    <input matInput placeholder=\"First Name\"  [(ngModel)]=\"fname\" >\r\n                  </mat-form-field>\r\n                      </td>\r\n                      <td style=\"width: 18%\">\r\n                  <mat-form-field  class=\"npinput2\" style=\"width: 100%\">\r\n                    <input matInput placeholder=\"Middle Name\"  [(ngModel)]=\"mname\" >\r\n                  </mat-form-field>\r\n                      </td>\r\n                      <td style=\"width: 18%\">\r\n                  <mat-form-field  class=\"npinput2\" style=\"width: 100%\">\r\n                    <input matInput placeholder=\"Last Name\"  [(ngModel)]=\"lname\" >\r\n                  </mat-form-field>\r\n                      </td>\r\n                      <td style=\"width: 15%\">\r\n                  <mat-form-field  class=\"npinput2\" style=\"width: 100%\">\r\n                    <input matInput placeholder=\"Suffix\"  [(ngModel)]=\"suffix\" >\r\n                  </mat-form-field>\r\n                      </td>\r\n                      <td>\r\n                  \r\n                  <mat-form-field  class=\"npinput2\" style=\"width: 100%\">\r\n                    <mat-label>- Proponent Type -</mat-label>\r\n                    <mat-select  [(ngModel)]=\"proponenttypeinput\">\r\n                      <mat-option value=\"2\" >\r\n                        Member\r\n                      </mat-option>\r\n                      <mat-option value=\"1\" >\r\n                        Project Leader\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </td>\r\n                    </tr>\r\n                  </table>\r\n                </td>\r\n                \r\n                <td>\r\n                  <button mat-raised-button (click)=\"insertproponent()\" class=\"buttonblue\" >\r\n                    <mat-icon style=\"font-size:20px\">add</mat-icon> Add Proponent</button>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n\r\n\r\n          <div  *ngIf=\"proponents!=undefined\" >\r\n            <div  *ngIf=\"proponents[0].id!=null\" >\r\n              <table style=\"width: 100%\" *ngFor=\"let list of proponents\">\r\n                <tr>\r\n                  <td style=\"width: 80%\">\r\n                    <table style=\"width: 100%\">\r\n                    <tr>\r\n                      <td style=\"width: 29%\">\r\n                        {{list.fname}}\r\n                      </td>\r\n                      <td style=\"width: 18%\">\r\n                          {{list.mname}}\r\n                      </td>\r\n                      <td style=\"width: 18%\">\r\n                          {{list.lname}}&nbsp;\r\n                      </td>\r\n                      <td style=\"width: 15%\">\r\n                          {{list.sname}}\r\n                      </td>\r\n                      <td>\r\n                        {{list.type}}\r\n                      </td>\r\n                    </tr>\r\n                  </table>\r\n                  </td>\r\n                <td style=\"width: 20%\">\r\n                    <button  mat-button (click)=\"swalConfirm(list.id,'Remove this Proponent?',5,null,null,null)\"  class=\"buttonred\" >\r\n                        <mat-icon style=\"font-size:20px\">remove</mat-icon> Remove</button>\r\n                </td>\r\n                </tr>\r\n              </table>\r\n          </div>\r\n          </div>\r\n          <hr>\r\n\r\n            <table style=\"width: 100%\">\r\n              <tr>\r\n                <td style=\"width: 60%\"> \r\n                  <p style=\"margin: 0\"><b>Cooperating Agencies</b> <small>(agencies participating in the R & D work.)</small></p>\r\n                  <mat-form-field  class=\"npinput2\" style=\"width: 100%\">\r\n                    <mat-label>- Select Agency -</mat-label>\r\n                    <mat-select  [(ngModel)]=\"coopagency\">\r\n                      <mat-option value=\"{{c.id}}\"  *ngFor=\"let c of cagencylist\">\r\n                        {{c.name}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </td>\r\n                <td>\r\n                  <button mat-raised-button (click)=\"insertcagency()\" class=\"buttonblue\" >\r\n                    <mat-icon style=\"font-size:20px\">add</mat-icon> Add Cooperating Agency</button>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n\r\n\r\n          <div  *ngIf=\"calists!=undefined\" >\r\n            <div  *ngIf=\"calists[0].id!=null\" >\r\n              <table style=\"width: 100%\" *ngFor=\"let list of calists\">\r\n                <tr>\r\n                  <td style=\"width: 60%\">{{list.name}}</td>\r\n                <td style=\"width: 40%\">\r\n                    <button  mat-button (click)=\"swalConfirm(list.id,'Remove this Cooperating Agency?',3,null,null,null)\"  class=\"buttonred\" >\r\n                        <mat-icon style=\"font-size:20px\">remove</mat-icon> Remove</button>\r\n                </td>\r\n                </tr>\r\n              </table>\r\n          </div>\r\n          </div>\r\n          <hr>\r\n            <div style=\"height: 20px;\"></div>\r\n            <p style=\"margin: 0\"><b>Research & Development Station</b> <small>(station or unit where R & D will be actually conducted.)</small></p>\r\n            <mat-form-field  class=\"npinput\" style=\"width: 100%\"> \r\n              <textarea matInput placeholder=\"\" required style=\"height: 80px\"  [(ngModel)]=\"rndstation\" ></textarea>\r\n            </mat-form-field>\r\n\r\n            <div style=\"height: 10px;\"></div>\r\n             <p style=\"margin: 0\"><b>Classification </b><small>(indicates whether the program/project is research or development.)</small></p>\r\n\r\n            <div style=\"overflow: hidden;\">\r\n            <mat-card style=\"background-color: #f4f4f4;width:calc(50% - 43px);float: left;\">\r\n              <h4 style=\"margin: 0px\">Research:</h4>\r\n              <mat-checkbox (change)=\"changeclassification(1)\" [checked]=\"basic1\">\r\n                <p style=\"margin: 0px;white-space:normal;\" >Basic <button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"basic()\">?</button></p>\r\n              </mat-checkbox><br>\r\n              <mat-checkbox (change)=\"changeclassification(2)\" [checked]=\"applied1\">\r\n                <p style=\"margin: 0px;white-space:normal;\">Applied <button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"applied()\">?</button></p>\r\n              </mat-checkbox>\r\n            </mat-card>\r\n            <mat-card style=\"background-color: #f4f4f4;width: calc(50% - 95px);float: right;\">\r\n              <h4 style=\"margin: 0px\">Development: <button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"development()\">?</button></h4>\r\n              <mat-checkbox (change)=\"changeclassification(3)\" [checked]=\"pilottesting\">\r\n                <p style=\"margin: 0px;white-space:normal;\">Pilot Testing <button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"ptesting()\">?</button></p>\r\n              </mat-checkbox><br>\r\n              <mat-checkbox (change)=\"changeclassification(4)\" [checked]=\"techpromotion\">\r\n                <p style=\"margin: 0px;white-space:normal;\">Tech. Promotion/Commercialization <button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"promotion()\">?</button></p>\r\n              </mat-checkbox>\r\n            </mat-card>\r\n          </div>\r\n\r\n          <div style=\"height: 10px;\"></div>\r\n             <p style=\"margin: 0\"><b>Mode of Implementation </b><button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"implementation()\">?</button>: <b>{{modeofimplementation}}</b></p>\r\n\r\n\r\n          <div style=\"height: 10px;\"></div>\r\n             <p style=\"margin: 0\"><b>Priority Agenda </b><button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"pagenda()\">?</button></p>\r\n\r\n            <div style=\"overflow: hidden;\">\r\n            <mat-card style=\"background-color: #f4f4f4;width:calc(100% - 70px);float: left;\">\r\n              <mat-checkbox (change)=\"checkbox($event,3,1)\">\r\n                <p style=\"margin: 0px;white-space:normal;\">Biotechnology</p>\r\n              </mat-checkbox><br>\r\n              <mat-checkbox (change)=\"checkbox($event,3,2)\">\r\n                <p style=\"margin: 0px;white-space:normal;\">ICT</p>\r\n              </mat-checkbox><br>\r\n              <mat-checkbox (change)=\"checkbox($event,3,3)\">\r\n                <p style=\"margin: 0px;white-space:normal;\">Alternative Energy</p>\r\n              </mat-checkbox><br>\r\n              <mat-checkbox (change)=\"checkbox($event,3,4)\">\r\n                <p style=\"margin: 0px;white-space:normal;\">Environment</p>\r\n              </mat-checkbox><br>\r\n              <mat-checkbox (change)=\"checkbox($event,3,5)\">\r\n                <p style=\"margin: 0px;white-space:normal;\">Health Products</p>\r\n              </mat-checkbox><br>\r\n              <mat-checkbox (change)=\"checkbox($event,3,6)\">\r\n                <p style=\"margin: 0px;white-space:normal;\">Basic Research</p>\r\n              </mat-checkbox><br>\r\n              <mat-checkbox (change)=\"checkbox($event,3,7)\">\r\n                <p style=\"margin: 0px;white-space:normal;\">others</p>\r\n              </mat-checkbox><br>\r\n\r\n              </mat-card>\r\n          </div>\r\n\r\n          <div style=\"height: 10px;\"></div>\r\n             <p style=\"margin: 0\"><b>Sector Commodity </b><button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"sectorc()\">?</button></p>\r\n\r\n            <div style=\"overflow: hidden;\">\r\n            <mat-card style=\"background-color: #f4f4f4;width:calc(100% - 70px);float: left;\">\r\n              <mat-checkbox (change)=\"checkbox($event,4,1)\">\r\n                <p style=\"margin: 0px;white-space:normal;\">Crops</p>\r\n              </mat-checkbox><br>\r\n              <mat-checkbox (change)=\"checkbox($event,4,2)\">\r\n                <p style=\"margin: 0px;white-space:normal;\">Livestock</p>\r\n              </mat-checkbox><br>\r\n              <mat-checkbox (change)=\"checkbox($event,4,3)\">\r\n                <p style=\"margin: 0px;white-space:normal;\">Forestry</p>\r\n              </mat-checkbox><br>\r\n              <mat-checkbox (change)=\"checkbox($event,4,4)\">\r\n                <p style=\"margin: 0px;white-space:normal;\">Agricultural Resources</p>\r\n              </mat-checkbox><br>\r\n              <mat-checkbox (change)=\"checkbox($event,4,5)\">\r\n                <p style=\"margin: 0px;white-space:normal;\">Socio Economics</p>\r\n              </mat-checkbox><br>\r\n              <mat-checkbox (change)=\"checkbox($event,4,6)\">\r\n                <p style=\"margin: 0px;white-space:normal;\">Fisheries or Aquatic resources</p>\r\n              </mat-checkbox><br>\r\n              <mat-checkbox (change)=\"checkbox($event,4,7)\">\r\n                <p style=\"margin: 0px;white-space:normal;\">Biotechnical</p>\r\n              </mat-checkbox><br>\r\n              <mat-checkbox (change)=\"checkbox($event,4,8)\">\r\n                <p style=\"margin: 0px;white-space:normal;\">Pharmaceutical</p>\r\n              </mat-checkbox><br>\r\n              <mat-checkbox (change)=\"checkbox($event,4,9)\">\r\n                <p style=\"margin: 0px;white-space:normal;\">Health Services</p>\r\n              </mat-checkbox><br>\r\n              <mat-checkbox (change)=\"checkbox($event,4,10)\">\r\n                <p style=\"margin: 0px;white-space:normal;\">Information Technology</p>\r\n              </mat-checkbox><br>\r\n              <mat-checkbox (change)=\"checkbox($event,4,11)\">\r\n                <p style=\"margin: 0px;white-space:normal;\">Material Science</p>\r\n              </mat-checkbox><br>\r\n              <mat-checkbox (change)=\"checkbox($event,4,12)\">\r\n                <p style=\"margin: 0px;white-space:normal;\">Photonics or Space Technology</p>\r\n              </mat-checkbox><br>\r\n              <mat-checkbox (change)=\"checkbox($event,4,13)\">\r\n                <p style=\"margin: 0px;white-space:normal;\">Industry</p>\r\n              </mat-checkbox><br>\r\n              <mat-checkbox (change)=\"checkbox($event,4,14)\">\r\n                <p style=\"margin: 0px;white-space:normal;\">Energy</p>\r\n              </mat-checkbox><br>\r\n              <mat-checkbox (change)=\"checkbox($event,4,15)\">\r\n                <p style=\"margin: 0px;white-space:normal;\">Utilities or Infrastructure</p>\r\n              </mat-checkbox><br>\r\n\r\n              </mat-card>\r\n          </div>\r\n\r\n          <div style=\"height: 10px;\"></div>\r\n             <p style=\"margin: 0\"><b>Discipline </b><button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"disciplineinfo()\">?</button></p>\r\n\r\n            <div style=\"overflow: hidden;\">\r\n            <mat-card style=\"background-color: #f4f4f4;width:calc(100% - 70px);float: left;\">\r\n              <mat-checkbox (change)=\"checkbox($event,5,1)\">\r\n                <p style=\"margin: 0px;white-space:normal;\">Plant Breeding</p>\r\n              </mat-checkbox><br>\r\n              <mat-checkbox (change)=\"checkbox($event,5,2)\">\r\n                <p style=\"margin: 0px;white-space:normal;\">Taxonomy</p>\r\n              </mat-checkbox><br>\r\n              <mat-checkbox (change)=\"checkbox($event,5,3)\">\r\n                <p style=\"margin: 0px;white-space:normal;\">Communicable and Degenerative Diseases</p>\r\n              </mat-checkbox><br>\r\n              <mat-checkbox (change)=\"checkbox($event,5,4)\">\r\n                <p style=\"margin: 0px;white-space:normal;\">Drug Formulation</p>\r\n              </mat-checkbox><br>\r\n              <mat-checkbox (change)=\"checkbox($event,5,5)\">\r\n                <p style=\"margin: 0px;white-space:normal;\">Maternal and Child Health</p>\r\n              </mat-checkbox><br>\r\n              <mat-checkbox (change)=\"checkbox($event,5,6)\">\r\n                <p style=\"margin: 0px;white-space:normal;\">Process</p>\r\n              </mat-checkbox><br>\r\n              <mat-checkbox (change)=\"checkbox($event,5,7)\">\r\n                <p style=\"margin: 0px;white-space:normal;\">Food and Feed</p>\r\n              </mat-checkbox><br>\r\n              <mat-checkbox (change)=\"checkbox($event,5,8)\">\r\n                <p style=\"margin: 0px;white-space:normal;\">Metals</p>\r\n              </mat-checkbox><br>\r\n              <mat-checkbox (change)=\"checkbox($event,5,9)\">\r\n                <p style=\"margin: 0px;white-space:normal;\">Engineering</p>\r\n              </mat-checkbox><br>\r\n              </mat-card>\r\n          </div>\r\n\r\n          <div style=\"height: 10px;\"></div>\r\n                         \r\n          <div style=\"height: 10px;\"></div>\r\n             <p style=\"margin: 0\"><b>Significance </b><small><button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"significanceinfo()\">?</button></small></p>\r\n            <mat-form-field  class=\"npinput\" style=\"width: 100%\"> \r\n\r\n              <textarea matInput placeholder=\"\" required style=\"height: 80px\"  [(ngModel)]=\"significance\" ></textarea>\r\n            </mat-form-field>\r\n            \r\n          <div style=\"height: 10px;\"></div>\r\n             <p style=\"margin: 0\"><b>Objectives </b><small>(Statement of the specific purpose to address the problem areas of the project.)</small></p>\r\n            <mat-form-field  class=\"npinput\" style=\"width: 100%\"> \r\n              <textarea matInput placeholder=\"\" required style=\"height: 80px\"  [(ngModel)]=\"objectives\" ></textarea>\r\n            </mat-form-field>\r\n            \r\n          <div style=\"height: 10px;\"></div>\r\n             <p style=\"margin: 0\"><b>Methodology </b><small>(Brief description of how projects will be implemented)</small></p>\r\n            <mat-form-field  class=\"npinput\" style=\"width: 100%\"> \r\n              <textarea matInput placeholder=\"\" required style=\"height: 80px\"  [(ngModel)]=\"methodology\" ></textarea>\r\n            </mat-form-field>\r\n\r\n            \r\n          <div style=\"height: 10px;\"></div>\r\n            <p><b>Major Activities</b> <button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"majorainfo()\">?</button> <small>(Excel File.)</small></p>\r\n            <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n              <div class=\"form-group\">\r\n                <input type=\"file\" id=\"avatar\" (change)=\"onFileChange($event)\" #fileInput class=\"inputfile\" />\r\n                <label for=\"avatar\">{{majoralabel}}</label>\r\n                <button mat-button type=\"button\" class=\"btn btn-sm btn-default\" (click)=\"clearFile()\">clear file</button>\r\n              </div>\r\n            </form>\r\n\r\n            \r\n          <div style=\"height: 20px;\"></div>\r\n             <p style=\"margin: 0\"><b>Expected Output </b><button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"expectedoinfo()\">?</button></p>\r\n            <mat-form-field  class=\"npinput\" style=\"width: 100%\"> \r\n              <textarea matInput placeholder=\"\" required style=\"height: 80px\"  [(ngModel)]=\"expectedo\" ></textarea>\r\n            </mat-form-field>\r\n            \r\n          <div style=\"height: 10px;\"></div>\r\n             <p style=\"margin: 0\"><b>Target Beneficiaries </b><button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"targetbinfo()\">?</button></p>\r\n            <mat-form-field  class=\"npinput\" style=\"width: 100%\"> \r\n              <textarea matInput placeholder=\"\" required style=\"height: 80px\"  [(ngModel)]=\"targetb\" ></textarea>\r\n            </mat-form-field>\r\n\r\n          <div style=\"height: 10px;\"></div>\r\n             <p style=\"margin: 0\"><b>Implementing Schedule </b><button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"schedinfo()\">?</button></p>\r\n\r\n          <div style=\"height: 10px;\"></div>\r\n            Duration: <b>{{projectduration}} Months</b>\r\n\r\n            <table style=\"width: 100%\">\r\n              <tr>\r\n                <td style=\"width: 200px\">\r\n                  Planned Start date:\r\n                </td>\r\n                <td style=\"width: 150px\">\r\n                  <mat-form-field  class=\"npinput2\"  style=\"width: 100%\">\r\n                    <mat-label>Month</mat-label>\r\n                    <mat-select [(ngModel)]=\"month1\">\r\n                      <mat-option value=\"01\">\r\n                        January\r\n                      </mat-option>\r\n                       <mat-option value=\"02\">\r\n                        February\r\n                      </mat-option>\r\n                       <mat-option value=\"03\">\r\n                        March\r\n                      </mat-option>\r\n                       <mat-option value=\"04\">\r\n                        April\r\n                      </mat-option>\r\n                       <mat-option value=\"05\">\r\n                        May\r\n                      </mat-option>\r\n                       <mat-option value=\"06\">\r\n                        June\r\n                      </mat-option>\r\n                       <mat-option value=\"07\">\r\n                        July\r\n                      </mat-option>\r\n                       <mat-option value=\"08\">\r\n                        August\r\n                      </mat-option>\r\n                       <mat-option value=\"09\">\r\n                        September\r\n                      </mat-option>\r\n                       <mat-option value=\"10\">\r\n                        October\r\n                      </mat-option>\r\n                       <mat-option value=\"11\">\r\n                        November\r\n                      </mat-option>\r\n                       <mat-option value=\"12\">\r\n                        December\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </td>\r\n                <td style=\"width: 150px\">\r\n                  <mat-form-field  class=\"npinput2\"  style=\"width: 100%\">\r\n                    <mat-label>Year</mat-label>\r\n                    <mat-select [(ngModel)]=\"year1\">\r\n                      <mat-option value=\"{{f}}\"  *ngFor=\"let f of yeararr\">\r\n                        {{f}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field></td>\r\n                  <td></td>\r\n              </tr>\r\n            </table>\r\n\r\n             <table style=\"width: 100%\">\r\n              <tr>\r\n                <td style=\"width: 200px\">\r\n                  Planned Completion date:\r\n                </td>\r\n                <td style=\"width: 150px\">\r\n                  <mat-form-field  class=\"npinput2\"  style=\"width: 100%\">\r\n                    <mat-label>Month</mat-label>\r\n                    <mat-select [(ngModel)]=\"month2\">\r\n                      <mat-option value=\"01\">\r\n                        January\r\n                      </mat-option>\r\n                       <mat-option value=\"02\">\r\n                        February\r\n                      </mat-option>\r\n                       <mat-option value=\"03\">\r\n                        March\r\n                      </mat-option>\r\n                       <mat-option value=\"04\">\r\n                        April\r\n                      </mat-option>\r\n                       <mat-option value=\"05\">\r\n                        May\r\n                      </mat-option>\r\n                       <mat-option value=\"06\">\r\n                        June\r\n                      </mat-option>\r\n                       <mat-option value=\"07\">\r\n                        July\r\n                      </mat-option>\r\n                       <mat-option value=\"08\">\r\n                        August\r\n                      </mat-option>\r\n                       <mat-option value=\"09\">\r\n                        September\r\n                      </mat-option>\r\n                       <mat-option value=\"10\">\r\n                        October\r\n                      </mat-option>\r\n                       <mat-option value=\"11\">\r\n                        November\r\n                      </mat-option>\r\n                       <mat-option value=\"12\">\r\n                        December\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </td>\r\n                <td style=\"width: 150px\">\r\n                  <mat-form-field  class=\"npinput2\"  style=\"width: 100%\">\r\n                    <mat-label>Year</mat-label>\r\n                    <mat-select [(ngModel)]=\"year2\">\r\n                      <mat-option value=\"{{f}}\"  *ngFor=\"let f of yeararr\">\r\n                        {{f}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field></td>\r\n                  <td></td>\r\n              </tr>\r\n            </table>\r\n\r\n            <p><b>Estimated Budget by Source </b><button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"budgetprojectinfo()\">?</button></p>\r\n\r\n          <div>\r\n            <div style=\"height: 5px;\"></div>\r\n            <table  style=\"width: 100%\"><tr>\r\n                <td>\r\n                  Source of Fund\r\n                </td>\r\n                <td> \r\n                  PS <button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"infops()\">?</button>\r\n                </td>\r\n                <td> \r\n                  MOE <button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"infomoe()\">?</button>\r\n                </td>\r\n                <td>\r\n                  CO <button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"infoco()\">?</button>\r\n                </td>\r\n                <td>\r\n                 Total\r\n                </td>\r\n                <td>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n              <tr>\r\n                <td style=\"width: 16%\">\r\n                    \r\n                  <mat-form-field style=\"width: 100%\">\r\n                    <input matInput placeholder=\"\" type=\"text\" [(ngModel)]=\"fangency1\"  readonly=\"readonly\">\r\n                  </mat-form-field>\r\n                </td>\r\n                <td  style=\"width: 16%\">\r\n                  <mat-form-field style=\"width: 100%\">\r\n                    <input matInput placeholder=\"\" type=\"number\" min=\"0\" [(ngModel)]=\"ps\" (change)=\"btotal()\">\r\n                  </mat-form-field>\r\n                </td>\r\n                <td  style=\"width: 16%\">\r\n                  <mat-form-field style=\"width: 100%;\">\r\n                    <input matInput placeholder=\"\"  type=\"number\" min=\"0\" [(ngModel)]=\"moe\" (change)=\"btotal()\">\r\n                  </mat-form-field>\r\n                </td>\r\n                <td style=\"width: 16%\">\r\n                  <mat-form-field style=\"width: 100%\">\r\n                    <input matInput placeholder=\"\" type=\"number\" min=\"0\" [(ngModel)]=\"co\" (change)=\"btotal()\">\r\n                  </mat-form-field>\r\n                </td>\r\n                <td style=\"width: 16%\">\r\n                  <b>{{budgettotal}}</b>\r\n                </td>\r\n                <td style=\"width: 16%\">\r\n                <button mat-button (click)=\"addbudget2()\" class=\"buttonblue\">\r\n                    <mat-icon style=\"font-size:20px\">add</mat-icon> Add Budget</button>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n\r\n\r\n          <div  *ngIf=\"budgetlist2!=undefined\" >\r\n            <div  *ngIf=\"budgetlist2[0].id!=null\" >\r\n            <table  style=\"width: 100%\">\r\n              <tr  *ngFor=\"let b of budgetlist2\">\r\n                <td style=\"width: 16%\">\r\n                    <b>{{b.sof}}</b>\r\n                </td>\r\n                <td  style=\"width: 16%\">\r\n                  <b>{{b.ps}}</b>\r\n                </td>\r\n                \r\n                <td  style=\"width: 16%\">\r\n                  <b>{{b.moe}}</b>\r\n                </td>\r\n                \r\n                <td  style=\"width: 16%\">\r\n                  <b>{{b.co}}</b>\r\n                </td>\r\n                \r\n                <td  style=\"width: 16%\">\r\n                  <b>{{totalb2(b.ps,b.co,b.moe)}}</b>\r\n                </td>\r\n                <td style=\"width: 16%\">\r\n                <button mat-button (click)=\"swalConfirm(b.id,'Remove Budget?',4,b.ps,b.moe,b.co)\" class=\"buttonred\">\r\n                    <mat-icon style=\"font-size:20px\">remove</mat-icon> Remove</button>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n            </div>\r\n          </div>\r\n\r\n            <div style=\"height: 10px;\"></div>\r\n            <p style=\"margin:0\">Grand Total: <b>P{{balltotal}}</b> &nbsp; &nbsp;</p>\r\n            <hr>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div>\r\n          <button mat-button matStepperPrevious class=\"buttonblue\" >Back</button>\r\n            <button mat-button class=\"buttonblue\"  (click)=\"proposaldone(2)\"  style=\"float: right;\">Submit Proposal</button>\r\n            <button mat-button style=\"float: right;\" (click)=\"proposaldone(1)\">Save as Draft</button>\r\n          \r\n        </div>\r\n      </mat-step>\r\n    </mat-horizontal-stepper>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/proposal/new-proposal/new-proposal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#new-proposal .npinput {\n  width: 100%; }\n\n#new-proposal .npinput2 {\n  width: 45%; }\n\n#new-proposal div.mat-checkbox-inner-container {\n  margin-right: 10px !important; }\n\n#new-proposal .inputfile {\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1; }\n\n#new-proposal .inputfile + label {\n  font-size: 15px;\n  font-weight: 700;\n  color: white;\n  background-color: #262626;\n  display: inline-block;\n  padding: 10px; }\n\n#new-proposal .inputfile + label {\n  cursor: pointer;\n  /* \"hand\" cursor */ }\n\n#new-proposal .inputfile:focus + label,\n#new-proposal .inputfile + label:hover {\n  background-color: #294a70; }\n\n.mat-form-field-infix {\n  width: 100px !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/proposal/new-proposal/new-proposal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewProposalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_service__ = __webpack_require__("../../../../../src/app/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__proposal_new_proposal_update_project_update_project_component__ = __webpack_require__("../../../../../src/app/proposal/new-proposal/update-project/update-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var swal = __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default.a;
var NewProposalComponent = /** @class */ (function () {
    function NewProposalComponent(dialog, fb, global, http, route, router) {
        var _this = this;
        this.dialog = dialog;
        this.fb = fb;
        this.global = global;
        this.http = http;
        this.route = route;
        this.router = router;
        this.loading = false;
        this.yeararr = [];
        this.proj = false;
        this.prog = false;
        this.total = 0;
        this.proposalid = 1;
        this.programid = 24;
        this.proposalcounter = false;
        this.protitle = '';
        this.produration = '';
        this.ps = null;
        this.moe = null;
        this.co = null;
        this.budgettotal = 0;
        this.balltotal = 0;
        this.esummary = '';
        this.coopagency = '';
        this.projectclassification = [];
        this.projectmoi = [];
        this.projectpa = [];
        this.projectsector = [];
        this.projectdiscipline = [];
        this.majoralabel = 'Choose a file';
        this.modeofimplementation = '';
        this.labeltitle = "Create Capsule Proposal";
        this.techpromotion = false;
        this.basic1 = false;
        this.applied1 = false;
        this.pilottesting = false;
        this.clss = 0;
        this.proponenttype = "Project Leader";
        this.fname = '';
        this.mname = '';
        this.lname = '';
        this.suffix = '';
        this.proponenttypeinput = '2';
        this.http.get(this.global.api + 'api.php?action=FundingAgency_List', this.global.option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.fundingagency = res;
        });
        this.modeofimplementation = "Single Agency";
        this.http.get(this.global.api + 'api.php?action=company_List', this.global.option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.cagencylist = res;
        });
        console.log(this.projectclassification.length);
        if (global.user.ext == null) {
            global.user.ext = '';
        }
        if (global.user.mname == null) {
            global.user.mname = '';
        }
        if (global.user.telno == null) {
            global.user.telno = '';
        }
        this.cleader = global.user.fname + " " + global.user.mname + " " + global.user.surname + " " + global.user.ext;
        this.gender = global.user.sex;
        this.email = global.requestemail();
        this.agencies = global.user.agency;
        this.address = global.user.address;
        this.telephone = global.user.telno;
        var dt = new Date();
        var year = dt.getFullYear() - 10;
        for (var i = 0; i < 20; i++) {
            this.yeararr[i] = year;
            year++;
        }
        this.createForm();
    }
    NewProposalComponent.prototype.changeclassification = function (x) {
        this.techpromotion = false;
        this.basic1 = false;
        this.applied1 = false;
        this.pilottesting = false;
        if (x == 1) {
            this.basic1 = true;
        }
        if (x == 2) {
            this.applied1 = true;
        }
        if (x == 3) {
            this.pilottesting = true;
        }
        if (x == 4) {
            this.techpromotion = true;
        }
        this.clss = x;
    };
    NewProposalComponent.prototype.see = function (assign) {
        this.fangency1 = assign;
    };
    NewProposalComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["j" /* Validators */].required],
            avatar: null
        });
    };
    NewProposalComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file_1 = event.target.files[0];
            reader.readAsDataURL(file_1);
            console.log(reader);
            reader.onload = function () {
                _this.form.get('avatar').setValue({
                    filename: file_1.name,
                    filetype: file_1.type,
                    value: reader.result.toString().split(',')[1]
                });
                if (_this.form.value.avatar != null) {
                    _this.majoralabel = file_1.name;
                }
                else {
                    _this.majoralabel = "Choose a file";
                }
            };
        }
    };
    NewProposalComponent.prototype.clearFile = function () {
        this.majoralabel = "Choose a file...";
        this.form.get('avatar').setValue(null);
        this.fileInput.nativeElement.value = '';
    };
    NewProposalComponent.prototype.checkbox = function (event, type, text) {
        if (event.checked == true) {
            if (type == 1) {
                this.projectclassification = [];
                this.projectclassification.push(text);
            }
            else if (type == 2) {
                this.projectmoi.push(text);
            }
            else if (type == 3) {
                this.projectpa.push(text);
            }
            else if (type == 4) {
                this.projectsector.push(text);
            }
            else if (type == 5) {
                this.projectdiscipline.push(text);
            }
        }
        else {
            if (type == 1) {
                for (var i = 0; i < this.projectclassification.length; i++) {
                    if (this.projectclassification[i] === text) {
                        this.projectclassification.splice(i, 1);
                    }
                }
            }
            else if (type == 2) {
                for (var i = 0; i < this.projectmoi.length; i++) {
                    if (this.projectmoi[i] === text) {
                        this.projectmoi.splice(i, 1);
                    }
                }
            }
            else if (type == 3) {
                for (var i = 0; i < this.projectpa.length; i++) {
                    if (this.projectpa[i] === text) {
                        this.projectpa.splice(i, 1);
                    }
                }
            }
            else if (type == 4) {
                for (var i = 0; i < this.projectsector.length; i++) {
                    if (this.projectsector[i] === text) {
                        this.projectsector.splice(i, 1);
                    }
                }
            }
            else if (type == 4) {
                for (var i = 0; i < this.projectdiscipline.length; i++) {
                    if (this.projectdiscipline[i] === text) {
                        this.projectdiscipline.splice(i, 1);
                    }
                }
            }
        }
    };
    NewProposalComponent.prototype.totalb = function (ps, co, moe) {
        return parseInt(ps) + parseInt(moe) + parseInt(co);
    };
    NewProposalComponent.prototype.totalb2 = function (ps, co, moe) {
        return parseInt(ps) + parseInt(moe) + parseInt(co);
    };
    NewProposalComponent.prototype.btotal = function () {
        this.budgettotal = this.ps + this.moe + this.co;
    };
    NewProposalComponent.prototype.ngOnInit = function () {
    };
    NewProposalComponent.prototype.majorainfo = function () {
        this.global.swalinfo("<p style='text-align:left;'><b>Major Activities</b> – Enumerate in chronological order the tasks to be undertaken. Use gantt chart.</p>");
    };
    NewProposalComponent.prototype.agency = function () {
        this.global.swalinfo("<p style='text-align:left;'><b>Cooperating Agencies</b> – agencies participating in the R & D work.<br><br><b>R & D Station</b> – station or unit where R & D will be actually conducted.<br><br><b>Classification</b> – indicates whether the program/project is research or development.</p>");
    };
    NewProposalComponent.prototype.infoduration = function () {
        this.global.swalinfo("<p><b>Duration</b> - Number of months the program will be implemented.</p>");
    };
    NewProposalComponent.prototype.infops = function () {
        this.global.swalinfo("<p><b>PS</b> - Requirement for wages, salaries, honoraria, additional hire and other personnel benefits.</p>");
    };
    NewProposalComponent.prototype.infomoe = function () {
        this.global.swalinfo("<p><b>MOE</b> - Requirement for supplies materials, travel expenses, communnication and othher services.</p>");
    };
    NewProposalComponent.prototype.infoco = function () {
        this.global.swalinfo("<p><b>CO</b> - Requirement for facilities and equipment needed by the program.</p>");
    };
    NewProposalComponent.prototype.leader = function () {
        this.global.swalinfo("<p style='text-align:left;'>The overall R & D coordinator (whether multi-agency of single-agency R & D) or the program/project leader. Program leader is the overall coordinator while serving also as the project leader.</p>");
    };
    NewProposalComponent.prototype.summary = function () {
        this.global.swalinfo("<b>Executive Summary</b> - Overview of the program including the significance, objectives, methodology, major activities and expected output of the program.");
    };
    NewProposalComponent.prototype.budget = function () {
        this.global.swalinfo("<b>Budget Summary</b> - Personal Services (PS), maintenance and other operating expenses (MOE), and capital outlay (CO) requirement of the whole program by source.");
    };
    NewProposalComponent.prototype.classification = function () {
        this.global.swalinfo("<b>Classification</b> - indicates whether the program/project is research or development.");
    };
    NewProposalComponent.prototype.implementation = function () {
        this.global.swalinfo("<b>Mode of Implementation</b> - indicate whether the R & D will be undertaken by one or more than one agency.");
    };
    NewProposalComponent.prototype.basic = function () {
        this.global.swalinfo("<b>Basic research </b> - is an experimental or theoretical work undertaken primarily to acquire new knowledge of the underlying foundations of phenomena and observable facts, without any particular or specific application or use in view.");
    };
    NewProposalComponent.prototype.applied = function () {
        this.global.swalinfo("<b>Applied research</b> - is an original investigation undertaken in order to acquire new knowledge directed primarily towards a specific aim or objective.");
    };
    NewProposalComponent.prototype.ptesting = function () {
        this.global.swalinfo("<b>Pilot Testing</b> - is an innovative work to confirm and demonstrate the feasibility of actually using a technology; gauging end user’s reaction to introduction of improved technologies and identifying potential problems related to wider dissemination, utilization and adoption so that these can be fed back to researchers.");
    };
    NewProposalComponent.prototype.promotion = function () {
        this.global.swalinfo("<b>Technology promotion/commercialization</b> - is an activity involving application of technologies on a commercial scale by an identified entrepreneur or user primarily to increase his income/profits and productivity; technologies utilized/produced on a pre-commercial scale including market testing jointly undertaken with a client.");
    };
    NewProposalComponent.prototype.development = function () {
        this.global.swalinfo("<b>Developmental research</b> - is a systematic work, drawing on existing knowledge gained from research and/or practical experience that is directed to producing new materials, products or devices, installing new processes, systems and services and improving substantially those already produced or installed.");
    };
    NewProposalComponent.prototype.pagenda = function () {
        this.global.swalinfo("<b>Priority Areas/STAND Classification</b> - Identify the classification of the R & D proposal in the S & T Agenda for National Development.");
    };
    NewProposalComponent.prototype.sectorc = function () {
        this.global.swalinfo("<b>Sector</b> - indicate whether crops, livestock, forestry, agricultural resources or socio-economics; fisheries or aquatic resources; biotechnical, pharmaceutical, or health services; biotechnology, information technology, material science, photonics or space technology; industry, energy, utilities or infrastructure.");
    };
    NewProposalComponent.prototype.disciplineinfo = function () {
        this.global.swalinfo("<b>Discipline</b> - The specific field to be studied (e.g. plant breeding, taxonomy).");
    };
    NewProposalComponent.prototype.significanceinfo = function () {
        this.global.swalinfo("<b>Significance</b> - State the research problem and significance of the project to the current needs of the country. The proposal should justify resource expenditure. A typical justification would include a brief introduction, a general statement concerning the historical basis for R & D, utilization of the expected output and the impact the information generated will have on science, the target users and the country.");
    };
    NewProposalComponent.prototype.expectedoinfo = function () {
        this.global.swalinfo("<b>Expected Output</b> - Indicate the specific products, processes or services which the project is expected to produce and how these can be used; quantify when possible");
    };
    NewProposalComponent.prototype.targetbinfo = function () {
        this.global.swalinfo("<b>Target Beneficiaries</b> - Who the clienteles are and what are the expected outcome/effects of the use of the project outputs).");
    };
    NewProposalComponent.prototype.schedinfo = function () {
        this.global.swalinfo("<b>Implementing Schedule</b> - The duration of the project in months including planned start date and expected.");
    };
    NewProposalComponent.prototype.budgetprojectinfo = function () {
        this.global.swalinfo("<b>Estimated Annual Budget</b> - The budget requirement for personal services (PS), maintenance and other operating expenses (MOOE), capital outlay(CO) for the first of implementation and the total budget requirement by source of fund.");
    };
    NewProposalComponent.prototype.add = function (stepper) {
        var x = '';
        if (this.cleader == undefined || this.cleader == "") {
            x = x + "*Coordinator/Leader is required\n";
        }
        if (this.gender == undefined || this.gender == "") {
            x = x + "*Gender is required\n";
        }
        if (this.email == undefined || this.email == "") {
            x = x + "*Email is required\n";
        }
        if (this.agencies == undefined || this.agencies == "") {
            x = x + "*Agency(ies) is required\n";
        }
        if (this.address == undefined || this.address == "") {
            x = x + "*Address is required\n";
        }
        if (this.telephone == undefined || this.telephone == "") {
            x = x + "*Telephone is required\n";
        }
        if (x == '') {
            stepper.next();
        }
        else
            alert(x);
    };
    NewProposalComponent.prototype.proposalinsert = function (stepper) {
        var _this = this;
        var x = '';
        if (this.title == undefined || this.title == "") {
            x = x + "*Title is required\n";
        }
        if (this.duration == undefined || this.duration == "") {
            x = x + "*Duration is required\n";
        }
        if (this.fagency == undefined || this.fagency == "") {
            x = x + "*Funding Agency is required\n";
        }
        if (this.proj == false && this.prog == false) {
            x = x + "*Must select a proposal type!\n";
        }
        if (x == '' && this.proposalcounter == false) {
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append("GeneralTitle", this.title);
            urlSearchParams.append('LeadAgency', this.agencies);
            urlSearchParams.append('Street', "go");
            urlSearchParams.append('Address_PSGC', "012801001");
            urlSearchParams.append('Telephone', this.telephone);
            urlSearchParams.append('Fax', this.fax);
            urlSearchParams.append('Email', this.email);
            urlSearchParams.append('FundingAgency_id', this.fagency);
            urlSearchParams.append('TotalDuration', this.duration);
            urlSearchParams.append('createdBy', this.global.userid.toString());
            var body = urlSearchParams.toString();
            var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            header.append("Accept", "application/json");
            header.append("Content-Type", "application/x-www-form-urlencoded");
            var option_1 = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
            this.proposalcounter = true;
            this.global.requestToken();
            this.http.post(this.global.api + 'api.php?action=proposalinsert', body, option_1)
                .map(function (response) { return response.json(); })
                .subscribe(function (res) {
                _this.global.swalClose();
                _this.proposalid = res.id;
                _this.http.get(_this.global.api + 'api.php?action=programinsert&proposalid=' + _this.proposalid, option_1)
                    .map(function (response) { return response.json(); })
                    .subscribe(function (res) {
                    _this.programid = res.id;
                    if (_this.proj != true) {
                        _this.getprojectlist(_this.programid);
                    }
                    else {
                        _this.projecttitle = _this.title;
                        _this.projectduration = _this.duration;
                        var urlSearchParams_1 = new URLSearchParams();
                        urlSearchParams_1.append("programid", _this.programid.toString());
                        urlSearchParams_1.append('title', _this.projecttitle);
                        urlSearchParams_1.append('duration', _this.projectduration);
                        var body_1 = urlSearchParams_1.toString();
                        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
                        header.append("Accept", "application/json");
                        header.append("Content-Type", "application/x-www-form-urlencoded");
                        var option_2 = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
                        _this.global.swalLoading('Adding project title');
                        _this.http.post(_this.global.api + 'api.php?action=projectadd', body_1, option_2)
                            .map(function (response) { return response.json(); })
                            .subscribe(function (res) {
                            _this.global.swalClose();
                            _this.getprojectlist(_this.programid);
                        }, function (error) {
                            console.log(Error);
                            _this.global.swalAlertError();
                        });
                    }
                });
            }, function (error) {
                console.log(Error);
                _this.global.swalAlertError();
            });
        }
        if (x != '') {
            alert(x);
        }
        else
            stepper.next();
    };
    NewProposalComponent.prototype.getprojectlist = function (programid) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(this.global.api + 'api.php?action=getprojecttitles&programid=' + programid, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.projectlists = res;
            console.log(res);
            _this.projectid = res[0].id;
        });
    };
    NewProposalComponent.prototype.insertcagency = function () {
        var _this = this;
        var x = '';
        if (this.coopagency == undefined || this.coopagency == "") {
            x = x + "*Cooperating Agency is required\n";
        }
        if (x == '') {
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append("pid", this.projectid.toString());
            urlSearchParams.append('cid', this.coopagency.toString());
            var body = urlSearchParams.toString();
            var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            header.append("Accept", "application/json");
            header.append("Content-Type", "application/x-www-form-urlencoded");
            var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
            this.proposalcounter = true;
            this.global.swalLoading('Adding project title');
            this.http.post(this.global.api + 'api.php?action=projectaddcoopagency', body, option)
                .map(function (response) { return response.json(); })
                .subscribe(function (res) {
                _this.global.swalClose();
                _this.coopagency = null;
                _this.getcooperating(_this.projectid);
            }, function (error) {
                console.log(Error);
                _this.global.swalAlertError();
            });
        }
        else
            alert(x);
    };
    NewProposalComponent.prototype.getproponent = function (projectid) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(this.global.api + 'api.php?action=spProposal_ProjectProponent_List&projectid=' + projectid, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.proponents = res;
            console.log(res);
            if (res[0].id != null) {
                _this.proponenttype = 'Member';
            }
            else
                _this.proponenttype = 'Project Leader';
        });
    };
    NewProposalComponent.prototype.insertproponent = function () {
        var _this = this;
        var x = '';
        if (this.fname == undefined || this.fname == "") {
            x = x + "*First name is required\n";
        }
        if (this.lname == undefined || this.lname == "") {
            x = x + "*Last name is required\n";
        }
        if (x == '') {
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append("pid", this.projectid.toString());
            urlSearchParams.append("lname", this.lname.toString());
            urlSearchParams.append("fname", this.fname.toString());
            urlSearchParams.append("mname", this.mname.toString());
            urlSearchParams.append("sname", this.suffix.toString());
            urlSearchParams.append("percent", "0");
            urlSearchParams.append('type', this.proponenttypeinput.toString());
            var body = urlSearchParams.toString();
            var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            header.append("Accept", "application/json");
            header.append("Content-Type", "application/x-www-form-urlencoded");
            var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
            this.proposalcounter = true;
            this.global.swalLoading('Adding project Proponent');
            this.http.post(this.global.api + 'api.php?action=spProposal_ProjectProponent_Insert', body, option)
                .map(function (response) { return response.json(); })
                .subscribe(function (res) {
                _this.global.swalClose();
                _this.coopagency = null;
                _this.fname = '';
                _this.lname = '';
                _this.suffix = '';
                _this.mname = '';
                _this.getproponent(_this.projectid);
            }, function (error) {
                console.log(Error);
                _this.global.swalAlertError();
            });
        }
        else
            alert(x);
    };
    NewProposalComponent.prototype.removeproponent = function (id) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(this.global.api + 'api.php?action=spProposal_ProjectProponent_Delete&id=' + id, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.getproponent(_this.projectid);
        }, function (error) {
            _this.global.swalAlertError();
        });
    };
    NewProposalComponent.prototype.getcooperating = function (projectid) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(this.global.api + 'api.php?action=getcoopagency&projectid=' + projectid, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.calists = res;
            if (res[0].id != null) {
                _this.modeofimplementation = "Multi Agency";
            }
            else
                _this.modeofimplementation = "Single Agency";
        });
    };
    NewProposalComponent.prototype.getbudget = function (programid) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(this.global.api + 'api.php?action=getbudget&programid=' + programid, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.budgetlist = res;
            console.log(res);
        });
    };
    NewProposalComponent.prototype.getbudget2 = function (projectid) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(this.global.api + 'api.php?action=getbudget2&projectid=' + projectid, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.budgetlist2 = res;
        });
    };
    NewProposalComponent.prototype.addproject = function () {
        var _this = this;
        if (this.protitle == '' || this.produration == '') {
            alert("Project title and Duration is required!");
        }
        else {
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append("programid", this.programid.toString());
            urlSearchParams.append('title', this.protitle);
            urlSearchParams.append('duration', this.produration);
            var body = urlSearchParams.toString();
            var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            header.append("Accept", "application/json");
            header.append("Content-Type", "application/x-www-form-urlencoded");
            var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
            this.proposalcounter = true;
            this.global.swalLoading('Adding project title');
            this.http.post(this.global.api + 'api.php?action=projectadd', body, option)
                .map(function (response) { return response.json(); })
                .subscribe(function (res) {
                _this.global.swalClose();
                _this.protitle = '';
                _this.produration = '';
                _this.getprojectlist(_this.programid);
            }, function (error) {
                console.log(Error);
                _this.global.swalAlertError();
            });
        }
    };
    NewProposalComponent.prototype.removeprojecttitle = function (projectid) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(this.global.api + 'api.php?action=removeprojecttitle&projectid=' + projectid, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.getprojectlist(_this.programid);
        }, function (error) {
            _this.global.swalAlertError();
        });
    };
    NewProposalComponent.prototype.removecagency = function (id) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(this.global.api + 'api.php?action=projectdeletecoopagency&id=' + id, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.getcooperating(_this.projectid);
        }, function (error) {
            _this.global.swalAlertError();
        });
    };
    NewProposalComponent.prototype.removebudget = function (id, ps, moe, co) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(this.global.api + 'api.php?action=removebudget&bid=' + id, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.balltotal = _this.balltotal - (parseInt(ps) + parseInt(moe) + parseInt(co));
            _this.getbudget(_this.programid);
        }, function (error) {
            _this.global.swalAlertError();
        });
    };
    NewProposalComponent.prototype.removebudget2 = function (id, ps, moe, co) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(this.global.api + 'api.php?action=removebudget2&bid=' + id, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.balltotal = _this.balltotal - (parseInt(ps) + parseInt(moe) + parseInt(co));
            _this.getbudget2(_this.projectid);
        }, function (error) {
            _this.global.swalAlertError();
        });
    };
    NewProposalComponent.prototype.proposaltype = function (x) {
        if (x == 0) {
            if (this.prog == false) {
                this.prog = true;
                this.proj = false;
            }
            else
                this.prog = false;
        }
        else {
            if (this.proj == false) {
                this.proj = true;
                this.prog = false;
            }
            else
                this.proj = false;
        }
    };
    NewProposalComponent.prototype.swalConfirm = function (id, text, ctr, ps, moe, co) {
        var _this = this;
        swal({
            title: text,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then(function (result) {
            if (result.value) {
                if (ctr == 1) {
                    _this.removeprojecttitle(id);
                    // code...
                }
                else if (ctr == 2) {
                    _this.removebudget(id, ps, moe, co);
                }
                else if (ctr == 3) {
                    _this.removecagency(id);
                }
                else if (ctr == 4) {
                    _this.removebudget2(id, ps, moe, co);
                }
                else if (ctr == 5) {
                    _this.removeproponent(id);
                }
            }
        });
    };
    NewProposalComponent.prototype.addbudget = function () {
        var _this = this;
        var x = '';
        if (this.fangency1 == undefined || this.fangency1 == "") {
            x = x + "*Source of Fund is Required\n";
        }
        if (this.ps == '' || this.ps == null) {
            x = x + "*PS is required\n";
        }
        if (this.co == '' || this.co == null) {
            x = x + "*Co is required\n";
        }
        if (this.moe == '' || this.moe == null) {
            x = x + "*MOE is required\n";
        }
        if (x == '') {
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append("sof", this.fangency1);
            urlSearchParams.append('ps', this.ps.toString());
            urlSearchParams.append('moe', this.moe.toString());
            urlSearchParams.append('co', this.co.toString());
            urlSearchParams.append('programid', this.programid.toString());
            var body = urlSearchParams.toString();
            var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            header.append("Accept", "application/json");
            header.append("Content-Type", "application/x-www-form-urlencoded");
            var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
            this.proposalcounter = true;
            this.global.requestToken();
            this.global.swalLoading('Adding Budget');
            this.http.post(this.global.api + 'api.php?action=addbudget', body, option)
                .map(function (response) { return response.json(); })
                .subscribe(function (res) {
                _this.balltotal = _this.balltotal + _this.budgettotal;
                _this.global.swalClose();
                _this.fangency1 = '';
                _this.ps = '';
                _this.moe = '';
                _this.co = '';
                _this.budgettotal = 0;
                _this.getbudget(_this.programid);
            }, function (error) {
                console.log(Error);
                _this.global.swalAlertError();
            });
        }
        if (x != '') {
            alert(x);
        }
    };
    NewProposalComponent.prototype.addbudget2 = function () {
        var _this = this;
        var x = '';
        if (this.fangency1 == undefined || this.fangency1 == "") {
            x = x + "*Source of Fund is Required\n";
        }
        if (this.ps == '' || this.ps == null) {
            x = x + "*PS is required\n";
        }
        if (this.co == '' || this.co == null) {
            x = x + "*Co is required\n";
        }
        if (this.moe == '' || this.moe == null) {
            x = x + "*MOE is required\n";
        }
        if (x == '') {
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append("sof", this.fangency1);
            urlSearchParams.append('ps', this.ps.toString());
            urlSearchParams.append('moe', this.moe.toString());
            urlSearchParams.append('co', this.co.toString());
            urlSearchParams.append('projectid', this.projectid.toString());
            var body = urlSearchParams.toString();
            var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            header.append("Accept", "application/json");
            header.append("Content-Type", "application/x-www-form-urlencoded");
            var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
            this.proposalcounter = true;
            this.global.requestToken();
            this.global.swalLoading('Adding Budget');
            this.http.post(this.global.api + 'api.php?action=addbudget2', body, option)
                .map(function (response) { return response.text(); })
                .subscribe(function (res) {
                _this.balltotal = _this.balltotal + _this.budgettotal;
                _this.global.swalClose();
                _this.fangency1 = '';
                _this.ps = '';
                _this.moe = '';
                _this.co = '';
                _this.budgettotal = 0;
                _this.getbudget2(_this.projectid);
                console.log(res);
            }, function (error) {
                console.log(Error);
                _this.global.swalAlertError();
            });
        }
        if (x != '') {
            alert(x);
        }
    };
    NewProposalComponent.prototype.proposaldone = function (type) {
        var _this = this;
        if (this.prog == true) {
            var x = '';
            if (!(this.projectlists != undefined && this.projectlists[0].id != null)) {
                x = x + "*At least 1 project title is required\n";
            }
            if (!(this.budgetlist != undefined && this.budgetlist[0].id != null)) {
                x = x + "*At least 1 source of fund is required\n";
            }
            if (this.esummary == '' || this.esummary == null) {
                x = x + "*Executive Summary is required\n";
            }
            if (x == '') {
                var urlSearchParams = new URLSearchParams();
                urlSearchParams.append("esummary", this.esummary);
                urlSearchParams.append('pid', this.proposalid.toString());
                var body = urlSearchParams.toString();
                var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
                header.append("Accept", "application/json");
                header.append("Content-Type", "application/x-www-form-urlencoded");
                var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
                this.proposalcounter = true;
                this.global.requestToken();
                this.global.swalLoading('Saving New Proposal...');
                this.http.post(this.global.api + 'api.php?action=proposaldone', body, option)
                    .map(function (response) { return response.json(); })
                    .subscribe(function (res) {
                    _this.global.swalClose();
                    _this.router.navigate(['../main', { outlets: { div: 'proposals' } }]);
                }, function (error) {
                    console.log(Error);
                    _this.global.swalAlertError();
                });
            }
            if (x != '') {
                alert(x);
            }
        }
        else {
            var x = '';
            if (!(this.calists != undefined && this.calists[0].id != null))
                x = x + "*At least 1 Cooperating Agency is required\n";
            if (this.rndstation == '' || this.rndstation == null) {
                x = x + "*Research & Development Station is required\n";
            }
            if (this.clss == 0) {
                x = x + "*Classification is required\n";
            }
            if (this.projectpa.length < 1) {
                x = x + "*Please check at least 1 Priority Agenda is required\n";
            }
            if (this.projectsector.length < 1) {
                x = x + "*Please check at least 1 Sector Commodity is required\n";
            }
            if (this.projectdiscipline.length < 1) {
                x = x + "*Please check at least 1 Discipline is required\n";
            }
            if (this.significance == '' || this.significance == null) {
                x = x + "*Significance is required\n";
            }
            if (this.objectives == '' || this.objectives == null) {
                x = x + "*Objectives is required\n";
            }
            if (this.methodology == '' || this.methodology == null) {
                x = x + "*Methodology is required\n";
            }
            if (this.form.value.avatar == null) {
                x = x + "*Major Activities is required\n";
            }
            else {
                if (this.form.value.avatar.filetype != 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
                    x = x + "*Major Activities attachment must be in xlsx format(excel).\n";
            }
            if (this.targetb == '' || this.targetb == null) {
                x = x + "*Target Beneficiaries is required\n";
            }
            if (this.expectedo == '' || this.expectedo == null) {
                x = x + "*Expected Output is required\n";
            }
            if ((this.month1 == '' || this.month1 == undefined) && (this.year1 == '' || this.year1 == undefined)) {
                x = x + "*Planned Start date is required\n";
            }
            if ((this.month2 == '' || this.month2 == undefined) && (this.year2 == '' || this.year2 == undefined)) {
                x = x + "*Planned Completion date is required\n";
            }
            if (!(this.budgetlist2 != undefined && this.budgetlist2[0].id != null)) {
                x = x + "*At least 1 Estimated Budget is required\n";
            }
            if (x == '') {
                var start = this.year1.toString() + '-' + this.month1.toString() + '-' + '15';
                var completion = this.year2.toString() + '-' + this.month2.toString() + '-' + '15';
                var urlSearchParams = new URLSearchParams();
                urlSearchParams.append("id", this.projectid.toString());
                urlSearchParams.append('title', this.projecttitle);
                urlSearchParams.append('duration', this.projectduration.toString());
                urlSearchParams.append('rndstation', this.rndstation.toString());
                urlSearchParams.append('siteofi', '');
                urlSearchParams.append('significance', this.significance.toString());
                urlSearchParams.append('objectives', this.objectives.toString());
                urlSearchParams.append('literature', '');
                urlSearchParams.append('sbasis', '');
                urlSearchParams.append('methodology', this.methodology);
                urlSearchParams.append('majora', this.form.value.avatar.value);
                urlSearchParams.append('expectedoutput', this.expectedo);
                urlSearchParams.append('targetb', this.targetb.toString());
                urlSearchParams.append('start', start);
                urlSearchParams.append('completion', completion);
                var body = urlSearchParams.toString();
                var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
                header.append("Accept", "application/json");
                header.append("Content-Type", "application/x-www-form-urlencoded");
                var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
                this.proposalcounter = true;
                this.global.requestToken();
                this.global.swalLoading('Saving New Proposal...');
                this.http.post(this.global.api + 'api.php?action=projectinsert', body, option)
                    .map(function (response) { return response.text(); })
                    .subscribe(function (res) {
                    _this.global.swalClose();
                    console.log(res);
                    for (var i = 0; i < _this.projectdiscipline.length; i++) {
                        _this.http.get(_this.global.api + 'api.php?action=spProposal_ProjectDiscipline_Insert_Update&projectid=' + _this.projectid.toString() + "&cid=" + _this.projectdiscipline[i])
                            .map(function (response) { return response.text(); })
                            .subscribe(function (res) {
                        });
                    }
                    for (var i = 0; i < _this.projectpa.length; i++) {
                        _this.http.get(_this.global.api + 'api.php?action=spProposal_ProjectPriorityAgenda_Insert_Update&projectid=' + _this.projectid.toString() + "&cid=" + _this.projectpa[i])
                            .map(function (response) { return response.text(); })
                            .subscribe(function (res) {
                        });
                    }
                    for (var i = 0; i < _this.projectsector.length; i++) {
                        _this.http.get(_this.global.api + 'api.php?action=spProposal_ProjectSector_Insert_Update&projectid=' + _this.projectid.toString() + "&cid=" + _this.projectsector[i])
                            .map(function (response) { return response.text(); })
                            .subscribe(function (res) {
                        });
                    }
                    //mode of implementaion--- automatic
                    var z = '2';
                    if (_this.modeofimplementation == "Single Agency") {
                        z = '1';
                    }
                    _this.http.get(_this.global.api + 'api.php?action=spProposal_ProjectMOI_Insert_Update&projectid=' + _this.projectid.toString() + "&cid=" + z)
                        .map(function (response) { return response.text(); })
                        .subscribe(function (res) {
                    });
                    _this.http.get(_this.global.api + 'api.php?action=projectclassificationupdate&projectid=' + _this.projectid.toString() + "&cid=" + _this.clss)
                        .map(function (response) { return response.text(); })
                        .subscribe(function (res) {
                    });
                    if (type == 1) {
                        _this.global.swalSuccess("Proposal Saved as Draft!");
                    }
                    else {
                        var urlSearchParams_2 = new URLSearchParams();
                        urlSearchParams_2.append("proposalid", _this.proposalid.toString());
                        urlSearchParams_2.append('statusid', '1');
                        urlSearchParams_2.append('remarks', '');
                        urlSearchParams_2.append('userid', _this.global.requestid());
                        urlSearchParams_2.append('type', '1');
                        var body_2 = urlSearchParams_2.toString();
                        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
                        header.append("Accept", "application/json");
                        header.append("Content-Type", "application/x-www-form-urlencoded");
                        var option_3 = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
                        _this.http.post(_this.global.api + 'api.php?action=statuschange', body_2, option_3)
                            .map(function (response) { return response.text(); })
                            .subscribe(function (res) {
                        });
                        _this.global.swalSuccess("Proposal has been submitted!");
                    }
                    setTimeout(function () {
                        _this.router.navigate(['../main', { outlets: { div: 'proposals' } }]);
                    }, 1500);
                    //
                }, function (error) {
                    console.log(Error);
                    _this.global.swalAlertError();
                });
            }
            if (x != '') {
                alert(x);
            }
        }
    };
    NewProposalComponent.prototype.openDialogUpdate = function (list) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__proposal_new_proposal_update_project_update_project_component__["a" /* UpdateProjectComponent */], {
            width: '99%', data: { programid: this.programid, projectid: this.projectid, progtitle: this.title, list: list }, disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == 1) {
                _this.getprojectlist(_this.programid);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], NewProposalComponent.prototype, "fileInput", void 0);
    NewProposalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new-proposal',
            template: __webpack_require__("../../../../../src/app/proposal/new-proposal/new-proposal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/proposal/new-proposal/new-proposal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1__global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], NewProposalComponent);
    return NewProposalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/proposal/new-proposal/update-project/update-project.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"update-Project\" style=\"height: 85vh;overflow-y: scroll;\">\n\n        <div id=\"1a\" *ngIf=\"prog===true\">\n          <h4>Program: {{title}}</h4>\n          <table style=\"width: 100%\">\n            <tr>\n              <td style=\"width: 50%\">\n            <mat-form-field class=\"npinput\"  style=\"width: 100%\">\n              <input matInput placeholder=\"Project Title\"  [(ngModel)]=\"protitle\" >\n              <mat-hint></mat-hint>\n            </mat-form-field></td>\n            <td style=\"width: 20%\">\n            <mat-form-field class=\"npinput\" style=\"width: 100%\">\n              <input matInput placeholder=\"Duration\" type=\"number\" min=\"0\" [(ngModel)]=\"produration\" >\n              <mat-hint>In Months</mat-hint>\n            </mat-form-field></td>\n            <td style=\"width: 27%\">\n                <button mat-raised-button (click)=\"addproject()\" class=\"buttonblue\" >\n                    <mat-icon style=\"font-size:20px\">add</mat-icon> Add Project Title</button>\n            </td>\n            </tr>\n          </table>\n\n          <div  *ngIf=\"projectlists!=undefined\" >\n            <div  *ngIf=\"projectlists[0].id!=null\" >\n              <table style=\"width: 100%\">\n                <tr>\n                  <td>Project Title</td>\n                  <td>Duration</td>\n                  <td> </td>\n                </tr>\n                <tr  *ngFor=\"let list of projectlists\">\n                  <td style=\"width: 40%\"><b>{{list.ptitle}}</b></td>\n                <td style=\"width: 20%\"><b>{{list.duration}} months</b></td>\n                <td style=\"width: 10%\">\n                    <button  mat-button (click)=\"openDialogUpdate(list)\" *ngIf=\"list.significance==null\">\n                        <mat-icon style=\"font-size:20px\">add</mat-icon> Add Form 2B &nbsp; &nbsp; &nbsp;</button>\n\n\n                    <button  mat-button (click)=\"openDialogUpdate(list)\" *ngIf=\"list.significance!=null\" >\n                        <mat-icon style=\"font-size:20px\">edit</mat-icon> Update Form 2B &nbsp; &nbsp; &nbsp;</button>\n                </td>\n                <td style=\"width: 27%\">\n                    <button  mat-button (click)=\"swalConfirm(list.id,'Remove Project Title?',1,null,null,null)\"  class=\"buttonred\" >\n                        <mat-icon style=\"font-size:20px\">remove</mat-icon> Remove</button>\n                </td>\n                </tr>\n              </table>\n          </div>\n          </div>\n          <hr>\n              <div style=\"height: 10px\"></div>\n              Executive Summary: <button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"summary()\">?</button>\n            <mat-form-field  class=\"npinput\" style=\"width: 100%\"> \n              <textarea matInput placeholder=\"(Significance, objectives, expected output, and methodology)\" required style=\"height: 80px\"  [(ngModel)]=\"esummary\" ></textarea>\n            </mat-form-field>\n\n          <p><b>Budget Summary for the whole program </b><button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"budget()\">?</button></p>\n\n          <div>\n            <div style=\"height: 5px;\"></div>\n            <table  style=\"width: 100%\"><tr>\n                <td>\n                  Source of Fund\n                </td>\n                <td> \n                  PS <button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"infops()\">?</button>\n                </td>\n                <td> \n                  MOE <button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"infomoe()\">?</button>\n                </td>\n                <td>\n                  CO <button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"infoco()\">?</button>\n                </td>\n                <td>\n                 Total\n                </td>\n                <td>\n                </td>\n              </tr>\n              <tr>\n                <td style=\"width: 16%\">\n                    \n                  <mat-form-field style=\"width: 100%\">\n                    <input matInput placeholder=\"\" type=\"text\" [(ngModel)]=\"fangency1\"  readonly=\"readonly\">\n                  </mat-form-field>\n                </td>\n                <td  style=\"width: 16%\">\n                  <mat-form-field style=\"width: 100%\">\n                    <input matInput placeholder=\"\" type=\"number\" min=\"0\" [(ngModel)]=\"ps\" (change)=\"btotal()\">\n                  </mat-form-field>\n                </td>\n                <td  style=\"width: 16%\">\n                  <mat-form-field style=\"width: 100%;\">\n                    <input matInput placeholder=\"\"  type=\"number\" min=\"0\" [(ngModel)]=\"moe\" (change)=\"btotal()\">\n                  </mat-form-field>\n                </td>\n                <td style=\"width: 16%\">\n                  <mat-form-field style=\"width: 100%\">\n                    <input matInput placeholder=\"\" type=\"number\" min=\"0\" [(ngModel)]=\"co\" (change)=\"btotal()\">\n                  </mat-form-field>\n                </td>\n                <td style=\"width: 16%\">\n                  <b>{{budgettotal}}</b>\n                </td>\n                <td style=\"width: 16%\">\n                <button mat-button (click)=\"addbudget()\" class=\"buttonblue\">\n                    <mat-icon style=\"font-size:20px\">add</mat-icon> Add Budget</button>\n                </td>\n              </tr>\n            </table>\n\n\n          <div  *ngIf=\"budgetlist!=undefined\" >\n            <div  *ngIf=\"budgetlist[0].id!=null\" >\n            <table  style=\"width: 100%\">\n              \n              <tr  *ngFor=\"let b of budgetlist\">\n                <td style=\"width: 16%\">\n                    <b>{{b.sof}}</b>\n                </td>\n                <td  style=\"width: 16%\">\n                  <b>{{b.ps}}</b>\n                </td>\n                \n                <td  style=\"width: 16%\">\n                  <b>{{b.moe}}</b>\n                </td>\n                \n                <td  style=\"width: 16%\">\n                  <b>{{b.co}}</b>\n                </td>\n                \n                <td  style=\"width: 16%\">\n                  <b>{{totalb2(b.ps,b.co,b.moe)}}</b>\n                </td>\n                <td style=\"width: 16%\">\n                <button mat-button (click)=\"swalConfirm(b.id,'Remove Budget?',2,b.ps,b.moe,b.co)\" class=\"buttonred\">\n                    <mat-icon style=\"font-size:20px\">remove</mat-icon> Remove</button>\n                </td>\n              </tr>\n            </table>\n            </div>\n          </div>\n\n            <div style=\"height: 10px;\"></div>\n            <p style=\"margin:0\">Grand Total: <b>P{{balltotal}}</b> &nbsp; &nbsp;</p>\n            <hr>\n          </div>\n\n          </div>\n\n\n        <div id=\"1b\" *ngIf=\"proj===true\">\n          <p style=\"text-align: center;margin:0px\"><i>Submit Proposal</i></p>\n              <h4>Program: {{title}}</h4>\n          \n          <table style=\"width: 100%\">\n            <tr>\n              <td style=\"width: 60%\">\n            <mat-form-field class=\"npinput\"  style=\"width: 100%\">\n              <input matInput placeholder=\"Project Title\"  [(ngModel)]=\"projecttitle\" >\n            </mat-form-field></td>\n            <td style=\"width: 20%\">\n            <mat-form-field class=\"npinput\" style=\"width: 100%\">\n              <input matInput placeholder=\"Duration\" type=\"number\" min=\"0\" [(ngModel)]=\"projectduration\" >\n              <mat-hint>In Months</mat-hint>\n            </mat-form-field></td>\n            </tr>\n          </table>\n\n            <table style=\"width: 100%\">\n              <tr>\n                <td style=\"width: 80%\"> \n                  <p style=\"margin: 0\"><b>Proponent</b> <small></small></p>\n                  <div style=\"height: 5px\"></div>\n                  <table style=\"width: 100%\">\n                    <tr>\n                      <td style=\"width: 29%\">\n                  <mat-form-field  class=\"npinput2\" style=\"width: 100%\">\n                    <input matInput placeholder=\"First Name\"  [(ngModel)]=\"fname\" >\n                  </mat-form-field>\n                      </td>\n                      <td style=\"width: 18%\">\n                  <mat-form-field  class=\"npinput2\" style=\"width: 100%\">\n                    <input matInput placeholder=\"Middle Name\"  [(ngModel)]=\"mname\" >\n                  </mat-form-field>\n                      </td>\n                      <td style=\"width: 18%\">\n                  <mat-form-field  class=\"npinput2\" style=\"width: 100%\">\n                    <input matInput placeholder=\"Last Name\"  [(ngModel)]=\"lname\" >\n                  </mat-form-field>\n                      </td>\n                      <td style=\"width: 15%\">\n                  <mat-form-field  class=\"npinput2\" style=\"width: 100%\">\n                    <input matInput placeholder=\"Suffix\"  [(ngModel)]=\"suffix\" >\n                  </mat-form-field>\n                      </td>\n                      <td>\n                  \n                  <mat-form-field  class=\"npinput2\" style=\"width: 100%\">\n                    <mat-label>- Proponent Type -</mat-label>\n                    <mat-select  [(ngModel)]=\"proponenttypeinput\">\n                      <mat-option value=\"2\" >\n                        Member\n                      </mat-option>\n                      <mat-option value=\"1\" >\n                        Project Leader\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </td>\n                    </tr>\n                  </table>\n                </td>\n                \n                <td>\n                  <button mat-raised-button (click)=\"insertproponent()\" class=\"buttonblue\" >\n                    <mat-icon style=\"font-size:20px\">add</mat-icon> Add Proponent</button>\n                </td>\n              </tr>\n            </table>\n\n\n          <div  *ngIf=\"proponents!=undefined\" >\n            <div  *ngIf=\"proponents[0].id!=null\" >\n              <table style=\"width: 100%\" *ngFor=\"let list of proponents\">\n                <tr>\n                  <td style=\"width: 80%\">\n                    <table style=\"width: 100%\">\n                    <tr>\n                      <td style=\"width: 29%\">\n                        {{list.fname}}\n                      </td>\n                      <td style=\"width: 18%\">\n                          {{list.mname}}\n                      </td>\n                      <td style=\"width: 18%\">\n                          {{list.lname}}&nbsp;\n                      </td>\n                      <td style=\"width: 15%\">\n                          {{list.sname}}\n                      </td>\n                      <td>\n                        {{list.type}}\n                      </td>\n                    </tr>\n                  </table>\n                  </td>\n                <td style=\"width: 20%\">\n                    <button  mat-button (click)=\"swalConfirm(list.id,'Remove this Proponent?',5,null,null,null)\"  class=\"buttonred\" >\n                        <mat-icon style=\"font-size:20px\">remove</mat-icon> Remove</button>\n                </td>\n                </tr>\n              </table>\n          </div>\n          </div>\n          <hr>\n\n            <table style=\"width: 100%\">\n              <tr>\n                <td style=\"width: 60%\"> \n                  <p style=\"margin: 0\"><b>Cooperating Agencies</b> <small>(agencies participating in the R & D work.)</small></p>\n                  <mat-form-field  class=\"npinput2\" style=\"width: 100%\">\n                    <mat-label>- Select Agency -</mat-label>\n                    <mat-select  [(ngModel)]=\"coopagency\">\n                      <mat-option value=\"{{c.id}}\"  *ngFor=\"let c of cagencylist\">\n                        {{c.name}}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </td>\n                <td>\n                  <button mat-raised-button (click)=\"insertcagency()\" class=\"buttonblue\" >\n                    <mat-icon style=\"font-size:20px\">add</mat-icon> Add Cooperating Agency</button>\n                </td>\n              </tr>\n            </table>\n\n\n          <div  *ngIf=\"calists!=undefined\" >\n            <div  *ngIf=\"calists[0].id!=null\" >\n              <table style=\"width: 100%\" *ngFor=\"let list of calists\">\n                <tr>\n                  <td style=\"width: 60%\">{{list.name}}</td>\n                <td style=\"width: 40%\">\n                    <button  mat-button (click)=\"swalConfirm(list.id,'Remove this Cooperating Agency?',3,null,null,null)\"  class=\"buttonred\" >\n                        <mat-icon style=\"font-size:20px\">remove</mat-icon> Remove</button>\n                </td>\n                </tr>\n              </table>\n          </div>\n          </div>\n          <hr>\n            <div style=\"height: 20px;\"></div>\n            <p style=\"margin: 0\"><b>Research & Development Station</b> <small>(station or unit where R & D will be actually conducted.)</small></p>\n            <mat-form-field  class=\"npinput\" style=\"width: 100%\"> \n              <textarea matInput placeholder=\"\" required style=\"height: 80px\"  [(ngModel)]=\"rndstation\" ></textarea>\n            </mat-form-field>\n\n            <div style=\"height: 10px;\"></div>\n             <p style=\"margin: 0\"><b>Classification </b><small>(indicates whether the program/project is research or development.)</small></p>\n\n            <div style=\"overflow: hidden;\">\n            <mat-card style=\"background-color: #f4f4f4;width:calc(50% - 43px);float: left;\">\n              <h4 style=\"margin: 0px\">Research:</h4>\n              <mat-checkbox (change)=\"changeclassification(1)\" [checked]=\"basic1\">\n                <p style=\"margin: 0px;white-space:normal;\" >Basic <button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"basic()\">?</button></p>\n              </mat-checkbox><br>\n              <mat-checkbox (change)=\"changeclassification(2)\" [checked]=\"applied1\">\n                <p style=\"margin: 0px;white-space:normal;\">Applied <button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"applied()\">?</button></p>\n              </mat-checkbox>\n            </mat-card>\n            <mat-card style=\"background-color: #f4f4f4;width: calc(50% - 95px);float: right;\">\n              <h4 style=\"margin: 0px\">Development: <button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"development()\">?</button></h4>\n              <mat-checkbox (change)=\"changeclassification(3)\" [checked]=\"pilottesting\">\n                <p style=\"margin: 0px;white-space:normal;\">Pilot Testing <button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"ptesting()\">?</button></p>\n              </mat-checkbox><br>\n              <mat-checkbox (change)=\"changeclassification(4)\" [checked]=\"techpromotion\">\n                <p style=\"margin: 0px;white-space:normal;\">Tech. Promotion/Commercialization <button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"promotion()\">?</button></p>\n              </mat-checkbox>\n            </mat-card>\n          </div>\n\n          <div style=\"height: 10px;\"></div>\n             <p style=\"margin: 0\"><b>Mode of Implementation </b><button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"implementation()\">?</button>: <b>{{modeofimplementation}}</b></p>\n\n\n          <div style=\"height: 10px;\"></div>\n             <p style=\"margin: 0\"><b>Priority Agenda </b><button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"pagenda()\">?</button></p>\n\n            <div style=\"overflow: hidden;\">\n            <mat-card style=\"background-color: #f4f4f4;width:calc(100% - 70px);float: left;\">\n              <mat-checkbox (change)=\"checkbox($event,3,1)\">\n                <p style=\"margin: 0px;white-space:normal;\">Biotechnology</p>\n              </mat-checkbox><br>\n              <mat-checkbox (change)=\"checkbox($event,3,2)\">\n                <p style=\"margin: 0px;white-space:normal;\">ICT</p>\n              </mat-checkbox><br>\n              <mat-checkbox (change)=\"checkbox($event,3,3)\">\n                <p style=\"margin: 0px;white-space:normal;\">Alternative Energy</p>\n              </mat-checkbox><br>\n              <mat-checkbox (change)=\"checkbox($event,3,4)\">\n                <p style=\"margin: 0px;white-space:normal;\">Environment</p>\n              </mat-checkbox><br>\n              <mat-checkbox (change)=\"checkbox($event,3,5)\">\n                <p style=\"margin: 0px;white-space:normal;\">Health Products</p>\n              </mat-checkbox><br>\n              <mat-checkbox (change)=\"checkbox($event,3,6)\">\n                <p style=\"margin: 0px;white-space:normal;\">Basic Research</p>\n              </mat-checkbox><br>\n              <mat-checkbox (change)=\"checkbox($event,3,7)\">\n                <p style=\"margin: 0px;white-space:normal;\">others</p>\n              </mat-checkbox><br>\n\n              </mat-card>\n          </div>\n\n          <div style=\"height: 10px;\"></div>\n             <p style=\"margin: 0\"><b>Sector Commodity </b><button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"sectorc()\">?</button></p>\n\n            <div style=\"overflow: hidden;\">\n            <mat-card style=\"background-color: #f4f4f4;width:calc(100% - 70px);float: left;\">\n              <mat-checkbox (change)=\"checkbox($event,4,1)\">\n                <p style=\"margin: 0px;white-space:normal;\">Crops</p>\n              </mat-checkbox><br>\n              <mat-checkbox (change)=\"checkbox($event,4,2)\">\n                <p style=\"margin: 0px;white-space:normal;\">Livestock</p>\n              </mat-checkbox><br>\n              <mat-checkbox (change)=\"checkbox($event,4,3)\">\n                <p style=\"margin: 0px;white-space:normal;\">Forestry</p>\n              </mat-checkbox><br>\n              <mat-checkbox (change)=\"checkbox($event,4,4)\">\n                <p style=\"margin: 0px;white-space:normal;\">Agricultural Resources</p>\n              </mat-checkbox><br>\n              <mat-checkbox (change)=\"checkbox($event,4,5)\">\n                <p style=\"margin: 0px;white-space:normal;\">Socio Economics</p>\n              </mat-checkbox><br>\n              <mat-checkbox (change)=\"checkbox($event,4,6)\">\n                <p style=\"margin: 0px;white-space:normal;\">Fisheries or Aquatic resources</p>\n              </mat-checkbox><br>\n              <mat-checkbox (change)=\"checkbox($event,4,7)\">\n                <p style=\"margin: 0px;white-space:normal;\">Biotechnical</p>\n              </mat-checkbox><br>\n              <mat-checkbox (change)=\"checkbox($event,4,8)\">\n                <p style=\"margin: 0px;white-space:normal;\">Pharmaceutical</p>\n              </mat-checkbox><br>\n              <mat-checkbox (change)=\"checkbox($event,4,9)\">\n                <p style=\"margin: 0px;white-space:normal;\">Health Services</p>\n              </mat-checkbox><br>\n              <mat-checkbox (change)=\"checkbox($event,4,10)\">\n                <p style=\"margin: 0px;white-space:normal;\">Information Technology</p>\n              </mat-checkbox><br>\n              <mat-checkbox (change)=\"checkbox($event,4,11)\">\n                <p style=\"margin: 0px;white-space:normal;\">Material Science</p>\n              </mat-checkbox><br>\n              <mat-checkbox (change)=\"checkbox($event,4,12)\">\n                <p style=\"margin: 0px;white-space:normal;\">Photonics or Space Technology</p>\n              </mat-checkbox><br>\n              <mat-checkbox (change)=\"checkbox($event,4,13)\">\n                <p style=\"margin: 0px;white-space:normal;\">Industry</p>\n              </mat-checkbox><br>\n              <mat-checkbox (change)=\"checkbox($event,4,14)\">\n                <p style=\"margin: 0px;white-space:normal;\">Energy</p>\n              </mat-checkbox><br>\n              <mat-checkbox (change)=\"checkbox($event,4,15)\">\n                <p style=\"margin: 0px;white-space:normal;\">Utilities or Infrastructure</p>\n              </mat-checkbox><br>\n\n              </mat-card>\n          </div>\n\n          <div style=\"height: 10px;\"></div>\n             <p style=\"margin: 0\"><b>Discipline </b><button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"disciplineinfo()\">?</button></p>\n\n            <div style=\"overflow: hidden;\">\n            <mat-card style=\"background-color: #f4f4f4;width:calc(100% - 70px);float: left;\">\n              <mat-checkbox (change)=\"checkbox($event,5,1)\">\n                <p style=\"margin: 0px;white-space:normal;\">Plant Breeding</p>\n              </mat-checkbox><br>\n              <mat-checkbox (change)=\"checkbox($event,5,2)\">\n                <p style=\"margin: 0px;white-space:normal;\">Taxonomy</p>\n              </mat-checkbox><br>\n              <mat-checkbox (change)=\"checkbox($event,5,3)\">\n                <p style=\"margin: 0px;white-space:normal;\">Communicable and Degenerative Diseases</p>\n              </mat-checkbox><br>\n              <mat-checkbox (change)=\"checkbox($event,5,4)\">\n                <p style=\"margin: 0px;white-space:normal;\">Drug Formulation</p>\n              </mat-checkbox><br>\n              <mat-checkbox (change)=\"checkbox($event,5,5)\">\n                <p style=\"margin: 0px;white-space:normal;\">Maternal and Child Health</p>\n              </mat-checkbox><br>\n              <mat-checkbox (change)=\"checkbox($event,5,6)\">\n                <p style=\"margin: 0px;white-space:normal;\">Process</p>\n              </mat-checkbox><br>\n              <mat-checkbox (change)=\"checkbox($event,5,7)\">\n                <p style=\"margin: 0px;white-space:normal;\">Food and Feed</p>\n              </mat-checkbox><br>\n              <mat-checkbox (change)=\"checkbox($event,5,8)\">\n                <p style=\"margin: 0px;white-space:normal;\">Metals</p>\n              </mat-checkbox><br>\n              <mat-checkbox (change)=\"checkbox($event,5,9)\">\n                <p style=\"margin: 0px;white-space:normal;\">Engineering</p>\n              </mat-checkbox><br>\n              </mat-card>\n          </div>\n\n          <div style=\"height: 10px;\"></div>\n                         \n          <div style=\"height: 10px;\"></div>\n             <p style=\"margin: 0\"><b>Significance </b><small><button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"significanceinfo()\">?</button></small></p>\n            <mat-form-field  class=\"npinput\" style=\"width: 100%\"> \n\n              <textarea matInput placeholder=\"\" required style=\"height: 80px\"  [(ngModel)]=\"significance\" ></textarea>\n            </mat-form-field>\n            \n          <div style=\"height: 10px;\"></div>\n             <p style=\"margin: 0\"><b>Objectives </b><small>(Statement of the specific purpose to address the problem areas of the project.)</small></p>\n            <mat-form-field  class=\"npinput\" style=\"width: 100%\"> \n              <textarea matInput placeholder=\"\" required style=\"height: 80px\"  [(ngModel)]=\"objectives\" ></textarea>\n            </mat-form-field>\n            \n          <div style=\"height: 10px;\"></div>\n             <p style=\"margin: 0\"><b>Methodology </b><small>(Brief description of how projects will be implemented)</small></p>\n            <mat-form-field  class=\"npinput\" style=\"width: 100%\"> \n              <textarea matInput placeholder=\"\" required style=\"height: 80px\"  [(ngModel)]=\"methodology\" ></textarea>\n            </mat-form-field>\n\n            \n          <div style=\"height: 10px;\"></div>\n            <p><b>Major Activities</b> <button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"majorainfo()\">?</button> <small>(Excel File.)</small></p>\n            <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n              <div class=\"form-group\">\n                <input type=\"file\" id=\"avatar\" (change)=\"onFileChange($event)\" #fileInput class=\"inputfile\" />\n                <label for=\"avatar\">{{majoralabel}}</label>\n                <button mat-button type=\"button\" class=\"btn btn-sm btn-default\" (click)=\"clearFile()\">clear file</button>\n              </div>\n            </form>\n\n            \n          <div style=\"height: 20px;\"></div>\n             <p style=\"margin: 0\"><b>Expected Output </b><button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"expectedoinfo()\">?</button></p>\n            <mat-form-field  class=\"npinput\" style=\"width: 100%\"> \n              <textarea matInput placeholder=\"\" required style=\"height: 80px\"  [(ngModel)]=\"expectedo\" ></textarea>\n            </mat-form-field>\n            \n          <div style=\"height: 10px;\"></div>\n             <p style=\"margin: 0\"><b>Target Beneficiaries </b><button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"targetbinfo()\">?</button></p>\n            <mat-form-field  class=\"npinput\" style=\"width: 100%\"> \n              <textarea matInput placeholder=\"\" required style=\"height: 80px\"  [(ngModel)]=\"targetb\" ></textarea>\n            </mat-form-field>\n\n          <div style=\"height: 10px;\"></div>\n             <p style=\"margin: 0\"><b>Implementing Schedule </b><button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"schedinfo()\">?</button></p>\n\n          <div style=\"height: 10px;\"></div>\n            Duration: <b>{{projectduration}} Months</b>\n\n            <table style=\"width: 100%\">\n              <tr>\n                <td style=\"width: 200px\">\n                  Planned Start date:\n                </td>\n                <td style=\"width: 150px\">\n                  <mat-form-field  class=\"npinput2\"  style=\"width: 100%\">\n                    <mat-label>Month</mat-label>\n                    <mat-select [(ngModel)]=\"month1\">\n                      <mat-option value=\"01\">\n                        January\n                      </mat-option>\n                       <mat-option value=\"02\">\n                        February\n                      </mat-option>\n                       <mat-option value=\"03\">\n                        March\n                      </mat-option>\n                       <mat-option value=\"04\">\n                        April\n                      </mat-option>\n                       <mat-option value=\"05\">\n                        May\n                      </mat-option>\n                       <mat-option value=\"06\">\n                        June\n                      </mat-option>\n                       <mat-option value=\"07\">\n                        July\n                      </mat-option>\n                       <mat-option value=\"08\">\n                        August\n                      </mat-option>\n                       <mat-option value=\"09\">\n                        September\n                      </mat-option>\n                       <mat-option value=\"10\">\n                        October\n                      </mat-option>\n                       <mat-option value=\"11\">\n                        November\n                      </mat-option>\n                       <mat-option value=\"12\">\n                        December\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </td>\n                <td style=\"width: 150px\">\n                  <mat-form-field  class=\"npinput2\"  style=\"width: 100%\">\n                    <mat-label>Year</mat-label>\n                    <mat-select [(ngModel)]=\"year1\">\n                      <mat-option value=\"{{f}}\"  *ngFor=\"let f of yeararr\">\n                        {{f}}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field></td>\n                  <td></td>\n              </tr>\n            </table>\n\n             <table style=\"width: 100%\">\n              <tr>\n                <td style=\"width: 200px\">\n                  Planned Completion date:\n                </td>\n                <td style=\"width: 150px\">\n                  <mat-form-field  class=\"npinput2\"  style=\"width: 100%\">\n                    <mat-label>Month</mat-label>\n                    <mat-select [(ngModel)]=\"month2\">\n                      <mat-option value=\"01\">\n                        January\n                      </mat-option>\n                       <mat-option value=\"02\">\n                        February\n                      </mat-option>\n                       <mat-option value=\"03\">\n                        March\n                      </mat-option>\n                       <mat-option value=\"04\">\n                        April\n                      </mat-option>\n                       <mat-option value=\"05\">\n                        May\n                      </mat-option>\n                       <mat-option value=\"06\">\n                        June\n                      </mat-option>\n                       <mat-option value=\"07\">\n                        July\n                      </mat-option>\n                       <mat-option value=\"08\">\n                        August\n                      </mat-option>\n                       <mat-option value=\"09\">\n                        September\n                      </mat-option>\n                       <mat-option value=\"10\">\n                        October\n                      </mat-option>\n                       <mat-option value=\"11\">\n                        November\n                      </mat-option>\n                       <mat-option value=\"12\">\n                        December\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </td>\n                <td style=\"width: 150px\">\n                  <mat-form-field  class=\"npinput2\"  style=\"width: 100%\">\n                    <mat-label>Year</mat-label>\n                    <mat-select [(ngModel)]=\"year2\">\n                      <mat-option value=\"{{f}}\"  *ngFor=\"let f of yeararr\">\n                        {{f}}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field></td>\n                  <td></td>\n              </tr>\n            </table>\n\n            <p><b>Estimated Budget by Source </b><button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"budgetprojectinfo()\">?</button></p>\n\n          <div>\n            <div style=\"height: 5px;\"></div>\n            <table  style=\"width: 100%\"><tr>\n                <td>\n                  Source of Fund\n                </td>\n                <td> \n                  PS <button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"infops()\">?</button>\n                </td>\n                <td> \n                  MOE <button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"infomoe()\">?</button>\n                </td>\n                <td>\n                  CO <button class=\"buttonblue\" style=\"border-radius: 10px;border: none;\" (click)=\"infoco()\">?</button>\n                </td>\n                <td>\n                 Total\n                </td>\n                <td>\n                </td>\n              </tr>\n              <tr>\n              <tr>\n                <td style=\"width: 16%\">\n                    \n                  <mat-form-field style=\"width: 100%\">\n                    <input matInput placeholder=\"\" type=\"text\" [(ngModel)]=\"fangency1\"  readonly=\"readonly\">\n                  </mat-form-field>\n                </td>\n                <td  style=\"width: 16%\">\n                  <mat-form-field style=\"width: 100%\">\n                    <input matInput placeholder=\"\" type=\"number\" min=\"0\" [(ngModel)]=\"ps\" (change)=\"btotal()\">\n                  </mat-form-field>\n                </td>\n                <td  style=\"width: 16%\">\n                  <mat-form-field style=\"width: 100%;\">\n                    <input matInput placeholder=\"\"  type=\"number\" min=\"0\" [(ngModel)]=\"moe\" (change)=\"btotal()\">\n                  </mat-form-field>\n                </td>\n                <td style=\"width: 16%\">\n                  <mat-form-field style=\"width: 100%\">\n                    <input matInput placeholder=\"\" type=\"number\" min=\"0\" [(ngModel)]=\"co\" (change)=\"btotal()\">\n                  </mat-form-field>\n                </td>\n                <td style=\"width: 16%\">\n                  <b>{{budgettotal}}</b>\n                </td>\n                <td style=\"width: 16%\">\n                <button mat-button (click)=\"addbudget2()\" class=\"buttonblue\">\n                    <mat-icon style=\"font-size:20px\">add</mat-icon> Add Budget</button>\n                </td>\n              </tr>\n            </table>\n\n\n          <div  *ngIf=\"budgetlist2!=undefined\" >\n            <div  *ngIf=\"budgetlist2[0].id!=null\" >\n            <table  style=\"width: 100%\">\n              <tr  *ngFor=\"let b of budgetlist2\">\n                <td style=\"width: 16%\">\n                    <b>{{b.sof}}</b>\n                </td>\n                <td  style=\"width: 16%\">\n                  <b>{{b.ps}}</b>\n                </td>\n                \n                <td  style=\"width: 16%\">\n                  <b>{{b.moe}}</b>\n                </td>\n                \n                <td  style=\"width: 16%\">\n                  <b>{{b.co}}</b>\n                </td>\n                \n                <td  style=\"width: 16%\">\n                  <b>{{totalb2(b.ps,b.co,b.moe)}}</b>\n                </td>\n                <td style=\"width: 16%\">\n                <button mat-button (click)=\"swalConfirm(b.id,'Remove Budget?',4,b.ps,b.moe,b.co)\" class=\"buttonred\">\n                    <mat-icon style=\"font-size:20px\">remove</mat-icon> Remove</button>\n                </td>\n              </tr>\n            </table>\n            </div>\n          </div>\n\n            <div style=\"height: 10px;\"></div>\n            <p style=\"margin:0\">Grand Total: <b>P{{balltotal}}</b> &nbsp; &nbsp;</p>\n            <hr>\n          </div>\n        </div>\n\n\n        <div>\n\n        </div>       \n</div>\n<button mat-button style=\"float: right;\" (click)=\"proposaldone(1)\" color=\"primary\">Save as Draft</button>\n<button mat-button style=\"float: right;\" (click)=\"noclick()\">Close</button> "

/***/ }),

/***/ "../../../../../src/app/proposal/new-proposal/update-project/update-project.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#update-Project .npinput {\n  width: 100%; }\n\n#update-Project .npinput2 {\n  width: 45%; }\n\n#update-Project div.mat-checkbox-inner-container {\n  margin-right: 10px !important; }\n\n#update-Project .inputfile {\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1; }\n\n#update-Project .inputfile + label {\n  font-size: 15px;\n  font-weight: 700;\n  color: white;\n  background-color: #262626;\n  display: inline-block;\n  padding: 10px; }\n\n#update-Project .inputfile + label {\n  cursor: pointer;\n  /* \"hand\" cursor */ }\n\n#update-Project .inputfile:focus + label,\n#update-Project .inputfile + label:hover {\n  background-color: #294a70; }\n\n.mat-form-field-infix {\n  width: 100px !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/proposal/new-proposal/update-project/update-project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_service__ = __webpack_require__("../../../../../src/app/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};











var swal = __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default.a;
var UpdateProjectComponent = /** @class */ (function () {
    function UpdateProjectComponent(dialogRef, data, dialog, fb, global, http, route, router) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.dialog = dialog;
        this.fb = fb;
        this.global = global;
        this.http = http;
        this.route = route;
        this.router = router;
        this.loading = false;
        this.yeararr = [];
        this.proj = true;
        this.prog = false;
        this.total = 0;
        this.proposalid = 1;
        this.programid = 24;
        this.proposalcounter = false;
        this.protitle = '';
        this.produration = '';
        this.ps = null;
        this.moe = null;
        this.co = null;
        this.budgettotal = 0;
        this.balltotal = 0;
        this.esummary = '';
        this.coopagency = '';
        this.projectclassification = [];
        this.projectmoi = [];
        this.projectpa = [];
        this.projectsector = [];
        this.projectdiscipline = [];
        this.majoralabel = 'Choose a file';
        this.modeofimplementation = '';
        this.labeltitle = "Create Capsule Proposal";
        this.techpromotion = false;
        this.basic1 = false;
        this.applied1 = false;
        this.pilottesting = false;
        this.clss = 0;
        this.proponenttype = "Project Leader";
        this.fname = '';
        this.mname = '';
        this.lname = '';
        this.suffix = '';
        this.proponenttypeinput = '2';
        console.log(this.data.list);
        this.title = this.data.progtitle;
        this.projectid = this.data.projectid;
        this.projecttitle = this.data.list.ptitle;
        this.projectduration = this.data.list.duration;
        this.esummary = this.data.list.duration;
        this.getcooperating(this.projectid);
        this.getproponent(this.projectid);
        this.rndstation = this.data.list.duration;
        this.rndstation = this.data.list.duration;
        this.rndstation = this.data.list.duration;
        this.rndstation = this.data.list.duration;
        this.rndstation = this.data.list.duration;
        this.http.get(this.global.api + 'api.php?action=company_List', this.global.option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.cagencylist = res;
        });
        console.log(this.projectclassification.length);
        if (global.user.ext == null) {
            global.user.ext = '';
        }
        if (global.user.mname == null) {
            global.user.mname = '';
        }
        if (global.user.telno == null) {
            global.user.telno = '';
        }
        this.cleader = global.user.fname + " " + global.user.mname + " " + global.user.surname + " " + global.user.ext;
        this.gender = global.user.sex;
        this.email = global.requestemail();
        this.agencies = global.user.agency;
        this.address = global.user.address;
        this.telephone = global.user.telno;
        var dt = new Date();
        var year = dt.getFullYear() - 10;
        for (var i = 0; i < 20; i++) {
            this.yeararr[i] = year;
            year++;
        }
        this.createForm();
    }
    UpdateProjectComponent.prototype.changeclassification = function (x) {
        this.techpromotion = false;
        this.basic1 = false;
        this.applied1 = false;
        this.pilottesting = false;
        if (x == 1) {
            this.basic1 = true;
        }
        if (x == 2) {
            this.applied1 = true;
        }
        if (x == 3) {
            this.pilottesting = true;
        }
        if (x == 4) {
            this.techpromotion = true;
        }
        this.clss = x;
    };
    UpdateProjectComponent.prototype.see = function (assign) {
        this.fangency1 = assign;
    };
    UpdateProjectComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["j" /* Validators */].required],
            avatar: null
        });
    };
    UpdateProjectComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file_1 = event.target.files[0];
            reader.readAsDataURL(file_1);
            console.log(reader);
            reader.onload = function () {
                _this.form.get('avatar').setValue({
                    filename: file_1.name,
                    filetype: file_1.type,
                    value: reader.result.toString().split(',')[1]
                });
                if (_this.form.value.avatar != null) {
                    _this.majoralabel = file_1.name;
                }
                else {
                    _this.majoralabel = "Choose a file";
                }
            };
        }
    };
    UpdateProjectComponent.prototype.clearFile = function () {
        this.majoralabel = "Choose a file...";
        this.form.get('avatar').setValue(null);
        this.fileInput.nativeElement.value = '';
    };
    UpdateProjectComponent.prototype.checkbox = function (event, type, text) {
        if (event.checked == true) {
            if (type == 1) {
                this.projectclassification = [];
                this.projectclassification.push(text);
            }
            else if (type == 2) {
                this.projectmoi.push(text);
            }
            else if (type == 3) {
                this.projectpa.push(text);
            }
            else if (type == 4) {
                this.projectsector.push(text);
            }
            else if (type == 5) {
                this.projectdiscipline.push(text);
            }
        }
        else {
            if (type == 1) {
                for (var i = 0; i < this.projectclassification.length; i++) {
                    if (this.projectclassification[i] === text) {
                        this.projectclassification.splice(i, 1);
                    }
                }
            }
            else if (type == 2) {
                for (var i = 0; i < this.projectmoi.length; i++) {
                    if (this.projectmoi[i] === text) {
                        this.projectmoi.splice(i, 1);
                    }
                }
            }
            else if (type == 3) {
                for (var i = 0; i < this.projectpa.length; i++) {
                    if (this.projectpa[i] === text) {
                        this.projectpa.splice(i, 1);
                    }
                }
            }
            else if (type == 4) {
                for (var i = 0; i < this.projectsector.length; i++) {
                    if (this.projectsector[i] === text) {
                        this.projectsector.splice(i, 1);
                    }
                }
            }
            else if (type == 4) {
                for (var i = 0; i < this.projectdiscipline.length; i++) {
                    if (this.projectdiscipline[i] === text) {
                        this.projectdiscipline.splice(i, 1);
                    }
                }
            }
        }
    };
    UpdateProjectComponent.prototype.totalb = function (ps, co, moe) {
        return parseInt(ps) + parseInt(moe) + parseInt(co);
    };
    UpdateProjectComponent.prototype.totalb2 = function (ps, co, moe) {
        return parseInt(ps) + parseInt(moe) + parseInt(co);
    };
    UpdateProjectComponent.prototype.btotal = function () {
        this.budgettotal = this.ps + this.moe + this.co;
    };
    UpdateProjectComponent.prototype.ngOnInit = function () {
    };
    UpdateProjectComponent.prototype.majorainfo = function () {
        this.global.swalinfo("<p style='text-align:left;'><b>Major Activities</b> – Enumerate in chronological order the tasks to be undertaken. Use gantt chart.</p>");
    };
    UpdateProjectComponent.prototype.agency = function () {
        this.global.swalinfo("<p style='text-align:left;'><b>Cooperating Agencies</b> – agencies participating in the R & D work.<br><br><b>R & D Station</b> – station or unit where R & D will be actually conducted.<br><br><b>Classification</b> – indicates whether the program/project is research or development.</p>");
    };
    UpdateProjectComponent.prototype.infoduration = function () {
        this.global.swalinfo("<p><b>Duration</b> - Number of months the program will be implemented.</p>");
    };
    UpdateProjectComponent.prototype.infops = function () {
        this.global.swalinfo("<p><b>PS</b> - Requirement for wages, salaries, honoraria, additional hire and other personnel benefits.</p>");
    };
    UpdateProjectComponent.prototype.infomoe = function () {
        this.global.swalinfo("<p><b>MOE</b> - Requirement for supplies materials, travel expenses, communnication and othher services.</p>");
    };
    UpdateProjectComponent.prototype.infoco = function () {
        this.global.swalinfo("<p><b>CO</b> - Requirement for facilities and equipment needed by the program.</p>");
    };
    UpdateProjectComponent.prototype.leader = function () {
        this.global.swalinfo("<p style='text-align:left;'>The overall R & D coordinator (whether multi-agency of single-agency R & D) or the program/project leader. Program leader is the overall coordinator while serving also as the project leader.</p>");
    };
    UpdateProjectComponent.prototype.summary = function () {
        this.global.swalinfo("<b>Executive Summary</b> - Overview of the program including the significance, objectives, methodology, major activities and expected output of the program.");
    };
    UpdateProjectComponent.prototype.budget = function () {
        this.global.swalinfo("<b>Budget Summary</b> - Personal Services (PS), maintenance and other operating expenses (MOE), and capital outlay (CO) requirement of the whole program by source.");
    };
    UpdateProjectComponent.prototype.classification = function () {
        this.global.swalinfo("<b>Classification</b> - indicates whether the program/project is research or development.");
    };
    UpdateProjectComponent.prototype.implementation = function () {
        this.global.swalinfo("<b>Mode of Implementation</b> - indicate whether the R & D will be undertaken by one or more than one agency.");
    };
    UpdateProjectComponent.prototype.basic = function () {
        this.global.swalinfo("<b>Basic research </b> - is an experimental or theoretical work undertaken primarily to acquire new knowledge of the underlying foundations of phenomena and observable facts, without any particular or specific application or use in view.");
    };
    UpdateProjectComponent.prototype.applied = function () {
        this.global.swalinfo("<b>Applied research</b> - is an original investigation undertaken in order to acquire new knowledge directed primarily towards a specific aim or objective.");
    };
    UpdateProjectComponent.prototype.ptesting = function () {
        this.global.swalinfo("<b>Pilot Testing</b> - is an innovative work to confirm and demonstrate the feasibility of actually using a technology; gauging end user’s reaction to introduction of improved technologies and identifying potential problems related to wider dissemination, utilization and adoption so that these can be fed back to researchers.");
    };
    UpdateProjectComponent.prototype.promotion = function () {
        this.global.swalinfo("<b>Technology promotion/commercialization</b> - is an activity involving application of technologies on a commercial scale by an identified entrepreneur or user primarily to increase his income/profits and productivity; technologies utilized/produced on a pre-commercial scale including market testing jointly undertaken with a client.");
    };
    UpdateProjectComponent.prototype.development = function () {
        this.global.swalinfo("<b>Developmental research</b> - is a systematic work, drawing on existing knowledge gained from research and/or practical experience that is directed to producing new materials, products or devices, installing new processes, systems and services and improving substantially those already produced or installed.");
    };
    UpdateProjectComponent.prototype.pagenda = function () {
        this.global.swalinfo("<b>Priority Areas/STAND Classification</b> - Identify the classification of the R & D proposal in the S & T Agenda for National Development.");
    };
    UpdateProjectComponent.prototype.sectorc = function () {
        this.global.swalinfo("<b>Sector</b> - indicate whether crops, livestock, forestry, agricultural resources or socio-economics; fisheries or aquatic resources; biotechnical, pharmaceutical, or health services; biotechnology, information technology, material science, photonics or space technology; industry, energy, utilities or infrastructure.");
    };
    UpdateProjectComponent.prototype.disciplineinfo = function () {
        this.global.swalinfo("<b>Discipline</b> - The specific field to be studied (e.g. plant breeding, taxonomy).");
    };
    UpdateProjectComponent.prototype.significanceinfo = function () {
        this.global.swalinfo("<b>Significance</b> - State the research problem and significance of the project to the current needs of the country. The proposal should justify resource expenditure. A typical justification would include a brief introduction, a general statement concerning the historical basis for R & D, utilization of the expected output and the impact the information generated will have on science, the target users and the country.");
    };
    UpdateProjectComponent.prototype.expectedoinfo = function () {
        this.global.swalinfo("<b>Expected Output</b> - Indicate the specific products, processes or services which the project is expected to produce and how these can be used; quantify when possible");
    };
    UpdateProjectComponent.prototype.targetbinfo = function () {
        this.global.swalinfo("<b>Target Beneficiaries</b> - Who the clienteles are and what are the expected outcome/effects of the use of the project outputs).");
    };
    UpdateProjectComponent.prototype.schedinfo = function () {
        this.global.swalinfo("<b>Implementing Schedule</b> - The duration of the project in months including planned start date and expected.");
    };
    UpdateProjectComponent.prototype.budgetprojectinfo = function () {
        this.global.swalinfo("<b>Estimated Annual Budget</b> - The budget requirement for personal services (PS), maintenance and other operating expenses (MOOE), capital outlay(CO) for the first of implementation and the total budget requirement by source of fund.");
    };
    UpdateProjectComponent.prototype.add = function (stepper) {
        var x = '';
        if (this.cleader == undefined || this.cleader == "") {
            x = x + "*Coordinator/Leader is required\n";
        }
        if (this.gender == undefined || this.gender == "") {
            x = x + "*Gender is required\n";
        }
        if (this.email == undefined || this.email == "") {
            x = x + "*Email is required\n";
        }
        if (this.agencies == undefined || this.agencies == "") {
            x = x + "*Agency(ies) is required\n";
        }
        if (this.address == undefined || this.address == "") {
            x = x + "*Address is required\n";
        }
        if (this.telephone == undefined || this.telephone == "") {
            x = x + "*Telephone is required\n";
        }
        if (x == '') {
            stepper.next();
        }
        else
            alert(x);
    };
    UpdateProjectComponent.prototype.proposalinsert = function (stepper) {
        var _this = this;
        var x = '';
        if (this.title == undefined || this.title == "") {
            x = x + "*Title is required\n";
        }
        if (this.duration == undefined || this.duration == "") {
            x = x + "*Duration is required\n";
        }
        if (this.fagency == undefined || this.fagency == "") {
            x = x + "*Funding Agency is required\n";
        }
        if (this.proj == false && this.prog == false) {
            x = x + "*Must select a proposal type!\n";
        }
        if (x == '' && this.proposalcounter == false) {
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append("GeneralTitle", this.title);
            urlSearchParams.append('LeadAgency', this.agencies);
            urlSearchParams.append('Street', "go");
            urlSearchParams.append('Address_PSGC', "012801001");
            urlSearchParams.append('Telephone', this.telephone);
            urlSearchParams.append('Fax', this.fax);
            urlSearchParams.append('Email', this.email);
            urlSearchParams.append('FundingAgency_id', this.fagency);
            urlSearchParams.append('TotalDuration', this.duration);
            urlSearchParams.append('createdBy', this.global.userid.toString());
            var body = urlSearchParams.toString();
            var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            header.append("Accept", "application/json");
            header.append("Content-Type", "application/x-www-form-urlencoded");
            var option_1 = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
            this.proposalcounter = true;
            this.global.requestToken();
            this.http.post(this.global.api + 'api.php?action=proposalinsert', body, option_1)
                .map(function (response) { return response.json(); })
                .subscribe(function (res) {
                _this.global.swalClose();
                _this.proposalid = res.id;
                _this.http.get(_this.global.api + 'api.php?action=programinsert&proposalid=' + _this.proposalid, option_1)
                    .map(function (response) { return response.json(); })
                    .subscribe(function (res) {
                    _this.programid = res.id;
                    if (_this.proj != true) {
                        _this.getprojectlist(_this.programid);
                    }
                    else {
                        _this.projecttitle = _this.title;
                        _this.projectduration = _this.duration;
                        var urlSearchParams_1 = new URLSearchParams();
                        urlSearchParams_1.append("programid", _this.programid.toString());
                        urlSearchParams_1.append('title', _this.projecttitle);
                        urlSearchParams_1.append('duration', _this.projectduration);
                        var body_1 = urlSearchParams_1.toString();
                        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
                        header.append("Accept", "application/json");
                        header.append("Content-Type", "application/x-www-form-urlencoded");
                        var option_2 = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
                        _this.global.swalLoading('Adding project title');
                        _this.http.post(_this.global.api + 'api.php?action=projectadd', body_1, option_2)
                            .map(function (response) { return response.json(); })
                            .subscribe(function (res) {
                            _this.global.swalClose();
                            _this.getprojectlist(_this.programid);
                        }, function (error) {
                            console.log(Error);
                            _this.global.swalAlertError();
                        });
                    }
                });
            }, function (error) {
                console.log(Error);
                _this.global.swalAlertError();
            });
        }
        if (x != '') {
            alert(x);
        }
        else
            stepper.next();
    };
    UpdateProjectComponent.prototype.getprojectlist = function (programid) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(this.global.api + 'api.php?action=getprojecttitles&programid=' + programid, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.projectlists = res;
            console.log(res);
            _this.projectid = res[0].id;
        });
    };
    UpdateProjectComponent.prototype.insertcagency = function () {
        var _this = this;
        var x = '';
        if (this.coopagency == undefined || this.coopagency == "") {
            x = x + "*Cooperating Agency is required\n";
        }
        if (x == '') {
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append("pid", this.projectid.toString());
            urlSearchParams.append('cid', this.coopagency.toString());
            var body = urlSearchParams.toString();
            var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            header.append("Accept", "application/json");
            header.append("Content-Type", "application/x-www-form-urlencoded");
            var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
            this.proposalcounter = true;
            this.global.swalLoading('Adding project title');
            this.http.post(this.global.api + 'api.php?action=projectaddcoopagency', body, option)
                .map(function (response) { return response.json(); })
                .subscribe(function (res) {
                _this.global.swalClose();
                _this.coopagency = null;
                _this.getcooperating(_this.projectid);
            }, function (error) {
                console.log(Error);
                _this.global.swalAlertError();
            });
        }
        else
            alert(x);
    };
    UpdateProjectComponent.prototype.getproponent = function (projectid) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(this.global.api + 'api.php?action=spProposal_ProjectProponent_List&projectid=' + projectid, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.proponents = res;
            console.log(res);
            if (res[0].id != null) {
                _this.proponenttype = 'Member';
            }
            else
                _this.proponenttype = 'Project Leader';
        });
    };
    UpdateProjectComponent.prototype.insertproponent = function () {
        var _this = this;
        var x = '';
        if (this.fname == undefined || this.fname == "") {
            x = x + "*First name is required\n";
        }
        if (this.lname == undefined || this.lname == "") {
            x = x + "*Last name is required\n";
        }
        if (x == '') {
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append("pid", this.projectid.toString());
            urlSearchParams.append("lname", this.lname.toString());
            urlSearchParams.append("fname", this.fname.toString());
            urlSearchParams.append("mname", this.mname.toString());
            urlSearchParams.append("sname", this.suffix.toString());
            urlSearchParams.append("percent", "0");
            urlSearchParams.append('type', this.proponenttypeinput.toString());
            var body = urlSearchParams.toString();
            var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            header.append("Accept", "application/json");
            header.append("Content-Type", "application/x-www-form-urlencoded");
            var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
            this.proposalcounter = true;
            this.global.swalLoading('Adding project Proponent');
            this.http.post(this.global.api + 'api.php?action=spProposal_ProjectProponent_Insert', body, option)
                .map(function (response) { return response.json(); })
                .subscribe(function (res) {
                _this.global.swalClose();
                _this.coopagency = null;
                _this.fname = '';
                _this.lname = '';
                _this.suffix = '';
                _this.mname = '';
                _this.getproponent(_this.projectid);
            }, function (error) {
                console.log(Error);
                _this.global.swalAlertError();
            });
        }
        else
            alert(x);
    };
    UpdateProjectComponent.prototype.removeproponent = function (id) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(this.global.api + 'api.php?action=spProposal_ProjectProponent_Delete&id=' + id, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.getproponent(_this.projectid);
        }, function (error) {
            _this.global.swalAlertError();
        });
    };
    UpdateProjectComponent.prototype.getcooperating = function (projectid) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(this.global.api + 'api.php?action=getcoopagency&projectid=' + projectid, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.calists = res;
            if (res[0].id != null) {
                _this.modeofimplementation = "Multi Agency";
            }
            else
                _this.modeofimplementation = "Single Agency";
        });
    };
    UpdateProjectComponent.prototype.getbudget = function (programid) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(this.global.api + 'api.php?action=getbudget&programid=' + programid, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.budgetlist = res;
            console.log(res);
        });
    };
    UpdateProjectComponent.prototype.getbudget2 = function (projectid) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(this.global.api + 'api.php?action=getbudget2&projectid=' + projectid, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.budgetlist2 = res;
        });
    };
    UpdateProjectComponent.prototype.addproject = function () {
        var _this = this;
        if (this.protitle == '' || this.produration == '') {
            alert("Project title and Duration is required!");
        }
        else {
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append("programid", this.programid.toString());
            urlSearchParams.append('title', this.protitle);
            urlSearchParams.append('duration', this.produration);
            var body = urlSearchParams.toString();
            var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            header.append("Accept", "application/json");
            header.append("Content-Type", "application/x-www-form-urlencoded");
            var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
            this.proposalcounter = true;
            this.global.swalLoading('Adding project title');
            this.http.post(this.global.api + 'api.php?action=projectadd', body, option)
                .map(function (response) { return response.json(); })
                .subscribe(function (res) {
                _this.global.swalClose();
                _this.protitle = '';
                _this.produration = '';
                _this.getprojectlist(_this.programid);
            }, function (error) {
                console.log(Error);
                _this.global.swalAlertError();
            });
        }
    };
    UpdateProjectComponent.prototype.removeprojecttitle = function (projectid) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(this.global.api + 'api.php?action=removeprojecttitle&projectid=' + projectid, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.getprojectlist(_this.programid);
        }, function (error) {
            _this.global.swalAlertError();
        });
    };
    UpdateProjectComponent.prototype.removecagency = function (id) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(this.global.api + 'api.php?action=projectdeletecoopagency&id=' + id, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.getcooperating(_this.projectid);
        }, function (error) {
            _this.global.swalAlertError();
        });
    };
    UpdateProjectComponent.prototype.removebudget = function (id, ps, moe, co) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(this.global.api + 'api.php?action=removebudget&bid=' + id, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.balltotal = _this.balltotal - (parseInt(ps) + parseInt(moe) + parseInt(co));
            _this.getbudget(_this.programid);
        }, function (error) {
            _this.global.swalAlertError();
        });
    };
    UpdateProjectComponent.prototype.removebudget2 = function (id, ps, moe, co) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(this.global.api + 'api.php?action=removebudget2&bid=' + id, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.balltotal = _this.balltotal - (parseInt(ps) + parseInt(moe) + parseInt(co));
            _this.getbudget2(_this.projectid);
        }, function (error) {
            _this.global.swalAlertError();
        });
    };
    UpdateProjectComponent.prototype.proposaltype = function (x) {
        if (x == 0) {
            if (this.prog == false) {
                this.prog = true;
                this.proj = false;
            }
            else
                this.prog = false;
        }
        else {
            if (this.proj == false) {
                this.proj = true;
                this.prog = false;
            }
            else
                this.proj = false;
        }
    };
    UpdateProjectComponent.prototype.swalConfirm = function (id, text, ctr, ps, moe, co) {
        var _this = this;
        swal({
            title: text,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then(function (result) {
            if (result.value) {
                if (ctr == 1) {
                    _this.removeprojecttitle(id);
                    // code...
                }
                else if (ctr == 2) {
                    _this.removebudget(id, ps, moe, co);
                }
                else if (ctr == 3) {
                    _this.removecagency(id);
                }
                else if (ctr == 4) {
                    _this.removebudget2(id, ps, moe, co);
                }
                else if (ctr == 5) {
                    _this.removeproponent(id);
                }
            }
        });
    };
    UpdateProjectComponent.prototype.addbudget = function () {
        var _this = this;
        var x = '';
        if (this.fangency1 == undefined || this.fangency1 == "") {
            x = x + "*Source of Fund is Required\n";
        }
        if (this.ps == '' || this.ps == null) {
            x = x + "*PS is required\n";
        }
        if (this.co == '' || this.co == null) {
            x = x + "*Co is required\n";
        }
        if (this.moe == '' || this.moe == null) {
            x = x + "*MOE is required\n";
        }
        if (x == '') {
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append("sof", this.fangency1);
            urlSearchParams.append('ps', this.ps.toString());
            urlSearchParams.append('moe', this.moe.toString());
            urlSearchParams.append('co', this.co.toString());
            urlSearchParams.append('programid', this.programid.toString());
            var body = urlSearchParams.toString();
            var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            header.append("Accept", "application/json");
            header.append("Content-Type", "application/x-www-form-urlencoded");
            var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
            this.proposalcounter = true;
            this.global.requestToken();
            this.global.swalLoading('Adding Budget');
            this.http.post(this.global.api + 'api.php?action=addbudget', body, option)
                .map(function (response) { return response.json(); })
                .subscribe(function (res) {
                _this.balltotal = _this.balltotal + _this.budgettotal;
                _this.global.swalClose();
                _this.fangency1 = '';
                _this.ps = '';
                _this.moe = '';
                _this.co = '';
                _this.budgettotal = 0;
                _this.getbudget(_this.programid);
            }, function (error) {
                console.log(Error);
                _this.global.swalAlertError();
            });
        }
        if (x != '') {
            alert(x);
        }
    };
    UpdateProjectComponent.prototype.addbudget2 = function () {
        var _this = this;
        var x = '';
        if (this.fangency1 == undefined || this.fangency1 == "") {
            x = x + "*Source of Fund is Required\n";
        }
        if (this.ps == '' || this.ps == null) {
            x = x + "*PS is required\n";
        }
        if (this.co == '' || this.co == null) {
            x = x + "*Co is required\n";
        }
        if (this.moe == '' || this.moe == null) {
            x = x + "*MOE is required\n";
        }
        if (x == '') {
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append("sof", this.fangency1);
            urlSearchParams.append('ps', this.ps.toString());
            urlSearchParams.append('moe', this.moe.toString());
            urlSearchParams.append('co', this.co.toString());
            urlSearchParams.append('projectid', this.projectid.toString());
            var body = urlSearchParams.toString();
            var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            header.append("Accept", "application/json");
            header.append("Content-Type", "application/x-www-form-urlencoded");
            var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
            this.proposalcounter = true;
            this.global.requestToken();
            this.global.swalLoading('Adding Budget');
            this.http.post(this.global.api + 'api.php?action=addbudget2', body, option)
                .map(function (response) { return response.text(); })
                .subscribe(function (res) {
                _this.balltotal = _this.balltotal + _this.budgettotal;
                _this.global.swalClose();
                _this.fangency1 = '';
                _this.ps = '';
                _this.moe = '';
                _this.co = '';
                _this.budgettotal = 0;
                _this.getbudget2(_this.projectid);
                console.log(res);
            }, function (error) {
                console.log(Error);
                _this.global.swalAlertError();
            });
        }
        if (x != '') {
            alert(x);
        }
    };
    UpdateProjectComponent.prototype.proposaldone = function (type) {
        var _this = this;
        if (this.prog == true) {
            var x = '';
            if (!(this.projectlists != undefined && this.projectlists[0].id != null)) {
                x = x + "*At least 1 project title is required\n";
            }
            if (!(this.budgetlist != undefined && this.budgetlist[0].id != null)) {
                x = x + "*At least 1 source of fund is required\n";
            }
            if (this.esummary == '' || this.esummary == null) {
                x = x + "*Executive Summary is required\n";
            }
            if (x == '') {
                var urlSearchParams = new URLSearchParams();
                urlSearchParams.append("esummary", this.esummary);
                urlSearchParams.append('pid', this.proposalid.toString());
                var body = urlSearchParams.toString();
                var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
                header.append("Accept", "application/json");
                header.append("Content-Type", "application/x-www-form-urlencoded");
                var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
                this.proposalcounter = true;
                this.global.requestToken();
                this.global.swalLoading('Saving New Proposal...');
                this.http.post(this.global.api + 'api.php?action=proposaldone', body, option)
                    .map(function (response) { return response.json(); })
                    .subscribe(function (res) {
                    _this.global.swalClose();
                    _this.router.navigate(['../main', { outlets: { div: 'proposals' } }]);
                }, function (error) {
                    console.log(Error);
                    _this.global.swalAlertError();
                });
            }
            if (x != '') {
                alert(x);
            }
        }
        else {
            var x = '';
            if (!(this.calists != undefined && this.calists[0].id != null))
                x = x + "*At least 1 Cooperating Agency is required\n";
            if (this.rndstation == '' || this.rndstation == null) {
                x = x + "*Research & Development Station is required\n";
            }
            if (this.clss == 0) {
                x = x + "*Classification is required\n";
            }
            if (this.projectpa.length < 1) {
                x = x + "*Please check at least 1 Priority Agenda is required\n";
            }
            if (this.projectsector.length < 1) {
                x = x + "*Please check at least 1 Sector Commodity is required\n";
            }
            if (this.projectdiscipline.length < 1) {
                x = x + "*Please check at least 1 Discipline is required\n";
            }
            if (this.significance == '' || this.significance == null) {
                x = x + "*Significance is required\n";
            }
            if (this.objectives == '' || this.objectives == null) {
                x = x + "*Objectives is required\n";
            }
            if (this.methodology == '' || this.methodology == null) {
                x = x + "*Methodology is required\n";
            }
            if (this.form.value.avatar == null) {
                x = x + "*Major Activities is required\n";
            }
            else {
                if (this.form.value.avatar.filetype != 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
                    x = x + "*Major Activities attachment must be in xlsx format(excel).\n";
            }
            if (this.targetb == '' || this.targetb == null) {
                x = x + "*Target Beneficiaries is required\n";
            }
            if (this.expectedo == '' || this.expectedo == null) {
                x = x + "*Expected Output is required\n";
            }
            if ((this.month1 == '' || this.month1 == undefined) && (this.year1 == '' || this.year1 == undefined)) {
                x = x + "*Planned Start date is required\n";
            }
            if ((this.month2 == '' || this.month2 == undefined) && (this.year2 == '' || this.year2 == undefined)) {
                x = x + "*Planned Completion date is required\n";
            }
            if (!(this.budgetlist2 != undefined && this.budgetlist2[0].id != null)) {
                x = x + "*At least 1 Estimated Budget is required\n";
            }
            if (x == '') {
                var start = this.year1.toString() + '-' + this.month1.toString() + '-' + '15';
                var completion = this.year2.toString() + '-' + this.month2.toString() + '-' + '15';
                var urlSearchParams = new URLSearchParams();
                urlSearchParams.append("id", this.projectid.toString());
                urlSearchParams.append('title', this.projecttitle);
                urlSearchParams.append('duration', this.projectduration.toString());
                urlSearchParams.append('rndstation', this.rndstation.toString());
                urlSearchParams.append('siteofi', '');
                urlSearchParams.append('significance', this.significance.toString());
                urlSearchParams.append('objectives', this.objectives.toString());
                urlSearchParams.append('literature', '');
                urlSearchParams.append('sbasis', '');
                urlSearchParams.append('methodology', this.methodology);
                urlSearchParams.append('majora', this.form.value.avatar.value);
                urlSearchParams.append('expectedoutput', this.expectedo);
                urlSearchParams.append('targetb', this.targetb.toString());
                urlSearchParams.append('start', start);
                urlSearchParams.append('completion', completion);
                var body = urlSearchParams.toString();
                var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
                header.append("Accept", "application/json");
                header.append("Content-Type", "application/x-www-form-urlencoded");
                var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
                this.proposalcounter = true;
                this.global.requestToken();
                this.global.swalLoading('Saving New Proposal...');
                this.http.post(this.global.api + 'api.php?action=projectinsert', body, option)
                    .map(function (response) { return response.text(); })
                    .subscribe(function (res) {
                    _this.global.swalClose();
                    console.log(res);
                    for (var i = 0; i < _this.projectdiscipline.length; i++) {
                        _this.http.get(_this.global.api + 'api.php?action=spProposal_ProjectDiscipline_Insert_Update&projectid=' + _this.projectid.toString() + "&cid=" + _this.projectdiscipline[i])
                            .map(function (response) { return response.text(); })
                            .subscribe(function (res) {
                        });
                    }
                    for (var i = 0; i < _this.projectpa.length; i++) {
                        _this.http.get(_this.global.api + 'api.php?action=spProposal_ProjectPriorityAgenda_Insert_Update&projectid=' + _this.projectid.toString() + "&cid=" + _this.projectpa[i])
                            .map(function (response) { return response.text(); })
                            .subscribe(function (res) {
                        });
                    }
                    for (var i = 0; i < _this.projectsector.length; i++) {
                        _this.http.get(_this.global.api + 'api.php?action=spProposal_ProjectSector_Insert_Update&projectid=' + _this.projectid.toString() + "&cid=" + _this.projectsector[i])
                            .map(function (response) { return response.text(); })
                            .subscribe(function (res) {
                        });
                    }
                    //mode of implementaion--- automatic
                    var z = '2';
                    if (_this.modeofimplementation == "Single Agency") {
                        z = '1';
                    }
                    _this.http.get(_this.global.api + 'api.php?action=spProposal_ProjectMOI_Insert_Update&projectid=' + _this.projectid.toString() + "&cid=" + z)
                        .map(function (response) { return response.text(); })
                        .subscribe(function (res) {
                    });
                    _this.http.get(_this.global.api + 'api.php?action=projectclassificationupdate&projectid=' + _this.projectid.toString() + "&cid=" + _this.clss)
                        .map(function (response) { return response.text(); })
                        .subscribe(function (res) {
                    });
                    var urlSearchParams = new URLSearchParams();
                    urlSearchParams.append("proposalid", _this.proposalid.toString());
                    urlSearchParams.append('statusid', type);
                    urlSearchParams.append('remarks', '');
                    urlSearchParams.append('userid', _this.global.requestid());
                    urlSearchParams.append('type', '1');
                    var body = urlSearchParams.toString();
                    var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
                    header.append("Accept", "application/json");
                    header.append("Content-Type", "application/x-www-form-urlencoded");
                    var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
                    _this.http.post(_this.global.api + 'api.php?action=statuschange', body, option)
                        .map(function (response) { return response.text(); })
                        .subscribe(function (res) {
                    });
                    if (type == 1) {
                        _this.global.swalSuccess("Proposal Saved as Draft!");
                    }
                    else
                        _this.global.swalSuccess("Proposal has been submitted!");
                    setTimeout(function () {
                        _this.router.navigate(['../main', { outlets: { div: 'proposals' } }]);
                    }, 1500);
                    //
                }, function (error) {
                    console.log(Error);
                    _this.global.swalAlertError();
                });
            }
            if (x != '') {
                alert(x);
            }
        }
    };
    UpdateProjectComponent.prototype.noclick = function () {
        this.dialogRef.close(0);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], UpdateProjectComponent.prototype, "fileInput", void 0);
    UpdateProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-update-project',
            template: __webpack_require__("../../../../../src/app/proposal/new-proposal/update-project/update-project.component.html"),
            styles: [__webpack_require__("../../../../../src/app/proposal/new-proposal/update-project/update-project.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1__global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], UpdateProjectComponent);
    return UpdateProjectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/proposal/proposals/proposals.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='proposals' style=\"padding:20px\" >\n  <h3>Proposals</h3>\n  <hr>\n\n<table style=\"width: 97%;margin: auto;\">\n  <tr><td>\n\n            <mat-form-field  class=\"npinput2\" style=\"width: 237px\" required>\n              <mat-label>Filter by:</mat-label>\n              <mat-select >\n                <mat-option value=\"3\">\n                 status\n                </mat-option>\n                <mat-option value=\"3\">\n                 submitted\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n</td>\n    <td style=\"text-align: right;width: 237px\" >\n       <mat-form-field style=\"width: 180px !important\">\n              <mat-label>Search:</mat-label>\n          <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n          </mat-form-field>\n        <button mat-mini-fab color=\"primary\">\n          <mat-icon><mat-icon>filter_list</mat-icon></mat-icon>\n        </button>\n    </td>\n  </tr>\n</table>\n    \n\n\n    <mat-table #table [dataSource]=\"dataSource\" matSort>\n\n   <ng-container matColumnDef=\"title\">\n      <mat-header-cell *matHeaderCellDef>Project Title</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">\n      <div class=\"rolerow\">\n       <b>{{element.GeneralTitle}}</b> <br>\n        <div class=\"action\">\n      <a href=\"javascript:void(0)\" class=\"actionlink\" (click)=\"openDialogUpdate(element.id)\"> Update Proposal</a> | <a href=\"javascript:void(0)\" class=\"actionlink\" style=\"color: orange\" (click)=\"removeRole(element.id)\">\n        Remove</a>\n    </div>\n    </div>\n    </mat-cell>\n    </ng-container>\n\n   <ng-container matColumnDef=\"fagency\">\n      <mat-header-cell *matHeaderCellDef> Funding Agency </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">\n      <div class=\"rolerow\">\n       <b>{{element.FundingAgency}}</b>\n    </div>\n    </mat-cell>\n    </ng-container>\n\n   <ng-container matColumnDef=\"datecreated\">\n      <mat-header-cell *matHeaderCellDef > Date Created </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">\n      <div class=\"rolerow\">\n       <b>{{element.datecreated| date :'mediumDate'}} @ {{element.datecreated| date :'shortTime'}}</b>\n    </div>\n    </mat-cell>\n    </ng-container>\n\n   <ng-container matColumnDef=\"status\">\n      <mat-header-cell *matHeaderCellDef  style=\"width: 150px;flex: 0 0 75px;\"> Status </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\" style=\"width: 150px;flex: 0 0 75px;\">\n      <div class=\"rolerow\">\n       <b>{{element.status[0].name}}</b>\n    </div>\n    </mat-cell>\n    </ng-container>\n\n\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\n        </mat-table>\n        <mat-paginator \n             #paginator\n            [length]=\"100\"\n              [pageSize]=\"10\"\n              [pageSizeOptions]=\"[5, 10, 25, 100]\">\n    </mat-paginator>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/proposal/proposals/proposals.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#proposals /deep/.mat-tab-label, #proposals /deep/.mat-tab-label-active {\n  min-width: 100px !important;\n  padding: 3px !important;\n  margin: 3px !important; }\n\n#proposals .mat-form-field-infix {\n  width: 100% !important; }\n\n#proposals .example-form {\n  min-width: 150px;\n  max-width: 800px;\n  width: 100%; }\n\n#proposals input {\n  width: 148px; }\n\n#proposals .example-full-width {\n  width: 100%; }\n\n#proposals .txtid {\n  width: calc(100% - 50px); }\n\n#proposals .example-full-width2 {\n  width: 169px; }\n\n#proposals .example-full-width3 {\n  width: 60px; }\n\n#proposals ::ng-deep .mat-card-header {\n  background-color: #294a70 !important;\n  padding: 15px 5px 5px 5px !important;\n  color: white; }\n\n#proposals ::ng-deep .mat-card-header * {\n  color: white; }\n\n#proposals ::ng-deep .mat-card {\n  padding: 0 !important; }\n\n#proposals ::ng-deep .mat-card-content {\n  padding: 15px !important; }\n\n#proposals .mat-form-field-infix {\n  width: auto !important; }\n\n#proposals table {\n  width: 100%; }\n\n#proposals .action {\n  padding-top: 7px;\n  opacity: 0; }\n\n#proposals .rolerow:hover .action {\n  opacity: 1; }\n\n#proposals .rolerow {\n  padding-top: 10px;\n  padding-bottom: 10px; }\n\n#proposals .actionlink {\n  text-decoration: none; }\n\n#proposals a {\n  color: #294a70; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/proposal/proposals/proposals.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProposalsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_service__ = __webpack_require__("../../../../../src/app/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var swal = __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default.a;
var ProposalsComponent = /** @class */ (function () {
    function ProposalsComponent(global, http) {
        this.global = global;
        this.http = http;
        this.displayedColumns = ['title', 'fagency', 'datecreated', 'status'];
        this.draft = [];
        this.submmited = [];
        this.global.swalLoading('Loading Proposals...');
    }
    ProposalsComponent.prototype.ngOnInit = function () {
        this.createTable();
    };
    ProposalsComponent.prototype.tabClick = function (tab) {
        this.createTablestatus(tab.index);
    };
    ProposalsComponent.prototype.createTable = function () {
        var _this = this;
        this.draft = [];
        this.submmited = [];
        this.http.get(this.global.api + 'api.php?action=proposallists&user=' + this.global.userid, this.global.option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.tableArr = res;
            console.log(res);
            for (var i = 0; i < _this.tableArr.length; i++) {
                if (_this.tableArr[i].status[0].name == 'Draft') {
                    _this.draft.push(_this.tableArr[i]);
                }
                else if (_this.tableArr[i].status[0].name == 'Submitted') {
                    _this.submmited.push(_this.tableArr[i]);
                }
            }
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatTableDataSource */](_this.tableArr);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
            _this.global.swalClose();
        }, function (Error) {
            //console.log(Error);
            console.log(Error);
        });
    };
    ProposalsComponent.prototype.createTablestatus = function (text) {
        if (text == 0) {
            this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatTableDataSource */](this.draft);
        }
        else if (text == 1) {
            this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatTableDataSource */](this.submmited);
        }
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    ProposalsComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filterPredicate = function (data, filterValue) {
            return data.GeneralTitle.trim().toLowerCase().indexOf(filterValue) !== -1;
        };
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    ProposalsComponent.prototype.applyFilterstatus = function (filterValue) {
        this.dataSource.filterPredicate = function (data, filterValue) {
            return data.status.trim().toLowerCase().indexOf(filterValue) !== -1;
        };
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    ProposalsComponent.prototype.applyFilteragency = function (filterValue) {
        this.dataSource.filterPredicate = function (data, filterValue) {
            return data.status.trim().toLowerCase().indexOf(filterValue) !== -1;
        };
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    ProposalsComponent.prototype.removeRole = function (id) {
        this.swalConfirm("Are you sure?", "You won't be able to revert this!", 'warning', 'Delete Proposal', 'Proposal has been Removed', '', 'role', id);
    };
    ProposalsComponent.prototype.swalConfirm = function (title, text, type, button, d1, d2, remove, id) {
        var _this = this;
        swal({
            title: title,
            text: text,
            type: type,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: button
        }).then(function (result) {
            if (result.value) {
                if (remove == 'role') {
                    _this.global.swalLoading('Loading Proposals...');
                    _this.http.get(_this.global.api + 'api.php?action=proposaldelete&proposalid=' + id)
                        .map(function (response) { return response.json(); })
                        .subscribe(function (res) {
                        _this.createTable();
                    }, function (Error) {
                        //console.log(Error);
                        _this.global.swalAlertError();
                        console.log(Error);
                    });
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatSort */])
    ], ProposalsComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('paginator'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatPaginator */])
    ], ProposalsComponent.prototype, "paginator", void 0);
    ProposalsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-proposals',
            template: __webpack_require__("../../../../../src/app/proposal/proposals/proposals.component.html"),
            styles: [__webpack_require__("../../../../../src/app/proposal/proposals/proposals.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], ProposalsComponent);
    return ProposalsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/research/new-research/manage-author/manage-author.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Add Research Author</h3>\n<table style=\"width: 100%\">\n\t<tr>\n\t\t<td style=\"width: 110px\">\n\t\t\tFirst Name: \n\t\t</td>\n\t\t<td>\n\t\t\t<mat-form-field class=\"npinput\"  style=\"width: 100%\">\n              <input matInput placeholder=\"First Name\"  [(ngModel)]=\"fname\" >\n              <mat-hint></mat-hint>\n            </mat-form-field>\n\t\t</td>\n\t</tr>\n\t<tr>\n\t\t<td>\n\t\t\tMiddle Name: \n\t\t</td>\n\t\t<td>\n\t\t\t<mat-form-field class=\"npinput\"  style=\"width: 100%\">\n              <input matInput placeholder=\"Middle Name\"  [(ngModel)]=\"mname\" >\n              <mat-hint></mat-hint>\n            </mat-form-field>\n\t\t</td>\n\t</tr>\n\t<tr>\n\t\t<td>\n\t\t\tLast Name: \n\t\t</td>\n\t\t<td>\n\t\t\t<mat-form-field class=\"npinput\"  style=\"width: 100%\">\n              <input matInput placeholder=\"Last Name\"  [(ngModel)]=\"lname\" >\n              <mat-hint></mat-hint>\n            </mat-form-field>\n\t\t</td>\n\t</tr>\n\t<tr>\n\t\t<td>\n\t\t\tSuffix: \n\t\t</td>\n\t\t<td>\n\t\t\t<mat-form-field class=\"npinput\"  style=\"width: 100%\">\n              <input matInput placeholder=\"Suffix\"  [(ngModel)]=\"sname\" >\n              <mat-hint></mat-hint>\n            </mat-form-field>\n\t\t</td>\n\t</tr>\n</table>\n            <button mat-button class=\"buttonblue\" (click)=\"noclick(0)\" >Back</button>\n            <button mat-button class=\"buttonblue\" style=\"float: right;\" (click)=\"noclick(1)\">Save</button>"

/***/ }),

/***/ "../../../../../src/app/research/new-research/manage-author/manage-author.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/research/new-research/manage-author/manage-author.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageAuthorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_service__ = __webpack_require__("../../../../../src/app/global.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var ManageAuthorComponent = /** @class */ (function () {
    function ManageAuthorComponent(global, http, dialogRef, data, dialog) {
        this.global = global;
        this.http = http;
        this.dialogRef = dialogRef;
        this.data = data;
        this.dialog = dialog;
        this.fname = '';
        this.lname = '';
        this.mname = '';
        this.sname = '';
    }
    ManageAuthorComponent.prototype.noclick = function (x) {
        var _this = this;
        if (x == 0) {
            this.dialogRef.close(0);
        }
        else {
            var y = '';
            if ((this.fname == null || this.fname == ''))
                y = y + "*First Name is required\n";
            if ((this.lname == null || this.lname == ''))
                y = y + "*Last Name is required\n";
            if (y == '') {
                // code...
                var urlSearchParams = new URLSearchParams();
                urlSearchParams.append("fname", this.fname.toString());
                urlSearchParams.append('mname', this.mname);
                urlSearchParams.append('lname', this.lname);
                urlSearchParams.append('sname', this.sname);
                urlSearchParams.append('cid', this.global.useraccess.companyid);
                var body = urlSearchParams.toString();
                var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                header.append("Accept", "application/json");
                header.append("Content-Type", "application/x-www-form-urlencoded");
                var option = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: header });
                this.global.swalLoading('Adding Author...');
                this.http.post(this.global.api + 'api.php?action=spAuthor_Insert', body, option)
                    .map(function (response) { return response.text(); })
                    .subscribe(function (res) {
                    console.log(res);
                    _this.global.swalClose();
                    _this.dialogRef.close(1);
                }, function (error) {
                    console.log(Error);
                    _this.global.swalAlertError();
                });
            }
            else
                alert(y);
        }
    };
    ManageAuthorComponent.prototype.ngOnInit = function () {
    };
    ManageAuthorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-manage-author',
            template: __webpack_require__("../../../../../src/app/research/new-research/manage-author/manage-author.component.html"),
            styles: [__webpack_require__("../../../../../src/app/research/new-research/manage-author/manage-author.component.scss")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDialog */]])
    ], ManageAuthorComponent);
    return ManageAuthorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/research/new-research/new-research.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"padding:20px\" id=\"new-research\">\n\t<h3>New Research</h3>\n\t<hr>\n\t<mat-horizontal-stepper   labelPostion=\"botton\" [linear]=\"true\" #stepper>\n      <mat-step>\n          <ng-template matStepLabel>Research Details</ng-template>\n          <div>\n\n            <mat-form-field class=\"npinput\">\n              <input matInput placeholder=\"Research Title\" required [(ngModel)]=\"inputtitle\">\n            </mat-form-field>\n\n            <div style=\"height: 10px;\"></div>\n            <mat-form-field  class=\"npinput\">\n              <textarea matInput placeholder=\"Abstract\" required style=\"height: 80px;\"  [(ngModel)]=\"inputabstract\" ></textarea>\n            </mat-form-field>\n\n\n            <br>\n           \n            <table style=\"width: 100%\">\n              <tr>\n                <td style=\"width: 50%\"> \n                  <mat-form-field  class=\"npinput2\">\n                    <mat-label>Degree Level</mat-label>\n                    <mat-select  [(ngModel)]=\"inputdegreelevel\">\n                      <mat-option value=\"{{c.id}}\"  *ngFor=\"let c of degreelevel\">\n                        {{c.name}} - {{c.description}}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </td>\n              </tr>\n            </table><p><b>Company: </b>{{global.useraccess.companyname}}</p>\n          </div>\n\n          <div>\n            <br>\n            <button mat-button type=\"submit\" class=\"buttonblue\" (click)=\"add(stepper)\">Next</button>\n          </div>\n      </mat-step>\n      <mat-step>\n\n          <ng-template matStepLabel>Other Information</ng-template>\n\n          <h4>Title: {{inputtitle}}</h4>\n          <p><b>Abstract:</b> {{inputabstract}}</p><br>\n          <mat-accordion>\n            <mat-expansion-panel>\n              <mat-expansion-panel-header>\n                <mat-panel-title>\n                  Author\n                </mat-panel-title>\n              </mat-expansion-panel-header>\n                    <table style=\"width: 100%\">\n                      <tr>\n                        <td style=\"width: 70%\">\n                            <mat-form-field  class=\"npinput2\" style=\"width: 100%\">\n                              <mat-label>Author</mat-label>\n                              <mat-select  [(ngModel)]=\"author\">\n                                <mat-option value=\"{{c.id}}\"  *ngFor=\"let c of authorsarray\">\n                                  {{c.name}} <input type=\"button\" (click)=\"swalConfirm(c.id,'Delete Author...',6,null,null,null)\" style=\"float:right;color: white;background-color: #FF0000;border: none;margin-top: 15px\" value=\"delete\">\n\n                                </mat-option>\n                              </mat-select>\n                            </mat-form-field></td>\n                      <td style=\"width: 130px\">\n                          <button mat-raised-button (click)=\"insertauthor()\" class=\"buttonblue\" >\n                              <mat-icon style=\"font-size:20px\">add</mat-icon> Add Author</button>\n                         \n                      </td>\n                      <td>\n                        <button  class=\"buttonblue\" style=\"border-radius: 10px;border: none;height: 32px;padding-top: 5px;\" (click)=\"openDialogauthor()\"><mat-icon style=\"font-size:20px\">assignment_ind</mat-icon></button>\n                      </td>\n                      </tr>\n                    </table>\n\n                    <div  *ngIf=\"authorsarrayinresearch!=undefined\" >\n                      <div  *ngIf=\"authorsarrayinresearch[0].id!=null\" >\n                        <table style=\"width: 100%\">\n                          <tr  *ngFor=\"let list of authorsarrayinresearch\">\n                            <td style=\"width: 70%\"><b>{{list.name}}</b></td>\n                          <td style=\"width: 30%\">\n                              <button  mat-button (click)=\"swalConfirm(list.id,'Remove Author?',1,null,null,null)\"  class=\"buttonred\" >\n                                  <mat-icon style=\"font-size:20px\">remove</mat-icon> Remove</button>\n                          </td>\n                          </tr>\n                        </table>\n                    </div>\n                    </div>\n            </mat-expansion-panel>\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                  <mat-panel-title>\n                    Keywords\n                  </mat-panel-title>\n                </mat-expansion-panel-header>\n                   <table style=\"width: 100%\">\n                        <tr>\n                          <td style=\"width: 70%\">\n                        <mat-form-field class=\"npinput\"  style=\"width: 100%\">\n                          <input matInput placeholder=\"Keyword\"  [(ngModel)]=\"keyword\" >\n                          <mat-hint></mat-hint>\n                        </mat-form-field></td>\n                        <td style=\"width: 30%\">\n                            <button mat-raised-button (click)=\"insertkeyword()\" class=\"buttonblue\" >\n                                <mat-icon style=\"font-size:20px\">add</mat-icon> Add Keyword</button>\n                        </td>\n                        </tr>\n                      </table>\n\n                      <div  *ngIf=\"keywordarray!=undefined\" >\n                        <div  *ngIf=\"keywordarray[0].id!=null\" >\n                          <table style=\"width: 100%\">\n                            <tr  *ngFor=\"let list of keywordarray\">\n                              <td style=\"width: 70%\"><b>{{list.keyword}}</b></td>\n                            <td style=\"width: 30%\">\n                                <button  mat-button (click)=\"swalConfirm(list.id,'Remove Keyword?',2,null,null,null)\"  class=\"buttonred\" >\n                                    <mat-icon style=\"font-size:20px\">remove</mat-icon> Remove</button>\n                            </td>\n                            </tr>\n                          </table>\n                      </div>\n                      </div>\n              </mat-expansion-panel>\n              <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                  <mat-panel-title>\n                    Discipline\n                  </mat-panel-title>\n                </mat-expansion-panel-header>\n                   <table style=\"width: 100%\">\n                        <tr>\n                          <td style=\"width: 70%\">\n                              <mat-form-field  class=\"npinput2\" style=\"width: 100%\">\n                                <mat-label>Discipline</mat-label>\n                                <mat-select  [(ngModel)]=\"inputdiscipline\">\n                                  <mat-option value=\"{{c.id}}\"  *ngFor=\"let c of discipline\">\n                                    {{c.desc}}\n                                  </mat-option>\n                                </mat-select>\n                              </mat-form-field></td>\n                        <td style=\"width: 30%\">\n                            <button mat-raised-button (click)=\"insertdiscipline()\" class=\"buttonblue\" >\n                                <mat-icon style=\"font-size:20px\">add</mat-icon> Add Discipline</button>\n                        </td>\n                        </tr>\n                      </table>\n\n                      <div  *ngIf=\"disciplinearrayinresearch!=undefined\" >\n                        <div  *ngIf=\"disciplinearrayinresearch[0].id!=null\" >\n                          <table style=\"width: 100%\">\n                            <tr  *ngFor=\"let list of disciplinearrayinresearch\">\n                              <td style=\"width: 70%\"><b>{{list.desc}}</b></td>\n                            <td style=\"width: 30%\">\n                                <button  mat-button (click)=\"swalConfirm(list.id,'Remove Discipline?',3,null,null,null)\"  class=\"buttonred\" >\n                                    <mat-icon style=\"font-size:20px\">remove</mat-icon> Remove</button>\n                            </td>\n                            </tr>\n                          </table>\n                      </div>\n                      </div>\n              </mat-expansion-panel>\n              <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                  <mat-panel-title>\n                    Funding Agency\n                  </mat-panel-title>\n                </mat-expansion-panel-header>\n                <table style=\"width: 100%\">\n                        <tr>\n                          <td style=\"width: 70%\">\n                              <mat-form-field  class=\"npinput2\" style=\"width: 100%\">\n                                <mat-label>Funding Agency</mat-label>\n                                <mat-select  [(ngModel)]=\"inputfundingagency\">\n                                  <mat-option value=\"{{c.id}}\"  *ngFor=\"let c of fundingagency\">\n                                    {{c.name}}\n                                  </mat-option>\n                                </mat-select>\n                              </mat-form-field></td>\n                        <td style=\"width: 30%\">\n                            <button mat-raised-button (click)=\"insertfundingagency()\" class=\"buttonblue\" >\n                                <mat-icon style=\"font-size:20px\">add</mat-icon> Add Funding Agency</button>\n                        </td>\n                        </tr>\n                      </table>\n\n                      <div  *ngIf=\"fundingagencyarrayinresearch!=undefined\" >\n                        <div  *ngIf=\"fundingagencyarrayinresearch[0].id!=null\" >\n                          <table style=\"width: 100%\">\n                            <tr  *ngFor=\"let list of fundingagencyarrayinresearch\">\n                              <td style=\"width: 70%\"><b>{{list.name}}</b></td>\n                            <td style=\"width: 30%\">\n                                <button  mat-button (click)=\"swalConfirm(list.id,'Remove Funding Agency?',4,null,null,null)\"  class=\"buttonred\" >\n                                    <mat-icon style=\"font-size:20px\">remove</mat-icon> Remove</button>\n                            </td>\n                            </tr>\n                          </table>\n                      </div>\n                      </div>\n              </mat-expansion-panel>\n              <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                  <mat-panel-title>\n                    Documents\n                  </mat-panel-title>\n                </mat-expansion-panel-header>\n                   <p><b>Main Document</b> <small>(PDF File.)</small></p>\n            <form [formGroup]=\"form\">\n              <div class=\"form-group\">\n                <input type=\"file\" id=\"avatar\" (change)=\"onFileChange($event)\" #fileInput class=\"inputfile\" />\n                <label for=\"avatar\">{{maindoclabel}}</label>\n                <button mat-button type=\"button\" class=\"btn btn-sm btn-default\" (click)=\"clearFile()\">clear file</button>\n              </div>\n            </form>\n\n\n\n            <p><b>Supporting Documents</b> <small>(PDF File, Optional)</small></p>\n            <form [formGroup]=\"form2\">\n              <div class=\"form-group\">\n                <input type=\"file\" id=\"avatar2\" (change)=\"onFileChange2($event)\" #fileInput2 class=\"inputfile\" />\n                <label for=\"avatar2\">{{supdoclabel}}</label>\n                <button mat-button type=\"button\" class=\"btn btn-sm btn-default\" (click)=\"clearFile2()\">clear file</button>&nbsp;&nbsp;\n                <button mat-button class=\"buttonblue\" (click)='insertdocument()' >Add</button>\n              </div>\n              </form>\n              <div style=\"height: 10px\"></div>\n          <div  *ngIf=\"documentarray!=undefined\" >\n            <div  *ngIf=\"documentarray[0].id!=null\" >\n              <table style=\"width: 100%\">\n                <tr  *ngFor=\"let list of documentarray\">\n                  <td style=\"width: 70%\"><b>{{list.name}}</b></td>\n                <td style=\"width: 30%\">\n                    <button  mat-button (click)=\"swalConfirm(list.id,'Remove Supporting Document?',5,null,null,null)\"  class=\"buttonred\" >\n                        <mat-icon style=\"font-size:20px\">remove</mat-icon> Remove</button>\n                </td>\n                </tr>\n              </table>\n          </div>\n          </div>\n              </mat-expansion-panel>\n               \n              <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                  <mat-panel-title>\n                    Publication Information\n                  </mat-panel-title>\n                    <mat-panel-description>\n                      (Optional)\n                    </mat-panel-description>\n                </mat-expansion-panel-header>\n                   <table style=\"width: 100%\">\n                        <tr>\n                          <td style=\"width: 70%\">\n                              <mat-form-field class=\"npinput\"  style=\"width: 100%\">\n                                <input matInput placeholder=\"Title\"  [(ngModel)]=\"pubtitle\" >\n                              </mat-form-field>\n                            </td>\n                        </tr>\n                        <tr>\n                          <td style=\"width: 70%\">\n                              <mat-form-field class=\"npinput\"  style=\"width: 100%\">\n                                <input matInput placeholder=\"Volume\"  [(ngModel)]=\"pubvolume\" >\n                              </mat-form-field>\n                            </td>\n                        </tr>\n                        <tr>\n                          <td style=\"width: 70%\">\n                              <mat-form-field class=\"npinput\"  style=\"width: 100%\">\n                                <input matInput placeholder=\"Issue\"  [(ngModel)]=\"pubissue\" >\n                              </mat-form-field>\n                            </td>\n                        </tr>\n                        <tr>\n                          <td style=\"width: 30%\">\n                              <mat-form-field class=\"npinput\"  style=\"width: 30%\">\n                                <input matInput placeholder=\"Year\" type=\"number\" [(ngModel)]=\"pubyear\" >\n                              </mat-form-field>\n                            </td>\n                        </tr>\n                        <tr>\n                          <td style=\"width: 70%\">\n                              <mat-form-field class=\"npinput\"  style=\"width: 100%\">\n                                <input matInput placeholder=\"Publisher\"  [(ngModel)]=\"pubpublisher\" >\n                              </mat-form-field>\n                            </td>\n                        </tr>\n                      </table>\n                      <table style=\"width: 100%\">\n                        <tr>\n                          <td style=\"width: 70%\">\n                            \n                          </td>\n                          <td style=\"width: 30%\"> <button mat-button class=\"buttonblue\" (click)=\"insertpublicationinfo()\">Add Publication Info</button></td>\n                        </tr>\n                      </table>\n                    <br>\n                      <div  *ngIf=\"publicationarray!=undefined\" >\n                        <div  *ngIf=\"publicationarray[0].id!=null\" >\n                          <table style=\"width: 100%\" cellpadding=\"3\">\n                            <tr>\n                              <th style=\"text-align: left; border-right: 1px solid gray;border-bottom: 1px solid gray;\">Title</th>\n                              <th style=\"text-align: left; border-right: 1px solid gray;border-bottom: 1px solid gray;\">Volume</th>\n                              <th style=\"text-align: left; border-right: 1px solid gray;border-bottom: 1px solid gray;\">Issue</th>\n                              <th style=\"text-align: left; border-right: 1px solid gray;border-bottom: 1px solid gray;\">Year</th>\n                              <th style=\"border-bottom: 1px solid gray;\">Publisher</th>\n                              <th></th>\n                            </tr>\n                            <tr  *ngFor=\"let list of publicationarray\">\n                              <td style=\" border-right: 1px solid gray;border-bottom: 1px solid gray;\">{{list.title}}</td>\n                              <td style=\" border-right: 1px solid gray;border-bottom: 1px solid gray;\">{{list.volume}}</td>\n                              <td style=\" border-right: 1px solid gray;border-bottom: 1px solid gray;\">{{list.issue}}</td>\n                              <td style=\" border-right: 1px solid gray;border-bottom: 1px solid gray;\">{{list.year}}</td>\n                              <td style=\"border-bottom: 1px solid gray;\">{{list.publisher}}</td>\n                              <td style=\"width: 115px\">\n                                <button  mat-button (click)=\"swalConfirm(list.id,'Remove Publication Information?',7,null,null,null)\"  class=\"buttonred\" >\n                                <mat-icon style=\"font-size:20px\">remove</mat-icon> Remove</button>\n                              </td>\n                              <td></td>\n                            </tr>\n                          </table>\n                      </div>\n                      </div>\n              </mat-expansion-panel>\n          </mat-accordion>\n\n          \n            \n              <br>\n              <!--<p>Note: Add <a href=\"#\">Publishing Information</a> if the Research has been published</p>\n              --><br><br>\n            <button mat-button matStepperPrevious class=\"buttonblue\" >Back</button>\n            <button mat-button class=\"buttonblue\" style=\"float: right;\"  (click)=\"researchdone(1)\">Submit Research.</button>\n            <button mat-button style=\"float: right;\" (click)=\"researchdone(0)\">Save as Draft</button>\n     \n      </mat-step>\n    </mat-horizontal-stepper>\n</div>"

/***/ }),

/***/ "../../../../../src/app/research/new-research/new-research.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#new-research .npinput {\n  width: 100%; }\n\n#new-research .npinput2 {\n  width: 45%; }\n\n#new-research div.mat-checkbox-inner-container {\n  margin-right: 10px !important; }\n\n#new-research .inputfile {\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1; }\n\n#new-research .inputfile + label {\n  font-size: 15px;\n  font-weight: 700;\n  color: white;\n  background-color: #262626;\n  display: inline-block;\n  padding: 10px; }\n\n#new-research .inputfile + label {\n  cursor: pointer;\n  /* \"hand\" cursor */ }\n\n#new-research .inputfile:focus + label,\n#new-research .inputfile + label:hover {\n  background-color: #294a70; }\n\n.mat-form-field-infix {\n  width: 100px !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/research/new-research/new-research.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewResearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_service__ = __webpack_require__("../../../../../src/app/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__manage_author_manage_author_component__ = __webpack_require__("../../../../../src/app/research/new-research/manage-author/manage-author.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var swal = __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default.a;
var NewResearchComponent = /** @class */ (function () {
    function NewResearchComponent(dialog, fb, router, global, http) {
        var _this = this;
        this.dialog = dialog;
        this.fb = fb;
        this.router = router;
        this.global = global;
        this.http = http;
        this.loading = false;
        this.loading2 = false;
        this.maindoclabel = 'Choose a file...';
        this.supdoclabel = "Choose a file...";
        this.counter = 1;
        this.http.get(this.global.api + 'api.php?action=company_List', this.global.option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.company = res;
        });
        this.http.get(this.global.api + 'api.php?action=degreelevel', this.global.option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.degreelevel = res;
        });
        this.inputcompany = this.global.useraccess.companyid;
    }
    NewResearchComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["j" /* Validators */].required],
            avatar: null
        });
        this.form2 = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["j" /* Validators */].required],
            avatar: null
        });
    };
    NewResearchComponent.prototype.getauthorselect = function () {
        var _this = this;
        this.http.get(this.global.api + 'api.php?action=spAuthor_listnot&cid=' + this.global.useraccess.companyid + '&rid=' + this.researchid, this.global.option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.authorsarray = res;
        });
    };
    NewResearchComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file_1 = event.target.files[0];
            reader.readAsDataURL(file_1);
            reader.onload = function () {
                _this.form.get('avatar').setValue({
                    filename: file_1.name,
                    filetype: file_1.type,
                    value: reader.result.toString().split(',')[1]
                });
                if (_this.form.value.avatar != null) {
                    _this.maindoclabel = file_1.name;
                }
                else {
                    _this.maindoclabel = "Choose a file";
                }
            };
        }
    };
    NewResearchComponent.prototype.onFileChange2 = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file_2 = event.target.files[0];
            reader.readAsDataURL(file_2);
            reader.onload = function () {
                _this.form2.get('avatar').setValue({
                    filename: file_2.name,
                    filetype: file_2.type,
                    value: reader.result.toString().split(',')[1]
                });
                if (_this.form2.value.avatar != null) {
                    _this.supdoclabel = file_2.name;
                }
                else {
                    _this.supdoclabel = "Choose a file";
                }
            };
        }
    };
    NewResearchComponent.prototype.clearFile2 = function () {
        //this.form.value.avatar.value);
        this.supdoclabel = "Choose a file...";
        this.form2.get('avatar').setValue(null);
        this.fileInput2.nativeElement.value = '';
    };
    NewResearchComponent.prototype.clearFile = function () {
        //this.form.value.avatar.filetype);
        //this.form.value.avatar.value);
        this.maindoclabel = "Choose a file...";
        this.form.get('avatar').setValue(null);
        this.fileInput.nativeElement.value = '';
    };
    NewResearchComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    NewResearchComponent.prototype.insertpublicationinfo = function () {
        var _this = this;
        var x = '';
        if (this.pubtitle == undefined || this.pubtitle == '') {
            x = x + "*Publication Title is required\n";
        }
        if (this.pubvolume == undefined || this.pubvolume == '') {
            x = x + "*Publication Volume is required\n";
        }
        if (this.pubissue == undefined || this.pubissue == '') {
            x = x + "*Publication Issue is required\n";
        }
        if (this.pubyear == undefined || this.pubyear == '') {
            x = x + "*Publication Year is required\n";
        }
        if (this.pubpublisher == undefined || this.pubpublisher == '') {
            x = x + "*Publisher is required\n";
        }
        if (x == '') {
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append("rid", this.researchid.toString());
            urlSearchParams.append("pubtitle", this.pubtitle.toString());
            urlSearchParams.append('pubvolume', this.pubvolume.toString());
            urlSearchParams.append('pubissue', this.pubissue.toString());
            urlSearchParams.append('pubyear', this.pubyear.toString());
            urlSearchParams.append('pubpublisher', this.pubpublisher.toString());
            var body = urlSearchParams.toString();
            var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            header.append("Accept", "application/json");
            header.append("Content-Type", "application/x-www-form-urlencoded");
            var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
            this.global.swalLoading('Adding Publication Information...');
            this.http.post(this.global.api + 'api.php?action=spResearchPublicationDetails_Insert', body, option)
                .map(function (response) { return response.json(); })
                .subscribe(function (res) {
                _this.getpubinfo(_this.researchid);
                _this.global.swalClose();
            }, function (error) {
                console.log(Error);
                _this.global.swalAlertError();
            });
        }
        else
            alert(x);
    };
    NewResearchComponent.prototype.getpubinfo = function (rid) {
        var _this = this;
        this.http.get(this.global.api + 'api.php?action=spResearchPublicationDetails_Select&rid=' + rid)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.publicationarray = res;
            _this.pubtitle = '';
            _this.pubvolume = '';
            _this.pubissue = '';
            _this.pubyear = '';
            _this.pubpublisher = '';
        });
    };
    NewResearchComponent.prototype.removepubinfo = function (id) {
        var _this = this;
        this.http.get(this.global.api + 'api.php?action=spResearchPublicationDetails_Delete&id=' + id)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.getpubinfo(_this.researchid);
        }, function (error) {
            _this.global.swalAlertError();
        });
    };
    NewResearchComponent.prototype.insertdocument = function () {
        var _this = this;
        var x = '';
        if (this.supdoclabel == 'Choose a file...') {
            x = x + "*Supporting document is required\n";
        }
        if (x == '') {
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append("rid", this.researchid.toString());
            urlSearchParams.append('name', this.form2.value.avatar.filename);
            urlSearchParams.append('doc', this.form2.value.avatar.value);
            urlSearchParams.append('type', '1');
            urlSearchParams.append('status', '0');
            var body = urlSearchParams.toString();
            var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            header.append("Accept", "application/json");
            header.append("Content-Type", "application/x-www-form-urlencoded");
            var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
            this.global.swalLoading('Adding Supporting Document...');
            this.http.post(this.global.api + 'api.php?action=spResearchDocument_Insert', body, option)
                .map(function (response) { return response.json(); })
                .subscribe(function (res) {
                _this.getdocument(_this.researchid);
                _this.global.swalClose();
            }, function (error) {
                console.log(Error);
                _this.global.swalAlertError();
            });
        }
        else
            alert(x);
    };
    NewResearchComponent.prototype.getdocument = function (rid) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(this.global.api + 'api.php?action=spResearchDocument_Select&rid=' + rid + "&type=1", option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.documentarray = res;
            _this.clearFile2();
        });
    };
    NewResearchComponent.prototype.removedocument = function (id) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(this.global.api + 'api.php?action=spResearchDocument_Delete&id=' + id, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.getdocument(_this.researchid);
        }, function (error) {
            _this.global.swalAlertError();
        });
    };
    NewResearchComponent.prototype.insertauthor = function () {
        var _this = this;
        var x = '';
        if (this.author == undefined || this.author == "") {
            x = x + "*Author is required\n";
        }
        if (x == '') {
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append("rid", this.researchid.toString());
            urlSearchParams.append('aid', this.author.toString());
            var body = urlSearchParams.toString();
            var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            header.append("Accept", "application/json");
            header.append("Content-Type", "application/x-www-form-urlencoded");
            var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
            this.global.swalLoading('Adding Author');
            this.http.post(this.global.api + 'api.php?action=spResearchAuthor_Insert_Update', body, option)
                .map(function (response) { return response.json(); })
                .subscribe(function (res) {
                _this.getauthor(_this.researchid);
                _this.author = '';
            }, function (error) {
                console.log(Error);
                _this.global.swalAlertError();
            });
        }
        else
            alert(x);
    };
    NewResearchComponent.prototype.swalConfirm = function (id, text, ctr, ps, moe, co) {
        var _this = this;
        swal({
            title: text,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then(function (result) {
            if (result.value) {
                if (ctr == 1) {
                    _this.removeauthor(id);
                }
                if (ctr == 2) {
                    _this.removekeyword(id);
                }
                if (ctr == 3) {
                    _this.removediscipline(id);
                }
                if (ctr == 4) {
                    _this.removefundingagency(id);
                }
                if (ctr == 5) {
                    _this.removedocument(id);
                }
                if (ctr == 6) {
                    _this.deleteauthor(id);
                }
                if (ctr == 7) {
                    _this.removepubinfo(id);
                }
            }
        });
    };
    NewResearchComponent.prototype.insertfundingagency = function () {
        var _this = this;
        var x = '';
        if (this.inputfundingagency == undefined || this.inputfundingagency == "") {
            x = x + "*Funding Agency is required\n";
        }
        if (x == '') {
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append("rid", this.researchid.toString());
            urlSearchParams.append('sofid', this.inputfundingagency.toString());
            var body = urlSearchParams.toString();
            var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            header.append("Accept", "application/json");
            header.append("Content-Type", "application/x-www-form-urlencoded");
            var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
            this.global.swalLoading('Adding Funding Agency');
            this.http.post(this.global.api + 'api.php?action=spResearchFundingAgency_Insert_Update', body, option)
                .map(function (response) { return response.json(); })
                .subscribe(function (res) {
                _this.getfundingagency(_this.researchid);
                _this.inputfundingagency = '';
            }, function (error) {
                console.log(Error);
                _this.global.swalAlertError();
            });
        }
        else
            alert(x);
    };
    NewResearchComponent.prototype.removefundingagency = function (id) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(this.global.api + 'api.php?action=spResearchFundingAgency_Delete&id=' + id, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.getfundingagency(_this.researchid);
        }, function (error) {
            _this.global.swalAlertError();
        });
    };
    NewResearchComponent.prototype.getfundingagency = function (rid) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(this.global.api + 'api.php?action=spResearchFundingAgency_Select&rid=' + rid, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.fundingagencyarrayinresearch = res;
            _this.getfundingagencyselect(_this.researchid);
            _this.global.swalClose();
        });
    };
    NewResearchComponent.prototype.deleteauthor = function (id) {
        var _this = this;
        this.http.get(this.global.api + 'api.php?action=spAuthor_Delete&id=' + id)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            if (res.status == 0) {
                _this.getauthorselect();
                _this.global.swalSuccess("Author Deleted!");
            }
            else
                _this.global.swalAlert("Delete Failed!", 'Author is linked to a research.', 'warning');
        });
    };
    NewResearchComponent.prototype.removeauthor = function (id) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(this.global.api + 'api.php?action=spResearchAuthorDelete&aid=' + id + '&rid=' + this.researchid, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.getauthor(_this.researchid);
        }, function (error) {
            _this.global.swalAlertError();
        });
    };
    NewResearchComponent.prototype.getauthor = function (rid) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(this.global.api + 'api.php?action=spResearchAuthor_Select&rid=' + rid, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.authorsarrayinresearch = res;
            _this.getauthorselect();
            _this.global.swalClose();
        });
    };
    NewResearchComponent.prototype.insertdiscipline = function () {
        var _this = this;
        var x = '';
        if (this.inputdiscipline == undefined || this.inputdiscipline == "") {
            x = x + "*discipline is required\n";
        }
        if (x == '') {
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append("rid", this.researchid.toString());
            urlSearchParams.append('did', this.inputdiscipline.toString());
            var body = urlSearchParams.toString();
            var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            header.append("Accept", "application/json");
            header.append("Content-Type", "application/x-www-form-urlencoded");
            var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
            this.global.swalLoading('Adding Discipline');
            this.http.post(this.global.api + 'api.php?action=spResearchProgramDiscipline_Insert_Update', body, option)
                .map(function (response) { return response.json(); })
                .subscribe(function (res) {
                _this.getdiscipline(_this.researchid);
                _this.inputdiscipline = '';
            }, function (error) {
                console.log(Error);
                _this.global.swalAlertError();
            });
        }
        else
            alert(x);
    };
    NewResearchComponent.prototype.removediscipline = function (id) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(this.global.api + 'api.php?action=spResearchProgramDiscipline_Delete&id=' + id, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.getdiscipline(_this.researchid);
        }, function (error) {
            _this.global.swalAlertError();
        });
    };
    NewResearchComponent.prototype.getdiscipline = function (rid) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(this.global.api + 'api.php?action=spResearchProgramDiscipline_Select&rid=' + rid, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.disciplinearrayinresearch = res;
            _this.getdisciplineselect(rid);
            _this.global.swalClose();
        });
    };
    NewResearchComponent.prototype.getdisciplineselect = function (rid) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(this.global.api + 'api.php?action=spProgramDiscipline_Select_NotIn&rid=' + rid, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.discipline = res;
            _this.global.swalClose();
        });
    };
    NewResearchComponent.prototype.getfundingagencyselect = function (rid) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(this.global.api + 'api.php?action=spFundingAgency_Select_NotIn&rid=' + rid, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.fundingagency = res;
            _this.global.swalClose();
        });
    };
    NewResearchComponent.prototype.insertkeyword = function () {
        var _this = this;
        var x = '';
        if (this.keyword == undefined || this.keyword == "") {
            x = x + "*keyword is required\n";
        }
        if (x == '') {
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append("rid", this.researchid.toString());
            urlSearchParams.append('kw', this.keyword.toString());
            var body = urlSearchParams.toString();
            var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            header.append("Accept", "application/json");
            header.append("Content-Type", "application/x-www-form-urlencoded");
            var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
            this.global.swalLoading('Adding Keyword');
            this.http.post(this.global.api + 'api.php?action=spResearchKeyword_Insert', body, option)
                .map(function (response) { return response.json(); })
                .subscribe(function (res) {
                _this.global.swalClose();
                _this.getkeyword(_this.researchid);
                _this.keyword = '';
            }, function (error) {
                console.log(Error);
                _this.global.swalAlertError();
            });
        }
        else
            alert(x);
    };
    NewResearchComponent.prototype.removekeyword = function (id) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(this.global.api + 'api.php?action=spResearchKeyword_Delete&id=' + id, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.getkeyword(_this.researchid);
        }, function (error) {
            _this.global.swalAlertError();
        });
    };
    NewResearchComponent.prototype.getkeyword = function (rid) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(this.global.api + 'api.php?action=spResearchKeyword_Select&rid=' + rid, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.keywordarray = res;
            _this.global.swalClose();
        });
    };
    NewResearchComponent.prototype.add = function (stepper) {
        var _this = this;
        var x = '';
        if (this.inputtitle == undefined || this.inputtitle == "") {
            x = x + "*Research Title is required\n";
        }
        if (this.inputcompany == undefined || this.inputcompany == "") {
            x = x + "*Company is required\n";
        }
        if (this.inputabstract == undefined || this.inputabstract == "") {
            x = x + "*Abstract is required\n";
        }
        if (this.inputdegreelevel == undefined || this.inputdegreelevel == "") {
            x = x + "*Degree Level is required\n";
        }
        if (x == '') {
            if (this.counter > 1) {
                var urlSearchParams = new URLSearchParams();
                urlSearchParams.append("id", this.researchid);
                urlSearchParams.append("title", this.inputtitle);
                urlSearchParams.append('company', this.inputcompany);
                urlSearchParams.append('abstract', this.inputabstract);
                urlSearchParams.append('degreelevel', this.inputdegreelevel);
                urlSearchParams.append('user', this.global.requestid());
                var body = urlSearchParams.toString();
                var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
                header.append("Accept", "application/json");
                header.append("Content-Type", "application/x-www-form-urlencoded");
                var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
                this.global.swalLoading('Updating Research Details');
                this.http.post(this.global.api + 'api.php?action=researchedit', body, option)
                    .map(function (response) { return response.text(); })
                    .subscribe(function (res) {
                    _this.global.swalClose();
                    _this.getdisciplineselect(_this.researchid);
                    _this.getfundingagencyselect(_this.researchid);
                }, function (error) {
                    console.log(Error);
                    _this.global.swalAlertError();
                });
            }
            else {
                this.counter++;
                var urlSearchParams = new URLSearchParams();
                urlSearchParams.append("title", this.inputtitle);
                urlSearchParams.append('company', this.inputcompany);
                urlSearchParams.append('abstract', this.inputabstract);
                urlSearchParams.append('degreelevel', this.inputdegreelevel);
                urlSearchParams.append('user', this.global.requestid());
                var body = urlSearchParams.toString();
                var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
                header.append("Accept", "application/json");
                header.append("Content-Type", "application/x-www-form-urlencoded");
                var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
                this.global.swalLoading('Adding Research Details');
                this.http.post(this.global.api + 'api.php?action=researchadd', body, option)
                    .map(function (response) { return response.json(); })
                    .subscribe(function (res) {
                    _this.global.swalClose();
                    _this.researchid = res.id;
                    var urlSearchParams2 = new URLSearchParams();
                    urlSearchParams2.append("rid", _this.researchid.toString());
                    urlSearchParams2.append('remarks', null);
                    urlSearchParams2.append('status', '0');
                    var body2 = urlSearchParams2.toString();
                    var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
                    header.append("Accept", "application/json");
                    header.append("Content-Type", "application/x-www-form-urlencoded");
                    var option2 = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
                    _this.http.post(_this.global.api + 'api.php?action=spResearchResearchStatus_Insert', body2, option2)
                        .map(function (response) { return response.text(); })
                        .subscribe(function (res) {
                    });
                    _this.getdisciplineselect(_this.researchid);
                    _this.getfundingagencyselect(_this.researchid);
                    _this.getauthorselect();
                }, function (error) {
                    console.log(Error);
                    _this.global.swalAlertError();
                });
            }
            stepper.next();
        }
        else
            alert(x);
    };
    NewResearchComponent.prototype.researchdone = function (type) {
        var _this = this;
        var x = '';
        if (this.form.value.avatar == undefined || this.form.value.avatar == null) {
            x = x + "*Main Document Attachment is required\n";
        }
        else {
            if (this.form.value.avatar.filetype != 'application/pdf') {
                x = x + "*Main Document Attachment must be in PDF format\n";
            }
        }
        if (this.fundingagencyarrayinresearch == undefined) {
            x = x + "*At least 1 Funding Agency is required\n";
        }
        else {
            if (this.fundingagencyarrayinresearch[0].id == null) {
                x = x + "*At least 1 Funding Agency is required\n";
            }
        }
        if (this.authorsarrayinresearch == undefined) {
            x = x + "*At least 1 Author is required\n";
        }
        else {
            if (this.authorsarrayinresearch[0].id == null) {
                x = x + "*At least 1 Author is required\n";
            }
        }
        if (this.disciplinearrayinresearch == undefined) {
            x = x + "*At least 1 Discipline is required\n";
        }
        else {
            if (this.disciplinearrayinresearch[0].id == null) {
                x = x + "*At least 1 Discipline is required\n";
            }
        }
        if (this.keywordarray == undefined) {
            x = x + "*At least 1 Keyword is required\n";
        }
        else {
            if (this.keywordarray[0].id == null) {
                x = x + "*At least 1 Keyword is required\n";
            }
        }
        if (x == '') {
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append("rid", this.researchid.toString());
            urlSearchParams.append('name', this.form.value.avatar.filename);
            urlSearchParams.append('doc', this.form.value.avatar.value);
            urlSearchParams.append('type', '0');
            urlSearchParams.append('status', '0');
            var body = urlSearchParams.toString();
            var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            header.append("Accept", "application/json");
            header.append("Content-Type", "application/x-www-form-urlencoded");
            var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
            this.global.swalLoading('Adding Supporting Document...');
            this.http.post(this.global.api + 'api.php?action=spResearchDocument_Insert', body, option)
                .map(function (response) { return response.json(); })
                .subscribe(function (res) {
            }, function (error) {
                console.log(Error);
                _this.global.swalAlertError();
            });
            if (type == 0) {
            }
            else {
                this.global.swalSuccess("Research Submitted!");
                var urlSearchParams2 = new URLSearchParams();
                urlSearchParams2.append("rid", this.researchid.toString());
                urlSearchParams2.append('remarks', null);
                urlSearchParams2.append('status', '1');
                var body2 = urlSearchParams2.toString();
                var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
                header.append("Accept", "application/json");
                header.append("Content-Type", "application/x-www-form-urlencoded");
                var option2 = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
                this.http.post(this.global.api + 'api.php?action=spResearchResearchStatus_Insert', body2, option2)
                    .map(function (response) { return response.text(); })
                    .subscribe(function (res) {
                });
            }
            setTimeout(function () {
                _this.global.swalClose();
                _this.router.navigate(['../main', { outlets: { div: 'researches' } }]);
            }, 1500);
        }
        else
            alert(x);
    };
    NewResearchComponent.prototype.openDialogauthor = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__manage_author_manage_author_component__["a" /* ManageAuthorComponent */], {
            width: '60%', data: { data: 'elton' }, disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == 1) {
                _this.getauthorselect();
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], NewResearchComponent.prototype, "fileInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('fileInput2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], NewResearchComponent.prototype, "fileInput2", void 0);
    NewResearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new-research',
            template: __webpack_require__("../../../../../src/app/research/new-research/new-research.component.html"),
            styles: [__webpack_require__("../../../../../src/app/research/new-research/new-research.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
    ], NewResearchComponent);
    return NewResearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/research/researches/research-status/research-status.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"research-status\" style=\"overflow-y: scroll;max-height: 70vh\">\n<h3>{{title}}</h3>\n<table  id=\"customers\">\n\t<tr>\n\t\t<th>\n\t\t\tStatus\n\t\t</th>\n\t\t<th>\n\t\t\tRemarks\n\t\t</th>\n\t\t<th>\n\t\t\tDate\n\t\t</th>\n\t</tr>\n\t<tr  *ngFor=\"let c of status\">\n\t\t\t<td>\n\t\t\t\t{{c.status}}\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t{{c.remarks}}\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t{{c.datecreated | date :'mediumDate'}}\n\t\t\t</td>\n\t</tr>\n</table>\n</div>\n<br>\n<button mat-raised-button style=\"float: right;\" (click)=\"noclick(1)\" color=\"primary\">Close</button>\n"

/***/ }),

/***/ "../../../../../src/app/research/researches/research-status/research-status.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#research-status #customers {\n  border-collapse: collapse;\n  width: 100%; }\n\n#research-status #customers td, #research-status #customers th {\n  border: 1px solid #ddd;\n  padding: 8px; }\n\n#research-status #customers tr:nth-child(even) {\n  background-color: #f2f2f2; }\n\n#research-status #customers tr:hover {\n  background-color: #ddd; }\n\n#research-status #customers th {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #294a70;\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/research/researches/research-status/research-status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResearchStatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ResearchStatusComponent = /** @class */ (function () {
    function ResearchStatusComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.title = data.title;
        this.status = data.status.reverse();
    }
    ResearchStatusComponent.prototype.ngOnInit = function () {
    };
    ResearchStatusComponent.prototype.noclick = function () {
        this.dialogRef.close(0);
    };
    ResearchStatusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-research-status',
            template: __webpack_require__("../../../../../src/app/research/researches/research-status/research-status.component.html"),
            styles: [__webpack_require__("../../../../../src/app/research/researches/research-status/research-status.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogRef */], Object])
    ], ResearchStatusComponent);
    return ResearchStatusComponent;
}());



/***/ }),

/***/ "../../../../../src/app/research/researches/researches.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='research'>\n\n<table style=\"width: 97%;margin: auto;\">\n  <tr><td style=\"width: 150px  !important\">\n\n                  <mat-form-field  class=\"npinput2\" style=\"width: 150px  !important\">\n                    <mat-label>Filter by status:</mat-label>\n                    <mat-select  [(ngModel)]=\"status\" >\n                      <mat-option value=\"\" (click)='applyFilter2(\"\")' >\n                        - All -\n                      </mat-option>\n                      <mat-option value=\"0\" (click)='applyFilter2(\"Draft\")' >\n                        Draft\n                      </mat-option>\n                      <mat-option value=\"1\" (click)='applyFilter2(\"For Technical Review\")' >\n                        For Technical Review\n                      </mat-option>\n                      <mat-option value=\"2\" (click)='applyFilter2(\"Approved\")' >\n                        Approved\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n</td>\n<td>\n  \n                  <mat-form-field  class=\"npinput2\"  style=\"width: 150px  !important\">\n                    <mat-label>Filter by Degree Level</mat-label>\n                    <mat-select  [(ngModel)]=\"level\" >\n\n                      <mat-option value=\"\" (click)='applyFilter3(\"\")' >\n                        - All -\n                      </mat-option>\n                      <mat-option value=\"{{c.id}}\"  *ngFor=\"let c of degreelevel\" (click)='applyFilter3(c.name)' >\n                        {{c.name}}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n</td>\n    <td style=\"text-align: right;width: 237px\" >\n       <mat-form-field style=\"width: 180px !important\">\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\"  [(ngModel)]=\"title\" >\n\n          </mat-form-field>\n        <button mat-mini-fab color=\"primary\">\n          <mat-icon><mat-icon>filter_list</mat-icon></mat-icon>\n        </button>\n    </td>\n  </tr>\n</table>\n    \n\n\n    <mat-table #table [dataSource]=\"dataSource\" matSort>\n\n   <ng-container matColumnDef=\"title\">\n      <mat-header-cell *matHeaderCellDef>Project Title</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">\n      <div class=\"rolerow\">\n       <b>{{element.title}}</b>\n    </div>\n    </mat-cell>\n    </ng-container>\n\n   <ng-container matColumnDef=\"level\">\n      <mat-header-cell *matHeaderCellDef> Level </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">\n      <div class=\"rolerow\">\n       <b>{{element.level}}</b>\n    </div>\n    </mat-cell>\n    </ng-container>\n\n   <ng-container matColumnDef=\"company\">\n      <mat-header-cell *matHeaderCellDef> Institution/Company </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">\n      <div class=\"rolerow\">\n       <b>{{element.company}}</b>\n    </div>\n    </mat-cell>\n    </ng-container>\n\n   <ng-container matColumnDef=\"datecreated\">\n      <mat-header-cell *matHeaderCellDef> Date Created </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">\n      <div class=\"rolerow\">\n       <b>{{element.datecreated| date :'mediumDate'}}<!--@ {{element.datecreated| date :'shortTime'}}--></b>\n    </div>\n    </mat-cell>\n    </ng-container>\n\n\n   <ng-container matColumnDef=\"status\">\n      <mat-header-cell *matHeaderCellDef style=\"width: 150px;flex: 0 0 75px;\"> Status </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\" style=\"width: 150px;flex: 0 0 75px;\">\n      <div class=\"rolerow\">\n       <b>{{element.status[0].status}}</b>\n    </div>\n    </mat-cell>\n    </ng-container>\n\n\n   <ng-container matColumnDef=\"action\">\n      <mat-header-cell *matHeaderCellDef style=\"width: 150px;flex: 0 0 75px;\"> - Action - </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\" style=\"width: 150px;flex: 0 0 75px;\">\n      <div class=\"rolerow\">\n       <b><input type=\"button\" [matMenuTriggerFor]=\"menu\" style=\"color: white;background-color: #294a70;border: none;width: 60px;padding-top: 5px;padding-bottom: 5px;\" value=\"Option\"></b>\n        <mat-menu #menu=\"matMenu\">\n          <button mat-menu-item (click)=\"updateresearch(element.id,element.title,element.abstract,element.dlid)\" *ngIf=\"element.status[0].status=='Draft'\">Update Research</button>\n          <button mat-menu-item  *ngIf=\"element.status[0].status=='Draft'\" (click)='removeRole(element.id)'>Delete</button>\n          <button mat-menu-item  *ngIf=\"element.status[0].status=='For Technical Review'\" (click)='returntoDraft(element.id)'>Return to Draft</button>\n          <button mat-menu-item (click)='ViewHistory(element.title,element.status)'>View Status History</button>\n        </mat-menu>\n    </div>\n    </mat-cell>\n    </ng-container>\n\n\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\n        </mat-table>\n        <mat-paginator \n             #paginator\n            [length]=\"100\"\n              [pageSize]=\"10\"\n              [pageSizeOptions]=\"[5, 10, 25, 100]\">\n    </mat-paginator>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/research/researches/researches.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#research /deep/.mat-tab-label, #research /deep/.mat-tab-label-active {\n  min-width: 100px !important;\n  padding: 3px !important;\n  margin: 3px !important; }\n\n#research .mat-form-field-infix {\n  width: 100% !important; }\n\n#research .example-form {\n  min-width: 150px;\n  max-width: 800px;\n  width: 100%; }\n\n#research input {\n  width: 148px; }\n\n#research .example-full-width {\n  width: 100%; }\n\n#research .txtid {\n  width: calc(100% - 50px); }\n\n#research .example-full-width2 {\n  width: 169px; }\n\n#research .example-full-width3 {\n  width: 60px; }\n\n#research ::ng-deep .mat-card-header {\n  background-color: #294a70 !important;\n  padding: 15px 5px 5px 5px !important;\n  color: white; }\n\n#research ::ng-deep .mat-card-header * {\n  color: white; }\n\n#research ::ng-deep .mat-card {\n  padding: 0 !important; }\n\n#research ::ng-deep .mat-card-content {\n  padding: 15px !important; }\n\n#research .mat-form-field-infix {\n  width: auto !important; }\n\n#research table {\n  width: 100%; }\n\n#research .action {\n  padding-top: 7px;\n  opacity: 0; }\n\n#research .rolerow:hover .action {\n  opacity: 1; }\n\n#research .rolerow {\n  padding-top: 10px;\n  padding-bottom: 10px; }\n\n#research .actionlink {\n  text-decoration: none; }\n\n#research a {\n  color: #294a70; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/research/researches/researches.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResearchesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_service__ = __webpack_require__("../../../../../src/app/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__research_status_research_status_component__ = __webpack_require__("../../../../../src/app/research/researches/research-status/research-status.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var swal = __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default.a;
var ResearchesComponent = /** @class */ (function () {
    function ResearchesComponent(dialog, global, http, router) {
        var _this = this;
        this.dialog = dialog;
        this.global = global;
        this.http = http;
        this.router = router;
        this.displayedColumns = ['title', 'level', 'company', 'datecreated', 'status', 'action'];
        this.draft = [];
        this.submmited = [];
        this.http.get(this.global.api + 'api.php?action=degreelevel', this.global.option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.degreelevel = res;
        });
    }
    ResearchesComponent.prototype.ngOnInit = function () {
        this.createTable();
    };
    ResearchesComponent.prototype.ViewHistory = function (title, status) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__research_status_research_status_component__["a" /* ResearchStatusComponent */], {
            width: '50%', data: { title: title, status: status }, disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == 1) {
            }
        });
    };
    ResearchesComponent.prototype.createTable = function () {
        var _this = this;
        this.global.swalLoading('Loading Researches...');
        this.http.get(this.global.api + 'api.php?action=spResearch_List&company=' + this.global.useraccess.companyid, this.global.option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.global.swalClose();
            _this.tableArr = res;
            console.log(res);
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatTableDataSource */](_this.tableArr);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
        }, function (error) {
            console.log(error);
            _this.global.swalClose();
        });
    };
    ResearchesComponent.prototype.updateresearch = function (id, title, abstract, dlid) {
        this.global.researchid = id;
        this.global.researchtitle = title;
        this.global.researchabstract = abstract;
        this.global.researchlevel = dlid;
        this.router.navigate(['../main', { outlets: { div: 'update-research' } }]);
    };
    ResearchesComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filterPredicate = function (data, filterValue) {
            return data.title.trim().toLowerCase().indexOf(filterValue) !== -1;
        };
        this.dataSource.filter = filterValue.trim().toLowerCase();
        this.level = '';
        this.status = '';
    };
    ResearchesComponent.prototype.applyFilter2 = function (filterValue) {
        this.dataSource.filterPredicate = function (data, filterValue) {
            return data.status[0].status.trim().toLowerCase().indexOf(filterValue) !== -1;
        };
        this.dataSource.filter = filterValue.trim().toLowerCase();
        this.title = '';
        this.level = '';
    };
    ResearchesComponent.prototype.applyFilter3 = function (filterValue) {
        this.dataSource.filterPredicate = function (data, filterValue) {
            return data.level.trim().toLowerCase().indexOf(filterValue) !== -1;
        };
        this.dataSource.filter = filterValue.trim().toLowerCase();
        this.title = '';
        this.status = '';
    };
    ResearchesComponent.prototype.removeRole = function (id) {
        this.swalConfirm("Delete Research?", "You won't be able to revert this!", 'warning', 'Yes', 'Research has been Removed', '', 'delete', id);
    };
    ResearchesComponent.prototype.returntoDraft = function (id) {
        this.swalConfirm("Return the Status to Draft?", "", 'warning', 'Yes', 'Research status has been changed', '', 'returntodraft', id);
    };
    ResearchesComponent.prototype.swalConfirm = function (title, text, type, button, d1, d2, remove, id) {
        var _this = this;
        swal({
            title: title,
            type: type,
            html: text,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: button
        }).then(function (result) {
            if (result.value) {
                if (remove == 'delete') {
                    _this.http.get(_this.global.api + 'api.php?action=researchdelete&researchid=' + id)
                        .map(function (response) { return response.text(); })
                        .subscribe(function (res) {
                        _this.createTable();
                    }, function (Error) {
                        //console.log(Error);
                        _this.global.swalAlertError();
                        console.log(Error);
                    });
                }
                else if (remove == 'returntodraft') {
                    var urlSearchParams2 = new URLSearchParams();
                    urlSearchParams2.append("rid", id);
                    urlSearchParams2.append('remarks', null);
                    urlSearchParams2.append('status', '0');
                    var body2 = urlSearchParams2.toString();
                    var header = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                    header.append("Accept", "application/json");
                    header.append("Content-Type", "application/x-www-form-urlencoded");
                    var option2 = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: header });
                    _this.http.post(_this.global.api + 'api.php?action=spResearchResearchStatus_Insert', body2, option2)
                        .map(function (response) { return response.text(); })
                        .subscribe(function (res) {
                        _this.createTable();
                    });
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatSort */])
    ], ResearchesComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('paginator'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatPaginator */])
    ], ResearchesComponent.prototype, "paginator", void 0);
    ResearchesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-researches',
            template: __webpack_require__("../../../../../src/app/research/researches/researches.component.html"),
            styles: [__webpack_require__("../../../../../src/app/research/researches/researches.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_1__global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]])
    ], ResearchesComponent);
    return ResearchesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/research/update-research/update-research.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"padding:20px\" id=\"update-research\">\n\t<h3>Update Research</h3>\n\t<hr>\n\t<mat-horizontal-stepper   labelPostion=\"botton\" [linear]=\"true\" #stepper>\n      <mat-step>\n          <ng-template matStepLabel>Research Details</ng-template>\n          <div>\n\n            <mat-form-field class=\"npinput\">\n              <input matInput placeholder=\"Research Title\" required [(ngModel)]=\"inputtitle\">\n            </mat-form-field>\n\n            <div style=\"height: 10px;\"></div>\n            <mat-form-field  class=\"npinput\">\n              <textarea matInput placeholder=\"Abstract\" required style=\"height: 80px;\"  [(ngModel)]=\"inputabstract\" ></textarea>\n            </mat-form-field>\n\n\n            <br>\n           \n            <table style=\"width: 100%\">\n              <tr>\n                <td style=\"width: 50%\"> \n                  <mat-form-field  class=\"npinput2\">\n                    <mat-label>Degree Level</mat-label>\n                    <mat-select  [(ngModel)]=\"inputdegreelevel\">\n                      <mat-option value=\"{{c.id}}\"  *ngFor=\"let c of degreelevel\">\n                        {{c.name}} - {{c.description}}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </td>\n              </tr>\n            </table><p><b>Company: </b>{{global.useraccess.companyname}}</p>\n          </div>\n\n          <div>\n            <br>\n            <button mat-button type=\"submit\" class=\"buttonblue\" (click)=\"add(stepper)\">Next</button>\n          </div>\n      </mat-step>\n      <mat-step>\n\n          <ng-template matStepLabel>Other Information</ng-template>\n\n          <h4>Title: {{inputtitle}}</h4>\n          <p><b>Abstract:</b> {{inputabstract}}</p><br>\n          <mat-accordion>\n            <mat-expansion-panel>\n              <mat-expansion-panel-header>\n                <mat-panel-title>\n                  Author\n                </mat-panel-title>\n              </mat-expansion-panel-header>\n                    <table style=\"width: 100%\">\n                      <tr>\n                        <td style=\"width: 70%\">\n                            <mat-form-field  class=\"npinput2\" style=\"width: 100%\">\n                              <mat-label>Author</mat-label>\n                              <mat-select  [(ngModel)]=\"author\">\n                                <mat-option value=\"{{c.id}}\"  *ngFor=\"let c of authorsarray\">\n                                  {{c.name}} <input type=\"button\" (click)=\"swalConfirm(c.id,'Delete Author...',6,null,null,null)\" style=\"float:right;color: white;background-color: #FF0000;border: none;margin-top: 15px\" value=\"delete\">\n\n                                </mat-option>\n                              </mat-select>\n                            </mat-form-field></td>\n                      <td style=\"width: 130px\">\n                          <button mat-raised-button (click)=\"insertauthor()\" class=\"buttonblue\" >\n                              <mat-icon style=\"font-size:20px\">add</mat-icon> Add Author</button>\n                         \n                      </td>\n                      <td>\n                        <button  class=\"buttonblue\" style=\"border-radius: 10px;border: none;height: 32px;padding-top: 5px;\" (click)=\"openDialogauthor()\"><mat-icon style=\"font-size:20px\">assignment_ind</mat-icon></button>\n                      </td>\n                      </tr>\n                    </table>\n\n                    <div  *ngIf=\"authorsarrayinresearch!=undefined\" >\n                      <div  *ngIf=\"authorsarrayinresearch[0].id!=null\" >\n                        <table style=\"width: 100%\">\n                          <tr  *ngFor=\"let list of authorsarrayinresearch\">\n                            <td style=\"width: 70%\"><b>{{list.name}}</b></td>\n                          <td style=\"width: 30%\">\n                              <button  mat-button (click)=\"swalConfirm(list.id,'Remove Author?',1,null,null,null)\"  class=\"buttonred\" >\n                                  <mat-icon style=\"font-size:20px\">remove</mat-icon> Remove</button>\n                          </td>\n                          </tr>\n                        </table>\n                    </div>\n                    </div>\n            </mat-expansion-panel>\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                  <mat-panel-title>\n                    Keywords\n                  </mat-panel-title>\n                </mat-expansion-panel-header>\n                   <table style=\"width: 100%\">\n                        <tr>\n                          <td style=\"width: 70%\">\n                        <mat-form-field class=\"npinput\"  style=\"width: 100%\">\n                          <input matInput placeholder=\"Keyword\"  [(ngModel)]=\"keyword\" >\n                          <mat-hint></mat-hint>\n                        </mat-form-field></td>\n                        <td style=\"width: 30%\">\n                            <button mat-raised-button (click)=\"insertkeyword()\" class=\"buttonblue\" >\n                                <mat-icon style=\"font-size:20px\">add</mat-icon> Add Keyword</button>\n                        </td>\n                        </tr>\n                      </table>\n\n                      <div  *ngIf=\"keywordarray!=undefined\" >\n                        <div  *ngIf=\"keywordarray[0].id!=null\" >\n                          <table style=\"width: 100%\">\n                            <tr  *ngFor=\"let list of keywordarray\">\n                              <td style=\"width: 70%\"><b>{{list.keyword}}</b></td>\n                            <td style=\"width: 30%\">\n                                <button  mat-button (click)=\"swalConfirm(list.id,'Remove Keyword?',2,null,null,null)\"  class=\"buttonred\" >\n                                    <mat-icon style=\"font-size:20px\">remove</mat-icon> Remove</button>\n                            </td>\n                            </tr>\n                          </table>\n                      </div>\n                      </div>\n              </mat-expansion-panel>\n              <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                  <mat-panel-title>\n                    Discipline\n                  </mat-panel-title>\n                </mat-expansion-panel-header>\n                   <table style=\"width: 100%\">\n                        <tr>\n                          <td style=\"width: 70%\">\n                              <mat-form-field  class=\"npinput2\" style=\"width: 100%\">\n                                <mat-label>Discipline</mat-label>\n                                <mat-select  [(ngModel)]=\"inputdiscipline\">\n                                  <mat-option value=\"{{c.id}}\"  *ngFor=\"let c of discipline\">\n                                    {{c.desc}}\n                                  </mat-option>\n                                </mat-select>\n                              </mat-form-field></td>\n                        <td style=\"width: 30%\">\n                            <button mat-raised-button (click)=\"insertdiscipline()\" class=\"buttonblue\" >\n                                <mat-icon style=\"font-size:20px\">add</mat-icon> Add Discipline</button>\n                        </td>\n                        </tr>\n                      </table>\n\n                      <div  *ngIf=\"disciplinearrayinresearch!=undefined\" >\n                        <div  *ngIf=\"disciplinearrayinresearch[0].id!=null\" >\n                          <table style=\"width: 100%\">\n                            <tr  *ngFor=\"let list of disciplinearrayinresearch\">\n                              <td style=\"width: 70%\"><b>{{list.desc}}</b></td>\n                            <td style=\"width: 30%\">\n                                <button  mat-button (click)=\"swalConfirm(list.id,'Remove Discipline?',3,null,null,null)\"  class=\"buttonred\" >\n                                    <mat-icon style=\"font-size:20px\">remove</mat-icon> Remove</button>\n                            </td>\n                            </tr>\n                          </table>\n                      </div>\n                      </div>\n              </mat-expansion-panel>\n              <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                  <mat-panel-title>\n                    Funding Agency\n                  </mat-panel-title>\n                </mat-expansion-panel-header>\n                <table style=\"width: 100%\">\n                        <tr>\n                          <td style=\"width: 70%\">\n                              <mat-form-field  class=\"npinput2\" style=\"width: 100%\">\n                                <mat-label>Funding Agency</mat-label>\n                                <mat-select  [(ngModel)]=\"inputfundingagency\">\n                                  <mat-option value=\"{{c.id}}\"  *ngFor=\"let c of fundingagency\">\n                                    {{c.name}}\n                                  </mat-option>\n                                </mat-select>\n                              </mat-form-field></td>\n                        <td style=\"width: 30%\">\n                            <button mat-raised-button (click)=\"insertfundingagency()\" class=\"buttonblue\" >\n                                <mat-icon style=\"font-size:20px\">add</mat-icon> Add Funding Agency</button>\n                        </td>\n                        </tr>\n                      </table>\n\n                      <div  *ngIf=\"fundingagencyarrayinresearch!=undefined\" >\n                        <div  *ngIf=\"fundingagencyarrayinresearch[0].id!=null\" >\n                          <table style=\"width: 100%\">\n                            <tr  *ngFor=\"let list of fundingagencyarrayinresearch\">\n                              <td style=\"width: 70%\"><b>{{list.name}}</b></td>\n                            <td style=\"width: 30%\">\n                                <button  mat-button (click)=\"swalConfirm(list.id,'Remove Funding Agency?',4,null,null,null)\"  class=\"buttonred\" >\n                                    <mat-icon style=\"font-size:20px\">remove</mat-icon> Remove</button>\n                            </td>\n                            </tr>\n                          </table>\n                      </div>\n                      </div>\n              </mat-expansion-panel>\n              <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                  <mat-panel-title>\n                    Documents\n                  </mat-panel-title>\n                </mat-expansion-panel-header>\n                   <p><b>Main Document</b> <small>(PDF File.)</small></p>\n            <form [formGroup]=\"form\">\n              <div class=\"form-group\">\n                <input type=\"file\" id=\"avatar\" (change)=\"onFileChange($event)\" #fileInput class=\"inputfile\" />\n                <label for=\"avatar\">{{maindoclabel}}</label>\n                <button mat-button type=\"button\" class=\"btn btn-sm btn-default\" (click)=\"clearFile()\">clear file</button>\n              </div>\n            </form>\n\n\n\n            <p><b>Supporting Documents</b> <small>(PDF File, Optional)</small></p>\n            <form [formGroup]=\"form2\">\n              <div class=\"form-group\">\n                <input type=\"file\" id=\"avatar2\" (change)=\"onFileChange2($event)\" #fileInput2 class=\"inputfile\" />\n                <label for=\"avatar2\">{{supdoclabel}}</label>\n                <button mat-button type=\"button\" class=\"btn btn-sm btn-default\" (click)=\"clearFile2()\">clear file</button>&nbsp;&nbsp;\n                <button mat-button class=\"buttonblue\" (click)='insertdocument()' >Add</button>\n              </div>\n              </form>\n              <div style=\"height: 10px\"></div>\n          <div  *ngIf=\"documentarray!=undefined\" >\n            <div  *ngIf=\"documentarray[0].id!=null\" >\n              <table style=\"width: 100%\">\n                <tr  *ngFor=\"let list of documentarray\">\n                  <td style=\"width: 70%\"><b>{{list.name}}</b></td>\n                <td style=\"width: 30%\">\n                    <button  mat-button (click)=\"swalConfirm(list.id,'Remove Supporting Document?',5,null,null,null)\"  class=\"buttonred\" >\n                        <mat-icon style=\"font-size:20px\">remove</mat-icon> Remove</button>\n                </td>\n                </tr>\n              </table>\n          </div>\n          </div>\n              </mat-expansion-panel>\n               \n              <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                  <mat-panel-title>\n                    Publication Information\n                  </mat-panel-title>\n                    <mat-panel-description>\n                      (Optional)\n                    </mat-panel-description>\n                </mat-expansion-panel-header>\n                   <table style=\"width: 100%\">\n                        <tr>\n                          <td style=\"width: 70%\">\n                              <mat-form-field class=\"npinput\"  style=\"width: 100%\">\n                                <input matInput placeholder=\"Title\"  [(ngModel)]=\"pubtitle\" >\n                              </mat-form-field>\n                            </td>\n                        </tr>\n                        <tr>\n                          <td style=\"width: 70%\">\n                              <mat-form-field class=\"npinput\"  style=\"width: 100%\">\n                                <input matInput placeholder=\"Volume\"  [(ngModel)]=\"pubvolume\" >\n                              </mat-form-field>\n                            </td>\n                        </tr>\n                        <tr>\n                          <td style=\"width: 70%\">\n                              <mat-form-field class=\"npinput\"  style=\"width: 100%\">\n                                <input matInput placeholder=\"Issue\"  [(ngModel)]=\"pubissue\" >\n                              </mat-form-field>\n                            </td>\n                        </tr>\n                        <tr>\n                          <td style=\"width: 30%\">\n                              <mat-form-field class=\"npinput\"  style=\"width: 30%\">\n                                <input matInput placeholder=\"Year\" type=\"number\" [(ngModel)]=\"pubyear\" >\n                              </mat-form-field>\n                            </td>\n                        </tr>\n                        <tr>\n                          <td style=\"width: 70%\">\n                              <mat-form-field class=\"npinput\"  style=\"width: 100%\">\n                                <input matInput placeholder=\"Publisher\"  [(ngModel)]=\"pubpublisher\" >\n                              </mat-form-field>\n                            </td>\n                        </tr>\n                      </table>\n                      <table style=\"width: 100%\">\n                        <tr>\n                          <td style=\"width: 70%\">\n                            \n                          </td>\n                          <td style=\"width: 30%\"> <button mat-button class=\"buttonblue\" (click)=\"insertpublicationinfo()\">Add Publication Info</button></td>\n                        </tr>\n                      </table>\n                    <br>\n                      <div  *ngIf=\"publicationarray!=undefined\" >\n                        <div  *ngIf=\"publicationarray[0].id!=null\" >\n                          <table style=\"width: 100%\" cellpadding=\"3\">\n                            <tr>\n                              <th style=\"text-align: left; border-right: 1px solid gray;border-bottom: 1px solid gray;\">Title</th>\n                              <th style=\"text-align: left; border-right: 1px solid gray;border-bottom: 1px solid gray;\">Volume</th>\n                              <th style=\"text-align: left; border-right: 1px solid gray;border-bottom: 1px solid gray;\">Issue</th>\n                              <th style=\"text-align: left; border-right: 1px solid gray;border-bottom: 1px solid gray;\">Year</th>\n                              <th style=\"border-bottom: 1px solid gray;\">Publisher</th>\n                              <th></th>\n                            </tr>\n                            <tr  *ngFor=\"let list of publicationarray\">\n                              <td style=\" border-right: 1px solid gray;border-bottom: 1px solid gray;\">{{list.title}}</td>\n                              <td style=\" border-right: 1px solid gray;border-bottom: 1px solid gray;\">{{list.volume}}</td>\n                              <td style=\" border-right: 1px solid gray;border-bottom: 1px solid gray;\">{{list.issue}}</td>\n                              <td style=\" border-right: 1px solid gray;border-bottom: 1px solid gray;\">{{list.year}}</td>\n                              <td style=\"border-bottom: 1px solid gray;\">{{list.publisher}}</td>\n                              <td style=\"width: 115px\">\n                                <button  mat-button (click)=\"swalConfirm(list.id,'Remove Publication Information?',7,null,null,null)\"  class=\"buttonred\" >\n                                <mat-icon style=\"font-size:20px\">remove</mat-icon> Remove</button>\n                              </td>\n                              <td></td>\n                            </tr>\n                          </table>\n                      </div>\n                      </div>\n              </mat-expansion-panel>\n          </mat-accordion>\n\n          \n            \n              <br>\n              <!--<p>Note: Add <a href=\"#\">Publishing Information</a> if the Research has been published</p>\n              --><br><br>\n            <button mat-button matStepperPrevious class=\"buttonblue\" >Back</button>\n            <button mat-button class=\"buttonblue\" style=\"float: right;\"  (click)=\"researchdone(1)\">Submit Research.</button>\n            <button mat-button style=\"float: right;\" (click)=\"researchdone(0)\">Save as Draft</button>\n     \n      </mat-step>\n    </mat-horizontal-stepper>\n</div>"

/***/ }),

/***/ "../../../../../src/app/research/update-research/update-research.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#update-research .npinput {\n  width: 100%; }\n\n#update-research .npinput2 {\n  width: 45%; }\n\n#update-research div.mat-checkbox-inner-container {\n  margin-right: 10px !important; }\n\n#update-research .inputfile {\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1; }\n\n#update-research .inputfile + label {\n  font-size: 15px;\n  font-weight: 700;\n  color: white;\n  background-color: #262626;\n  display: inline-block;\n  padding: 10px; }\n\n#update-research .inputfile + label {\n  cursor: pointer;\n  /* \"hand\" cursor */ }\n\n#update-research .inputfile:focus + label,\n#update-research .inputfile + label:hover {\n  background-color: #294a70; }\n\n.mat-form-field-infix {\n  width: 100px !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/research/update-research/update-research.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateResearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_service__ = __webpack_require__("../../../../../src/app/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__new_research_manage_author_manage_author_component__ = __webpack_require__("../../../../../src/app/research/new-research/manage-author/manage-author.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var swal = __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default.a;
var UpdateResearchComponent = /** @class */ (function () {
    function UpdateResearchComponent(dialog, fb, router, global, http) {
        var _this = this;
        this.dialog = dialog;
        this.fb = fb;
        this.router = router;
        this.global = global;
        this.http = http;
        this.loading = false;
        this.loading2 = false;
        this.maindoclabel = 'Choose a file...';
        this.supdoclabel = "Choose a file...";
        this.counter = 2;
        this.researchid = global.researchid;
        this.inputdegreelevel = global.researchlevel;
        this.inputtitle = global.researchtitle;
        this.inputabstract = global.researchabstract;
        this.getdisciplineselect(this.researchid);
        this.getfundingagencyselect(this.researchid);
        this.getauthorselect();
        this.getauthor(this.researchid);
        this.getdiscipline(this.researchid);
        this.getkeyword(this.researchid);
        this.getfundingagency(this.researchid);
        this.getpubinfo(this.researchid);
        this.getdocument(this.researchid);
        this.http.get(this.global.api + 'api.php?action=spResearchDocument_Select&rid=' + this.researchid + "&type=0")
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.form.get('avatar').setValue({
                filename: res[0].name,
                filetype: 'application/pdf',
                value: res[0].value
            });
            _this.maindoclabel = res[0].name;
        });
        this.http.get(this.global.api + 'api.php?action=company_List', this.global.option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.company = res;
        });
        this.http.get(this.global.api + 'api.php?action=degreelevel', this.global.option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.degreelevel = res;
        });
        this.inputcompany = this.global.useraccess.companyid;
    }
    UpdateResearchComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["j" /* Validators */].required],
            avatar: null
        });
        this.form2 = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["j" /* Validators */].required],
            avatar: null
        });
    };
    UpdateResearchComponent.prototype.getauthorselect = function () {
        var _this = this;
        this.http.get(this.global.api + 'api.php?action=spAuthor_listnot&cid=' + this.global.useraccess.companyid + '&rid=' + this.researchid, this.global.option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.authorsarray = res;
        });
    };
    UpdateResearchComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file_1 = event.target.files[0];
            reader.readAsDataURL(file_1);
            reader.onload = function () {
                _this.form.get('avatar').setValue({
                    filename: file_1.name,
                    filetype: file_1.type,
                    value: reader.result.toString().split(',')[1]
                });
                if (_this.form.value.avatar != null) {
                    _this.maindoclabel = file_1.name;
                }
                else {
                    _this.maindoclabel = "Choose a file";
                }
            };
        }
    };
    UpdateResearchComponent.prototype.onFileChange2 = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file_2 = event.target.files[0];
            reader.readAsDataURL(file_2);
            reader.onload = function () {
                _this.form2.get('avatar').setValue({
                    filename: file_2.name,
                    filetype: file_2.type,
                    value: reader.result.toString().split(',')[1]
                });
                if (_this.form2.value.avatar != null) {
                    _this.supdoclabel = file_2.name;
                }
                else {
                    _this.supdoclabel = "Choose a file";
                }
            };
        }
    };
    UpdateResearchComponent.prototype.clearFile2 = function () {
        //this.form.value.avatar.value);
        this.supdoclabel = "Choose a file...";
        this.form2.get('avatar').setValue(null);
        this.fileInput2.nativeElement.value = '';
    };
    UpdateResearchComponent.prototype.clearFile = function () {
        //this.form.value.avatar.filetype);
        //this.form.value.avatar.value);
        this.maindoclabel = "Choose a file...";
        this.form.get('avatar').setValue(null);
        this.fileInput.nativeElement.value = '';
    };
    UpdateResearchComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    UpdateResearchComponent.prototype.insertpublicationinfo = function () {
        var _this = this;
        var x = '';
        if (this.pubtitle == undefined || this.pubtitle == '') {
            x = x + "*Publication Title is required\n";
        }
        if (this.pubvolume == undefined || this.pubvolume == '') {
            x = x + "*Publication Volume is required\n";
        }
        if (this.pubissue == undefined || this.pubissue == '') {
            x = x + "*Publication Issue is required\n";
        }
        if (this.pubyear == undefined || this.pubyear == '') {
            x = x + "*Publication Year is required\n";
        }
        if (this.pubpublisher == undefined || this.pubpublisher == '') {
            x = x + "*Publisher is required\n";
        }
        if (x == '') {
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append("rid", this.researchid.toString());
            urlSearchParams.append("pubtitle", this.pubtitle.toString());
            urlSearchParams.append('pubvolume', this.pubvolume.toString());
            urlSearchParams.append('pubissue', this.pubissue.toString());
            urlSearchParams.append('pubyear', this.pubyear.toString());
            urlSearchParams.append('pubpublisher', this.pubpublisher.toString());
            var body = urlSearchParams.toString();
            var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            header.append("Accept", "application/json");
            header.append("Content-Type", "application/x-www-form-urlencoded");
            var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
            this.global.swalLoading('Adding Publication Information...');
            this.http.post(this.global.api + 'api.php?action=spResearchPublicationDetails_Insert', body, option)
                .map(function (response) { return response.json(); })
                .subscribe(function (res) {
                _this.getpubinfo(_this.researchid);
                _this.global.swalClose();
            }, function (error) {
                console.log(Error);
                _this.global.swalAlertError();
            });
        }
        else
            alert(x);
    };
    UpdateResearchComponent.prototype.getpubinfo = function (rid) {
        var _this = this;
        this.http.get(this.global.api + 'api.php?action=spResearchPublicationDetails_Select&rid=' + rid)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.publicationarray = res;
            _this.pubtitle = '';
            _this.pubvolume = '';
            _this.pubissue = '';
            _this.pubyear = '';
            _this.pubpublisher = '';
            console.log(res);
        });
    };
    UpdateResearchComponent.prototype.removepubinfo = function (id) {
        var _this = this;
        this.http.get(this.global.api + 'api.php?action=spResearchPublicationDetails_Delete&id=' + id)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.getpubinfo(_this.researchid);
        }, function (error) {
            _this.global.swalAlertError();
        });
    };
    UpdateResearchComponent.prototype.insertdocument = function () {
        var _this = this;
        var x = '';
        if (this.supdoclabel == 'Choose a file...') {
            x = x + "*Supporting document is required\n";
        }
        if (x == '') {
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append("rid", this.researchid.toString());
            urlSearchParams.append('name', this.form2.value.avatar.filename);
            urlSearchParams.append('doc', this.form2.value.avatar.value);
            urlSearchParams.append('type', '1');
            urlSearchParams.append('status', '0');
            var body = urlSearchParams.toString();
            var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            header.append("Accept", "application/json");
            header.append("Content-Type", "application/x-www-form-urlencoded");
            var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
            this.global.swalLoading('Adding Supporting Document...');
            this.http.post(this.global.api + 'api.php?action=spResearchDocument_Insert', body, option)
                .map(function (response) { return response.json(); })
                .subscribe(function (res) {
                _this.getdocument(_this.researchid);
                _this.global.swalClose();
            }, function (error) {
                console.log(Error);
                _this.global.swalAlertError();
            });
        }
        else
            alert(x);
    };
    UpdateResearchComponent.prototype.getdocument = function (rid) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(this.global.api + 'api.php?action=spResearchDocument_Select&rid=' + rid + "&type=1", option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.documentarray = res;
            _this.clearFile2();
        });
    };
    UpdateResearchComponent.prototype.removedocument = function (id) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(this.global.api + 'api.php?action=spResearchDocument_Delete&id=' + id, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.getdocument(_this.researchid);
        }, function (error) {
            _this.global.swalAlertError();
        });
    };
    UpdateResearchComponent.prototype.insertauthor = function () {
        var _this = this;
        var x = '';
        if (this.author == undefined || this.author == "") {
            x = x + "*Author is required\n";
        }
        if (x == '') {
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append("rid", this.researchid.toString());
            urlSearchParams.append('aid', this.author.toString());
            var body = urlSearchParams.toString();
            var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            header.append("Accept", "application/json");
            header.append("Content-Type", "application/x-www-form-urlencoded");
            var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
            this.global.swalLoading('Adding Author');
            this.http.post(this.global.api + 'api.php?action=spResearchAuthor_Insert_Update', body, option)
                .map(function (response) { return response.json(); })
                .subscribe(function (res) {
                _this.getauthor(_this.researchid);
                _this.author = '';
            }, function (error) {
                console.log(Error);
                _this.global.swalAlertError();
            });
        }
        else
            alert(x);
    };
    UpdateResearchComponent.prototype.swalConfirm = function (id, text, ctr, ps, moe, co) {
        var _this = this;
        swal({
            title: text,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then(function (result) {
            if (result.value) {
                if (ctr == 1) {
                    _this.removeauthor(id);
                }
                if (ctr == 2) {
                    _this.removekeyword(id);
                }
                if (ctr == 3) {
                    _this.removediscipline(id);
                }
                if (ctr == 4) {
                    _this.removefundingagency(id);
                }
                if (ctr == 5) {
                    _this.removedocument(id);
                }
                if (ctr == 6) {
                    _this.deleteauthor(id);
                }
                if (ctr == 7) {
                    _this.removepubinfo(id);
                }
            }
        });
    };
    UpdateResearchComponent.prototype.insertfundingagency = function () {
        var _this = this;
        var x = '';
        if (this.inputfundingagency == undefined || this.inputfundingagency == "") {
            x = x + "*Funding Agency is required\n";
        }
        if (x == '') {
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append("rid", this.researchid.toString());
            urlSearchParams.append('sofid', this.inputfundingagency.toString());
            var body = urlSearchParams.toString();
            var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            header.append("Accept", "application/json");
            header.append("Content-Type", "application/x-www-form-urlencoded");
            var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
            this.global.swalLoading('Adding Funding Agency');
            this.http.post(this.global.api + 'api.php?action=spResearchFundingAgency_Insert_Update', body, option)
                .map(function (response) { return response.json(); })
                .subscribe(function (res) {
                _this.getfundingagency(_this.researchid);
                _this.inputfundingagency = '';
            }, function (error) {
                console.log(Error);
                _this.global.swalAlertError();
            });
        }
        else
            alert(x);
    };
    UpdateResearchComponent.prototype.removefundingagency = function (id) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(this.global.api + 'api.php?action=spResearchFundingAgency_Delete&id=' + id, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.getfundingagency(_this.researchid);
        }, function (error) {
            _this.global.swalAlertError();
        });
    };
    UpdateResearchComponent.prototype.getfundingagency = function (rid) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(this.global.api + 'api.php?action=spResearchFundingAgency_Select&rid=' + rid, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.fundingagencyarrayinresearch = res;
            _this.getfundingagencyselect(_this.researchid);
            _this.global.swalClose();
        });
    };
    UpdateResearchComponent.prototype.deleteauthor = function (id) {
        var _this = this;
        this.http.get(this.global.api + 'api.php?action=spAuthor_Delete&id=' + id)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            console.log(res);
            if (res.status == 0) {
                _this.getauthorselect();
                _this.global.swalSuccess("Author Deleted!");
            }
            else
                _this.global.swalAlert("Delete Failed!", 'Author is linked to a research.', 'warning');
        });
    };
    UpdateResearchComponent.prototype.removeauthor = function (id) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(this.global.api + 'api.php?action=spResearchAuthorDelete&aid=' + id + '&rid=' + this.researchid, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.getauthor(_this.researchid);
        }, function (error) {
            _this.global.swalAlertError();
        });
    };
    UpdateResearchComponent.prototype.getauthor = function (rid) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(this.global.api + 'api.php?action=spResearchAuthor_Select&rid=' + rid, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.authorsarrayinresearch = res;
            _this.getauthorselect();
            _this.global.swalClose();
        });
    };
    UpdateResearchComponent.prototype.insertdiscipline = function () {
        var _this = this;
        var x = '';
        if (this.inputdiscipline == undefined || this.inputdiscipline == "") {
            x = x + "*discipline is required\n";
        }
        if (x == '') {
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append("rid", this.researchid.toString());
            urlSearchParams.append('did', this.inputdiscipline.toString());
            var body = urlSearchParams.toString();
            var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            header.append("Accept", "application/json");
            header.append("Content-Type", "application/x-www-form-urlencoded");
            var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
            this.global.swalLoading('Adding Discipline');
            this.http.post(this.global.api + 'api.php?action=spResearchProgramDiscipline_Insert_Update', body, option)
                .map(function (response) { return response.json(); })
                .subscribe(function (res) {
                _this.getdiscipline(_this.researchid);
                _this.inputdiscipline = '';
            }, function (error) {
                console.log(Error);
                _this.global.swalAlertError();
            });
        }
        else
            alert(x);
    };
    UpdateResearchComponent.prototype.removediscipline = function (id) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(this.global.api + 'api.php?action=spResearchProgramDiscipline_Delete&id=' + id, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.getdiscipline(_this.researchid);
        }, function (error) {
            _this.global.swalAlertError();
        });
    };
    UpdateResearchComponent.prototype.getdiscipline = function (rid) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(this.global.api + 'api.php?action=spResearchProgramDiscipline_Select&rid=' + rid, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.disciplinearrayinresearch = res;
            _this.getdisciplineselect(rid);
            _this.global.swalClose();
        });
    };
    UpdateResearchComponent.prototype.getdisciplineselect = function (rid) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(this.global.api + 'api.php?action=spProgramDiscipline_Select_NotIn&rid=' + rid, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.discipline = res;
            _this.global.swalClose();
        });
    };
    UpdateResearchComponent.prototype.getfundingagencyselect = function (rid) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(this.global.api + 'api.php?action=spFundingAgency_Select_NotIn&rid=' + rid, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.fundingagency = res;
            _this.global.swalClose();
        });
    };
    UpdateResearchComponent.prototype.insertkeyword = function () {
        var _this = this;
        var x = '';
        if (this.keyword == undefined || this.keyword == "") {
            x = x + "*keyword is required\n";
        }
        if (x == '') {
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append("rid", this.researchid.toString());
            urlSearchParams.append('kw', this.keyword.toString());
            var body = urlSearchParams.toString();
            var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            header.append("Accept", "application/json");
            header.append("Content-Type", "application/x-www-form-urlencoded");
            var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
            this.global.swalLoading('Adding Keyword');
            this.http.post(this.global.api + 'api.php?action=spResearchKeyword_Insert', body, option)
                .map(function (response) { return response.json(); })
                .subscribe(function (res) {
                _this.global.swalClose();
                _this.getkeyword(_this.researchid);
                _this.keyword = '';
            }, function (error) {
                console.log(Error);
                _this.global.swalAlertError();
            });
        }
        else
            alert(x);
    };
    UpdateResearchComponent.prototype.removekeyword = function (id) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(this.global.api + 'api.php?action=spResearchKeyword_Delete&id=' + id, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.getkeyword(_this.researchid);
        }, function (error) {
            _this.global.swalAlertError();
        });
    };
    UpdateResearchComponent.prototype.getkeyword = function (rid) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        header.append("Accept", "application/json");
        header.append("Content-Type", "application/x-www-form-urlencoded");
        var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
        this.http.get(this.global.api + 'api.php?action=spResearchKeyword_Select&rid=' + rid, option)
            .map(function (response) { return response.json(); })
            .subscribe(function (res) {
            _this.keywordarray = res;
            _this.global.swalClose();
        });
    };
    UpdateResearchComponent.prototype.add = function (stepper) {
        var _this = this;
        var x = '';
        if (this.inputtitle == undefined || this.inputtitle == "") {
            x = x + "*Research Title is required\n";
        }
        if (this.inputcompany == undefined || this.inputcompany == "") {
            x = x + "*Company is required\n";
        }
        if (this.inputabstract == undefined || this.inputabstract == "") {
            x = x + "*Abstract is required\n";
        }
        if (this.inputdegreelevel == undefined || this.inputdegreelevel == "") {
            x = x + "*Degree Level is required\n";
        }
        if (x == '') {
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append("id", this.researchid);
            urlSearchParams.append("title", this.inputtitle);
            urlSearchParams.append('company', this.inputcompany);
            urlSearchParams.append('abstract', this.inputabstract);
            urlSearchParams.append('degreelevel', this.inputdegreelevel);
            urlSearchParams.append('user', this.global.requestid());
            var body = urlSearchParams.toString();
            var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            header.append("Accept", "application/json");
            header.append("Content-Type", "application/x-www-form-urlencoded");
            var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
            this.global.swalLoading('Updating Research Details');
            this.http.post(this.global.api + 'api.php?action=researchedit', body, option)
                .map(function (response) { return response.text(); })
                .subscribe(function (res) {
                console.log(res);
                _this.global.swalClose();
                _this.getdisciplineselect(_this.researchid);
                _this.getfundingagencyselect(_this.researchid);
                _this.getauthorselect();
            }, function (error) {
                console.log(Error);
                _this.global.swalAlertError();
            });
            stepper.next();
        }
        else
            alert(x);
    };
    UpdateResearchComponent.prototype.researchdone = function (type) {
        var _this = this;
        var x = '';
        if (this.form.value.avatar == undefined || this.form.value.avatar == null) {
            x = x + "*Main Document Attachment is required\n";
        }
        else {
            console.log(this.form.value.avatar.filetype);
            if (this.form.value.avatar.filetype != 'application/pdf') {
                x = x + "*Main Document Attachment must be in PDF format\n";
            }
        }
        if (this.fundingagencyarrayinresearch == undefined) {
            x = x + "*At least 1 Funding Agency is required\n";
        }
        else {
            if (this.fundingagencyarrayinresearch[0].id == null) {
                x = x + "*At least 1 Funding Agency is required\n";
            }
        }
        if (this.authorsarrayinresearch == undefined) {
            x = x + "*At least 1 Author is required\n";
        }
        else {
            if (this.authorsarrayinresearch[0].id == null) {
                x = x + "*At least 1 Author is required\n";
            }
        }
        if (this.disciplinearrayinresearch == undefined) {
            x = x + "*At least 1 Discipline is required\n";
        }
        else {
            if (this.disciplinearrayinresearch[0].id == null) {
                x = x + "*At least 1 Discipline is required\n";
            }
        }
        if (this.keywordarray == undefined) {
            x = x + "*At least 1 Keyword is required\n";
        }
        else {
            if (this.keywordarray[0].id == null) {
                x = x + "*At least 1 Keyword is required\n";
            }
        }
        if (x == '') {
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append("rid", this.researchid.toString());
            urlSearchParams.append('name', this.form.value.avatar.filename);
            urlSearchParams.append('doc', this.form.value.avatar.value);
            urlSearchParams.append('type', '0');
            urlSearchParams.append('status', '0');
            var body = urlSearchParams.toString();
            var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            header.append("Accept", "application/json");
            header.append("Content-Type", "application/x-www-form-urlencoded");
            var option = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
            this.global.swalLoading('Adding Supporting Document...');
            this.http.post(this.global.api + 'api.php?action=spResearchDocument_Insert', body, option)
                .map(function (response) { return response.json(); })
                .subscribe(function (res) {
            }, function (error) {
                console.log(Error);
                _this.global.swalAlertError();
            });
            if (type == 0) {
                this.global.swalSuccess("Research Saved as Draft!");
            }
            else {
                this.global.swalSuccess("Research Submitted!");
                var urlSearchParams2 = new URLSearchParams();
                urlSearchParams2.append("rid", this.researchid.toString());
                urlSearchParams2.append('remarks', null);
                urlSearchParams2.append('status', '1');
                var body2 = urlSearchParams2.toString();
                var header = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
                header.append("Accept", "application/json");
                header.append("Content-Type", "application/x-www-form-urlencoded");
                var option2 = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: header });
                this.http.post(this.global.api + 'api.php?action=spResearchResearchStatus_Insert', body2, option2)
                    .map(function (response) { return response.text(); })
                    .subscribe(function (res) {
                });
            }
            setTimeout(function () {
                _this.global.swalClose();
                _this.router.navigate(['../main', { outlets: { div: 'researches' } }]);
            }, 1500);
        }
        else
            alert(x);
    };
    UpdateResearchComponent.prototype.openDialogauthor = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__new_research_manage_author_manage_author_component__["a" /* ManageAuthorComponent */], {
            width: '60%', data: { data: 'elton' }, disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == 1) {
                _this.getauthorselect();
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], UpdateResearchComponent.prototype, "fileInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('fileInput2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], UpdateResearchComponent.prototype, "fileInput2", void 0);
    UpdateResearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-update-research',
            template: __webpack_require__("../../../../../src/app/research/update-research/update-research.component.html"),
            styles: [__webpack_require__("../../../../../src/app/research/update-research/update-research.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
    ], UpdateResearchComponent);
    return UpdateResearchComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map