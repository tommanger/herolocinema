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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/movies-list/movies-list.component */ "./src/app/pages/movies-list/movies-list.component.ts");




var routes = [
    { path: '', component: _pages_movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_3__["MoviesListComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-nav-bar (onSearchMovies)=\"searchMovies($event)\"></app-nav-bar>\n<app-movies-list [searchTxt]=\"searchTxt\"></app-movies-list>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'herolo-cinema';
        this.searchTxt = '';
    }
    AppComponent.prototype.searchMovies = function (ev) {
        this.searchTxt = ev;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/movies-list/movies-list.component */ "./src/app/pages/movies-list/movies-list.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _cmps_movie_preview_movie_preview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cmps/movie-preview/movie-preview.component */ "./src/app/cmps/movie-preview/movie-preview.component.ts");
/* harmony import */ var _cmps_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cmps/nav-bar/nav-bar.component */ "./src/app/cmps/nav-bar/nav-bar.component.ts");
/* harmony import */ var _cmps_popup_delete_popup_delete_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cmps/popup-delete/popup-delete.component */ "./src/app/cmps/popup-delete/popup-delete.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _services_filter_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/filter.pipe */ "./src/app/services/filter.pipe.ts");
/* harmony import */ var _cmps_movie_edit_movie_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cmps/movie-edit/movie-edit.component */ "./src/app/cmps/movie-edit/movie-edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_clean_txt_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/clean-txt.pipe */ "./src/app/services/clean-txt.pipe.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _pages_movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_5__["MoviesListComponent"],
                _cmps_movie_preview_movie_preview_component__WEBPACK_IMPORTED_MODULE_7__["MoviePreviewComponent"],
                _cmps_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__["NavBarComponent"],
                _cmps_popup_delete_popup_delete_component__WEBPACK_IMPORTED_MODULE_9__["PopupDeleteComponent"],
                _services_filter_pipe__WEBPACK_IMPORTED_MODULE_13__["FilterPipe"],
                _cmps_movie_edit_movie_edit_component__WEBPACK_IMPORTED_MODULE_14__["MovieEditComponent"],
                _services_clean_txt_pipe__WEBPACK_IMPORTED_MODULE_16__["CleanTxtPipe"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            entryComponents: [_cmps_popup_delete_popup_delete_component__WEBPACK_IMPORTED_MODULE_9__["PopupDeleteComponent"], _cmps_movie_edit_movie_edit_component__WEBPACK_IMPORTED_MODULE_14__["MovieEditComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cmps/movie-edit/movie-edit.component.html":
/*!***********************************************************!*\
  !*** ./src/app/cmps/movie-edit/movie-edit.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"movie-edit\">\n  <mat-dialog-content>\n    <form [formGroup]=\"myForm\">\n      <mat-form-field>\n        <input matInput formControlName=\"Title\" placeholder=\"Movie Title\" type=\"text\">\n        <mat-error>\n          {{errorMsg(myForm.controls.Title)}}\n        </mat-error>\n      </mat-form-field>\n      <mat-dialog-actions *ngIf=\"!data\">\n        <button (click)=\"searchMovie()\" type=\"button\">Search Movie</button>\n      </mat-dialog-actions>\n      <mat-form-field>\n        <input matInput formControlName=\"Year\" placeholder=\"Movie Year\" type=\"number\">\n        <mat-error>\n          The year can be in min 1870 and max of 2019\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput formControlName=\"Runtime\" placeholder=\"Movie Runtime\" type=\"text\">\n        <mat-error>\n          You must fill in the field Runtime!\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput formControlName=\"Genre\" placeholder=\"Movie Genre\" type=\"text\">\n        <mat-error>\n          You must fill in the field Genre!\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput formControlName=\"Director\" placeholder=\"Movie Director\" type=\"text\">\n        <mat-error>\n          You must fill in the field Director!\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput formControlName=\"Poster\" placeholder=\"Movie Poster url\" type=\"text\">\n        <mat-error>\n          You must fill in the field Director!\n        </mat-error>\n      </mat-form-field>\n      <mat-dialog-actions>\n        <button type=\"submit\" [disabled]=\"myForm.invalid\" mat-raised-button [mat-dialog-close]=\"myForm.value\" (click)=\"onSaveMovie()\">Save</button>\n        <button mat-raised-button mat-dialog-close>CANCEL</button>\n      </mat-dialog-actions>\n    </form>\n  </mat-dialog-content>\n</div>"

/***/ }),

/***/ "./src/app/cmps/movie-edit/movie-edit.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/cmps/movie-edit/movie-edit.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".movie-edit {\n  width: 75vw; }\n  .movie-edit form {\n    display: flex;\n    flex-direction: column; }\n  .movie-edit input {\n    width: 70vw;\n    height: 35px;\n    background-color: #ece5f2;\n    border: 3px solid transparent;\n    border-radius: 1vw;\n    outline: none;\n    color: #543072;\n    font-weight: bold; }\n  .movie-edit button {\n    margin: 10px; }\n  .movie-edit .cancel-btn {\n    background-color: #695d73; }\n  .movie-edit-btns {\n  display: flex;\n  justify-content: space-around; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY21wcy9tb3ZpZS1lZGl0L0M6XFxkaXZcXGhlcm9sby1jaW5lbWEvc3JjXFxhcHBcXGNtcHNcXG1vdmllLWVkaXRcXG1vdmllLWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXLEVBQUE7RUFEZjtJQUdRLGFBQWE7SUFDYixzQkFBc0IsRUFBQTtFQUo5QjtJQU9RLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGNBQWM7SUFDZCxpQkFBaUIsRUFBQTtFQWR6QjtJQWlCUSxZQUFZLEVBQUE7RUFqQnBCO0lBb0JRLHlCQUF5QixFQUFBO0VBR2pDO0VBQ0ksYUFBYTtFQUNiLDZCQUE2QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY21wcy9tb3ZpZS1lZGl0L21vdmllLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW92aWUtZWRpdHtcclxuICAgIHdpZHRoOiA3NXZ3O1xyXG4gICAgZm9ybXtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAgICAgIFxyXG4gICAgfVxyXG4gICAgaW5wdXR7XHJcbiAgICAgICAgd2lkdGg6IDcwdnc7XHJcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2U1ZjI7XHJcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXZ3O1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICM1NDMwNzI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmNhbmNlbC1idG57XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY5NWQ3MztcclxuICAgIH1cclxufVxyXG4ubW92aWUtZWRpdC1idG5ze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/cmps/movie-edit/movie-edit.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/cmps/movie-edit/movie-edit.component.ts ***!
  \*********************************************************/
/*! exports provided: MovieEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieEditComponent", function() { return MovieEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/movies.service */ "./src/app/services/movies.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var MovieEditComponent = /** @class */ (function () {
    function MovieEditComponent(movieEditRef, moviesService, fb, data) {
        this.movieEditRef = movieEditRef;
        this.moviesService = moviesService;
        this.fb = fb;
        this.data = data;
    }
    MovieEditComponent.prototype.ngOnInit = function () {
        this.setForm();
    };
    MovieEditComponent.prototype.onSaveMovie = function () {
        var movie = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ imdbID: (this.data) ? this.data.imdbID : this.moviesService.makeid(8) }, this.myForm.value);
        this.moviesService.updateMovie(movie);
    };
    MovieEditComponent.prototype.searchMovie = function () {
        var _this = this;
        this.moviesService.getMovie(this.myForm.value.Title)
            .subscribe(function (movie) {
            if (movie) {
                _this.data = movie;
                _this.setForm();
            }
        });
    };
    MovieEditComponent.prototype.movieExist = function (_a) {
        var value = _a.value;
        if (this.data)
            return;
        var isDuplicate = this.moviesService.movieExist(value);
        var validationErrors;
        if (isDuplicate)
            return validationErrors = { duplicate: true };
    };
    MovieEditComponent.prototype.setForm = function () {
        this.myForm = this.fb.group({
            Title: [(this.data) ? this.data.Title.replace(/[^a-zA-Z0-9 ]/g, '') : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.movieExist.bind(this)]],
            Year: [(this.data) ? this.data.Year : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1870), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(2019)]],
            Runtime: [(this.data) ? this.data.Runtime : '', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]],
            Genre: [(this.data) ? this.data.Genre : '', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]],
            Director: [(this.data) ? this.data.Director : '', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]],
            Poster: [(this.data) ? this.data.Poster : '', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]],
        });
    };
    MovieEditComponent.prototype.errorMsg = function (Title) {
        if (!Title.errors)
            return;
        return (Title.errors.duplicate) ? "You can not use " + Title.value + ", It already exists" : 'You must fill in the field Title!';
    };
    MovieEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-edit',
            template: __webpack_require__(/*! ./movie-edit.component.html */ "./src/app/cmps/movie-edit/movie-edit.component.html"),
            styles: [__webpack_require__(/*! ./movie-edit.component.scss */ "./src/app/cmps/movie-edit/movie-edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            _services_movies_service__WEBPACK_IMPORTED_MODULE_3__["MoviesService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], Object])
    ], MovieEditComponent);
    return MovieEditComponent;
}());



