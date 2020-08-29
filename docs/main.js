(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var i1 = __webpack_require__(/*! ./services/document.service */ "./src/app/services/document.service.ts");
var i2 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
function AppComponent_table_6_tr_10_Template(rf, ctx) { if (rf & 1) {
    var _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelementStart(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td");
    i0.ɵɵelementStart(8, "a", 1);
    i0.ɵɵlistener("click", function AppComponent_table_6_tr_10_Template_a_click_8_listener($event) { i0.ɵɵrestoreView(_r6); var doc_r4 = ctx.$implicit; var ctx_r5 = i0.ɵɵnextContext(2); return ctx_r5.putDocumentAgree([$event, doc_r4]); });
    i0.ɵɵtext(9, "Link");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var doc_r4 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", doc_r4.id, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", doc_r4.name, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", doc_r4.accepted ? "yes" : "no", "");
} }
function AppComponent_table_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "table", 4);
    i0.ɵɵelementStart(1, "thead");
    i0.ɵɵelementStart(2, "th");
    i0.ɵɵtext(3, "id");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "th");
    i0.ɵɵtext(5, "name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵtext(7, "accepted?");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th");
    i0.ɵɵtext(9, "link");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, AppComponent_table_6_tr_10_Template, 10, 3, "tr", 5);
    i0.ɵɵpipe(11, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(11, 1, ctx_r0.downloadDoc$));
} }
function AppComponent_h3_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h3");
    i0.ɵɵtext(1, "Sending document agreement, please wait...");
    i0.ɵɵelementEnd();
} }
function AppComponent_h3_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h3");
    i0.ɵɵtext(1, "Could not download document...");
    i0.ɵɵelementEnd();
} }
var AppComponent = /** @class */ (function () {
    function AppComponent(docService) {
        this.docService = docService;
        this.complete = false;
        this.isLoadingPutDoc = false;
        this.isErrorOnPutdoc = false;
        this.downloadDoc$ = this.docService.getDocuments();
    }
    AppComponent.prototype.getDocuments = function () {
        return this.docService.getDocuments();
    };
    AppComponent.prototype.putDocumentAgree = function (eventProductTuple) {
        var _this = this;
        this.isLoadingPutDoc = true;
        this.docService.putDocumentAgree(eventProductTuple[1])
            .subscribe(function (result) {
            console.log('AppComponent()  - Agreed with document : ', eventProductTuple[1]);
            _this.isLoadingPutDoc = false;
            _this.isErrorOnPutdoc = !result;
        });
        eventProductTuple[0].preventDefault();
    };
    AppComponent.prototype.showAllDocuments = function (event) {
        this.complete = true;
        event.preventDefault();
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(i0.ɵɵdirectiveInject(i1.DocumentService)); };
    AppComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 6, consts: [["role", "main", 1, "content"], ["href", "#", 3, "click"], ["class", "table", 4, "ngIf"], [4, "ngIf"], [1, "table"], [4, "ngFor", "ngForOf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "h1");
            i0.ɵɵtext(2, "Documents");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "a", 1);
            i0.ɵɵlistener("click", function AppComponent_Template_a_click_3_listener($event) { return ctx.showAllDocuments($event); });
            i0.ɵɵtext(4);
            i0.ɵɵpipe(5, "async");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, AppComponent_table_6_Template, 12, 3, "table", 2);
            i0.ɵɵtemplate(7, AppComponent_h3_7_Template, 2, 0, "h3", 3);
            i0.ɵɵtemplate(8, AppComponent_h3_8_Template, 2, 0, "h3", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var tmp_0_0 = null;
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1("View all documents (", (tmp_0_0 = i0.ɵɵpipeBind1(5, 4, ctx.downloadDoc$)) == null ? null : tmp_0_0.length, ")");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.complete);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.isLoadingPutDoc);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.isErrorOnPutdoc);
        } }, directives: [i2.NgIf, i2.NgForOf], pipes: [i2.AsyncPipe], styles: [".table[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], td[_ngcontent-%COMP%], thead[_ngcontent-%COMP%] {\n  border: 1px black solid;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLCB0ciwgdGQsIHRoZWFkIHtcclxuICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"] });
    return AppComponent;
}());
exports.AppComponent = AppComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: i1.DocumentService }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var services_module_1 = __webpack_require__(/*! ./services/services.module */ "./src/app/services/services.module.ts");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var i1 = __webpack_require__(/*! ./services/document.service */ "./src/app/services/document.service.ts");
var AppModule = /** @class */ (function () {
    function AppModule(docService) {
        this.docService = docService;
    }
    AppModule.ɵmod = i0.ɵɵdefineNgModule({ type: AppModule, bootstrap: [app_component_1.AppComponent] });
    AppModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AppModule_Factory(t) { return new (t || AppModule)(i0.ɵɵinject(i1.DocumentService)); }, providers: [], imports: [[
                platform_browser_1.BrowserModule,
                services_module_1.ServicesModule
            ]] });
    return AppModule;
}());
exports.AppModule = AppModule;
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [app_component_1.AppComponent], imports: [platform_browser_1.BrowserModule,
        services_module_1.ServicesModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: [
                    app_component_1.AppComponent
                ],
                imports: [
                    platform_browser_1.BrowserModule,
                    services_module_1.ServicesModule
                ],
                providers: [],
                bootstrap: [app_component_1.AppComponent]
            }]
    }], function () { return [{ type: i1.DocumentService }]; }, null); })();


/***/ }),