/***/ }),

/***/ "./src/app/cmps/movie-preview/movie-preview.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/cmps/movie-preview/movie-preview.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [id]=\"movie.imdbID\" class=\"movie-preview\" [style.background-image]=\"'url('+movie.Poster+')'\">\n    <div class=\"movie-details\" (click)=\" $event.stopPropagation()\">\n        <div class=\"details-header\">\n            <button (click)=\"closeDetails(movie.imdbID); $event.stopPropagation()\" class=\"clostBtn\">✖</button>\n            <h2>{{movie.Title | titlecase | cleanTxt}}</h2>\n        </div>\n        <h4>{{movie.Runtime}} | {{movie.Year}}</h4>\n        <h4>{{movie.Genre}}</h4>\n        <h4>{{movie.Director}}</h4>\n        <div class=\"details-btns\">\n            <button (click)=\"editMovie()\">Edit</button>\n            <button (click)=\"onDeleteMovie(movie.imdbID)\">Delete</button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/cmps/movie-preview/movie-preview.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/cmps/movie-preview/movie-preview.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".movie-preview {\n  width: 200px;\n  height: 300px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin: 5px;\n  border: 4px solid white;\n  border-radius: 10px;\n  box-shadow: 0 0 0px 2px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n  cursor: pointer; }\n  @media screen and (max-width: 455px) {\n    .movie-preview {\n      width: 90vw; } }\n  .movie-details {\n  background-color: #ffffffd6;\n  height: 100%;\n  position: relative;\n  top: 100%;\n  transition: all .5s;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between; }\n  .movie-details h2 {\n    margin: 0;\n    font-size: 18px;\n    padding: 10px 1px; }\n  .movie-details h4 {\n    margin: 0;\n    padding-left: 5px; }\n  .movie-details button {\n    margin: 5px 10px; }\n  .movie-details .clostBtn {\n    background: none;\n    min-width: 0;\n    height: 25px; }\n  .movie-details .details-header {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    background-color: #7844a2b2; }\n  .movie-details .details-btns {\n    display: flex;\n    justify-content: center; }\n  .openDetails {\n  top: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY21wcy9tb3ZpZS1wcmV2aWV3L0M6XFxkaXZcXGhlcm9sby1jaW5lbWEvc3JjXFxhcHBcXGNtcHNcXG1vdmllLXByZXZpZXdcXG1vdmllLXByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osYUFBYTtFQUNiLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsMENBQTBDO0VBQzFDLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7RUFDZjtJQVhKO01BWVEsV0FBVyxFQUFBLEVBRWxCO0VBRUQ7RUFDSSwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCLEVBQUE7RUFSbEM7SUFVUSxTQUFTO0lBQ1QsZUFBZTtJQUNmLGlCQUFpQixFQUFBO0VBWnpCO0lBZVEsU0FBUztJQUNULGlCQUFpQixFQUFBO0VBaEJ6QjtJQW9CUSxnQkFBZ0IsRUFBQTtFQXBCeEI7SUF1QlEsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZLEVBQUE7RUF6QnBCO0lBNEJRLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLDJCQUEyQixFQUFBO0VBL0JuQztJQWtDUSxhQUFhO0lBQ2IsdUJBQXVCLEVBQUE7RUFHL0I7RUFDSSxNQUFNLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jbXBzL21vdmllLXByZXZpZXcvbW92aWUtcHJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb3ZpZS1wcmV2aWV3e1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDU1cHgpIHtcclxuICAgICAgICB3aWR0aDogOTB2dztcclxuICAgIH1cclxufVxyXG5cclxuLm1vdmllLWRldGFpbHN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmZDY7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDEwMCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBoMntcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMXB4O1xyXG4gICAgfVxyXG4gICAgaDR7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG5cclxuICAgIH1cclxuICAgIGJ1dHRvbntcclxuICAgICAgICBtYXJnaW46IDVweCAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmNsb3N0QnRue1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgbWluLXdpZHRoOiAwO1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuICAgIH1cclxuICAgIC5kZXRhaWxzLWhlYWRlcntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc4NDRhMmIyO1xyXG4gICAgfVxyXG4gICAgLmRldGFpbHMtYnRuc3tcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcbi5vcGVuRGV0YWlsc3tcclxuICAgIHRvcDogMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/cmps/movie-preview/movie-preview.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/cmps/movie-preview/movie-preview.component.ts ***!
  \***************************************************************/
/*! exports provided: MoviePreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviePreviewComponent", function() { return MoviePreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_movie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/movie */ "./src/app/services/movie.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _movie_edit_movie_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../movie-edit/movie-edit.component */ "./src/app/cmps/movie-edit/movie-edit.component.ts");





var MoviePreviewComponent = /** @class */ (function () {
    function MoviePreviewComponent(dialog) {
        this.dialog = dialog;
        this.deleteMovie = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    MoviePreviewComponent.prototype.ngOnInit = function () {
    };
    MoviePreviewComponent.prototype.closeDetails = function (imdbId) {
        var card = document.getElementById(imdbId);
        card.children[0].classList.remove('openDetails');
    };
    MoviePreviewComponent.prototype.onDeleteMovie = function (imdbID) {
        this.deleteMovie.emit(imdbID);
    };
    MoviePreviewComponent.prototype.editMovie = function () {
        var movieEditRef = this.dialog.open(_movie_edit_movie_edit_component__WEBPACK_IMPORTED_MODULE_4__["MovieEditComponent"], {
            data: this.movie
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _services_movie__WEBPACK_IMPORTED_MODULE_2__["Movie"])
    ], MoviePreviewComponent.prototype, "movie", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MoviePreviewComponent.prototype, "deleteMovie", void 0);
    MoviePreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-preview',
            template: __webpack_require__(/*! ./movie-preview.component.html */ "./src/app/cmps/movie-preview/movie-preview.component.html"),
            styles: [__webpack_require__(/*! ./movie-preview.component.scss */ "./src/app/cmps/movie-preview/movie-preview.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], MoviePreviewComponent);
    return MoviePreviewComponent;
}());



/***/ }),

/***/ "./src/app/cmps/nav-bar/nav-bar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/cmps/nav-bar/nav-bar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\">\n  <div class=\"container\">\n    <div class=\"logo\"></div>\n    <h2 *ngIf=\"menuOpen\" class=\"hamburger-btn\" (click)=\"openMenu()\">☰</h2>\n    <h2 *ngIf=\"!menuOpen\" class=\"hamburger-btn\" (click)=\"openMenu()\">✖</h2>\n  </div>\n  <div class=\"menu\">\n    <input (input)=\"searchMovies($event)\" type=\"text\" placeholder=\"Search\">\n    <button class=\"add-btn\" (click)=\"addMovie()\">Add Movie</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/cmps/nav-bar/nav-bar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/cmps/nav-bar/nav-bar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  background-color: white;\n  height: 60px;\n  border-radius: 0 0 10px 10px;\n  max-width: 872px;\n  margin: 0 auto;\n  box-shadow: 0 0 0px 2px rgba(0, 0, 0, 0.2);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 10px; }\n  @media screen and (max-width: 890px) {\n    .navbar {\n      max-width: 654px; } }\n  @media screen and (max-width: 670px) {\n    .navbar {\n      margin: 0 10px; } }\n  .navbar .hamburger-btn {\n    display: none; }\n  @media screen and (max-width: 580px) {\n    .navbar .hamburger-btn {\n      display: block;\n      font-weight: bold;\n      font-size: 40px;\n      margin: 0;\n      color: #7744a2;\n      cursor: pointer;\n      transition: all .3s; }\n    .navbar .hamburger-btn:hover {\n      color: #ae7ad8; }\n    .navbar .menu {\n      position: absolute;\n      background-color: white;\n      border-radius: 0 0 10px 10px;\n      box-shadow: 0 0 0px 2px rgba(0, 0, 0, 0.2);\n      top: -150px;\n      height: 100px;\n      display: flex;\n      align-items: flex-end;\n      padding: 10px;\n      transition: all .3s;\n      width: 90%;\n      left: 10px;\n      justify-content: space-around; }\n    .navbar .open-menu {\n      top: 0; }\n    .navbar .container {\n      display: flex;\n      position: absolute;\n      z-index: 10;\n      align-items: center;\n      justify-content: space-around;\n      width: 93%; } }\n  .navbar input {\n    border: 2px solid #7744a2;\n    border-radius: 10px;\n    height: 37px;\n    outline: none;\n    padding-left: 10px;\n    font-weight: bold;\n    color: #7744a2;\n    box-shadow: 0 0 0 0 #7844a231;\n    transition: all .3s;\n    margin-right: 10px; }\n  .navbar input:hover, .navbar input:focus {\n    box-shadow: 0 0 0 4px #7844a231; }\n  .logo {\n  background-image: url('logo.png');\n  height: 50px;\n  width: 220px;\n  background-size: contain;\n  background-repeat: no-repeat; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY21wcy9uYXYtYmFyL0M6XFxkaXZcXGhlcm9sby1jaW5lbWEvc3JjXFxhcHBcXGNtcHNcXG5hdi1iYXJcXG5hdi1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLDBDQUEwQztFQUMxQyxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7RUFDZjtJQVhKO01BWVEsZ0JBQWdCLEVBQUEsRUFnRXZCO0VBOURHO0lBZEo7TUFlUSxjQUFjLEVBQUEsRUE2RHJCO0VBNUVEO0lBa0JRLGFBQWEsRUFBQTtFQUVqQjtJQXBCSjtNQXNCWSxjQUFjO01BQ2QsaUJBQWlCO01BQ2pCLGVBQWU7TUFDZixTQUFTO01BQ1QsY0FBYztNQUNkLGVBQWU7TUFDZixtQkFBbUIsRUFBQTtJQTVCL0I7TUErQlksY0FBYyxFQUFBO0lBL0IxQjtNQWtDWSxrQkFBa0I7TUFDbEIsdUJBQXVCO01BQ3ZCLDRCQUE0QjtNQUM1QiwwQ0FBMEM7TUFDMUMsV0FBVztNQUNYLGFBQWE7TUFDYixhQUFhO01BQ2IscUJBQXFCO01BQ3JCLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsVUFBVTtNQUNWLFVBQVU7TUFDViw2QkFBNkIsRUFBQTtJQTlDekM7TUFpRFksTUFBTSxFQUFBO0lBakRsQjtNQW9EWSxhQUFhO01BQ2Isa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxtQkFBbUI7TUFDbkIsNkJBQTZCO01BQzdCLFVBQVUsRUFBQSxFQUNiO0VBMURUO0lBOERRLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGtCQUFrQixFQUFBO0VBdkUxQjtJQTBFUSwrQkFBK0IsRUFBQTtFQUl2QztFQUNJLGlDQUFpRDtFQUNqRCxZQUFZO0VBQ1osWUFBWTtFQUNaLHdCQUF3QjtFQUN4Qiw0QkFBNEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NtcHMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcclxuICAgIG1heC13aWR0aDogODcycHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODkwcHgpIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDY1NHB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjcwcHgpIHtcclxuICAgICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgIH1cclxuICAgIC5oYW1idXJnZXItYnRue1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xyXG4gICAgICAgIC5oYW1idXJnZXItYnRue1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzc3NDRhMjtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaGFtYnVyZ2VyLWJ0bjpob3ZlcntcclxuICAgICAgICAgICAgY29sb3I6ICNhZTdhZDg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgICAgIHRvcDogLTE1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgIH1cclxuICAgICAgICAub3Blbi1tZW51e1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICB3aWR0aDogOTMlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgaW5wdXR7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzc3NDRhMjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzdweDtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogIzc3NDRhMjtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwICM3ODQ0YTIzMTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxuICAgIGlucHV0OmhvdmVyLCBpbnB1dDpmb2N1c3tcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCA0cHggIzc4NDRhMjMxO1xyXG4gICAgfSBcclxufVxyXG5cclxuLmxvZ297XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9sb2dvLnBuZycpO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/cmps/nav-bar/nav-bar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/cmps/nav-bar/nav-bar.component.ts ***!
  \***************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _movie_edit_movie_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../movie-edit/movie-edit.component */ "./src/app/cmps/movie-edit/movie-edit.component.ts");




var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(dialog) {
        this.dialog = dialog;
        this.onSearchMovies = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.menuOpen = true;
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent.prototype.searchMovies = function (ev) {
        var txt = ev.target.value;
        this.onSearchMovies.emit(txt);
    };
    NavBarComponent.prototype.addMovie = function () {
        var movieEditRef = this.dialog.open(_movie_edit_movie_edit_component__WEBPACK_IMPORTED_MODULE_3__["MovieEditComponent"]);
    };
    NavBarComponent.prototype.openMenu = function () {
        var menu = document.querySelector('.menu');
        menu.classList.toggle('open-menu');
        this.menuOpen = !this.menuOpen;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavBarComponent.prototype, "onSearchMovies", void 0);
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/cmps/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.scss */ "./src/app/cmps/nav-bar/nav-bar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/cmps/popup-delete/popup-delete.component.html":
/*!***************************************************************!*\
  !*** ./src/app/cmps/popup-delete/popup-delete.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"popupDelete\">\n  Are you sure you want to delete this movie?\n  <div>\n    <button [mat-dialog-close]=\"true\" class=\"btn-delete\">Delete</button>\n    <button (click)=\"closePopup()\">Cancel</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/cmps/popup-delete/popup-delete.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/cmps/popup-delete/popup-delete.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".popupDelete {\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n  .popupDelete button {\n    margin: 10px; }\n  .popupDelete .btn-delete {\n    background-color: #ff4343; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY21wcy9wb3B1cC1kZWxldGUvQzpcXGRpdlxcaGVyb2xvLWNpbmVtYS9zcmNcXGFwcFxcY21wc1xccG9wdXAtZGVsZXRlXFxwb3B1cC1kZWxldGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQixFQUFBO0VBSHZCO0lBS1EsWUFBWSxFQUFBO0VBTHBCO0lBUVEseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jbXBzL3BvcHVwLWRlbGV0ZS9wb3B1cC1kZWxldGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9wdXBEZWxldGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmJ0bi1kZWxldGV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDM0MztcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/cmps/popup-delete/popup-delete.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/cmps/popup-delete/popup-delete.component.ts ***!
  \*************************************************************/
/*! exports provided: PopupDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupDeleteComponent", function() { return PopupDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var PopupDeleteComponent = /** @class */ (function () {
    function PopupDeleteComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    PopupDeleteComponent.prototype.ngOnInit = function () {
    };
    PopupDeleteComponent.prototype.closePopup = function () {
        this.dialogRef.close();
    };
    PopupDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-popup-delete',
            template: __webpack_require__(/*! ./popup-delete.component.html */ "./src/app/cmps/popup-delete/popup-delete.component.html"),
            styles: [__webpack_require__(/*! ./popup-delete.component.scss */ "./src/app/cmps/popup-delete/popup-delete.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], PopupDeleteComponent);
    return PopupDeleteComponent;
}());



/***/ }),

/***/ "./src/app/pages/movies-list/movies-list.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/movies-list/movies-list.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"movie-list\" (click)=\"openDetails($event)\">\n  <app-movie-preview *ngFor=\"let movie of movies | filter:searchTxt\" [movie]=\"movie\" (deleteMovie)=\"onDeleteMovie($event)\"></app-movie-preview>\n</div>"

/***/ }),

/***/ "./src/app/pages/movies-list/movies-list.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/movies-list/movies-list.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".movie-list {\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 872px;\n  margin: auto;\n  margin-top: 10px; }\n  @media screen and (max-width: 890px) {\n    .movie-list {\n      max-width: 654px; } }\n  @media screen and (max-width: 670px) {\n    .movie-list {\n      max-width: 436px; } }\n  @media screen and (max-width: 455px) {\n    .movie-list {\n      max-width: 95vw; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbW92aWVzLWxpc3QvQzpcXGRpdlxcaGVyb2xvLWNpbmVtYS9zcmNcXGFwcFxccGFnZXNcXG1vdmllcy1saXN0XFxtb3ZpZXMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTtFQUVoQjtJQVBKO01BUVEsZ0JBQWdCLEVBQUEsRUFRdkI7RUFORztJQVZKO01BV1EsZ0JBQWdCLEVBQUEsRUFLdkI7RUFIRztJQWJKO01BY1EsZUFBZSxFQUFBLEVBRXRCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbW92aWVzLWxpc3QvbW92aWVzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW92aWUtbGlzdHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBtYXgtd2lkdGg6IDg3MnB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIFxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODkwcHgpIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDY1NHB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjcwcHgpIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDQzNnB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDU1cHgpIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDk1dnc7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/movies-list/movies-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/movies-list/movies-list.component.ts ***!
  \************************************************************/
/*! exports provided: MoviesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesListComponent", function() { return MoviesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/movies.service */ "./src/app/services/movies.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _cmps_popup_delete_popup_delete_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../cmps/popup-delete/popup-delete.component */ "./src/app/cmps/popup-delete/popup-delete.component.ts");





var MoviesListComponent = /** @class */ (function () {
    function MoviesListComponent(moviesService, dialog) {
        this.moviesService = moviesService;
        this.dialog = dialog;
    }
    MoviesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.moviesService.fetchMovies();
        this.moviesSub = this.moviesService.getMovies()
            .subscribe(function (data) {
            _this.movies = data.movies;
        });
    };
    MoviesListComponent.prototype.onDeleteMovie = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(_cmps_popup_delete_popup_delete_component__WEBPACK_IMPORTED_MODULE_4__["PopupDeleteComponent"]);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.moviesService.deleteMovie(id);
            }
        });
    };
    MoviesListComponent.prototype.openDetails = function (ev) {
        var card = document.getElementById(ev.target.id);
        card.children[0].classList.add('openDetails');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MoviesListComponent.prototype, "searchTxt", void 0);
    MoviesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movies-list',
            template: __webpack_require__(/*! ./movies-list.component.html */ "./src/app/pages/movies-list/movies-list.component.html"),
            styles: [__webpack_require__(/*! ./movies-list.component.scss */ "./src/app/pages/movies-list/movies-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], MoviesListComponent);
    return MoviesListComponent;
}());