/***/ "./src/app/infrastructure/document.service.api.ts":
/*!********************************************************!*\
  !*** ./src/app/infrastructure/document.service.api.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentServiceApi = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var i1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
var DocumentServiceApi = /** @class */ (function () {
    function DocumentServiceApi(http) {
        this.http = http;
        this.serviceUrl = 'https://gist.githubusercontent.com/dilsonnn/ef6899d79b2f0cabeb803240daffaf05/raw/2d6cf00f53245777a4584eee8e9c402265c6a765/docs.json';
    }
    DocumentServiceApi.prototype.getDocuments = function () {
        return this.http.get(this.serviceUrl);
    };
    DocumentServiceApi.prototype.putDocumentAgree = function (document) {
        return rxjs_1.of(true)
            .pipe(operators_1.map(function (t) {
            console.log('DocumentServiceApi().putDocumentAgree(' + document.id + ')');
            return t;
        }), operators_1.delay(2000));
    };
    DocumentServiceApi.ɵfac = function DocumentServiceApi_Factory(t) { return new (t || DocumentServiceApi)(i0.ɵɵinject(i1.HttpClient)); };
    DocumentServiceApi.ɵprov = i0.ɵɵdefineInjectable({ token: DocumentServiceApi, factory: DocumentServiceApi.ɵfac, providedIn: 'root' });
    return DocumentServiceApi;
}());
exports.DocumentServiceApi = DocumentServiceApi;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DocumentServiceApi, [{
        type: core_1.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();


/***/ }),

/***/ "./src/app/infrastructure/infrastructure.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/infrastructure/infrastructure.module.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.InfrastructureModule = void 0;
var document_service_api_1 = __webpack_require__(/*! ./document.service.api */ "./src/app/infrastructure/document.service.api.ts");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
var i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var InfrastructureModule = /** @class */ (function () {
    function InfrastructureModule() {
    }
    InfrastructureModule.ɵmod = i0.ɵɵdefineNgModule({ type: InfrastructureModule });
    InfrastructureModule.ɵinj = i0.ɵɵdefineInjector({ factory: function InfrastructureModule_Factory(t) { return new (t || InfrastructureModule)(); }, providers: [
            document_service_api_1.DocumentServiceApi
        ], imports: [[
                http_1.HttpClientModule
            ]] });
    return InfrastructureModule;
}());
exports.InfrastructureModule = InfrastructureModule;
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(InfrastructureModule, { imports: [http_1.HttpClientModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(InfrastructureModule, [{
        type: core_1.NgModule,
        args: [{
                imports: [
                    http_1.HttpClientModule
                ],
                providers: [
                    document_service_api_1.DocumentServiceApi
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/document.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/document.service.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentService = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var i1 = __webpack_require__(/*! ./../infrastructure/document.service.api */ "./src/app/infrastructure/document.service.api.ts");
var DocumentService = /** @class */ (function () {
    function DocumentService(docApi) {
        this.docApi = docApi;
        this.agreedDocs = [];
    }
    DocumentService.prototype.getDocuments = function () {
        if (!this.documents$) {
            this.documents$ = this.docApi.getDocuments()
                .pipe(operators_1.map(function (docs) { return docs; }), operators_1.shareReplay(1), operators_1.catchError(function (error) { return rxjs_1.of([]); }));
        }
        return this.documents$;
    };
    DocumentService.prototype.putDocumentAgree = function (document) {
        var _this = this;
        if (this.agreedDocs.includes(document.id)) {
            console.log('DocumentService.putDocumentAgree() - already agreed with document ', document);
            return rxjs_1.of(true);
        }
        return this.docApi.putDocumentAgree(document).pipe(operators_1.map(function (e) {
            _this.agreedDocs.push(document.id);
            document.accepted = true;
            return e;
        }), operators_1.catchError(function (error) { return rxjs_1.of(false); }));
    };
    DocumentService.ɵfac = function DocumentService_Factory(t) { return new (t || DocumentService)(i0.ɵɵinject(i1.DocumentServiceApi)); };
    DocumentService.ɵprov = i0.ɵɵdefineInjectable({ token: DocumentService, factory: DocumentService.ɵfac, providedIn: 'root' });
    return DocumentService;
}());
exports.DocumentService = DocumentService;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DocumentService, [{
        type: core_1.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.DocumentServiceApi }]; }, null); })();


/***/ }),

/***/ "./src/app/services/services.module.ts":
/*!*********************************************!*\
  !*** ./src/app/services/services.module.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesModule = void 0;
var infrastructure_module_1 = __webpack_require__(/*! ../infrastructure/infrastructure.module */ "./src/app/infrastructure/infrastructure.module.ts");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var i0 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule.ɵmod = i0.ɵɵdefineNgModule({ type: ServicesModule });
    ServicesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ServicesModule_Factory(t) { return new (t || ServicesModule)(); }, providers: [], imports: [[
                infrastructure_module_1.InfrastructureModule
            ]] });
    return ServicesModule;
}());
exports.ServicesModule = ServicesModule;
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ServicesModule, { imports: [infrastructure_module_1.InfrastructureModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ServicesModule, [{
        type: core_1.NgModule,
        args: [{
                imports: [
                    infrastructure_module_1.InfrastructureModule
                ],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = void 0;
exports.environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __NgCli_bootstrap_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
var __NgCli_bootstrap_2 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
__NgCli_bootstrap_2.platformBrowser().bootstrapModule(__NgCli_bootstrap_1.AppModule)
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\projetos\rxjs-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map