/***/ }),

/***/ "./src/app/services/clean-txt.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/services/clean-txt.pipe.ts ***!
  \********************************************/
/*! exports provided: CleanTxtPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CleanTxtPipe", function() { return CleanTxtPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CleanTxtPipe = /** @class */ (function () {
    function CleanTxtPipe() {
    }
    CleanTxtPipe.prototype.transform = function (value) {
        return value.replace(/[^a-zA-Z0-9 ]/g, '');
    };
    CleanTxtPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'cleanTxt'
        })
    ], CleanTxtPipe);
    return CleanTxtPipe;
}());



/***/ }),

/***/ "./src/app/services/filter.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/services/filter.pipe.ts ***!
  \*****************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, filter) {
        if (!items || !filter) {
            return items;
        }
        return items.filter(function (item) { return item.Title.toLowerCase().includes(filter.toLowerCase()); });
    };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/services/movie.ts":
/*!***********************************!*\
  !*** ./src/app/services/movie.ts ***!
  \***********************************/
/*! exports provided: Movie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movie", function() { return Movie; });
var Movie = /** @class */ (function () {
    function Movie() {
    }
    return Movie;
}());



/***/ }),

/***/ "./src/app/services/movies.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/movies.service.ts ***!
  \********************************************/
/*! exports provided: MoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesService", function() { return MoviesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var MoviesService = /** @class */ (function () {
    function MoviesService(http) {
        this.http = http;
        this.BASE_URL = 'http://www.omdbapi.com/?apikey=bdfb6376';
        this.moviesNames = [
            'glass',
            'Aquaman',
            'Mission: Impossible – Fallout',
            'Replicas',
            'spider-man: into the spider-verse',
            'the upside',
            'Mandy',
            'Paddington 2',
            'Leave No Trace',
            'The Ballad of Buster Scruggs',
            'A Private War',
            'Annihilation'
        ];
        this.movies = [];
        this.moviesUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    MoviesService.prototype.getMovies = function () {
        return this.moviesUpdated.asObservable();
    };
    MoviesService.prototype.fetchMovies = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(this.moviesNames.map(function (movieName) {
            return _this.getMovie(movieName);
        }))
            .subscribe(function (movies) {
            _this.movies = movies;
            _this.moviesUpdated.next({ movies: _this.movies });
        });
    };
    MoviesService.prototype.getMovie = function (name) {
        return this.http.get(this.BASE_URL + "&t=" + name)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            if (res.Response === "False")
                return null;
            var Title = res.Title, Year = res.Year, Runtime = res.Runtime, Genre = res.Genre, Director = res.Director, imdbID = res.imdbID, Poster = res.Poster;
            var movie = { Title: Title, Year: Year, Runtime: Runtime, Genre: Genre, Director: Director, imdbID: imdbID, Poster: Poster };
            return movie;
        }));
    };
    MoviesService.prototype.deleteMovie = function (movieId) {
        var idx = this.movies.findIndex(function (movie) { return movie.imdbID === movieId; });
        this.movies.splice(idx, 1);
        this.moviesUpdated.next({ movies: this.movies });
    };
    MoviesService.prototype.updateMovie = function (movie) {
        var idx = this.movies.findIndex(function (currMovie) { return currMovie.imdbID === movie.imdbID; });
        if (idx === -1) {
            this.movies.unshift(movie);
        }
        else {
            this.movies.splice(idx, 1, movie);
        }
        this.moviesUpdated.next({ movies: this.movies });
    };
    MoviesService.prototype.movieExist = function (movieTitle) {
        return this.movies.some(function (_a) {
            var Title = _a.Title;
            return movieTitle.toLowerCase() === Title.toLowerCase();
        });
    };
    MoviesService.prototype.makeid = function (l) {
        var text = "";
        var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < l; i++) {
            text += char_list.charAt(Math.floor(Math.random() * char_list.length));
        }
        return text;
    };
    MoviesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], MoviesService);
    return MoviesService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\div\herolo-cinema\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map