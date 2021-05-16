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

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_aboutus_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/aboutus.service */ "./src/app/services/aboutus.service.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");








class AboutComponent {
    constructor(aboutusService) {
        this.aboutusService = aboutusService;
    }
    ngOnInit() {
        this.aboutus = this.aboutusService.getAboutUss();
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_aboutus_service__WEBPACK_IMPORTED_MODULE_1__["AboutusService"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 84, vars: 1, consts: [["fxLayout", "column", "fxLayoutGap", "10px", 1, "container"], ["fxFlex", ""], ["fxLayout", "column", "fxLayout.gt-sm", "row"], ["fxFlex", "70"], ["fxFlex", "30"], ["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", ""]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "About the website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "This is a web based application to help the farmers working with the motive of greater profitability by direct communication between farmer to supplier and supplier to farmer. This integrated system contains the Farmer component ,the Supplier component and the Admin component. It provides an option of login to farmers and communicates to respective suppliers. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Farmers are notified whenever suppliers publish an advertisement ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "The farmers may also have an option to submit their grievances and complaints to respective dealers or authorities using their farmer login on a separate complaints page and authorities will get access to that page regularly using their login id and passwords. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Facts At a Glance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "dl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "3 August. 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Major Stake Holder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Capgemini India");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Last Year's Turnover");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "$1,250,375");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Employees");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u201CAgriculture is the greatest and fundamentally the most important of our industries. The cities are but the branches of the tree of national life, the roots of which go deeply into the land. We all flourish or decline with the farmer.\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "-- Bernard Baruch, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "cite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Team Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-menu", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "sentiment_very_satisfied");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Harshit Joshi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "sentiment_very_satisfied");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Gaurav Mohanty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "sentiment_very_satisfied");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Reema kumari");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "sentiment_very_satisfied");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Yash Raj");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "sentiment_very_satisfied");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Manoj Kumar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuItem"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return [{ type: _services_aboutus_service__WEBPACK_IMPORTED_MODULE_1__["AboutusService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/adminhome/adminhome.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/adminhome/adminhome.component.ts ***!
  \********************************************************/
/*! exports provided: AdminhomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminhomeComponent", function() { return AdminhomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _adminservice_adminmenu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../adminservice/adminmenu.service */ "./src/app/admin/adminservice/adminmenu.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../directives/highlight.directive */ "./src/app/directives/highlight.directive.ts");









function AdminhomeComponent_mat_grid_tile_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminhomeComponent_mat_grid_tile_8_Template_mat_grid_tile_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const adminmenu_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.openMenuOption(adminmenu_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-grid-tile-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const adminmenu_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", adminmenu_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", adminmenu_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, adminmenu_r1.name));
} }
const _c0 = function () { return ["/home"]; };
class AdminhomeComponent {
    constructor(menuService, _router) {
        this.menuService = menuService;
        this._router = _router;
    }
    ngOnInit() {
        this.adminmenus = this.menuService.getMenus();
    }
    onSelect(menu) {
        this.selectedMenu = menu;
    }
    openMenuOption(value) {
        if (value === '0') {
            this._router.navigate(['/viewcomplaint']);
        }
        if (value === '1') {
            this._router.navigate(['/viewfarmingtips']);
        }
    }
}
AdminhomeComponent.ɵfac = function AdminhomeComponent_Factory(t) { return new (t || AdminhomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_adminservice_adminmenu_service__WEBPACK_IMPORTED_MODULE_1__["AdminmenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AdminhomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminhomeComponent, selectors: [["app-adminhome"]], decls: 12, vars: 3, consts: [["fxLayout", "column", "fxLayoutGap", "50px", 1, "container"], ["fxFlex", ""], ["cols", "2", "rowHeight", "300px"], ["appHighlight", "", 3, "click", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "end end"], ["mat-raised-button", "", "color", "warn", "type", "submit", 3, "routerLink"], ["appHighlight", "", 3, "click"], ["height", "200px", 3, "src", "alt"]], template: function AdminhomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Admin Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-grid-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AdminhomeComponent_mat_grid_tile_8_Template, 6, 5, "mat-grid-tile", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.adminmenus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridTile"], _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_7__["HighlightDirective"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridTileText"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridTileFooterCssMatStyler"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["UpperCasePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluaG9tZS9hZG1pbmhvbWUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminhomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-adminhome',
                templateUrl: './adminhome.component.html',
                styleUrls: ['./adminhome.component.scss']
            }]
    }], function () { return [{ type: _adminservice_adminmenu_service__WEBPACK_IMPORTED_MODULE_1__["AdminmenuService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/adminhome/adminmenus.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/adminhome/adminmenus.ts ***!
  \***********************************************/
/*! exports provided: ADMINMENUS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADMINMENUS", function() { return ADMINMENUS; });
const ADMINMENUS = [
    {
        id: '0',
        name: 'View Complaint',
        image: './assets/images/viewcomplaint.png',
        featured: true
    }, {
        id: '1',
        name: 'Add Farming Tips',
        image: './assets/images/tips.jpg',
        featured: true
    }
];


/***/ }),

/***/ "./src/app/admin/adminlogin/adminlogin.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/adminlogin/adminlogin.component.ts ***!
  \**********************************************************/
/*! exports provided: AdminloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminloginComponent", function() { return AdminloginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _adminmodel_adminmodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../adminmodel/adminmodel */ "./src/app/admin/adminmodel/adminmodel.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _adminregister_adminregister_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adminregister/adminregister.service */ "./src/app/admin/adminregister/adminregister.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");














function AdminloginComponent_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Username is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminloginComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AdminloginComponent {
    constructor(dialogRef, _service, _router) {
        this.dialogRef = dialogRef;
        this._service = _service;
        this._router = _router;
        this.admin = new _adminmodel_adminmodel__WEBPACK_IMPORTED_MODULE_1__["AdminModel"]();
        this.message = '';
        this.adminModel = { username: '', password: '', remember: false };
    }
    ngOnInit() {
    }
    onSubmit() {
        this._service.loginAdmin(this.admin).subscribe(data => {
            console.log("response received");
            this._router.navigate(['/adminhome']);
            this.dialogRef.close();
        }, error => {
            console.log("exception occured");
            this.message = "Hey! Please enter valid username and password";
        });
        //console.log('User: ', this.user);
    }
}
AdminloginComponent.ɵfac = function AdminloginComponent_Factory(t) { return new (t || AdminloginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_adminregister_adminregister_service__WEBPACK_IMPORTED_MODULE_3__["AdminregisterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AdminloginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminloginComponent, selectors: [["app-adminlogin"]], decls: 32, vars: 7, consts: [["color", "primary"], [1, "flex-spacer"], ["mat-button", "", "mat-dialog-close", ""], ["novalidate", "", 3, "ngSubmit"], ["loginForm", "ngForm"], [1, "mat-subheading-1", "accent-color"], ["matInput", "", "placeholder", "Admin Username", "type", "text", "name", "adminusername", "required", "", 3, "ngModel", "ngModelChange"], ["adminusername", "ngModel"], ["matSuffix", ""], [4, "ngIf"], ["matInput", "", "placeholder", "Admin Password", "type", "password", "name", "adminpassword", "required", "", 3, "ngModel", "ngModelChange"], ["adminpassword", "ngModel"], ["name", "remember", 3, "ngModel", "ngModelChange"], [1, "example-label"], [1, "example-button-row"], ["mat-raised-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"]], template: function AdminloginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Welcome Admin, Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AdminloginComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminloginComponent_Template_input_ngModelChange_12_listener($event) { return ctx.admin.adminusername = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AdminloginComponent_mat_error_16_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminloginComponent_Template_input_ngModelChange_19_listener($event) { return ctx.admin.adminpassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AdminloginComponent_mat_error_21_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-checkbox", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminloginComponent_Template_mat_checkbox_ngModelChange_22_listener($event) { return ctx.adminModel.remember = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Remember Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.admin.adminusername);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.admin.adminpassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.adminModel.remember);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.form.invalid);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckbox"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]], styles: [".example-label[_ngcontent-%COMP%] {\n  display: table-cell;\n  font-size: 14px;\n  margin-left: 8px;\n  min-width: 120px;\n}\n\n.example-button-row[_ngcontent-%COMP%] {\n  display: table-cell;\n  width: 490px;\n}\n\n.example-button-row[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%] {\n  margin: 8px 8px 8px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW5sb2dpbi9hZG1pbmxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVFO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDaEI7O0FBRUU7RUFDRSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbmxvZ2luL2FkbWlubG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWJ1dHRvbi1yb3cge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHdpZHRoOiA0OTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtYnV0dG9uLXJvdyAubWF0LWJ1dHRvbi1iYXNlIHtcclxuICAgIG1hcmdpbjogOHB4IDhweCA4cHggMDtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminloginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-adminlogin',
                templateUrl: './adminlogin.component.html',
                styleUrls: ['./adminlogin.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: _adminregister_adminregister_service__WEBPACK_IMPORTED_MODULE_3__["AdminregisterService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/adminmodel/adminmodel.ts":
/*!************************************************!*\
  !*** ./src/app/admin/adminmodel/adminmodel.ts ***!
  \************************************************/
/*! exports provided: AdminModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModel", function() { return AdminModel; });
class AdminModel {
    constructor() { }
}


/***/ }),

/***/ "./src/app/admin/adminregister/adminregister.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/adminregister/adminregister.service.ts ***!
  \**************************************************************/
/*! exports provided: AdminregisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminregisterService", function() { return AdminregisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class AdminregisterService {
    constructor(_http) {
        this._http = _http;
        this.errorMessage = '';
    }
    // authentication(data):Observable<any>{
    //   return this._http.post("http://localhost:8080/registration/AdminAuthenticate",data);
    // }
    loginAdmin(admin) {
        return this._http.post("http://localhost:8686/register-service/registration/adminlogin", admin);
    }
}
AdminregisterService.ɵfac = function AdminregisterService_Factory(t) { return new (t || AdminregisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AdminregisterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminregisterService, factory: AdminregisterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminregisterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/adminservice/adminmenu.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin/adminservice/adminmenu.service.ts ***!
  \*********************************************************/
/*! exports provided: AdminmenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminmenuService", function() { return AdminmenuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _adminhome_adminmenus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../adminhome/adminmenus */ "./src/app/admin/adminhome/adminmenus.ts");



class AdminmenuService {
    constructor() { }
    getMenus() {
        return _adminhome_adminmenus__WEBPACK_IMPORTED_MODULE_1__["ADMINMENUS"];
    }
    getMenu(id) {
        return _adminhome_adminmenus__WEBPACK_IMPORTED_MODULE_1__["ADMINMENUS"].filter((menu) => (menu.id === id))[0];
    }
}
AdminmenuService.ɵfac = function AdminmenuService_Factory(t) { return new (t || AdminmenuService)(); };
AdminmenuService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminmenuService, factory: AdminmenuService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminmenuService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/admin/viewcomplaint/viewcomplaint.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/viewcomplaint/viewcomplaint.component.ts ***!
  \****************************************************************/
/*! exports provided: ViewcomplaintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewcomplaintComponent", function() { return ViewcomplaintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_farmer_addcomplaint_complaint_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/farmer/addcomplaint/complaint.service */ "./src/app/farmer/addcomplaint/complaint.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function ViewcomplaintComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comp_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comp_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comp_r1.farmerId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comp_r1.message);
} }
class ViewcomplaintComponent {
    constructor(cs, router) {
        this.cs = cs;
        this.router = router;
        this.complaint = {
            id: '',
            farmerId: '',
            message: '',
            status: ''
        };
        cs.getAll().subscribe((res) => this.complaints = res);
    }
    //   updateComplaint(){
    //     this.cs.updateComplaint(this.complaint).subscribe(()=>{alert("updated...")
    //           })
    //  }
    ngOnInit() {
    }
}
ViewcomplaintComponent.ɵfac = function ViewcomplaintComponent_Factory(t) { return new (t || ViewcomplaintComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_farmer_addcomplaint_complaint_service__WEBPACK_IMPORTED_MODULE_1__["ComplaintService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ViewcomplaintComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewcomplaintComponent, selectors: [["app-viewcomplaint"]], decls: 23, vars: 1, consts: [["fxLayout", "column", "fxLayoutAlign", "space-around none"], ["fxLayout", "column", "fxLayoutGap", "30px"], ["color", "primary"], ["src", "./assets/images/compl.png", "height", "90px", "width", "90px"], ["id", "customers"], [1, "hidden"], [4, "ngFor", "ngForOf"]], template: function ViewcomplaintComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00A0 \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "View Complaints By Farmers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Complain ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Farmer ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Mesaage from farmer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ViewcomplaintComponent_tr_22_Template, 7, 3, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.complaints);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3ZpZXdjb21wbGFpbnQvdmlld2NvbXBsYWludC5jb21wb25lbnQuc2NzcyJ9 */", "#customers[_ngcontent-%COMP%] {\n  font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n}\n\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: 1px solid rgb(9, 116, 71);\n  padding: 15px;\n}\n\n#customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){background-color: #ffffff;}\n\n#customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {background-color: rgb(175, 214, 33);}\n\n#customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: center;\n  background-color: #4CAF50;\n  color: rgb(255, 255, 255);\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewcomplaintComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-viewcomplaint',
                templateUrl: './viewcomplaint.component.html',
                styleUrls: ['./viewcomplaint.component.scss']
            }]
    }], function () { return [{ type: src_app_farmer_addcomplaint_complaint_service__WEBPACK_IMPORTED_MODULE_1__["ComplaintService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/viewfarmingtips/viewfarmingtips.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/viewfarmingtips/viewfarmingtips.component.ts ***!
  \********************************************************************/
/*! exports provided: ViewfarmingtipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewfarmingtipsComponent", function() { return ViewfarmingtipsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_farmer_farmerservice_farmingtipservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/farmer/farmerservice/farmingtipservice.service */ "./src/app/farmer/farmerservice/farmingtipservice.service.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");










function ViewfarmingtipsComponent_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tips Message is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewfarmingtipsComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewfarmingtipsComponent_div_20_div_1_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.errors.required);
} }
function ViewfarmingtipsComponent_tr_47_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewfarmingtipsComponent_tr_47_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const tips_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.edit(tips_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewfarmingtipsComponent_tr_47_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const tips_r4 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.deleteFarmingtip(tips_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tips_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tips_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tips_r4.tipsMessage);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class ViewfarmingtipsComponent {
    constructor(farmingtipService) {
        this.farmingtipService = farmingtipService;
    }
    ngOnInit() {
        this.getAllFarmingtip();
    }
    getAllFarmingtip() {
        this.farmingtipService.getAllFarmingtips().subscribe((data) => {
            this.allFarmingtip = data;
        });
    }
    edit(tips) {
        this.farmingtipService.currentFarmingtip = Object.assign({}, tips);
    }
    deleteFarmingtip(id) {
        console.log(id);
        this.farmingtipService.deleteFarmingtip(id).subscribe((data) => {
            this.getAllFarmingtip();
        });
    }
    createAndUpdate(currentFarmingtip) {
        console.log(currentFarmingtip);
        if (currentFarmingtip.id != null) {
            console.log('update');
            this.updateFarmingtip(currentFarmingtip);
        }
        else {
            console.log('create');
            this.createFarmingtip(currentFarmingtip);
        }
    }
    createFarmingtip(tips) {
        this.farmingtipService.createFarmingtip(tips).subscribe();
    }
    updateFarmingtip(tips) {
        this.farmingtipService.updateFarmingtip(tips).subscribe();
    }
    clear() {
        this.farmingtipService.currentFarmingtip = {
            id: null,
            tipsMessage: ''
        };
    }
}
ViewfarmingtipsComponent.ɵfac = function ViewfarmingtipsComponent_Factory(t) { return new (t || ViewfarmingtipsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_farmer_farmerservice_farmingtipservice_service__WEBPACK_IMPORTED_MODULE_1__["FarmingtipserviceService"])); };
ViewfarmingtipsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewfarmingtipsComponent, selectors: [["app-viewfarmingtips"]], decls: 48, vars: 6, consts: [["fxLayout", "column", "fxLayoutAlign", "space-around none"], ["fxLayout", "column", "fxLayoutGap", "30px"], ["color", "primary"], ["src", "./assets/images/quicktips.jpg", 1, "myimg"], [2, "font-size", "30px", "font-family", "Arial"], ["fxLayout", "column", "fxLayoutAlign", "space-between none"], [1, "col-md-6"], [1, "tips-form"], [1, "row"], [1, "col-md-9", "form-group"], ["rows", "30", "cols", "150", "placeholder", "Tips Message", "required", "", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["tipsMessage", "ngModel"], ["class", "invalid-msg", 4, "ngIf"], ["fxLayout", "row"], ["flex", ""], ["mat-raised-button", "", "color", "accent", 2, "height", "44px", "width", "138px", 3, "click"], [1, "mat-raised-button", 2, "width", "145px", "height", "44px", 3, "click"], [1, "fa", "fa-retweet"], ["id", "customers"], [4, "ngFor", "ngForOf"], [1, "invalid-msg"], ["style", "color:red;", 4, "ngIf"], [2, "color", "red"], [1, "btn", 3, "click"], [1, "fa", "fa-edit"], [1, "btn", "text-danger", 3, "click"], [1, "fa", "fa-trash"]], template: function ViewfarmingtipsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00A0 \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Add Farming Tips for Farmers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "textarea", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ViewfarmingtipsComponent_Template_textarea_ngModelChange_18_listener($event) { return ctx.farmingtipService.currentFarmingtip.tipsMessage = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ViewfarmingtipsComponent_div_20_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewfarmingtipsComponent_Template_button_click_24_listener() { return ctx.createAndUpdate(ctx.farmingtipService.currentFarmingtip); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "SUBMIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewfarmingtipsComponent_Template_button_click_30_listener() { return ctx.clear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " CANCEL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Tips Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ViewfarmingtipsComponent_tr_47_Template, 11, 2, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.farmingtipService.currentFarmingtip.tipsMessage)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, _r0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allFarmingtip);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [".myimg[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 93px;\n  object-fit: cover;\n  border-radius: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdmlld2Zhcm1pbmd0aXBzL3ZpZXdmYXJtaW5ndGlwcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVc7RUFDWCxZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLGlCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3ZpZXdmYXJtaW5ndGlwcy92aWV3ZmFybWluZ3RpcHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXlpbWd7XHJcbiAgICB3aWR0aDoxMDBweDtcclxuICAgIGhlaWdodDo5M3B4O1xyXG4gICAgb2JqZWN0LWZpdDpjb3ZlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6MCU7XHJcbiAgfSJdfQ== */", "#customers[_ngcontent-%COMP%] {\n  font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n}\n\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: 3px solid #ddd;\n  padding: 30px;\n}\n\n#customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){background-color: #f2f2f2;}\n\n#customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {background-color: #ddd;}\n\n#customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #4CAF50;\n  color: white;\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewfarmingtipsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-viewfarmingtips',
                templateUrl: './viewfarmingtips.component.html',
                styleUrls: ['./viewfarmingtips.component.scss']
            }]
    }], function () { return [{ type: src_app_farmer_farmerservice_farmingtipservice_service__WEBPACK_IMPORTED_MODULE_1__["FarmingtipserviceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./src/app/app-routing/routes.ts");






class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_3__["routes"])
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_3__["routes"])
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app-routing/routes.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing/routes.ts ***!
  \***************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _userdetail_userdetail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../userdetail/userdetail.component */ "./src/app/userdetail/userdetail.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _farmer_viewadvertisement_viewadvertisement_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../farmer/viewadvertisement/viewadvertisement.component */ "./src/app/farmer/viewadvertisement/viewadvertisement.component.ts");
/* harmony import */ var _farmer_farmerhome_farmerhome_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../farmer/farmerhome/farmerhome.component */ "./src/app/farmer/farmerhome/farmerhome.component.ts");
/* harmony import */ var _farmer_farmingtips_farmingtips_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../farmer/farmingtips/farmingtips.component */ "./src/app/farmer/farmingtips/farmingtips.component.ts");
/* harmony import */ var _supplier_supplierhome_supplierhome_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../supplier/supplierhome/supplierhome.component */ "./src/app/supplier/supplierhome/supplierhome.component.ts");
/* harmony import */ var _admin_adminhome_adminhome_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../admin/adminhome/adminhome.component */ "./src/app/admin/adminhome/adminhome.component.ts");
/* harmony import */ var _supplier_addadvertisement_addadvertisement_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../supplier/addadvertisement/addadvertisement.component */ "./src/app/supplier/addadvertisement/addadvertisement.component.ts");
/* harmony import */ var _supplier_deleteadvertisement_deleteadvertisement_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../supplier/deleteadvertisement/deleteadvertisement.component */ "./src/app/supplier/deleteadvertisement/deleteadvertisement.component.ts");
/* harmony import */ var _admin_viewfarmingtips_viewfarmingtips_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../admin/viewfarmingtips/viewfarmingtips.component */ "./src/app/admin/viewfarmingtips/viewfarmingtips.component.ts");
/* harmony import */ var _farmer_farmercrop_cropmenu_cropmenu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../farmer/farmercrop/cropmenu/cropmenu.component */ "./src/app/farmer/farmercrop/cropmenu/cropmenu.component.ts");
/* harmony import */ var _farmer_farmercrop_crophome_crophome_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../farmer/farmercrop/crophome/crophome.component */ "./src/app/farmer/farmercrop/crophome/crophome.component.ts");
/* harmony import */ var _farmer_farmercrop_cropsell_cropsell_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../farmer/farmercrop/cropsell/cropsell.component */ "./src/app/farmer/farmercrop/cropsell/cropsell.component.ts");
/* harmony import */ var _farmer_farmercrop_updatecrop_updatecrop_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../farmer/farmercrop/updatecrop/updatecrop.component */ "./src/app/farmer/farmercrop/updatecrop/updatecrop.component.ts");
/* harmony import */ var _supplier_suppliercrop_suppliercropmenu_suppliercropmenu_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../supplier/suppliercrop/suppliercropmenu/suppliercropmenu.component */ "./src/app/supplier/suppliercrop/suppliercropmenu/suppliercropmenu.component.ts");
/* harmony import */ var _supplier_suppliercrop_buycrop_buycrop_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../supplier/suppliercrop/buycrop/buycrop.component */ "./src/app/supplier/suppliercrop/buycrop/buycrop.component.ts");
/* harmony import */ var _supplier_suppliercrop_buycrophome_buycrophome_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../supplier/suppliercrop/buycrophome/buycrophome.component */ "./src/app/supplier/suppliercrop/buycrophome/buycrophome.component.ts");
/* harmony import */ var _supplier_suppliercrop_buytransaction_buytransaction_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../supplier/suppliercrop/buytransaction/buytransaction.component */ "./src/app/supplier/suppliercrop/buytransaction/buytransaction.component.ts");
/* harmony import */ var _farmer_addcomplaint_addcomplaint_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../farmer/addcomplaint/addcomplaint.component */ "./src/app/farmer/addcomplaint/addcomplaint.component.ts");
/* harmony import */ var _admin_viewcomplaint_viewcomplaint_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../admin/viewcomplaint/viewcomplaint.component */ "./src/app/admin/viewcomplaint/viewcomplaint.component.ts");























const routes = [
    { path: 'home', component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_0__["MenuComponent"] },
    { path: 'contactus', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'aboutus', component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: 'userdetail/:id', component: _userdetail_userdetail_component__WEBPACK_IMPORTED_MODULE_1__["UserdetailComponent"] },
    { path: 'viewadvertisement', component: _farmer_viewadvertisement_viewadvertisement_component__WEBPACK_IMPORTED_MODULE_5__["ViewadvertisementComponent"] },
    { path: 'farmerhome', component: _farmer_farmerhome_farmerhome_component__WEBPACK_IMPORTED_MODULE_6__["FarmerhomeComponent"] },
    { path: 'farmertips', component: _farmer_farmingtips_farmingtips_component__WEBPACK_IMPORTED_MODULE_7__["FarmingtipsComponent"] },
    { path: 'supplierhome', component: _supplier_supplierhome_supplierhome_component__WEBPACK_IMPORTED_MODULE_8__["SupplierhomeComponent"] },
    { path: 'adminhome', component: _admin_adminhome_adminhome_component__WEBPACK_IMPORTED_MODULE_9__["AdminhomeComponent"] },
    { path: 'addadvertisement', component: _supplier_addadvertisement_addadvertisement_component__WEBPACK_IMPORTED_MODULE_10__["AddadvertisementComponent"] },
    { path: 'deleteadvertisement', component: _supplier_deleteadvertisement_deleteadvertisement_component__WEBPACK_IMPORTED_MODULE_11__["DeleteadvertisementComponent"] },
    { path: 'viewfarmingtips', component: _admin_viewfarmingtips_viewfarmingtips_component__WEBPACK_IMPORTED_MODULE_12__["ViewfarmingtipsComponent"] },
    { path: 'cropmenu', component: _farmer_farmercrop_cropmenu_cropmenu_component__WEBPACK_IMPORTED_MODULE_13__["CropmenuComponent"] },
    { path: 'crophome', component: _farmer_farmercrop_crophome_crophome_component__WEBPACK_IMPORTED_MODULE_14__["CrophomeComponent"] },
    { path: 'cropsell', component: _farmer_farmercrop_cropsell_cropsell_component__WEBPACK_IMPORTED_MODULE_15__["CropsellComponent"] },
    { path: 'updatecrop', component: _farmer_farmercrop_updatecrop_updatecrop_component__WEBPACK_IMPORTED_MODULE_16__["UpdatecropComponent"] },
    { path: 'suppliercropmenu', component: _supplier_suppliercrop_suppliercropmenu_suppliercropmenu_component__WEBPACK_IMPORTED_MODULE_17__["SuppliercropmenuComponent"] },
    { path: 'buycrop', component: _supplier_suppliercrop_buycrop_buycrop_component__WEBPACK_IMPORTED_MODULE_18__["BuycropComponent"] },
    { path: 'buycrophome', component: _supplier_suppliercrop_buycrophome_buycrophome_component__WEBPACK_IMPORTED_MODULE_19__["BuycrophomeComponent"] },
    { path: 'buytransaction', component: _supplier_suppliercrop_buytransaction_buytransaction_component__WEBPACK_IMPORTED_MODULE_20__["BuytransactionComponent"] },
    { path: 'addcomplaint', component: _farmer_addcomplaint_addcomplaint_component__WEBPACK_IMPORTED_MODULE_21__["AddcomplaintComponent"] },
    { path: 'viewcomplaint', component: _admin_viewcomplaint_viewcomplaint_component__WEBPACK_IMPORTED_MODULE_22__["ViewcomplaintComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");





class AppComponent {
    constructor() {
        this.title = 'fas';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _userdetail_userdetail_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./userdetail/userdetail.component */ "./src/app/userdetail/userdetail.component.ts");
/* harmony import */ var _services_loginmenu_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/loginmenu.service */ "./src/app/services/loginmenu.service.ts");
/* harmony import */ var _services_aboutus_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/aboutus.service */ "./src/app/services/aboutus.service.ts");
/* harmony import */ var _farmer_farmerservice_menuservice_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./farmer/farmerservice/menuservice.service */ "./src/app/farmer/farmerservice/menuservice.service.ts");
/* harmony import */ var _farmer_farmerservice_farmingtipservice_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./farmer/farmerservice/farmingtipservice.service */ "./src/app/farmer/farmerservice/farmingtipservice.service.ts");
/* harmony import */ var _supplier_supplierregister_supplierregsiter_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./supplier/supplierregister/supplierregsiter.service */ "./src/app/supplier/supplierregister/supplierregsiter.service.ts");
/* harmony import */ var _supplier_supplierservice_suppliermenu_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./supplier/supplierservice/suppliermenu.service */ "./src/app/supplier/supplierservice/suppliermenu.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _farmer_viewadvertisement_viewadvertisement_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./farmer/viewadvertisement/viewadvertisement.component */ "./src/app/farmer/viewadvertisement/viewadvertisement.component.ts");
/* harmony import */ var _farmer_farmersignup_farmersignup_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./farmer/farmersignup/farmersignup.component */ "./src/app/farmer/farmersignup/farmersignup.component.ts");
/* harmony import */ var _supplier_suppliersignup_suppliersignup_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./supplier/suppliersignup/suppliersignup.component */ "./src/app/supplier/suppliersignup/suppliersignup.component.ts");
/* harmony import */ var _supplier_addadvertisement_addadvertisement_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./supplier/addadvertisement/addadvertisement.component */ "./src/app/supplier/addadvertisement/addadvertisement.component.ts");
/* harmony import */ var _supplier_supplierhome_supplierhome_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./supplier/supplierhome/supplierhome.component */ "./src/app/supplier/supplierhome/supplierhome.component.ts");
/* harmony import */ var _farmer_farmerhome_farmerhome_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./farmer/farmerhome/farmerhome.component */ "./src/app/farmer/farmerhome/farmerhome.component.ts");
/* harmony import */ var _farmer_farmerlogin_farmerlogin_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./farmer/farmerlogin/farmerlogin.component */ "./src/app/farmer/farmerlogin/farmerlogin.component.ts");
/* harmony import */ var _supplier_supplierlogin_supplierlogin_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./supplier/supplierlogin/supplierlogin.component */ "./src/app/supplier/supplierlogin/supplierlogin.component.ts");
/* harmony import */ var _admin_adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./admin/adminlogin/adminlogin.component */ "./src/app/admin/adminlogin/adminlogin.component.ts");
/* harmony import */ var _admin_adminhome_adminhome_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./admin/adminhome/adminhome.component */ "./src/app/admin/adminhome/adminhome.component.ts");
/* harmony import */ var _farmer_viewadvertisement_table_table_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./farmer/viewadvertisement/table/table.component */ "./src/app/farmer/viewadvertisement/table/table.component.ts");
/* harmony import */ var _farmer_farmingtips_farmingtips_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./farmer/farmingtips/farmingtips.component */ "./src/app/farmer/farmingtips/farmingtips.component.ts");
/* harmony import */ var _admin_adminservice_adminmenu_service__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./admin/adminservice/adminmenu.service */ "./src/app/admin/adminservice/adminmenu.service.ts");
/* harmony import */ var _admin_adminregister_adminregister_service__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./admin/adminregister/adminregister.service */ "./src/app/admin/adminregister/adminregister.service.ts");
/* harmony import */ var _supplier_deleteadvertisement_deleteadvertisement_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./supplier/deleteadvertisement/deleteadvertisement.component */ "./src/app/supplier/deleteadvertisement/deleteadvertisement.component.ts");
/* harmony import */ var _admin_viewfarmingtips_viewfarmingtips_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./admin/viewfarmingtips/viewfarmingtips.component */ "./src/app/admin/viewfarmingtips/viewfarmingtips.component.ts");
/* harmony import */ var _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./authorization/authorization.component */ "./src/app/authorization/authorization.component.ts");
/* harmony import */ var _farmer_farmerlogout_farmerlogout_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./farmer/farmerlogout/farmerlogout.component */ "./src/app/farmer/farmerlogout/farmerlogout.component.ts");
/* harmony import */ var _supplier_suppliersignup_dialog_elements_example_dialog_dialog_elements_example_dialog_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./supplier/suppliersignup/dialog-elements-example-dialog/dialog-elements-example-dialog.component */ "./src/app/supplier/suppliersignup/dialog-elements-example-dialog/dialog-elements-example-dialog.component.ts");
/* harmony import */ var _farmer_farmercrop_crophome_crophome_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./farmer/farmercrop/crophome/crophome.component */ "./src/app/farmer/farmercrop/crophome/crophome.component.ts");
/* harmony import */ var _farmer_farmercrop_cropsell_cropsell_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./farmer/farmercrop/cropsell/cropsell.component */ "./src/app/farmer/farmercrop/cropsell/cropsell.component.ts");
/* harmony import */ var _farmer_farmercrop_updatecrop_updatecrop_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./farmer/farmercrop/updatecrop/updatecrop.component */ "./src/app/farmer/farmercrop/updatecrop/updatecrop.component.ts");
/* harmony import */ var _farmer_farmercrop_cropmenu_cropmenu_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./farmer/farmercrop/cropmenu/cropmenu.component */ "./src/app/farmer/farmercrop/cropmenu/cropmenu.component.ts");
/* harmony import */ var _supplier_suppliercrop_suppliercropmenu_suppliercropmenu_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./supplier/suppliercrop/suppliercropmenu/suppliercropmenu.component */ "./src/app/supplier/suppliercrop/suppliercropmenu/suppliercropmenu.component.ts");
/* harmony import */ var _supplier_suppliercrop_buycrophome_buycrophome_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./supplier/suppliercrop/buycrophome/buycrophome.component */ "./src/app/supplier/suppliercrop/buycrophome/buycrophome.component.ts");
/* harmony import */ var _supplier_suppliercrop_buycrop_buycrop_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./supplier/suppliercrop/buycrop/buycrop.component */ "./src/app/supplier/suppliercrop/buycrop/buycrop.component.ts");
/* harmony import */ var _supplier_suppliercrop_buytransaction_buytransaction_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./supplier/suppliercrop/buytransaction/buytransaction.component */ "./src/app/supplier/suppliercrop/buytransaction/buytransaction.component.ts");
/* harmony import */ var _farmer_addcomplaint_addcomplaint_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./farmer/addcomplaint/addcomplaint.component */ "./src/app/farmer/addcomplaint/addcomplaint.component.ts");
/* harmony import */ var _farmer_addcomplaint_complaint_service__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./farmer/addcomplaint/complaint.service */ "./src/app/farmer/addcomplaint/complaint.service.ts");
/* harmony import */ var _admin_viewcomplaint_viewcomplaint_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./admin/viewcomplaint/viewcomplaint.component */ "./src/app/admin/viewcomplaint/viewcomplaint.component.ts");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./directives/highlight.directive */ "./src/app/directives/highlight.directive.ts");








































































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_loginmenu_service__WEBPACK_IMPORTED_MODULE_26__["LoginmenuService"], _services_aboutus_service__WEBPACK_IMPORTED_MODULE_27__["AboutusService"], _farmer_farmerservice_menuservice_service__WEBPACK_IMPORTED_MODULE_28__["MenuserviceService"],
        _farmer_farmerservice_farmingtipservice_service__WEBPACK_IMPORTED_MODULE_29__["FarmingtipserviceService"], _admin_adminservice_adminmenu_service__WEBPACK_IMPORTED_MODULE_50__["AdminmenuService"], _admin_adminregister_adminregister_service__WEBPACK_IMPORTED_MODULE_51__["AdminregisterService"],
        _supplier_supplierregister_supplierregsiter_service__WEBPACK_IMPORTED_MODULE_30__["SupplierregsiterService"], _supplier_supplierservice_suppliermenu_service__WEBPACK_IMPORTED_MODULE_31__["SuppliermenuService"], _farmer_addcomplaint_complaint_service__WEBPACK_IMPORTED_MODULE_66__["ComplaintService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
            _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_21__["MatTableModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_68__["MatStepperModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _menu_menu_component__WEBPACK_IMPORTED_MODULE_24__["MenuComponent"],
        _userdetail_userdetail_component__WEBPACK_IMPORTED_MODULE_25__["UserdetailComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_32__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_33__["FooterComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_34__["AboutComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_35__["HomeComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_36__["ContactComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_37__["LoginComponent"],
        _farmer_farmersignup_farmersignup_component__WEBPACK_IMPORTED_MODULE_39__["FarmersignupComponent"],
        _supplier_suppliersignup_suppliersignup_component__WEBPACK_IMPORTED_MODULE_40__["SuppliersignupComponent"],
        _supplier_addadvertisement_addadvertisement_component__WEBPACK_IMPORTED_MODULE_41__["AddadvertisementComponent"],
        _supplier_supplierhome_supplierhome_component__WEBPACK_IMPORTED_MODULE_42__["SupplierhomeComponent"],
        _farmer_farmerhome_farmerhome_component__WEBPACK_IMPORTED_MODULE_43__["FarmerhomeComponent"],
        _farmer_farmerlogin_farmerlogin_component__WEBPACK_IMPORTED_MODULE_44__["FarmerloginComponent"],
        _supplier_supplierlogin_supplierlogin_component__WEBPACK_IMPORTED_MODULE_45__["SupplierloginComponent"],
        _admin_adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_46__["AdminloginComponent"],
        _admin_adminhome_adminhome_component__WEBPACK_IMPORTED_MODULE_47__["AdminhomeComponent"],
        _farmer_viewadvertisement_viewadvertisement_component__WEBPACK_IMPORTED_MODULE_38__["ViewadvertisementComponent"],
        _farmer_viewadvertisement_table_table_component__WEBPACK_IMPORTED_MODULE_48__["TableComponent"],
        _farmer_farmingtips_farmingtips_component__WEBPACK_IMPORTED_MODULE_49__["FarmingtipsComponent"], _admin_adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_46__["AdminloginComponent"], _admin_adminhome_adminhome_component__WEBPACK_IMPORTED_MODULE_47__["AdminhomeComponent"], _supplier_deleteadvertisement_deleteadvertisement_component__WEBPACK_IMPORTED_MODULE_52__["DeleteadvertisementComponent"], _admin_viewfarmingtips_viewfarmingtips_component__WEBPACK_IMPORTED_MODULE_53__["ViewfarmingtipsComponent"], _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_54__["AuthorizationComponent"], _farmer_farmerlogout_farmerlogout_component__WEBPACK_IMPORTED_MODULE_55__["FarmerlogoutComponent"], _supplier_suppliersignup_dialog_elements_example_dialog_dialog_elements_example_dialog_component__WEBPACK_IMPORTED_MODULE_56__["DialogElementsExampleDialogComponent"], _farmer_farmercrop_crophome_crophome_component__WEBPACK_IMPORTED_MODULE_57__["CrophomeComponent"], _farmer_farmercrop_cropsell_cropsell_component__WEBPACK_IMPORTED_MODULE_58__["CropsellComponent"], _farmer_farmercrop_updatecrop_updatecrop_component__WEBPACK_IMPORTED_MODULE_59__["UpdatecropComponent"], _farmer_farmercrop_cropmenu_cropmenu_component__WEBPACK_IMPORTED_MODULE_60__["CropmenuComponent"], _supplier_suppliercrop_suppliercropmenu_suppliercropmenu_component__WEBPACK_IMPORTED_MODULE_61__["SuppliercropmenuComponent"], _supplier_suppliercrop_buycrophome_buycrophome_component__WEBPACK_IMPORTED_MODULE_62__["BuycrophomeComponent"], _supplier_suppliercrop_buycrop_buycrop_component__WEBPACK_IMPORTED_MODULE_63__["BuycropComponent"], _supplier_suppliercrop_buytransaction_buytransaction_component__WEBPACK_IMPORTED_MODULE_64__["BuytransactionComponent"], _farmer_addcomplaint_addcomplaint_component__WEBPACK_IMPORTED_MODULE_65__["AddcomplaintComponent"], _admin_viewcomplaint_viewcomplaint_component__WEBPACK_IMPORTED_MODULE_67__["ViewcomplaintComponent"], _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_69__["HighlightDirective"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
        _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_21__["MatTableModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_68__["MatStepperModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _menu_menu_component__WEBPACK_IMPORTED_MODULE_24__["MenuComponent"],
                    _userdetail_userdetail_component__WEBPACK_IMPORTED_MODULE_25__["UserdetailComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_32__["HeaderComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_33__["FooterComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_34__["AboutComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_35__["HomeComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_36__["ContactComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_37__["LoginComponent"],
                    _farmer_farmersignup_farmersignup_component__WEBPACK_IMPORTED_MODULE_39__["FarmersignupComponent"],
                    _supplier_suppliersignup_suppliersignup_component__WEBPACK_IMPORTED_MODULE_40__["SuppliersignupComponent"],
                    _supplier_addadvertisement_addadvertisement_component__WEBPACK_IMPORTED_MODULE_41__["AddadvertisementComponent"],
                    _supplier_supplierhome_supplierhome_component__WEBPACK_IMPORTED_MODULE_42__["SupplierhomeComponent"],
                    _farmer_farmerhome_farmerhome_component__WEBPACK_IMPORTED_MODULE_43__["FarmerhomeComponent"],
                    _farmer_farmerlogin_farmerlogin_component__WEBPACK_IMPORTED_MODULE_44__["FarmerloginComponent"],
                    _supplier_supplierlogin_supplierlogin_component__WEBPACK_IMPORTED_MODULE_45__["SupplierloginComponent"],
                    _admin_adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_46__["AdminloginComponent"],
                    _admin_adminhome_adminhome_component__WEBPACK_IMPORTED_MODULE_47__["AdminhomeComponent"],
                    _farmer_viewadvertisement_viewadvertisement_component__WEBPACK_IMPORTED_MODULE_38__["ViewadvertisementComponent"],
                    _farmer_viewadvertisement_table_table_component__WEBPACK_IMPORTED_MODULE_48__["TableComponent"],
                    _farmer_farmingtips_farmingtips_component__WEBPACK_IMPORTED_MODULE_49__["FarmingtipsComponent"], _admin_adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_46__["AdminloginComponent"], _admin_adminhome_adminhome_component__WEBPACK_IMPORTED_MODULE_47__["AdminhomeComponent"], _supplier_deleteadvertisement_deleteadvertisement_component__WEBPACK_IMPORTED_MODULE_52__["DeleteadvertisementComponent"], _admin_viewfarmingtips_viewfarmingtips_component__WEBPACK_IMPORTED_MODULE_53__["ViewfarmingtipsComponent"], _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_54__["AuthorizationComponent"], _farmer_farmerlogout_farmerlogout_component__WEBPACK_IMPORTED_MODULE_55__["FarmerlogoutComponent"], _supplier_suppliersignup_dialog_elements_example_dialog_dialog_elements_example_dialog_component__WEBPACK_IMPORTED_MODULE_56__["DialogElementsExampleDialogComponent"], _farmer_farmercrop_crophome_crophome_component__WEBPACK_IMPORTED_MODULE_57__["CrophomeComponent"], _farmer_farmercrop_cropsell_cropsell_component__WEBPACK_IMPORTED_MODULE_58__["CropsellComponent"], _farmer_farmercrop_updatecrop_updatecrop_component__WEBPACK_IMPORTED_MODULE_59__["UpdatecropComponent"], _farmer_farmercrop_cropmenu_cropmenu_component__WEBPACK_IMPORTED_MODULE_60__["CropmenuComponent"], _supplier_suppliercrop_suppliercropmenu_suppliercropmenu_component__WEBPACK_IMPORTED_MODULE_61__["SuppliercropmenuComponent"], _supplier_suppliercrop_buycrophome_buycrophome_component__WEBPACK_IMPORTED_MODULE_62__["BuycrophomeComponent"], _supplier_suppliercrop_buycrop_buycrop_component__WEBPACK_IMPORTED_MODULE_63__["BuycropComponent"], _supplier_suppliercrop_buytransaction_buytransaction_component__WEBPACK_IMPORTED_MODULE_64__["BuytransactionComponent"], _farmer_addcomplaint_addcomplaint_component__WEBPACK_IMPORTED_MODULE_65__["AddcomplaintComponent"], _admin_viewcomplaint_viewcomplaint_component__WEBPACK_IMPORTED_MODULE_67__["ViewcomplaintComponent"], _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_69__["HighlightDirective"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
                    _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggleModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_21__["MatTableModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_68__["MatStepperModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"]
                ],
                providers: [_services_loginmenu_service__WEBPACK_IMPORTED_MODULE_26__["LoginmenuService"], _services_aboutus_service__WEBPACK_IMPORTED_MODULE_27__["AboutusService"], _farmer_farmerservice_menuservice_service__WEBPACK_IMPORTED_MODULE_28__["MenuserviceService"],
                    _farmer_farmerservice_farmingtipservice_service__WEBPACK_IMPORTED_MODULE_29__["FarmingtipserviceService"], _admin_adminservice_adminmenu_service__WEBPACK_IMPORTED_MODULE_50__["AdminmenuService"], _admin_adminregister_adminregister_service__WEBPACK_IMPORTED_MODULE_51__["AdminregisterService"],
                    _supplier_supplierregister_supplierregsiter_service__WEBPACK_IMPORTED_MODULE_30__["SupplierregsiterService"], _supplier_supplierservice_suppliermenu_service__WEBPACK_IMPORTED_MODULE_31__["SuppliermenuService"], _farmer_addcomplaint_complaint_service__WEBPACK_IMPORTED_MODULE_66__["ComplaintService"]],
                entryComponents: [_farmer_farmersignup_farmersignup_component__WEBPACK_IMPORTED_MODULE_39__["FarmersignupComponent"], _farmer_farmerlogin_farmerlogin_component__WEBPACK_IMPORTED_MODULE_44__["FarmerloginComponent"], _admin_adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_46__["AdminloginComponent"], _farmer_addcomplaint_addcomplaint_component__WEBPACK_IMPORTED_MODULE_65__["AddcomplaintComponent"],
                    _supplier_supplierlogin_supplierlogin_component__WEBPACK_IMPORTED_MODULE_45__["SupplierloginComponent"], _supplier_suppliersignup_suppliersignup_component__WEBPACK_IMPORTED_MODULE_40__["SuppliersignupComponent"], _supplier_suppliercrop_buycrop_buycrop_component__WEBPACK_IMPORTED_MODULE_63__["BuycropComponent"], _supplier_suppliercrop_buycrophome_buycrophome_component__WEBPACK_IMPORTED_MODULE_62__["BuycrophomeComponent"], _supplier_suppliercrop_buytransaction_buytransaction_component__WEBPACK_IMPORTED_MODULE_64__["BuytransactionComponent"],
                    ,
                    _farmer_viewadvertisement_viewadvertisement_component__WEBPACK_IMPORTED_MODULE_38__["ViewadvertisementComponent"], _farmer_farmerhome_farmerhome_component__WEBPACK_IMPORTED_MODULE_43__["FarmerhomeComponent"], _admin_viewfarmingtips_viewfarmingtips_component__WEBPACK_IMPORTED_MODULE_53__["ViewfarmingtipsComponent"], _farmer_farmercrop_crophome_crophome_component__WEBPACK_IMPORTED_MODULE_57__["CrophomeComponent"], _farmer_farmercrop_cropsell_cropsell_component__WEBPACK_IMPORTED_MODULE_58__["CropsellComponent"], _farmer_farmercrop_updatecrop_updatecrop_component__WEBPACK_IMPORTED_MODULE_59__["UpdatecropComponent"],
                    _farmer_farmingtips_farmingtips_component__WEBPACK_IMPORTED_MODULE_49__["FarmingtipsComponent"], _admin_adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_46__["AdminloginComponent"], _admin_adminhome_adminhome_component__WEBPACK_IMPORTED_MODULE_47__["AdminhomeComponent"], _supplier_addadvertisement_addadvertisement_component__WEBPACK_IMPORTED_MODULE_41__["AddadvertisementComponent"], _supplier_deleteadvertisement_deleteadvertisement_component__WEBPACK_IMPORTED_MODULE_52__["DeleteadvertisementComponent"], _farmer_farmercrop_cropmenu_cropmenu_component__WEBPACK_IMPORTED_MODULE_60__["CropmenuComponent"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/authorization/authorization.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/authorization/authorization.component.ts ***!
  \**********************************************************/
/*! exports provided: AuthorizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationComponent", function() { return AuthorizationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AuthorizationComponent {
    constructor() { }
    ngOnInit() {
    }
}
AuthorizationComponent.ɵfac = function AuthorizationComponent_Factory(t) { return new (t || AuthorizationComponent)(); };
AuthorizationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthorizationComponent, selectors: [["app-authorization"]], decls: 2, vars: 0, template: function AuthorizationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "authorization works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhvcml6YXRpb24vYXV0aG9yaXphdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthorizationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-authorization',
                templateUrl: './authorization.component.html',
                styleUrls: ['./authorization.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");




class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 44, vars: 0, consts: [["fxLayout", "column", "fxLayoutGap", "10px", 1, "container"], ["fxFlex", ""], ["fxLayout", "column", "fxLayout.gt-sm", "row"], ["fxFlex", "50", "fxFlexOffset", "20px"], [1, "fa", "fa-phone"], [1, "fa", "fa-fax"], [1, "fa", "fa-envelope"], ["href", "mailto:connect@fas.net"], ["mat-raised-button", "", "href", "tel:+911234567800"], ["mat-raised-button", ""], [1, "fa", "fa-skype"], ["mat-raised-button", "", "href", "mailto:connect@fas.net"], [1, "fa", "fa-envelope-o"], ["fxFlex", "40"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Location Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Our Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " 121,EPIP Phase II");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Whitefield, Bangalore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " INDIA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, ": +91 1234 5678 00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, ": +91 8765 4321 00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "connect@fas.net");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Call");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Skype");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Map of our Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexOffsetDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/directives/highlight.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/directives/highlight.directive.ts ***!
  \***************************************************/
/*! exports provided: HighlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightDirective", function() { return HighlightDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



class HighlightDirective {
    constructor(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    onMouseEnter() {
        this.renderer.addClass(this.el.nativeElement, 'highlight');
    }
    onMouseLeave() {
        this.renderer.removeClass(this.el.nativeElement, 'highlight');
    }
}
HighlightDirective.ɵfac = function HighlightDirective_Factory(t) { return new (t || HighlightDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
HighlightDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: HighlightDirective, selectors: [["", "appHighlight", ""]], hostBindings: function HighlightDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function HighlightDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function HighlightDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighlightDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appHighlight]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { onMouseEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseleave']
        }] }); })();


/***/ }),

/***/ "./src/app/farmer/addcomplaint/addcomplaint.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/farmer/addcomplaint/addcomplaint.component.ts ***!
  \***************************************************************/
/*! exports provided: AddcomplaintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcomplaintComponent", function() { return AddcomplaintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _addcomplaint_complaint_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../addcomplaint/complaint.service */ "./src/app/farmer/addcomplaint/complaint.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");











function AddcomplaintComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Farmer ID should not be empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r0.errors.required);
} }
function AddcomplaintComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Complaint Message should not be empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r2.errors.required);
} }
class AddcomplaintComponent {
    constructor(cs, router) {
        this.cs = cs;
        this.router = router;
        this.complaint = {
            id: '',
            farmerId: '',
            message: '',
            status: 'False'
        };
    }
    ngOnInit() {
    }
    addComplaint() {
        this.cs.add(this.complaint).subscribe((data) => {
            alert("added");
            this.router.navigate(['addcomplaint']);
        });
    }
}
AddcomplaintComponent.ɵfac = function AddcomplaintComponent_Factory(t) { return new (t || AddcomplaintComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_addcomplaint_complaint_service__WEBPACK_IMPORTED_MODULE_1__["ComplaintService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AddcomplaintComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddcomplaintComponent, selectors: [["app-addcomplaint"]], decls: 40, vars: 5, consts: [[1, "container"], [1, "row"], [1, "col-sm-4"], [1, "was-validated"], ["aria-label", "Color selection", 1, "mat-chip-list-stacked"], ["selected", "", "color", "accent", 2, "font-size", "20px"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "type", "number", "id", "farmerID", "placeholder", "Farmer ID", "name", "FarmerID", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["idRef", "ngModel"], [4, "ngIf"], ["cols", "50", "rows", "12", "type", "text", "id", "complaintMessage", "placeholder", "Complaint Message", "name", "complaintMessage", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["messageRef", "ngModel"], [1, "example-button-row"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "btn", "btn-primary", 3, "disabled", "click"], [3, "hidden"]], template: function AddcomplaintComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Send Complaint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00A0\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00A0\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u00A0\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-chip-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-chip", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Farmer ID : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddcomplaintComponent_Template_input_ngModelChange_22_listener($event) { return ctx.complaint.farmerId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AddcomplaintComponent_div_25_Template, 3, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-chip-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-chip", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Complaint Message : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "textarea", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddcomplaintComponent_Template_textarea_ngModelChange_30_listener($event) { return ctx.complaint.message = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AddcomplaintComponent_div_33_Template, 3, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u00A0\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddcomplaintComponent_Template_button_click_38_listener() { return ctx.addComplaint(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.complaint.farmerId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.errors && (_r0.dirty || _r0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.complaint.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.errors && (_r2.dirty || _r2.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r2.invalid);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChip"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]], styles: [".col-sm-4[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFybWVyL2FkZGNvbXBsYWludC9hZGRjb21wbGFpbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvZmFybWVyL2FkZGNvbXBsYWludC9hZGRjb21wbGFpbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sLXNtLTQge1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddcomplaintComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-addcomplaint',
                templateUrl: './addcomplaint.component.html',
                styleUrls: ['./addcomplaint.component.scss']
            }]
    }], function () { return [{ type: _addcomplaint_complaint_service__WEBPACK_IMPORTED_MODULE_1__["ComplaintService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/farmer/addcomplaint/complaint.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/farmer/addcomplaint/complaint.service.ts ***!
  \**********************************************************/
/*! exports provided: ComplaintService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintService", function() { return ComplaintService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class ComplaintService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http.get('http://localhost:3000/complaints');
    }
    // updateComplaint(complaint){
    //   let opt=new HttpHeaders({'Content-type':'application/json'})
    //   return this.http.put('http://localhost:3000/complaints/'+complaint.id,complaint,{headers:opt});
    // }
    add(complaint) {
        let opt = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/complaints', complaint, { headers: opt });
    }
}
ComplaintService.ɵfac = function ComplaintService_Factory(t) { return new (t || ComplaintService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ComplaintService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ComplaintService, factory: ComplaintService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComplaintService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/farmer/farmercrop/crophome/crophome.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/farmer/farmercrop/crophome/crophome.component.ts ***!
  \******************************************************************/
/*! exports provided: CrophomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrophomeComponent", function() { return CrophomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _cropservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cropservice.service */ "./src/app/farmer/farmercrop/cropservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");








const _c0 = function () { return ["/updatecrop"]; };
const _c1 = function (a0) { return { crops: a0 }; };
function CrophomeComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CrophomeComponent_tr_21_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const crop_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.deleteCrop(crop_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const crop_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](crop_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](crop_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](crop_r1.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](crop_r1.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0))("state", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, crop_r1));
} }
const _c2 = function () { return ["/cropsell"]; };
class CrophomeComponent {
    constructor(cs, router) {
        this.cs = cs;
        this.router = router;
        cs.getAll().subscribe((res) => this.crops = res);
    }
    deleteCrop(cropId) {
        this.cs.deleteCrop(cropId).subscribe(() => {
            alert("deleted...");
            history.go();
        });
    }
    ngOnInit() {
    }
}
CrophomeComponent.ɵfac = function CrophomeComponent_Factory(t) { return new (t || CrophomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cropservice_service__WEBPACK_IMPORTED_MODULE_1__["CropserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CrophomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CrophomeComponent, selectors: [["app-crophome"]], decls: 24, vars: 3, consts: [["color", "primary"], ["src", "./assets/images/home.jpg", "height", "80px", "width", "100px"], [1, "flex-spacer"], ["id", "customers", 1, "table"], [4, "ngFor", "ngForOf"], ["mat-raised-button", "", 1, "btn", "btn-primary", 3, "routerLink"], ["mat-raised-button", "", "color", "primary", 1, "btn", "btn-info", 3, "routerLink", "state"], ["mat-raised-button", "", "color", "warn", 1, "btn", "btn-danger", 3, "click"]], template: function CrophomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00A0 \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Welcome to Crops Selling Home page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Farmer ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Crop Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Crop Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Crop Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CrophomeComponent_tr_21_Template, 15, 9, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Sell");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.crops);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c2));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhcm1lci9mYXJtZXJjcm9wL2Nyb3Bob21lL2Nyb3Bob21lLmNvbXBvbmVudC5zY3NzIn0= */", "#customers[_ngcontent-%COMP%] {\n      font-family:  Didot,Arial, Helvetica, sans-serif;\n      border-collapse: collapse;\n      width: 100%;\n    }\n    \n    #customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n      border: 4px solid #ddd;\n      padding: 8px;\n    }\n    \n    #customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){background-color: #f2f2f2;}\n    \n    #customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {background-color: rgb(174, 224, 94);}\n    \n    #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n      padding-top: 12px;\n      padding-bottom: 12px;\n      text-align: center;\n      background-color: #4CAF50;\n      color: white;\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CrophomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-crophome',
                templateUrl: './crophome.component.html',
                styleUrls: ['./crophome.component.scss']
            }]
    }], function () { return [{ type: _cropservice_service__WEBPACK_IMPORTED_MODULE_1__["CropserviceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/farmer/farmercrop/cropmenu/cropmenu.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/farmer/farmercrop/cropmenu/cropmenu.component.ts ***!
  \******************************************************************/
/*! exports provided: CropmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CropmenuComponent", function() { return CropmenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _cropmenu_cropmenus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cropmenu/cropmenus */ "./src/app/farmer/farmercrop/cropmenu/cropmenus.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../directives/highlight.directive */ "./src/app/directives/highlight.directive.ts");











function CropmenuComponent_mat_grid_tile_12_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CropmenuComponent_mat_grid_tile_12_Template_mat_grid_tile_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const cropmenu_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.openMenuOption(cropmenu_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-grid-tile-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cropmenu_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", cropmenu_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", cropmenu_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, cropmenu_r1.name));
} }
class CropmenuComponent {
    constructor(_router) {
        this._router = _router;
    }
    ngOnInit() {
        this.cropmenus = this.getmenus();
    }
    onSelect(menuoption) {
        this.selectecropMenu = menuoption;
    }
    openMenuOption(value) {
        if (value === '0') {
            this._router.navigate(['/crophome']);
        }
        if (value === '1') {
            this._router.navigate(['/cropsell']);
        }
    }
    getmenus() {
        return _cropmenu_cropmenus__WEBPACK_IMPORTED_MODULE_1__["CROPMENUS"];
    }
}
CropmenuComponent.ɵfac = function CropmenuComponent_Factory(t) { return new (t || CropmenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CropmenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CropmenuComponent, selectors: [["app-cropmenu"]], decls: 13, vars: 1, consts: [["fxLayout", "column", "fxLayoutGap", "10px", 1, "container"], ["fxFlex", ""], ["color", "primary"], ["cols", "2", "rowHeight", "400px"], ["appHighlight", "", 3, "click", 4, "ngFor", "ngForOf"], ["appHighlight", "", 3, "click"], ["width", "400px", "height", "400px", 3, "src", "alt"]], template: function CropmenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Sell Crops");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-grid-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CropmenuComponent_mat_grid_tile_12_Template, 6, 5, "mat-grid-tile", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cropmenus);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridTile"], _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_9__["HighlightDirective"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridTileText"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridTileFooterCssMatStyler"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["UpperCasePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhcm1lci9mYXJtZXJjcm9wL2Nyb3BtZW51L2Nyb3BtZW51LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CropmenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cropmenu',
                templateUrl: './cropmenu.component.html',
                styleUrls: ['./cropmenu.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/farmer/farmercrop/cropmenu/cropmenus.ts":
/*!*********************************************************!*\
  !*** ./src/app/farmer/farmercrop/cropmenu/cropmenus.ts ***!
  \*********************************************************/
/*! exports provided: CROPMENUS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CROPMENUS", function() { return CROPMENUS; });
const CROPMENUS = [
    {
        id: '0',
        name: 'Crop Home',
        image: '/assets/images/cropmenu.jpg',
        featured: true
    }, {
        id: '1',
        name: 'Crop Sell',
        image: '/assets/images/sellcropjpg.jpg',
        featured: true
    }
];


/***/ }),

/***/ "./src/app/farmer/farmercrop/cropsell/cropsell.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/farmer/farmercrop/cropsell/cropsell.component.ts ***!
  \******************************************************************/
/*! exports provided: CropsellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CropsellComponent", function() { return CropsellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _cropservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cropservice.service */ "./src/app/farmer/farmercrop/cropservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");











function CropsellComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Farmer ID should not be empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r0.errors.required);
} }
function CropsellComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Crop Name should not be empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r2.errors.required);
} }
function CropsellComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Crop Price should not be empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r4.errors.required);
} }
function CropsellComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Crop Quantity should not be empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !_r6.errors.required);
} }
class CropsellComponent {
    constructor(cs, router) {
        this.cs = cs;
        this.router = router;
        this.crops = {
            id: '',
            name: '',
            price: '',
            quantity: ''
        };
    }
    ngOnInit() {
    }
    sellCrop() {
        this.cs.add(this.crops).subscribe(() => {
            alert("added");
        });
    }
}
CropsellComponent.ɵfac = function CropsellComponent_Factory(t) { return new (t || CropsellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cropservice_service__WEBPACK_IMPORTED_MODULE_1__["CropserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CropsellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CropsellComponent, selectors: [["app-cropsell"]], decls: 42, vars: 11, consts: [["color", "primary"], ["src", "./assets/images/sell.jpg", "height", "80px", "width", "100px"], [1, "flex-spacer"], [2, "margin-left", "30px"], ["action", "/action_page.php"], [1, "form-group"], ["appearance", "outline"], ["for", "cropName"], ["matInput", "", "type", "number", "id", "farmerID", "placeholder", "Farmer ID", "name", "FarmerID", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["idRef", "ngModel"], [4, "ngIf"], ["matInput", "", "type", "text", "id", "cropName", "placeholder", "Crop Name", "name", "cropName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["nameRef", "ngModel"], ["for", "cropPrice"], ["matInput", "", "type", "number", "id", "cropPrice", "placeholder", "Crop Price", "name", "cropPrice", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["priceRef", "ngModel"], ["for", "cropQuantity"], ["matInput", "", "type", "number", "id", "cropQuantity", "placeholder", "Crop Price", "name", "cropQuantity", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["quantityRef", "ngModel"], ["mat-raised-button", "", "color", "warn", "type", "submit", 1, "btn", "btn-primary", 3, "disabled", "click"], [3, "hidden"]], template: function CropsellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00A0 \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Sell Crops From Here ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00A0 \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Farmer ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CropsellComponent_Template_input_ngModelChange_16_listener($event) { return ctx.crops.id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CropsellComponent_div_18_Template, 3, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Crop Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CropsellComponent_Template_input_ngModelChange_23_listener($event) { return ctx.crops.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CropsellComponent_div_25_Template, 3, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Price:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CropsellComponent_Template_input_ngModelChange_30_listener($event) { return ctx.crops.price = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, CropsellComponent_div_32_Template, 3, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Quantity:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CropsellComponent_Template_input_ngModelChange_37_listener($event) { return ctx.crops.quantity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, CropsellComponent_div_39_Template, 3, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CropsellComponent_Template_button_click_40_listener() { return ctx.sellCrop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.crops.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.errors && (_r0.dirty || _r0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.crops.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.errors && (_r2.dirty || _r2.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.crops.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.errors && (_r4.dirty || _r4.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.crops.quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.errors && (_r6.dirty || _r6.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r2.invalid)("disabled", _r6.invalid)("disabled", _r0);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhcm1lci9mYXJtZXJjcm9wL2Nyb3BzZWxsL2Nyb3BzZWxsLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CropsellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cropsell',
                templateUrl: './cropsell.component.html',
                styleUrls: ['./cropsell.component.scss']
            }]
    }], function () { return [{ type: _cropservice_service__WEBPACK_IMPORTED_MODULE_1__["CropserviceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/farmer/farmercrop/cropservice.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/farmer/farmercrop/cropservice.service.ts ***!
  \**********************************************************/
/*! exports provided: CropserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CropserviceService", function() { return CropserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




const headerOption = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
class CropserviceService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http.get('http://localhost:3000/crops');
    }
    add(crop) {
        let opt = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/crops', crop, { headers: opt });
    }
    updateCrop(crops) {
        let opt = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-type': 'application/json' });
        return this.http.put('http://localhost:3000/crops/' + crops.id, crops, { headers: opt });
    }
    deleteCrop(cropId) {
        return this.http.delete('http://localhost:3000/crops/' + cropId);
    }
    buyCrops(crop) {
        let opt = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/buyCrop', crop, { headers: opt });
    }
    getBuyAll() {
        return this.http.get('http://localhost:3000/buyCrop');
    }
}
CropserviceService.ɵfac = function CropserviceService_Factory(t) { return new (t || CropserviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CropserviceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CropserviceService, factory: CropserviceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CropserviceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/farmer/farmercrop/updatecrop/updatecrop.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/farmer/farmercrop/updatecrop/updatecrop.component.ts ***!
  \**********************************************************************/
/*! exports provided: UpdatecropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatecropComponent", function() { return UpdatecropComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _cropservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cropservice.service */ "./src/app/farmer/farmercrop/cropservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");









class UpdatecropComponent {
    constructor(cs, router) {
        this.cs = cs;
        this.router = router;
        this.crop = history.state.crops;
    }
    updateCrop() {
        this.cs.updateCrop(this.crop).subscribe((data) => {
            console.log(data);
            alert("updated...");
        });
    }
    ngOnInit() {
    }
}
UpdatecropComponent.ɵfac = function UpdatecropComponent_Factory(t) { return new (t || UpdatecropComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cropservice_service__WEBPACK_IMPORTED_MODULE_1__["CropserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
UpdatecropComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdatecropComponent, selectors: [["app-updatecrop"]], decls: 23, vars: 4, consts: [["color", "primary"], [1, "flex-spacer"], ["matInput", "", "type", "number", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", 1, "form-control", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", 1, "btn", "btn-info", 3, "click"]], template: function UpdatecropComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0 \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Update Crops From Here ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00A0 \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Farmer ID :\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdatecropComponent_Template_input_ngModelChange_10_listener($event) { return ctx.crop.id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\nCrop Name :\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdatecropComponent_Template_input_ngModelChange_13_listener($event) { return ctx.crop.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\nCrop Price :\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdatecropComponent_Template_input_ngModelChange_16_listener($event) { return ctx.crop.price = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\nCrop Quantity :\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdatecropComponent_Template_input_ngModelChange_19_listener($event) { return ctx.crop.quantity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdatecropComponent_Template_button_click_21_listener() { return ctx.updateCrop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.crop.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.crop.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.crop.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.crop.quantity);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhcm1lci9mYXJtZXJjcm9wL3VwZGF0ZWNyb3AvdXBkYXRlY3JvcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdatecropComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-updatecrop',
                templateUrl: './updatecrop.component.html',
                styleUrls: ['./updatecrop.component.scss']
            }]
    }], function () { return [{ type: _cropservice_service__WEBPACK_IMPORTED_MODULE_1__["CropserviceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/farmer/farmerhome/farmerhome.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/farmer/farmerhome/farmerhome.component.ts ***!
  \***********************************************************/
/*! exports provided: FarmerhomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerhomeComponent", function() { return FarmerhomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _farmerservice_menuservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../farmerservice/menuservice.service */ "./src/app/farmer/farmerservice/menuservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../directives/highlight.directive */ "./src/app/directives/highlight.directive.ts");












function FarmerhomeComponent_mat_grid_tile_16_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FarmerhomeComponent_mat_grid_tile_16_Template_mat_grid_tile_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const farmermenu_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.openMenuOption(farmermenu_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-grid-tile-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const farmermenu_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", farmermenu_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", farmermenu_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, farmermenu_r1.name));
} }
const _c0 = function () { return ["/home"]; };
class FarmerhomeComponent {
    constructor(menuService, _router) {
        this.menuService = menuService;
        this._router = _router;
    }
    ngOnInit() {
        this.farmermenus = this.menuService.getMenus();
    }
    onSelect(menu) {
        this.selectedMenu = menu;
    }
    openMenuOption(value) {
        if (value === '0') {
            this._router.navigate(['/viewadvertisement']);
        }
        if (value === '1') {
            this._router.navigate(['/cropmenu']);
        }
        if (value === '2') {
            this._router.navigate(['/farmertips']);
        }
        if (value === '3') {
            this._router.navigate(['/addcomplaint']);
        }
    }
}
FarmerhomeComponent.ɵfac = function FarmerhomeComponent_Factory(t) { return new (t || FarmerhomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_farmerservice_menuservice_service__WEBPACK_IMPORTED_MODULE_1__["MenuserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
FarmerhomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FarmerhomeComponent, selectors: [["app-farmerhome"]], decls: 20, vars: 3, consts: [["fxLayout", "column", "fxLayoutGap", "50px", 1, "container"], ["fxFlex", ""], ["color", "primary"], ["cols", "2", "rowHeight", "400px"], ["appHighlight", "", 3, "click", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "end end"], ["mat-raised-button", "", "color", "warn", "type", "submit", 3, "routerLink"], ["appHighlight", "", 3, "click"], ["height", "400px", 3, "src", "alt"]], template: function FarmerhomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00A0 \u00A0 \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Farmer Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-grid-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-grid-tile-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FarmerhomeComponent_mat_grid_tile_16_Template, 6, 5, "mat-grid-tile", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.farmermenus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridTileText"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridTileHeaderCssMatStyler"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridTile"], _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_10__["HighlightDirective"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridTileFooterCssMatStyler"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["UpperCasePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhcm1lci9mYXJtZXJob21lL2Zhcm1lcmhvbWUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FarmerhomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-farmerhome',
                templateUrl: './farmerhome.component.html',
                styleUrls: ['./farmerhome.component.scss']
            }]
    }], function () { return [{ type: _farmerservice_menuservice_service__WEBPACK_IMPORTED_MODULE_1__["MenuserviceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/farmer/farmerhome/farmermenus.ts":
/*!**************************************************!*\
  !*** ./src/app/farmer/farmerhome/farmermenus.ts ***!
  \**************************************************/
/*! exports provided: FARMERMENUS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FARMERMENUS", function() { return FARMERMENUS; });
const FARMERMENUS = [
    {
        id: '0',
        name: 'View Advertisement',
        image: './assets/images/advertisement.jpg',
        featured: true
    }, {
        id: '1',
        name: 'Sell Crops',
        image: './assets/images/sell.jpg',
        featured: true
    },
    {
        id: '2',
        name: 'Farming Tips',
        image: './assets/images/tips.jpg',
        featured: true
    },
    {
        id: '3',
        name: 'Send Complaint',
        image: './assets/images/addcomplaint.jpeg',
        featured: true
    }
];


/***/ }),

/***/ "./src/app/farmer/farmerlogin/farmerlogin.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/farmer/farmerlogin/farmerlogin.component.ts ***!
  \*************************************************************/
/*! exports provided: FarmerloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerloginComponent", function() { return FarmerloginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _farmermodel_farmermodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../farmermodel/farmermodel */ "./src/app/farmer/farmermodel/farmermodel.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _farmerregister_farmerregister_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../farmerregister/farmerregister.service */ "./src/app/farmer/farmerregister/farmerregister.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");














function FarmerloginComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Farmer Username is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FarmerloginComponent_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Farmer Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FarmerloginComponent {
    constructor(dialogRef, _service, _router) {
        this.dialogRef = dialogRef;
        this._service = _service;
        this._router = _router;
        this.farmer = new _farmermodel_farmermodel__WEBPACK_IMPORTED_MODULE_1__["FarmerModel"]();
        this.message = '';
        this.farmerModel = { username: '', password: '', remember: false };
    }
    ngOnInit() {
    }
    onSubmit() {
        this._service.loginFarmer(this.farmer).subscribe(data => {
            console.log("response received");
            this._router.navigate(['/farmerhome']);
            this.dialogRef.close();
        }, error => {
            console.log("exception occured");
            this.message = "Hey! Please enter valid username and password";
        });
        //console.log('User: ', this.user);
    }
}
FarmerloginComponent.ɵfac = function FarmerloginComponent_Factory(t) { return new (t || FarmerloginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_farmerregister_farmerregister_service__WEBPACK_IMPORTED_MODULE_3__["FarmerregisterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
FarmerloginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FarmerloginComponent, selectors: [["app-farmerlogin"]], decls: 36, vars: 7, consts: [["color", "primary"], [1, "flex-spacer"], ["mat-button", "", "mat-dialog-close", ""], ["novalidate", "", 3, "ngSubmit"], ["loginForm", "ngForm"], [1, "mat-subheading-1", "accent-color"], ["matInput", "", "placeholder", "Farmer Username", "type", "text", "name", "farmerusername", "required", "", 3, "ngModel", "ngModelChange"], ["farmerusername", "ngModel"], ["matSuffix", ""], [4, "ngIf"], ["matInput", "", "placeholder", "Farmer Password", "type", "password", "name", "farmerpassword", "required", "", 3, "ngModel", "ngModelChange"], ["farmerpassword", "ngModel"], ["name", "remember", 3, "ngModel", "ngModelChange"], [1, "example-label"], [1, "example-button-row"], ["mat-raised-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"]], template: function FarmerloginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Welcome Farmer! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u00A0 \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FarmerloginComponent_Template_form_ngSubmit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FarmerloginComponent_Template_input_ngModelChange_16_listener($event) { return ctx.farmer.farmerusername = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, FarmerloginComponent_mat_error_20_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FarmerloginComponent_Template_input_ngModelChange_23_listener($event) { return ctx.farmer.farmerpassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, FarmerloginComponent_mat_error_25_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-checkbox", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FarmerloginComponent_Template_mat_checkbox_ngModelChange_26_listener($event) { return ctx.farmerModel.remember = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Remember Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.farmer.farmerusername);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.farmer.farmerpassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.farmerModel.remember);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.form.invalid);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckbox"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]], styles: [".example-label[_ngcontent-%COMP%] {\n  display: table-cell;\n  font-size: 14px;\n  margin-left: 8px;\n  min-width: 120px;\n}\n\n.example-button-row[_ngcontent-%COMP%] {\n  display: table-cell;\n  width: 490px;\n}\n\n.example-button-row[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%] {\n  margin: 8px 8px 8px 0;\n}\n\n.accent-color[_ngcontent-%COMP%] {\n  color: #ee5d0a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFybWVyL2Zhcm1lcmxvZ2luL2Zhcm1lcmxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVFO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDaEI7O0FBRUU7RUFDRSxxQkFBcUI7QUFDekI7O0FBR0U7RUFDRSxjQUFzQjtBQUExQiIsImZpbGUiOiJzcmMvYXBwL2Zhcm1lci9mYXJtZXJsb2dpbi9mYXJtZXJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWxhYmVsIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgbWluLXdpZHRoOiAxMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtYnV0dG9uLXJvdyB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgd2lkdGg6IDQ5MHB4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1idXR0b24tcm93IC5tYXQtYnV0dG9uLWJhc2Uge1xyXG4gICAgbWFyZ2luOiA4cHggOHB4IDhweCAwO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgLmFjY2VudC1jb2xvciB7XHJcbiAgICBjb2xvcjpyZ2IoMjM4LCA5MywgMTApO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FarmerloginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-farmerlogin',
                templateUrl: './farmerlogin.component.html',
                styleUrls: ['./farmerlogin.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: _farmerregister_farmerregister_service__WEBPACK_IMPORTED_MODULE_3__["FarmerregisterService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/farmer/farmerlogout/farmerlogout.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/farmer/farmerlogout/farmerlogout.component.ts ***!
  \***************************************************************/
/*! exports provided: FarmerlogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerlogoutComponent", function() { return FarmerlogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FarmerlogoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
FarmerlogoutComponent.ɵfac = function FarmerlogoutComponent_Factory(t) { return new (t || FarmerlogoutComponent)(); };
FarmerlogoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FarmerlogoutComponent, selectors: [["app-farmerlogout"]], decls: 2, vars: 0, template: function FarmerlogoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "farmerlogout works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhcm1lci9mYXJtZXJsb2dvdXQvZmFybWVybG9nb3V0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FarmerlogoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-farmerlogout',
                templateUrl: './farmerlogout.component.html',
                styleUrls: ['./farmerlogout.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/farmer/farmermodel/farmermodel.ts":
/*!***************************************************!*\
  !*** ./src/app/farmer/farmermodel/farmermodel.ts ***!
  \***************************************************/
/*! exports provided: FarmerModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerModel", function() { return FarmerModel; });
class FarmerModel {
    constructor() { }
}


/***/ }),

/***/ "./src/app/farmer/farmerregister/farmerregister.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/farmer/farmerregister/farmerregister.service.ts ***!
  \*****************************************************************/
/*! exports provided: FarmerregisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerregisterService", function() { return FarmerregisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class FarmerregisterService {
    constructor(_http) {
        this._http = _http;
        this.errorMessage = '';
        this.handleError = (error) => {
            if (error.status === 500) {
                this.handle500Error(error);
            }
            else if (error.status === 404) {
                this.handle404Error(error);
            }
            else {
                this.handleOtherError(error);
            }
        };
        this.handle500Error = (error) => {
            this.createErrorMessage(error);
        };
        this.handle404Error = (error) => {
            this.createErrorMessage(error);
        };
        this.handleOtherError = (error) => {
            this.createErrorMessage(error);
            //TODO: this will be fixed later;
        };
    }
    loginFarmer(farmer) {
        return this._http.post("http://localhost:8686/register-service/registration/farmerlogin", farmer);
    }
    registerFarmer(farmer) {
        return this._http.post("http://localhost:8686/register-service/registration/farmersignup", farmer);
    }
    createErrorMessage(error) {
        return this.errorMessage = error.error ? error.error : error.statusText;
    }
}
FarmerregisterService.ɵfac = function FarmerregisterService_Factory(t) { return new (t || FarmerregisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
FarmerregisterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FarmerregisterService, factory: FarmerregisterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FarmerregisterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/farmer/farmerservice/advertisement.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/farmer/farmerservice/advertisement.service.ts ***!
  \***************************************************************/
/*! exports provided: AdvertisementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertisementService", function() { return AdvertisementService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class AdvertisementService {
    constructor(http) {
        this.http = http;
    }
    //baseUrl: string = 'http://localhost:9001/advertisement';
    //baseUrl: string = 'http://localhost:8080/advertisement';
    getAllAdvertisements() {
        return this.http.get("http://localhost:8686/farmerconsumermicro-service/ConsumerCtrl/getAdvertisements");
    }
    createAdvertisement(advertisement) {
        // const httpOptions ={headers: new HttpHeaders({'Content-Type':'application/json'})}
        return this.http.post("http://localhost:8686/farmerconsumermicro-service/ConsumerCtrl/postAdvertisement", advertisement);
    }
    deleteAdvertisement(id) {
        return this.http.delete(`${"http://localhost:8686/farmerconsumermicro-service/ConsumerCtrl/deleteAdvertisement"}/${id}`);
    }
}
AdvertisementService.ɵfac = function AdvertisementService_Factory(t) { return new (t || AdvertisementService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AdvertisementService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdvertisementService, factory: AdvertisementService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdvertisementService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/farmer/farmerservice/farmingtipservice.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/farmer/farmerservice/farmingtipservice.service.ts ***!
  \*******************************************************************/
/*! exports provided: FarmingtipserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmingtipserviceService", function() { return FarmingtipserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class FarmingtipserviceService {
    constructor(http) {
        this.http = http;
        // mockUrl: string = 'http://localhost:3000/Farmingtip';
        this.currentFarmingtip = {
            tipsMessage: '',
            id: null
        };
    }
    getAllFarmingtips() {
        return this.http.get("http://localhost:8686/farmerconsumermicro-service/ConsumerCtrl/viewAllTips");
    }
    deleteFarmingtip(id) {
        return this.http.delete("http://localhost:8686/farmerconsumermicro-service/ConsumerCtrl/deleteTip" + '/' + id);
    }
    createFarmingtip(tips) {
        return this.http.post("http://localhost:8686/farmerconsumermicro-service/ConsumerCtrl/addTip", tips);
    }
    updateFarmingtip(tips) {
        return this.http.put("http://localhost:8686/farmerconsumermicro-service/ConsumerCtrl/updateTip" + '/' + tips.id, tips);
    }
}
FarmingtipserviceService.ɵfac = function FarmingtipserviceService_Factory(t) { return new (t || FarmingtipserviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
FarmingtipserviceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FarmingtipserviceService, factory: FarmingtipserviceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FarmingtipserviceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/farmer/farmerservice/menuservice.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/farmer/farmerservice/menuservice.service.ts ***!
  \*************************************************************/
/*! exports provided: MenuserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuserviceService", function() { return MenuserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _farmerhome_farmermenus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../farmerhome/farmermenus */ "./src/app/farmer/farmerhome/farmermenus.ts");



class MenuserviceService {
    constructor() { }
    getMenus() {
        return _farmerhome_farmermenus__WEBPACK_IMPORTED_MODULE_1__["FARMERMENUS"];
    }
    getMenu(id) {
        return _farmerhome_farmermenus__WEBPACK_IMPORTED_MODULE_1__["FARMERMENUS"].filter((menu) => (menu.id === id))[0];
    }
}
MenuserviceService.ɵfac = function MenuserviceService_Factory(t) { return new (t || MenuserviceService)(); };
MenuserviceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MenuserviceService, factory: MenuserviceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuserviceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/farmer/farmersignup/farmersignup.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/farmer/farmersignup/farmersignup.component.ts ***!
  \***************************************************************/
/*! exports provided: FarmersignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmersignupComponent", function() { return FarmersignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _farmermodel_farmermodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../farmermodel/farmermodel */ "./src/app/farmer/farmermodel/farmermodel.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _farmerregister_farmerregister_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../farmerregister/farmerregister.service */ "./src/app/farmer/farmerregister/farmerregister.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");













const _c0 = ["registerForm"];
function FarmersignupComponent_div_23_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Full name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FarmersignupComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FarmersignupComponent_div_23_small_1_Template, 2, 0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.required);
} }
function FarmersignupComponent_div_32_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Username name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FarmersignupComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FarmersignupComponent_div_32_small_1_Template, 2, 0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.required);
} }
function FarmersignupComponent_div_42_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FarmersignupComponent_div_42_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must be longer than 6 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FarmersignupComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FarmersignupComponent_div_42_small_1_Template, 2, 0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FarmersignupComponent_div_42_small_2_Template, 2, 0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.minlength);
} }
function FarmersignupComponent_div_49_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Farmer Address is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FarmersignupComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FarmersignupComponent_div_49_small_1_Template, 2, 0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.errors.required);
} }
function FarmersignupComponent_div_58_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone number is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FarmersignupComponent_div_58_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone number is invalid.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FarmersignupComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FarmersignupComponent_div_58_small_1_Template, 2, 0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FarmersignupComponent_div_58_small_2_Template, 2, 0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.errors.pattern);
} }
class FarmersignupComponent {
    constructor(formBuilder, _router, _service, errorService) {
        this.formBuilder = formBuilder;
        this._router = _router;
        this._service = _service;
        this.errorService = errorService;
        this.message = '';
        this.farmer = new _farmermodel_farmermodel__WEBPACK_IMPORTED_MODULE_1__["FarmerModel"]();
        this.hide = true;
        this.confirmpassword = this.farmer.farmerpassword;
    }
    ngOnInit() {
    }
    // convenience getter for easy access to form fields
    onSubmit() {
        this._service.registerFarmer(this.farmer).subscribe(data => {
            console.log("response received");
            alert('Registration Successful!');
            this.registerForm.resetForm();
        }, error => {
            console.log("exception occured");
            this.message = "Username already exists";
        });
    }
}
FarmersignupComponent.ɵfac = function FarmersignupComponent_Factory(t) { return new (t || FarmersignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_farmerregister_farmerregister_service__WEBPACK_IMPORTED_MODULE_4__["FarmerregisterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_farmerregister_farmerregister_service__WEBPACK_IMPORTED_MODULE_4__["FarmerregisterService"])); };
FarmersignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FarmersignupComponent, selectors: [["app-farmersignup"]], viewQuery: function FarmersignupComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.registerForm = _t.first);
    } }, decls: 63, vars: 16, consts: [["color", "primary"], [1, "flex-spacer"], ["mat-button", "", "mat-dialog-close", ""], [1, "jumbotron"], [1, "container"], [1, "row"], [1, "col-md-6", "offset-md-3"], [3, "ngSubmit"], ["registerForm", "ngForm"], [1, "mat-subheading-1", "accent-color"], [1, "form-group"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "type", "text", "placeholder", "Farmer Name", "name", "farmername", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["farmername", "ngModel"], ["matSuffix", ""], ["class", "alert alert-danger", 4, "ngIf"], ["matInput", "", "type", "text", "placeholder", "Farmer Username", "name", "farmerusername", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["farmerusername", "ngModel"], ["matInput", "", "placeholder", "Password", "name", "farmerpassword", "minlength", "6", "required", "", 1, "form-control", 3, "type", "ngModel", "ngModelChange"], ["farmerpassword", "ngModel"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["matInput", "", "rows", "10", "type", "text", "name", "farmeraddress", "required", "", 3, "ngModel", "ngModelChange"], ["farmeraddress", "ngModel"], ["matInput", "", "placeholder", "Phone Number", "type", "tel", "name", "farmerphoneno", "pattern", "[0-9]*", "required", "", 3, "ngModel", "ngModelChange"], ["farmerphoneno", "ngModel"], [1, "example-label"], [1, "example-button-row"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "alert", "alert-danger"], [4, "ngIf"]], template: function FarmersignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sign up as a Farmer! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u00A0 \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FarmersignupComponent_Template_form_ngSubmit_11_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Farmer Name :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FarmersignupComponent_Template_input_ngModelChange_19_listener($event) { return ctx.farmer.farmername = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "sentiment_satisfied_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, FarmersignupComponent_div_23_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Farmer Username :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FarmersignupComponent_Template_input_ngModelChange_28_listener($event) { return ctx.farmer.farmerusername = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, FarmersignupComponent_div_32_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Password :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FarmersignupComponent_Template_input_ngModelChange_37_listener($event) { return ctx.farmer.farmerpassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FarmersignupComponent_Template_button_click_39_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, FarmersignupComponent_div_42_Template, 3, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Farmer Address :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "textarea", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FarmersignupComponent_Template_textarea_ngModelChange_47_listener($event) { return ctx.farmer.farmeraddress = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, FarmersignupComponent_div_49_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Phone Number :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FarmersignupComponent_Template_input_ngModelChange_54_listener($event) { return ctx.farmer.farmerphoneno = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " call");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, FarmersignupComponent_div_58_Template, 3, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](48);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.farmer.farmername);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid && _r1.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.farmer.farmerusername);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.invalid && _r3.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text")("ngModel", ctx.farmer.farmerpassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.invalid && _r5.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.farmer.farmeraddress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.invalid && _r7.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.farmer.farmerphoneno);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.invalid && _r9.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogClose"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"]], styles: [".example-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\n.example-right-align[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\ninput.example-right-align[_ngcontent-%COMP%]::-webkit-outer-spin-button, input.example-right-align[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput.example-right-align[_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n\n.example-label[_ngcontent-%COMP%] {\n  display: table-cell;\n  font-size: 14px;\n  margin-left: 8px;\n  min-width: 120px;\n}\n\n.example-button-row[_ngcontent-%COMP%] {\n  display: table-cell;\n  width: 490px;\n}\n\n.example-button-row[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%] {\n  margin: 8px 8px 8px 0;\n}\n\n.accent-color[_ngcontent-%COMP%] {\n  color: #ee5d0a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFybWVyL2Zhcm1lcnNpZ251cC9mYXJtZXJzaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUU7RUFDRSxpQkFBaUI7QUFDckI7O0FBRUU7O0VBRUUsYUFBYTtBQUNqQjs7QUFFRTtFQUNFLDBCQUEwQjtBQUM5Qjs7QUFFRTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFRTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2hCOztBQUVFO0VBQ0UscUJBQXFCO0FBQ3pCOztBQUVFO0VBQ0UsY0FBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9mYXJtZXIvZmFybWVyc2lnbnVwL2Zhcm1lcnNpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciAubWF0LWZvcm0tZmllbGQgKyAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXHJcbiAgaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICBpbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduIHtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGUtbGFiZWwge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1idXR0b24tcm93IHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB3aWR0aDogNDkwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWJ1dHRvbi1yb3cgLm1hdC1idXR0b24tYmFzZSB7XHJcbiAgICBtYXJnaW46IDhweCA4cHggOHB4IDA7XHJcbiAgfVxyXG5cclxuICAuYWNjZW50LWNvbG9yIHtcclxuICAgIGNvbG9yOnJnYigyMzgsIDkzLCAxMCk7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FarmersignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-farmersignup',
                templateUrl: './farmersignup.component.html',
                styleUrls: ['./farmersignup.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _farmerregister_farmerregister_service__WEBPACK_IMPORTED_MODULE_4__["FarmerregisterService"] }, { type: _farmerregister_farmerregister_service__WEBPACK_IMPORTED_MODULE_4__["FarmerregisterService"] }]; }, { registerForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['registerForm']
        }] }); })();


/***/ }),

/***/ "./src/app/farmer/farmingtips/farmingtips.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/farmer/farmingtips/farmingtips.component.ts ***!
  \*************************************************************/
/*! exports provided: FarmingtipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmingtipsComponent", function() { return FarmingtipsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _farmerservice_farmingtipservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../farmerservice/farmingtipservice.service */ "./src/app/farmer/farmerservice/farmingtipservice.service.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function FarmingtipsComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tips_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tips_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tips_r1.tipsMessage);
} }
class FarmingtipsComponent {
    constructor(farmingtipService) {
        this.farmingtipService = farmingtipService;
    }
    ngOnInit() {
        this.getAllFarmingtip();
    }
    getAllFarmingtip() {
        this.farmingtipService.getAllFarmingtips().subscribe((data) => {
            this.allFarmingtip = data;
        });
    }
}
FarmingtipsComponent.ɵfac = function FarmingtipsComponent_Factory(t) { return new (t || FarmingtipsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_farmerservice_farmingtipservice_service__WEBPACK_IMPORTED_MODULE_1__["FarmingtipserviceService"])); };
FarmingtipsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FarmingtipsComponent, selectors: [["app-farmingtips"]], decls: 21, vars: 1, consts: [["fxLayout", "column", "fxLayoutAlign", "space-around none"], ["fxLayout", "column", "fxLayoutGap", "30px"], ["color", "primary"], ["src", "./assets/images/quicktips.jpg", 1, "myimg"], [2, "font-size", "30px", "font-family", "Arial"], ["id", "customers"], [4, "ngFor", "ngForOf"], [2, "font-size", "20px"]], template: function FarmingtipsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00A0 \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "View Farming Tips for You");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Tips Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, FarmingtipsComponent_tr_20_Template, 5, 2, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allFarmingtip);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".myimg[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 93px;\n  object-fit: cover;\n  border-radius: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFybWVyL2Zhcm1pbmd0aXBzL2Zhcm1pbmd0aXBzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBVztFQUNYLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsa0JBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvZmFybWVyL2Zhcm1pbmd0aXBzL2Zhcm1pbmd0aXBzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15aW1ne1xyXG4gICAgd2lkdGg6MTAwcHg7XHJcbiAgICBoZWlnaHQ6OTNweDtcclxuICAgIG9iamVjdC1maXQ6Y292ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOjcwJTtcclxuICB9Il19 */", "#customers[_ngcontent-%COMP%] {\n  font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n}\n\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 30px;\n  \n}\n\n#customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){background-color: #f2f2f2;}\n\n#customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {background-color: rgb(234, 236, 86);}\n\n#customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #4CAF50;\n  color: white;\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FarmingtipsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-farmingtips',
                templateUrl: './farmingtips.component.html',
                styleUrls: ['./farmingtips.component.scss']
            }]
    }], function () { return [{ type: _farmerservice_farmingtipservice_service__WEBPACK_IMPORTED_MODULE_1__["FarmingtipserviceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/farmer/viewadvertisement/table/table.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/farmer/viewadvertisement/table/table.component.ts ***!
  \*******************************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TableComponent {
    constructor() { }
    ngOnInit() {
    }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(); };
TableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableComponent, selectors: [["app-table"]], decls: 2, vars: 0, template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "table works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhcm1lci92aWV3YWR2ZXJ0aXNlbWVudC90YWJsZS90YWJsZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-table',
                templateUrl: './table.component.html',
                styleUrls: ['./table.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/farmer/viewadvertisement/viewadvertisement.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/farmer/viewadvertisement/viewadvertisement.component.ts ***!
  \*************************************************************************/
/*! exports provided: ViewadvertisementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewadvertisementComponent", function() { return ViewadvertisementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _farmerservice_advertisement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../farmerservice/advertisement.service */ "./src/app/farmer/farmerservice/advertisement.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function ViewadvertisementComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ad_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ad_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ad_r1.cropname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ad_r1.quantity);
} }
class ViewadvertisementComponent {
    //displayedColumns: string[] = ['id', 'cropname', 'quantity'];
    constructor(router, advertisementService) {
        this.router = router;
        this.advertisementService = advertisementService;
    }
    ngOnInit() {
        this.advertisementService.getAllAdvertisements()
            .subscribe(data => {
            this.advertisements = data;
        });
    }
}
ViewadvertisementComponent.ɵfac = function ViewadvertisementComponent_Factory(t) { return new (t || ViewadvertisementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_farmerservice_advertisement_service__WEBPACK_IMPORTED_MODULE_2__["AdvertisementService"])); };
ViewadvertisementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewadvertisementComponent, selectors: [["app-viewadvertisement"]], decls: 23, vars: 1, consts: [[1, "col-md-6"], ["color", "primary"], ["src", "./assets/images/ad.svg", "height", "80px", "width", "100px"], [1, "flex-spacer"], ["id", "customers"], [1, "hidden"], [4, "ngFor", "ngForOf"]], template: function ViewadvertisementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " View Advertisement ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Crop Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Crop Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ViewadvertisementComponent_tr_22_Template, 7, 3, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.advertisements);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".table[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  width: 1000%;\n  margin: 100px auto;\n  float: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFybWVyL3ZpZXdhZHZlcnRpc2VtZW50L3ZpZXdhZHZlcnRpc2VtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztBQUFiIiwiZmlsZSI6InNyYy9hcHAvZmFybWVyL3ZpZXdhZHZlcnRpc2VtZW50L3ZpZXdhZHZlcnRpc2VtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi50YWJsZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICB3aWR0aDogMTAwMCU7XHJcbiAgbWFyZ2luOiAxMDBweCBhdXRvO1xyXG4gIGZsb2F0OiBub25lO1xyXG59Il19 */", "#customers[_ngcontent-%COMP%] {\n  font-family:  Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n}\n\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: 4px solid #ddd;\n  padding: 8px;\n}\n\n#customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){background-color: #f2f2f2;}\n\n#customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {background-color: rgb(174, 224, 94);}\n\n#customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: center;\n  background-color: #4CAF50;\n  color: white;\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewadvertisementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-viewadvertisement',
                templateUrl: './viewadvertisement.component.html',
                styleUrls: ['./viewadvertisement.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _farmerservice_advertisement_service__WEBPACK_IMPORTED_MODULE_2__["AdvertisementService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 53, vars: 0, consts: [["fxLayout", "row wrap", "fxLayout.lt-md", "column", "fxLayoutAlign", "center center", "fxLayoutGap", "10px", 1, "container", "footer"], ["fxFlex", "100", "fxFlex.gt-sm", "50"], ["fxLayout", "row"], ["fxFlex", "40", "fxFlexOffset", "20px"], ["mat-button", "", "routerLink", "/home", "routerLinkActive", "active"], ["mat-button", "", "routerLink", "/aboutus", "routerLinkActive", "active"], ["mat-button", "", "routerLink", "/contactus", "routerLinkActive", "active"], ["fxFlex", "55"], [2, "text-size", "80%"], [1, "fa", "fa-phone"], [1, "fa", "fa-fax"], [1, "fa", "fa-envelope"], ["href", "mailto:connect@fas.net"], ["fxFlex", "100", "fxFlex.gt-sm", "45"], [2, "text-align", "center"], ["mat-icon-button", "", "href", "http://google.com/+", 1, "btn-google-plus"], [1, "fa", "fa-google-plus", "fa-lg"], ["mat-icon-button", "", "href", "http://www.facebook.com/profile.php?id=", 1, "btn-facebook"], [1, "fa", "fa-facebook", "fa-lg"], ["mat-icon-button", "", "href", "http://www.linkedin.com/in/", 1, "btn-linkedin"], [1, "fa", "fa-linkedin", "fa-lg"], ["mat-icon-button", "", "href", "http://twitter.com/", 1, "btn-twitter"], [1, "fa", "fa-twitter", "fa-lg"], ["mat-icon-button", "", "href", "http://youtube.com/", 1, "btn-youtube"], [1, "fa", "fa-youtube", "fa-lg"], ["mat-icon-button", "", "href", "mailto:", 1, "btn-mail"], [1, "fa", "fa-envelope-o", "fa-lg"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Our Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "address", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " 121, EPIP Block");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Whitefield,Bangalore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " INDIA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, ": +91 1234 5678 00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, ": +91 8765 4321 00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "connect@fas.net");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\u00A9 Copyright 2020 Farming Assistant System");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexOffsetDirective"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListItem"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"]], styles: [".footer[_ngcontent-%COMP%] {\n  background-color: #018f30;\n  margin: 0px auto;\n  padding: 20px 0px;\n}\n\n.btn-facebook[_ngcontent-%COMP%] {\n  color: #fff !important;\n  background-color: #3b5998 !important;\n}\n\n.btn-google-plus[_ngcontent-%COMP%] {\n  color: #fff !important;\n  background-color: #dd4b39 !important;\n}\n\n.btn-youtube[_ngcontent-%COMP%] {\n  color: #fff !important;\n  background-color: #ff4b39 !important;\n}\n\n.btn-linkedin[_ngcontent-%COMP%] {\n  color: #fff !important;\n  background-color: #007bb6 !important;\n}\n\n.btn-twitter[_ngcontent-%COMP%] {\n  color: #fff !important;\n  background-color: #55acee !important;\n}\n\n.btn-mail[_ngcontent-%COMP%] {\n  color: #fff !important;\n  background-color: #512DA8 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVQTtFQUNJLHlCQVZxQjtFQUtyQixnQkFBZ0I7RUFDaEIsaUJBSzhCO0FBUmxDOztBQVdBO0VBQWUsc0JBQW9CO0VBQUUsb0NBQWtDO0FBTnZFOztBQU9BO0VBQWlCLHNCQUFvQjtFQUFDLG9DQUFrQztBQUZ4RTs7QUFHQTtFQUFhLHNCQUFvQjtFQUFDLG9DQUFrQztBQUVwRTs7QUFEQTtFQUFjLHNCQUFvQjtFQUFDLG9DQUFrQztBQU1yRTs7QUFMQTtFQUFhLHNCQUFvQjtFQUFDLG9DQUFrQztBQVVwRTs7QUFUQTtFQUFVLHNCQUFvQjtFQUFDLG9DQUFrQztBQWNqRSIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbHQtZ3JheTogI2RkZDtcclxuJGJhY2tncm91bmQtZGFyazogIzAxOGYzMDtcclxuJGJhY2tncm91bmQtbGlnaHQ6ICM5OGNkNzU7XHJcbiRiYWNrZ3JvdW5kLXBhbGU6ICM1ZTQ5MGU7XHJcblxyXG5AbWl4aW4gemVyby1tYXJnaW4oJHBhZC11cC1kb3duLCAkcGFkLWxlZnQtcmlnaHQpIHtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICBwYWRkaW5nOiAkcGFkLXVwLWRvd24gJHBhZC1sZWZ0LXJpZ2h0O1xyXG59XHJcblxyXG4uZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtZGFyaztcclxuICAgIEBpbmNsdWRlIHplcm8tbWFyZ2luKDIwcHgsIDBweCk7XHJcbn1cclxuXHJcbi5idG4tZmFjZWJvb2sge2NvbG9yOiNmZmYhaW1wb3J0YW50OyBiYWNrZ3JvdW5kLWNvbG9yOiMzYjU5OTghaW1wb3J0YW50O31cclxuLmJ0bi1nb29nbGUtcGx1c3tjb2xvcjojZmZmIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOiNkZDRiMzkhaW1wb3J0YW50O31cclxuLmJ0bi15b3V0dWJle2NvbG9yOiNmZmYhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6I2ZmNGIzOSFpbXBvcnRhbnQ7fVxyXG4uYnRuLWxpbmtlZGlue2NvbG9yOiNmZmYhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6IzAwN2JiNiFpbXBvcnRhbnQ7fVxyXG4uYnRuLXR3aXR0ZXJ7Y29sb3I6I2ZmZiFpbXBvcnRhbnQ7YmFja2dyb3VuZC1jb2xvcjojNTVhY2VlIWltcG9ydGFudDt9XHJcbi5idG4tbWFpbHtjb2xvcjojZmZmIWltcG9ydGFudDtiYWNrZ3JvdW5kLWNvbG9yOiM1MTJEQTghaW1wb3J0YW50O30iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");






class HeaderComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 20, vars: 0, consts: [["color", "primary"], ["src", "./assets/images/fasicon.png", "height", "100px", "width", "100px"], ["mat-button", "", "routerLink", "/home", "routerLinkActive", "active"], [1, "fa", "fa-home", "fa-lg"], ["mat-button", "", "routerLink", "/aboutus", "routerLinkActive", "active"], [1, "fa", "fa-info", "fa-lg"], ["mat-button", "", "routerLink", "/contactus", "routerLinkActive", "active"], [1, "fa", "fa-address-card", "fa-lg"], ["fxLayout", "row", "fxLayout.sm", "column", "fxLayout.xs", "column", "fxLayoutAlign.xs", "start center", "fxLayoutAlign.sm", "start center", "fxLayoutAlign", "center center", "fxLayoutGap", "10px", 1, "container", "jumbotron"], ["fxFlex", "", "fxFlex.gt-sm", "60%"], [2, "font-size", "50px"], [2, "font-size", "20px"], ["fxFlex", "", "fxFlex.gt-sm", "40%"], ["src", "./assets/images/farmergrow.jpg", "alt", "Logo", "height", "500", "width", "700"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Farming Assistant System");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " We take inspiration from the farmers, and created a unique application to help the farmers working with the motive of greater profitability by direct communication between farmer to supplier and supplier to farmer. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"]], styles: [".jumbotron[_ngcontent-%COMP%] {\n  margin: 0px auto;\n  padding: 70px 30px;\n  background: #018f30;\n  color: floralwhite;\n  min-height: 150px;\n}\n\n.active[_ngcontent-%COMP%] {\n  background: #003503;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVQTtFQUpJLGdCQUFnQjtFQUNoQixrQkFJOEI7RUFDOUIsbUJBWHFCO0VBWXJCLGtCQUFpQjtFQUNqQixpQkFBaUI7QUFSckI7O0FBYUE7RUFDSSxtQkFIeUI7QUFQN0IiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGx0LWdyYXk6ICNkZGQ7XHJcbiRiYWNrZ3JvdW5kLWRhcms6ICMwMThmMzA7XHJcbiRiYWNrZ3JvdW5kLWxpZ2h0OiAjOThjZDc1O1xyXG4kYmFja2dyb3VuZC1wYWxlOiAjMTFhZDM4O1xyXG5cclxuQG1peGluIHplcm8tbWFyZ2luKCRwYWQtdXAtZG93biwgJHBhZC1sZWZ0LXJpZ2h0KSB7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgcGFkZGluZzogJHBhZC11cC1kb3duICRwYWQtbGVmdC1yaWdodDtcclxufVxyXG5cclxuLmp1bWJvdHJvbiB7XHJcbiAgICBAaW5jbHVkZSB6ZXJvLW1hcmdpbig3MHB4LDMwcHgpO1xyXG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQtZGFyayA7XHJcbiAgICBjb2xvcjpmbG9yYWx3aGl0ZTtcclxuICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xyXG59XHJcblxyXG4kYmFja2dyb3VuZC1tb3JlZGFyazogIzAwMzUwMztcclxuXHJcbi5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQtbW9yZWRhcms7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "home works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");










function LoginComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Username is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        this.user = { username: '', password: '', remember: false };
    }
    ngOnInit() {
    }
    onSubmit() {
        console.log('User: ', this.user);
        this.dialogRef.close();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 26, vars: 6, consts: [["color", "primary"], [1, "flex-spacer"], ["mat-button", "", "mat-dialog-close", ""], ["novalidate", "", 3, "ngSubmit"], ["loginForm", "ngForm"], ["matInput", "", "placeholder", "Username", "type", "text", "name", "username", "required", "", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], [4, "ngIf"], ["matInput", "", "placeholder", "Password", "type", "password", "name", "password", "required", "", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["name", "remember", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "primary", "type", "submit", "mat-button", "", 1, "background-primary", "text-floral-white", 3, "disabled"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_10_listener($event) { return ctx.user.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginComponent_mat_error_12_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_15_listener($event) { return ctx.user.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LoginComponent_mat_error_17_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-checkbox", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_mat_checkbox_ngModelChange_18_listener($event) { return ctx.user.remember = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Remember Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.remember);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.form.invalid);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckbox"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_loginmenu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/loginmenu.service */ "./src/app/services/loginmenu.service.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../directives/highlight.directive */ "./src/app/directives/highlight.directive.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");











const _c0 = function (a1) { return ["/userdetail", a1]; };
function MenuComponent_mat_grid_tile_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-grid-tile-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const loginmenu_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, loginmenu_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", loginmenu_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", loginmenu_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, loginmenu_r1.name), " (Login/Register Menu)");
} }
class MenuComponent {
    constructor(loginmenuService) {
        this.loginmenuService = loginmenuService;
    }
    ngOnInit() {
        this.loginmenus = this.loginmenuService.getUsers();
    }
    onSelect(login) {
        this.selectedUser = login;
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_loginmenu_service__WEBPACK_IMPORTED_MODULE_1__["LoginmenuService"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 14, vars: 1, consts: [["fxLayout", "column", "fxLayoutGap", "10px", 1, "container"], ["fxFlex", ""], ["color", "primary"], [2, "font-size", "30px", "font-family", "Arial"], ["cols", "2", "rowHeight", "400px"], ["appHighlight", "", 3, "routerLink", 4, "ngFor", "ngForOf"], ["appHighlight", "", 3, "routerLink"], ["height", "400px", 3, "src", "alt"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-grid-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MenuComponent_mat_grid_tile_13_Template, 6, 8, "mat-grid-tile", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.loginmenus);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridTile"], _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_8__["HighlightDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridTileText"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridTileFooterCssMatStyler"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["UpperCasePipe"]], styles: ["mat-grid-tile-footer[_ngcontent-%COMP%] {\n  background: #00d12d;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQTJCO0FBQy9COztBQUVBO0VBQ0ksUUFBUTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWdyaWQtdGlsZS1mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDAsIDIwOSwgNDUpO1xyXG59XHJcblxyXG4uZXhhbXBsZS1zcGFjZXIge1xyXG4gICAgZmxleDogMTA7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.scss']
            }]
    }], function () { return [{ type: _services_loginmenu_service__WEBPACK_IMPORTED_MODULE_1__["LoginmenuService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/aboutus.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/aboutus.service.ts ***!
  \*********************************************/
/*! exports provided: AboutusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusService", function() { return AboutusService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_aboutuss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/aboutuss */ "./src/app/shared/aboutuss.ts");



class AboutusService {
    constructor() { }
    getAboutUss() {
        return _shared_aboutuss__WEBPACK_IMPORTED_MODULE_1__["ABOUTUSS"];
    }
    getABoutUs(id) {
        return _shared_aboutuss__WEBPACK_IMPORTED_MODULE_1__["ABOUTUSS"].filter((aboutus) => (aboutus.id === id))[0];
    }
    getFeaturedLeader() {
        return _shared_aboutuss__WEBPACK_IMPORTED_MODULE_1__["ABOUTUSS"].filter((aboutus) => aboutus.featured)[0];
    }
}
AboutusService.ɵfac = function AboutusService_Factory(t) { return new (t || AboutusService)(); };
AboutusService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AboutusService, factory: AboutusService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutusService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/loginmenu.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/loginmenu.service.ts ***!
  \***********************************************/
/*! exports provided: LoginmenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginmenuService", function() { return LoginmenuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_loginmenus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/loginmenus */ "./src/app/shared/loginmenus.ts");



class LoginmenuService {
    constructor() { }
    getUsers() {
        return _shared_loginmenus__WEBPACK_IMPORTED_MODULE_1__["LOGINMENUS"];
    }
    getUser(id) {
        return _shared_loginmenus__WEBPACK_IMPORTED_MODULE_1__["LOGINMENUS"].filter((login) => (login.id === id))[0];
    }
}
LoginmenuService.ɵfac = function LoginmenuService_Factory(t) { return new (t || LoginmenuService)(); };
LoginmenuService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginmenuService, factory: LoginmenuService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginmenuService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/aboutuss.ts":
/*!************************************!*\
  !*** ./src/app/shared/aboutuss.ts ***!
  \************************************/
/*! exports provided: ABOUTUSS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ABOUTUSS", function() { return ABOUTUSS; });
const ABOUTUSS = [
    {
        id: '0',
        name: 'Harshit Joshi',
        featured: true
    },
    {
        id: '1',
        name: 'Gaurav Mohanty',
        featured: true
    },
    {
        id: '2',
        name: 'Manoj Kumar M',
        featured: true
    },
    {
        id: '3',
        name: 'Yash Raj',
        featured: true
    },
    {
        id: '4',
        name: 'Reema Kumari',
        featured: true
    }
];


/***/ }),

/***/ "./src/app/shared/loginmenus.ts":
/*!**************************************!*\
  !*** ./src/app/shared/loginmenus.ts ***!
  \**************************************/
/*! exports provided: LOGINMENUS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGINMENUS", function() { return LOGINMENUS; });
const LOGINMENUS = [
    {
        id: '0',
        name: 'Farmer',
        image: './assets/images/fas.jpg',
        featured: true
    }, {
        id: '1',
        name: 'Supplier',
        image: './assets/images/supplier.jpg',
        featured: true
    },
    {
        id: '2',
        name: 'Admin',
        image: './assets/images/admin.jpg',
        featured: true
    }
];


/***/ }),

/***/ "./src/app/supplier/addadvertisement/addadvertisement.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/supplier/addadvertisement/addadvertisement.component.ts ***!
  \*************************************************************************/
/*! exports provided: AddadvertisementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddadvertisementComponent", function() { return AddadvertisementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_farmer_farmerservice_advertisement_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/farmer/farmerservice/advertisement.service */ "./src/app/farmer/farmerservice/advertisement.service.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");












class AddadvertisementComponent {
    constructor(formBuilder, router, advertisementService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.advertisementService = advertisementService;
    }
    ngOnInit() {
        this.addForm = this.formBuilder.group({
            id: [],
            cropname: [],
            quantity: []
        });
    }
    onSubmit() {
        this.advertisementService.createAdvertisement(this.addForm.value).subscribe(data => {
            console.log('Post created successfully!');
            alert("Crops added successfully.");
        }), error => {
            alert("Fields can not be empty");
        };
    }
}
AddadvertisementComponent.ɵfac = function AddadvertisementComponent_Factory(t) { return new (t || AddadvertisementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_farmer_farmerservice_advertisement_service__WEBPACK_IMPORTED_MODULE_3__["AdvertisementService"])); };
AddadvertisementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddadvertisementComponent, selectors: [["app-addadvertisement"]], decls: 34, vars: 1, consts: [["fxLayout", "column", "fxLayoutAlign", "space-around none"], ["fxLayout", "column", "fxLayoutGap", "30px"], ["color", "primary"], ["src", "./assets/images/ad.svg", "height", "95px", "width", "100px"], [3, "formGroup"], ["layout", "row"], ["layout", "column", "layout-padding", "", 2, "min-height", "50px"], ["aria-label", "Color selection", 1, "mat-chip-list-stacked"], ["selected", "", "color", "accent"], [1, "full-width"], ["appearance", "outline"], ["matInput", "", "formControlName", "cropname", "onkeypress", "return (event.charCode > 64 && \n           event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)", "placeholder", "Crop Name", "name", "cropname", "id", "cropname", "required", "", 1, "form-control"], ["matInput", "", "type", "number", "min", "1", "max", "100", "formControlName", "quantity", "placeholder", "Quantity", "name", "quantity", "id", "quantity", "required", "", 1, "form-control"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function AddadvertisementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A0 \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Add Advertisement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-chip-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-chip", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Crop Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Crop Name : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Hint : Enter only in characters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-chip-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-chip", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Crop Quantity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Crop Quantity : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Hint : Enter only in numbers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddadvertisementComponent_Template_button_click_32_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addForm);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChip"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatHint"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"]], styles: ["label[_ngcontent-%COMP%] {\n  align-content: space-around;\n}\n\nmat-chip[_ngcontent-%COMP%] {\n  max-width: 200px;\n}\n\nmat-grid-tile[_ngcontent-%COMP%] {\n  background: lightblue;\n}\n\n.btn-btn-success[_ngcontent-%COMP%] {\n  width: 200px;\n  min-width: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VwcGxpZXIvYWRkYWR2ZXJ0aXNlbWVudC9hZGRhZHZlcnRpc2VtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksMkJBQTJCO0FBQS9COztBQUdBO0VBQ0ksZ0JBQWdCO0FBQXBCOztBQUVBO0VBQ0kscUJBQXFCO0FBQ3pCOztBQUVFO0VBQ0UsWUFBWTtFQUNWLGdCQUFnQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3N1cHBsaWVyL2FkZGFkdmVydGlzZW1lbnQvYWRkYWR2ZXJ0aXNlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5sYWJlbCB7XHJcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbm1hdC1jaGlwIHtcclxuICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgfVxyXG5tYXQtZ3JpZC10aWxlIHtcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcclxuICB9XHJcblxyXG4gIC5idG4tYnRuLXN1Y2Nlc3N7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgIG1pbi13aWR0aDogdW5zZXQ7XHJcbiAgfVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddadvertisementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-addadvertisement',
                templateUrl: './addadvertisement.component.html',
                styleUrls: ['./addadvertisement.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_farmer_farmerservice_advertisement_service__WEBPACK_IMPORTED_MODULE_3__["AdvertisementService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/supplier/deleteadvertisement/deleteadvertisement.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/supplier/deleteadvertisement/deleteadvertisement.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DeleteadvertisementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteadvertisementComponent", function() { return DeleteadvertisementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_farmer_farmerservice_advertisement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/farmer/farmerservice/advertisement.service */ "./src/app/farmer/farmerservice/advertisement.service.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");









const _c0 = function () { return ["/deleteadvertisement"]; };
function DeleteadvertisementComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteadvertisementComponent_tr_24_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ad_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.deleteAdvertisement(ad_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ad_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ad_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ad_r1.cropname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ad_r1.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
} }
class DeleteadvertisementComponent {
    constructor(router, advertisementService) {
        this.router = router;
        this.advertisementService = advertisementService;
    }
    ngOnInit() {
        this.advertisementService.getAllAdvertisements()
            .subscribe(data => {
            this.advertisements = data;
        });
    }
    deleteAdvertisement(id) {
        this.advertisementService.deleteAdvertisement(id)
            .subscribe(() => this.message = "Advertisemenrt Deleted Successfully!");
        this.router.navigate(['list-advertisement']);
    }
}
DeleteadvertisementComponent.ɵfac = function DeleteadvertisementComponent_Factory(t) { return new (t || DeleteadvertisementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_farmer_farmerservice_advertisement_service__WEBPACK_IMPORTED_MODULE_2__["AdvertisementService"])); };
DeleteadvertisementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteadvertisementComponent, selectors: [["app-deleteadvertisement"]], decls: 25, vars: 1, consts: [["fxLayout", "column", "fxLayoutAlign", "space-around none"], ["fxLayout", "column", "fxLayoutGap", "20px"], ["color", "primary"], ["src", "./assets/images/ad.svg", "height", "90px", "width", "100px"], ["id", "customers", 1, "table", "table-bordered", "table-striped"], [1, "hidden"], [4, "ngFor", "ngForOf"], [1, "btn-group", "btn-group-sm"], ["mat-raised-button", "", "color", "primary", 3, "routerLink", "click"]], template: function DeleteadvertisementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00A0 \u00A0 \u00A0 \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Delete Advertisements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Crop Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Crop Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, DeleteadvertisementComponent_tr_24_Template, 11, 5, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.advertisements);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cHBsaWVyL2RlbGV0ZWFkdmVydGlzZW1lbnQvZGVsZXRlYWR2ZXJ0aXNlbWVudC5jb21wb25lbnQuc2NzcyJ9 */", "#customers[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n  \n  font-variant-caps: all-petite-caps;\n  font-size: 100%;\n}\n\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: 3px solid rgb(49, 160, 45);\n  padding: 8px;\n}\n\n#customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){background-color: #ffffff;}\n\n#customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {background-color: #abd65a;}\n\n#customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: center;\n  background-color: #4CAF50;\n  color: white;\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteadvertisementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-deleteadvertisement',
                templateUrl: './deleteadvertisement.component.html',
                styleUrls: ['./deleteadvertisement.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_farmer_farmerservice_advertisement_service__WEBPACK_IMPORTED_MODULE_2__["AdvertisementService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/supplier/suppliercrop/buycrop/buycrop.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/supplier/suppliercrop/buycrop/buycrop.component.ts ***!
  \********************************************************************/
/*! exports provided: BuycropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuycropComponent", function() { return BuycropComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_farmer_farmercrop_cropservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/farmer/farmercrop/cropservice.service */ "./src/app/farmer/farmercrop/cropservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");












const _c0 = function () { return ["/buytransaction"]; };
class BuycropComponent {
    constructor(cs, router) {
        this.cs = cs;
        this.router = router;
        this.crop = history.state.crops;
    }
    buyCrop() {
        this.deleteCrop(this.crop.id);
        this.cs.buyCrops(this.crop).subscribe(() => {
            alert("Bought Successfully..");
            this.router.navigate(['/buyHome']);
        });
    }
    deleteCrop(cropId) {
        this.cs.deleteCrop(cropId).subscribe(() => {
            history.go();
        });
    }
    ngOnInit() {
    }
}
BuycropComponent.ɵfac = function BuycropComponent_Factory(t) { return new (t || BuycropComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_farmer_farmercrop_cropservice_service__WEBPACK_IMPORTED_MODULE_1__["CropserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
BuycropComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BuycropComponent, selectors: [["app-buycrop"]], decls: 44, vars: 6, consts: [["fxLayout", "column", "fxLayoutAlign", "space-around none"], ["fxLayout", "column", "fxLayoutGap", "30px"], ["color", "primary"], [1, "jumbotron"], [1, "container"], [1, "row"], [1, "col-md-6", "offset-md-3"], [1, "form-group"], ["appearance", "legacy"], ["matInput", "", "type", "number", "placeholder", "Crop ID", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["matSuffix", ""], ["matInput", "", "type", "text", "placeholder", "Crop Name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "number", 1, "form-control", 3, "ngModel", "ngModelChange"], ["matPrefix", ""], ["appearance", "fill"], ["mat-raised-button", "", "type", "submit", 1, "btn", "btn-info", 3, "routerLink", "click"]], template: function BuycropComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A0 \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Buy Crops");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Crop ID:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BuycropComponent_Template_input_ngModelChange_15_listener($event) { return ctx.crop.id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "sentiment_very_satisfied");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Crop Name :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BuycropComponent_Template_input_ngModelChange_22_listener($event) { return ctx.crop.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "sentiment_very_satisfied");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Crop Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BuycropComponent_Template_input_ngModelChange_29_listener($event) { return ctx.crop.price = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "$\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, ".00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Crop Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BuycropComponent_Template_input_ngModelChange_38_listener($event) { return ctx.crop.quantity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "sentiment_very_satisfied");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuycropComponent_Template_button_click_42_listener() { return ctx.buyCrop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Buy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.crop.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.crop.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.crop.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.crop.quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatPrefix"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".example-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n.example-right-align[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\ninput.example-right-align[_ngcontent-%COMP%]::-webkit-outer-spin-button, input.example-right-align[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput.example-right-align[_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n\n.example-label[_ngcontent-%COMP%] {\n  display: table-cell;\n  font-size: 14px;\n  margin-left: 8px;\n  min-width: 120px;\n}\n\n.example-button-row[_ngcontent-%COMP%] {\n  display: table-cell;\n  width: 490px;\n}\n\n.example-button-row[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%] {\n  margin: 8px 8px 8px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VwcGxpZXIvc3VwcGxpZXJjcm9wL2J1eWNyb3AvYnV5Y3JvcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvc3VwcGxpZXIvc3VwcGxpZXJjcm9wL2J1eWNyb3AvYnV5Y3JvcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciAubWF0LWZvcm0tZmllbGQgKyAubWF0LWZvcm0tZmllbGQge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1yaWdodC1hbGlnbiB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbmlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXHJcbmlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbmlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xyXG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG59XHJcblxyXG4uZXhhbXBsZS1sYWJlbCB7XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICBtaW4td2lkdGg6IDEyMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1idXR0b24tcm93IHtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIHdpZHRoOiA0OTBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtYnV0dG9uLXJvdyAubWF0LWJ1dHRvbi1iYXNlIHtcclxuICBtYXJnaW46IDhweCA4cHggOHB4IDA7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuycropComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-buycrop',
                templateUrl: './buycrop.component.html',
                styleUrls: ['./buycrop.component.scss']
            }]
    }], function () { return [{ type: src_app_farmer_farmercrop_cropservice_service__WEBPACK_IMPORTED_MODULE_1__["CropserviceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/supplier/suppliercrop/buycrophome/buycrophome.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/supplier/suppliercrop/buycrophome/buycrophome.component.ts ***!
  \****************************************************************************/
/*! exports provided: BuycrophomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuycrophomeComponent", function() { return BuycrophomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_farmer_farmercrop_cropservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/farmer/farmercrop/cropservice.service */ "./src/app/farmer/farmercrop/cropservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");









const _c0 = function () { return ["/buycrop"]; };
const _c1 = function (a0) { return { crops: a0 }; };
function BuycrophomeComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const crop_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](crop_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](crop_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](crop_r1.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](crop_r1.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0))("state", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, crop_r1));
} }
class BuycrophomeComponent {
    constructor(cs, router) {
        this.cs = cs;
        this.router = router;
        cs.getAll().subscribe((res) => this.crops = res);
    }
    ngOnInit() {
    }
}
BuycrophomeComponent.ɵfac = function BuycrophomeComponent_Factory(t) { return new (t || BuycrophomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_farmer_farmercrop_cropservice_service__WEBPACK_IMPORTED_MODULE_1__["CropserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
BuycrophomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BuycrophomeComponent, selectors: [["app-buycrophome"]], decls: 29, vars: 1, consts: [["fxLayout", "column", "fxLayoutAlign", "space-around none"], ["fxLayout", "column", "fxLayoutGap", "30px"], ["color", "primary"], ["src", "./assets/images/home.jpg", "height", "90px", "width", "100px"], ["id", "customers", 1, "table"], [4, "ngFor", "ngForOf"], ["mat-raised-button", "", "routerLink", "/buytransaction"], ["mat-raised-button", "", 1, "btn", "btn-info", 3, "routerLink", "state"]], template: function BuycrophomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00A0 \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Welcome to Crops Buying Home Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "These are the details of all the available crops ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Farmer ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, BuycrophomeComponent_tr_26_Template, 12, 9, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "See Transaction History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.crops);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cHBsaWVyL3N1cHBsaWVyY3JvcC9idXljcm9waG9tZS9idXljcm9waG9tZS5jb21wb25lbnQuc2NzcyJ9 */", "#customers[_ngcontent-%COMP%] {\n  font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n}\n\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: 5px solid #ddd;\n  padding: 8px;\n}\n\n#customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){background-color: #f2f2f2;}\n\n#customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {background-color: rgb(175, 231, 101);}\n\n#customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #4CAF50;\n  color: white;\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuycrophomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-buycrophome',
                templateUrl: './buycrophome.component.html',
                styleUrls: ['./buycrophome.component.scss']
            }]
    }], function () { return [{ type: src_app_farmer_farmercrop_cropservice_service__WEBPACK_IMPORTED_MODULE_1__["CropserviceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/supplier/suppliercrop/buytransaction/buytransaction.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/supplier/suppliercrop/buytransaction/buytransaction.component.ts ***!
  \**********************************************************************************/
/*! exports provided: BuytransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuytransactionComponent", function() { return BuytransactionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_farmer_farmercrop_cropservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/farmer/farmercrop/cropservice.service */ "./src/app/farmer/farmercrop/cropservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");









const _c0 = function () { return ["/suppliercropmenu"]; };
function BuytransactionComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const crop_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](crop_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](crop_r1.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](crop_r1.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](crop_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
} }
class BuytransactionComponent {
    constructor(cs, router) {
        this.cs = cs;
        this.router = router;
        cs.getBuyAll().subscribe((res) => this.crops = res);
    }
    ngOnInit() {
    }
}
BuytransactionComponent.ɵfac = function BuytransactionComponent_Factory(t) { return new (t || BuytransactionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_farmer_farmercrop_cropservice_service__WEBPACK_IMPORTED_MODULE_1__["CropserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
BuytransactionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BuytransactionComponent, selectors: [["app-buytransaction"]], decls: 27, vars: 1, consts: [["fxLayout", "column", "fxLayoutAlign", "space-around none"], ["fxLayout", "column", "fxLayoutGap", "30px"], ["color", "primary"], ["src", "./assets/images/tranico.png", "height", "90px", "width", "100px"], ["id", "customers", 1, "table"], [4, "ngFor", "ngForOf"], ["mat-raised-button", "", 3, "routerLink"]], template: function BuytransactionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00A0 \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Welcome to Crops Transaction Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "These are the details of all the available transactions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Sold To -Farmer ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, BuytransactionComponent_tr_26_Template, 12, 6, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.crops);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cHBsaWVyL3N1cHBsaWVyY3JvcC9idXl0cmFuc2FjdGlvbi9idXl0cmFuc2FjdGlvbi5jb21wb25lbnQuc2NzcyJ9 */", "#customers[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n}\n\n#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  padding: 8px;\n}\n\n#customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){background-color: #f2f2f2;}\n\n#customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {background-color: rgb(150, 216, 111);}\n\n#customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  padding-right: 30px;\n  text-align: center;\n  background-color: #4CAF50;\n  color: white;\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuytransactionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-buytransaction',
                templateUrl: './buytransaction.component.html',
                styleUrls: ['./buytransaction.component.scss']
            }]
    }], function () { return [{ type: src_app_farmer_farmercrop_cropservice_service__WEBPACK_IMPORTED_MODULE_1__["CropserviceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/supplier/suppliercrop/suppliercropmenu/suppliercropmenu.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/supplier/suppliercrop/suppliercropmenu/suppliercropmenu.component.ts ***!
  \**************************************************************************************/
/*! exports provided: SuppliercropmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuppliercropmenuComponent", function() { return SuppliercropmenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _suppliercropmenu_suppliercropmenus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../suppliercropmenu/suppliercropmenus */ "./src/app/supplier/suppliercrop/suppliercropmenu/suppliercropmenus.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../directives/highlight.directive */ "./src/app/directives/highlight.directive.ts");











function SuppliercropmenuComponent_mat_grid_tile_13_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SuppliercropmenuComponent_mat_grid_tile_13_Template_mat_grid_tile_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const cropmenu_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.openMenuOption(cropmenu_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-grid-tile-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cropmenu_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", cropmenu_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", cropmenu_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, cropmenu_r1.name));
} }
class SuppliercropmenuComponent {
    constructor(_router) {
        this._router = _router;
    }
    ngOnInit() {
        this.cropmenus = this.getmenus();
    }
    onSelect(menuoption) {
        this.selectecropMenu = menuoption;
    }
    openMenuOption(value) {
        if (value === '1') {
            this._router.navigate(['/buycrophome']);
        }
        if (value === '2') {
            this._router.navigate(['/buytransaction']);
        }
    }
    getmenus() {
        return _suppliercropmenu_suppliercropmenus__WEBPACK_IMPORTED_MODULE_1__["SUPPLIERSCROPMENUS"];
    }
}
SuppliercropmenuComponent.ɵfac = function SuppliercropmenuComponent_Factory(t) { return new (t || SuppliercropmenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SuppliercropmenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SuppliercropmenuComponent, selectors: [["app-suppliercropmenu"]], decls: 14, vars: 1, consts: [["fxLayout", "column", "fxLayoutGap", "10px", 1, "container"], ["fxFlex", ""], ["color", "primary"], ["cols", "2", "rowHeight", "300px"], ["appHighlight", "", 3, "click", 4, "ngFor", "ngForOf"], ["appHighlight", "", 3, "click"], ["height", "300px", 3, "src", "alt"]], template: function SuppliercropmenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Buy Crops");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-grid-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SuppliercropmenuComponent_mat_grid_tile_13_Template, 6, 5, "mat-grid-tile", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cropmenus);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridTile"], _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_9__["HighlightDirective"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridTileText"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridTileFooterCssMatStyler"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["UpperCasePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cHBsaWVyL3N1cHBsaWVyY3JvcC9zdXBwbGllcmNyb3BtZW51L3N1cHBsaWVyY3JvcG1lbnUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SuppliercropmenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-suppliercropmenu',
                templateUrl: './suppliercropmenu.component.html',
                styleUrls: ['./suppliercropmenu.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/supplier/suppliercrop/suppliercropmenu/suppliercropmenus.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/supplier/suppliercrop/suppliercropmenu/suppliercropmenus.ts ***!
  \*****************************************************************************/
/*! exports provided: SUPPLIERSCROPMENUS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUPPLIERSCROPMENUS", function() { return SUPPLIERSCROPMENUS; });
const SUPPLIERSCROPMENUS = [
    {
        id: '1',
        name: 'Buy Crop Home',
        image: './assets/images/buy crop.jpg',
        featured: true
    },
    {
        id: '2',
        name: 'Buy Transaction',
        image: './assets/images/transaction.png',
        featured: true
    }
];


/***/ }),

/***/ "./src/app/supplier/supplierhome/supplierhome.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/supplier/supplierhome/supplierhome.component.ts ***!
  \*****************************************************************/
/*! exports provided: SupplierhomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierhomeComponent", function() { return SupplierhomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _supplierservice_suppliermenu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../supplierservice/suppliermenu.service */ "./src/app/supplier/supplierservice/suppliermenu.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../directives/highlight.directive */ "./src/app/directives/highlight.directive.ts");












function SupplierhomeComponent_mat_grid_tile_13_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SupplierhomeComponent_mat_grid_tile_13_Template_mat_grid_tile_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const suppliermenu_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.openMenuOption(suppliermenu_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-grid-tile-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const suppliermenu_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", suppliermenu_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", suppliermenu_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, suppliermenu_r1.name));
} }
const _c0 = function () { return ["/home"]; };
class SupplierhomeComponent {
    constructor(menuService, _router) {
        this.menuService = menuService;
        this._router = _router;
    }
    ngOnInit() {
        this.suppliermenus = this.menuService.getMenus();
    }
    onSelect(menu) {
        this.selectedMenu = menu;
    }
    openMenuOption(value) {
        if (value === '0') {
            this._router.navigate(['/addadvertisement']);
        }
        if (value === '1') {
            this._router.navigate(['/suppliercropmenu']);
        }
        if (value === '2') {
            this._router.navigate(['/deleteadvertisement']);
        }
    }
}
SupplierhomeComponent.ɵfac = function SupplierhomeComponent_Factory(t) { return new (t || SupplierhomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_supplierservice_suppliermenu_service__WEBPACK_IMPORTED_MODULE_1__["SuppliermenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SupplierhomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SupplierhomeComponent, selectors: [["app-supplierhome"]], decls: 17, vars: 3, consts: [["fxLayout", "column", "fxLayoutGap", "50px", 1, "container"], ["fxFlex", ""], ["color", "primary"], ["cols", "2", "rowHeight", "400px"], ["appHighlight", "", 3, "click", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "end end"], ["mat-raised-button", "", "color", "warn", "type", "submit", 3, "routerLink"], ["appHighlight", "", 3, "click"], ["height", "400px", 3, "src", "alt"]], template: function SupplierhomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00A0 \u00A0 \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Supplier's Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-grid-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SupplierhomeComponent_mat_grid_tile_13_Template, 6, 5, "mat-grid-tile", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.suppliermenus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridTile"], _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_10__["HighlightDirective"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridTileText"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridTileFooterCssMatStyler"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["UpperCasePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cHBsaWVyL3N1cHBsaWVyaG9tZS9zdXBwbGllcmhvbWUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SupplierhomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-supplierhome',
                templateUrl: './supplierhome.component.html',
                styleUrls: ['./supplierhome.component.scss']
            }]
    }], function () { return [{ type: _supplierservice_suppliermenu_service__WEBPACK_IMPORTED_MODULE_1__["SuppliermenuService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/supplier/supplierhome/suppliermenus.ts":
/*!********************************************************!*\
  !*** ./src/app/supplier/supplierhome/suppliermenus.ts ***!
  \********************************************************/
/*! exports provided: SUPPLIERMENUS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUPPLIERMENUS", function() { return SUPPLIERMENUS; });
const SUPPLIERMENUS = [
    {
        id: '0',
        name: 'Add Advertisement',
        image: './assets/images/advertisement.jpg',
        featured: true
    }, {
        id: '1',
        name: 'View Crops Received',
        image: './assets/images/viewcropsreceive.jpg',
        featured: true
    },
    {
        id: '2',
        name: 'Delete Advertisement',
        image: './assets/images/delete.png',
        featured: true
    }
];


/***/ }),

/***/ "./src/app/supplier/supplierlogin/supplierlogin.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/supplier/supplierlogin/supplierlogin.component.ts ***!
  \*******************************************************************/
/*! exports provided: SupplierloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierloginComponent", function() { return SupplierloginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _suppliermodel_suppliermodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../suppliermodel/suppliermodel */ "./src/app/supplier/suppliermodel/suppliermodel.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _supplierregister_supplierregsiter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../supplierregister/supplierregsiter.service */ "./src/app/supplier/supplierregister/supplierregsiter.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");














function SupplierloginComponent_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Username is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SupplierloginComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SupplierloginComponent {
    constructor(dialogRef, _service, _router) {
        this.dialogRef = dialogRef;
        this._service = _service;
        this._router = _router;
        this.supplier = new _suppliermodel_suppliermodel__WEBPACK_IMPORTED_MODULE_1__["SupplierModel"]();
        this.message = '';
        this.userModel = { username: '', password: '', remember: false };
    }
    ngOnInit() {
    }
    onSubmit() {
        this._service.loginSupplier(this.supplier).subscribe(data => {
            console.log("response received");
            this._router.navigate(['/supplierhome']);
            this.dialogRef.close();
        }, error => {
            console.log("exception occured");
            this.message = "Hey! Please enter valid username and password";
        });
    }
}
SupplierloginComponent.ɵfac = function SupplierloginComponent_Factory(t) { return new (t || SupplierloginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_supplierregister_supplierregsiter_service__WEBPACK_IMPORTED_MODULE_3__["SupplierregsiterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
SupplierloginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SupplierloginComponent, selectors: [["app-supplierlogin"]], decls: 32, vars: 7, consts: [["color", "primary"], [1, "flex-spacer"], ["mat-button", "", "mat-dialog-close", ""], ["novalidate", "", 3, "ngSubmit"], ["loginForm", "ngForm"], [1, "mat-subheading-1", "accent-color"], ["matInput", "", "placeholder", "Supplier Userame", "type", "text", "name", "supplierusername", "required", "", 3, "ngModel", "ngModelChange"], ["supplierusername", "ngModel"], ["matSuffix", ""], [4, "ngIf"], ["matInput", "", "placeholder", "Supplier Password", "type", "password", "name", "supplierpassword", "required", "", 3, "ngModel", "ngModelChange"], ["supplierpassword", "ngModel"], ["name", "remember", 3, "ngModel", "ngModelChange"], [1, "example-label"], [1, "example-button-row"], ["mat-raised-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"]], template: function SupplierloginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Welcome Supplier,Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SupplierloginComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SupplierloginComponent_Template_input_ngModelChange_12_listener($event) { return ctx.supplier.supplierusername = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SupplierloginComponent_mat_error_16_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SupplierloginComponent_Template_input_ngModelChange_19_listener($event) { return ctx.supplier.supplierpassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SupplierloginComponent_mat_error_21_Template, 2, 0, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-checkbox", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SupplierloginComponent_Template_mat_checkbox_ngModelChange_22_listener($event) { return ctx.userModel.remember = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Remember Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.supplier.supplierusername);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.supplier.supplierpassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors == null ? null : _r3.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userModel.remember);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.form.invalid);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckbox"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]], styles: [".example-label[_ngcontent-%COMP%] {\n  display: table-cell;\n  font-size: 14px;\n  margin-left: 8px;\n  min-width: 120px;\n}\n\n.example-button-row[_ngcontent-%COMP%] {\n  display: table-cell;\n  width: 490px;\n}\n\n.example-button-row[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%] {\n  margin: 8px 8px 8px 0;\n}\n\n.accent-color[_ngcontent-%COMP%] {\n  color: #ee5d0a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VwcGxpZXIvc3VwcGxpZXJsb2dpbi9zdXBwbGllcmxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVFO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDaEI7O0FBRUU7RUFDRSxxQkFBcUI7QUFDekI7O0FBRUU7RUFDRSxjQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL3N1cHBsaWVyL3N1cHBsaWVybG9naW4vc3VwcGxpZXJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWxhYmVsIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgbWluLXdpZHRoOiAxMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtYnV0dG9uLXJvdyB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgd2lkdGg6IDQ5MHB4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1idXR0b24tcm93IC5tYXQtYnV0dG9uLWJhc2Uge1xyXG4gICAgbWFyZ2luOiA4cHggOHB4IDhweCAwO1xyXG4gIH1cclxuXHJcbiAgLmFjY2VudC1jb2xvciB7XHJcbiAgICBjb2xvcjpyZ2IoMjM4LCA5MywgMTApO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SupplierloginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-supplierlogin',
                templateUrl: './supplierlogin.component.html',
                styleUrls: ['./supplierlogin.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: _supplierregister_supplierregsiter_service__WEBPACK_IMPORTED_MODULE_3__["SupplierregsiterService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/supplier/suppliermodel/suppliermodel.ts":
/*!*********************************************************!*\
  !*** ./src/app/supplier/suppliermodel/suppliermodel.ts ***!
  \*********************************************************/
/*! exports provided: SupplierModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierModel", function() { return SupplierModel; });
class SupplierModel {
    constructor() { }
}


/***/ }),

/***/ "./src/app/supplier/supplierregister/supplierregsiter.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/supplier/supplierregister/supplierregsiter.service.ts ***!
  \***********************************************************************/
/*! exports provided: SupplierregsiterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierregsiterService", function() { return SupplierregsiterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class SupplierregsiterService {
    constructor(_http) {
        this._http = _http;
        this.errorMessage = '';
        this.handleError = (error) => {
            if (error.status === 500) {
                this.handle500Error(error);
            }
            else if (error.status === 404) {
                this.handle404Error(error);
            }
            else {
                this.handleOtherError(error);
            }
        };
        this.handle500Error = (error) => {
            this.createErrorMessage(error);
        };
        this.handle404Error = (error) => {
            this.createErrorMessage(error);
        };
        this.handleOtherError = (error) => {
            this.createErrorMessage(error);
        };
    }
    loginSupplier(supplier) {
        return this._http.post("http://localhost:8686/register-service/registration/supplierlogin", supplier);
    }
    registerSupplier(supplier) {
        return this._http.post("http://localhost:8686/register-service/registration/suppliersignup", supplier);
    }
    createErrorMessage(error) {
        return this.errorMessage = error.error ? error.error : error.statusText;
    }
}
SupplierregsiterService.ɵfac = function SupplierregsiterService_Factory(t) { return new (t || SupplierregsiterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SupplierregsiterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SupplierregsiterService, factory: SupplierregsiterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SupplierregsiterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/supplier/supplierservice/suppliermenu.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/supplier/supplierservice/suppliermenu.service.ts ***!
  \******************************************************************/
/*! exports provided: SuppliermenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuppliermenuService", function() { return SuppliermenuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _supplierhome_suppliermenus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../supplierhome/suppliermenus */ "./src/app/supplier/supplierhome/suppliermenus.ts");



class SuppliermenuService {
    constructor() { }
    getMenus() {
        return _supplierhome_suppliermenus__WEBPACK_IMPORTED_MODULE_1__["SUPPLIERMENUS"];
    }
    getMenu(id) {
        return _supplierhome_suppliermenus__WEBPACK_IMPORTED_MODULE_1__["SUPPLIERMENUS"].filter((menu) => (menu.id === id))[0];
    }
}
SuppliermenuService.ɵfac = function SuppliermenuService_Factory(t) { return new (t || SuppliermenuService)(); };
SuppliermenuService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SuppliermenuService, factory: SuppliermenuService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SuppliermenuService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/supplier/suppliersignup/dialog-elements-example-dialog/dialog-elements-example-dialog.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/supplier/suppliersignup/dialog-elements-example-dialog/dialog-elements-example-dialog.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: DialogElementsExampleDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogElementsExampleDialogComponent", function() { return DialogElementsExampleDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");




class DialogElementsExampleDialogComponent {
    constructor() { }
    ngOnInit() {
    }
}
DialogElementsExampleDialogComponent.ɵfac = function DialogElementsExampleDialogComponent_Factory(t) { return new (t || DialogElementsExampleDialogComponent)(); };
DialogElementsExampleDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogElementsExampleDialogComponent, selectors: [["app-dialog-elements-example-dialog"]], decls: 7, vars: 0, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", ""]], template: function DialogElementsExampleDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Signed Up!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "You have been registered.Congrats!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cHBsaWVyL3N1cHBsaWVyc2lnbnVwL2RpYWxvZy1lbGVtZW50cy1leGFtcGxlLWRpYWxvZy9kaWFsb2ctZWxlbWVudHMtZXhhbXBsZS1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogElementsExampleDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dialog-elements-example-dialog',
                templateUrl: './dialog-elements-example-dialog.component.html',
                styleUrls: ['./dialog-elements-example-dialog.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/supplier/suppliersignup/suppliersignup.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/supplier/suppliersignup/suppliersignup.component.ts ***!
  \*********************************************************************/
/*! exports provided: SuppliersignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuppliersignupComponent", function() { return SuppliersignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _suppliermodel_suppliermodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../suppliermodel/suppliermodel */ "./src/app/supplier/suppliermodel/suppliermodel.ts");
/* harmony import */ var _suppliersignup_dialog_elements_example_dialog_dialog_elements_example_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../suppliersignup/dialog-elements-example-dialog/dialog-elements-example-dialog.component */ "./src/app/supplier/suppliersignup/dialog-elements-example-dialog/dialog-elements-example-dialog.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _supplierregister_supplierregsiter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../supplierregister/supplierregsiter.service */ "./src/app/supplier/supplierregister/supplierregsiter.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");














const _c0 = ["registerForm"];
function SuppliersignupComponent_div_21_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Full name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SuppliersignupComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SuppliersignupComponent_div_21_small_1_Template, 2, 0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.required);
} }
function SuppliersignupComponent_div_30_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Username name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SuppliersignupComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SuppliersignupComponent_div_30_small_1_Template, 2, 0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.required);
} }
function SuppliersignupComponent_div_40_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SuppliersignupComponent_div_40_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password must be longer than 6 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SuppliersignupComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SuppliersignupComponent_div_40_small_1_Template, 2, 0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SuppliersignupComponent_div_40_small_2_Template, 2, 0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.minlength);
} }
function SuppliersignupComponent_div_47_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Supplier Address is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SuppliersignupComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SuppliersignupComponent_div_47_small_1_Template, 2, 0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.errors.required);
} }
function SuppliersignupComponent_div_56_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone number is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SuppliersignupComponent_div_56_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone number is invalid.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SuppliersignupComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SuppliersignupComponent_div_56_small_1_Template, 2, 0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SuppliersignupComponent_div_56_small_2_Template, 2, 0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.errors.pattern);
} }
class SuppliersignupComponent {
    constructor(formBuilder, _router, _service, errorService, dialog) {
        this.formBuilder = formBuilder;
        this._router = _router;
        this._service = _service;
        this.errorService = errorService;
        this.dialog = dialog;
        this.msg = '';
        this.supplier = new _suppliermodel_suppliermodel__WEBPACK_IMPORTED_MODULE_1__["SupplierModel"]();
        this.hide = true;
    }
    ngOnInit() {
    }
    // convenience getter for easy access to form fields
    onSubmit() {
        this._service.registerSupplier(this.supplier).subscribe(data => {
            console.log("response received");
            this.dialog.open(_suppliersignup_dialog_elements_example_dialog_dialog_elements_example_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DialogElementsExampleDialogComponent"]);
            this.registerForm.resetForm();
        }, error => {
            console.log("Exception occured");
            this.msg = this.errorService.createErrorMessage(error);
        });
    }
}
SuppliersignupComponent.ɵfac = function SuppliersignupComponent_Factory(t) { return new (t || SuppliersignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_supplierregister_supplierregsiter_service__WEBPACK_IMPORTED_MODULE_5__["SupplierregsiterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_supplierregister_supplierregsiter_service__WEBPACK_IMPORTED_MODULE_5__["SupplierregsiterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
SuppliersignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SuppliersignupComponent, selectors: [["app-suppliersignup"]], viewQuery: function SuppliersignupComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.registerForm = _t.first);
    } }, decls: 61, vars: 16, consts: [["color", "primary"], [1, "flex-spacer"], ["mat-button", "", "mat-dialog-close", ""], [1, "jumbotron"], [1, "container"], [1, "row"], [1, "col-md-6", "offset-md-3"], [3, "ngSubmit"], ["registerForm", "ngForm"], [1, "alert", "alert-danger"], [1, "form-group"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "type", "text", "placeholder", "Supplier Name", "name", "suppliername", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["suppliername", "ngModel"], ["matSuffix", ""], ["class", "alert alert-danger", 4, "ngIf"], ["matInput", "", "type", "text", "placeholder", "Supplier Username", "name", "supplierusername", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["supplierusername", "ngModel"], ["matInput", "", "placeholder", "Password", "name", "supplierpassword", "minlength", "6", "required", "", 1, "form-control", 3, "type", "ngModel", "ngModelChange"], ["supplierpassword", "ngModel"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["matInput", "", "rows", "10", "type", "text", "name", "supplieraddress", "required", "", 3, "ngModel", "ngModelChange"], ["supplieraddress", "ngModel"], ["matInput", "", "placeholder", "Phone Number", "type", "tel", "name", "supplierphoneno", "pattern", "[0-9]*", "required", "", 3, "ngModel", "ngModelChange"], ["supplierphoneno", "ngModel"], [1, "example-label"], [1, "example-button-row"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"]], template: function SuppliersignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Welcome Supplier,Sign Up! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SuppliersignupComponent_Template_form_ngSubmit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Supplier Name :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SuppliersignupComponent_Template_input_ngModelChange_17_listener($event) { return ctx.supplier.suppliername = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "sentiment_satisfied_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SuppliersignupComponent_div_21_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Supplier Username :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SuppliersignupComponent_Template_input_ngModelChange_26_listener($event) { return ctx.supplier.supplierusername = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, SuppliersignupComponent_div_30_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Password :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SuppliersignupComponent_Template_input_ngModelChange_35_listener($event) { return ctx.supplier.supplierpassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SuppliersignupComponent_Template_button_click_37_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, SuppliersignupComponent_div_40_Template, 3, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Supplier Address :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "textarea", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SuppliersignupComponent_Template_textarea_ngModelChange_45_listener($event) { return ctx.supplier.supplieraddress = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, SuppliersignupComponent_div_47_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Phone Number :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SuppliersignupComponent_Template_input_ngModelChange_52_listener($event) { return ctx.supplier.supplierphoneno = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " call");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, SuppliersignupComponent_div_56_Template, 3, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.msg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.supplier.suppliername);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid && _r1.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.supplier.supplierusername);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.invalid && _r3.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text")("ngModel", ctx.supplier.supplierpassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.invalid && _r5.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.supplier.supplieraddress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.invalid && _r7.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.supplier.supplierphoneno);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.invalid && _r9.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogClose"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["PatternValidator"]], styles: [".example-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n.example-right-align[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\ninput.example-right-align[_ngcontent-%COMP%]::-webkit-outer-spin-button, input.example-right-align[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput.example-right-align[_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n\n.example-label[_ngcontent-%COMP%] {\n  display: table-cell;\n  font-size: 14px;\n  margin-left: 8px;\n  min-width: 120px;\n}\n\n.example-button-row[_ngcontent-%COMP%] {\n  display: table-cell;\n  width: 490px;\n}\n\n.example-button-row[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%] {\n  margin: 8px 8px 8px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VwcGxpZXIvc3VwcGxpZXJzaWdudXAvc3VwcGxpZXJzaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUI7QUFDckI7O0FBRUU7RUFDRSxpQkFBaUI7QUFDckI7O0FBRUU7O0VBRUUsYUFBYTtBQUNqQjs7QUFFRTtFQUNFLDBCQUEwQjtBQUM5Qjs7QUFFRTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFRTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2hCOztBQUVFO0VBQ0UscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvc3VwcGxpZXIvc3VwcGxpZXJzaWdudXAvc3VwcGxpZXJzaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIgLm1hdC1mb3JtLWZpZWxkICsgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1yaWdodC1hbGlnbiB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuICBpbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS1sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWJ1dHRvbi1yb3cge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHdpZHRoOiA0OTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtYnV0dG9uLXJvdyAubWF0LWJ1dHRvbi1iYXNlIHtcclxuICAgIG1hcmdpbjogOHB4IDhweCA4cHggMDtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SuppliersignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-suppliersignup',
                templateUrl: './suppliersignup.component.html',
                styleUrls: ['./suppliersignup.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _supplierregister_supplierregsiter_service__WEBPACK_IMPORTED_MODULE_5__["SupplierregsiterService"] }, { type: _supplierregister_supplierregsiter_service__WEBPACK_IMPORTED_MODULE_5__["SupplierregsiterService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }]; }, { registerForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['registerForm']
        }] }); })();


/***/ }),

/***/ "./src/app/userdetail/userdetail.component.ts":
/*!****************************************************!*\
  !*** ./src/app/userdetail/userdetail.component.ts ***!
  \****************************************************/
/*! exports provided: UserdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserdetailComponent", function() { return UserdetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _farmer_farmersignup_farmersignup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../farmer/farmersignup/farmersignup.component */ "./src/app/farmer/farmersignup/farmersignup.component.ts");
/* harmony import */ var _farmer_farmerlogin_farmerlogin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../farmer/farmerlogin/farmerlogin.component */ "./src/app/farmer/farmerlogin/farmerlogin.component.ts");
/* harmony import */ var _admin_adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admin/adminlogin/adminlogin.component */ "./src/app/admin/adminlogin/adminlogin.component.ts");
/* harmony import */ var _supplier_suppliersignup_suppliersignup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../supplier/suppliersignup/suppliersignup.component */ "./src/app/supplier/suppliersignup/suppliersignup.component.ts");
/* harmony import */ var _supplier_supplierlogin_supplierlogin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../supplier/supplierlogin/supplierlogin.component */ "./src/app/supplier/supplierlogin/supplierlogin.component.ts");
/* harmony import */ var _services_loginmenu_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/loginmenu.service */ "./src/app/services/loginmenu.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");














function UserdetailComponent_mat_card_3_mat_card_title_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const loginmenu_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, loginmenu_r2.name));
} }
function UserdetailComponent_mat_card_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserdetailComponent_mat_card_3_mat_card_title_2_Template, 4, 3, "mat-card-title", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserdetailComponent_mat_card_3_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserdetailComponent_mat_card_3_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.openLoginForm(ctx_r5.loginmenu.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserdetailComponent_mat_card_3_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.openSignupForm(ctx_r6.loginmenu.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Signup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.loginmenus);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.loginmenu.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r0.loginmenu.name);
} }
class UserdetailComponent {
    constructor(loginmenuservice, route, location, dialog) {
        this.loginmenuservice = loginmenuservice;
        this.route = route;
        this.location = location;
        this.dialog = dialog;
    }
    ngOnInit() {
        const id = this.route.snapshot.params['id'];
        this.loginmenu = this.loginmenuservice.getUser(id);
    }
    goBack() {
        this.location.back();
    }
    openLoginForm(value) {
        if (value === '0') {
            this.dialog.open(_farmer_farmerlogin_farmerlogin_component__WEBPACK_IMPORTED_MODULE_2__["FarmerloginComponent"], { width: '400px', height: '400px' });
        }
        if (value === '1') {
            this.dialog.open(_supplier_supplierlogin_supplierlogin_component__WEBPACK_IMPORTED_MODULE_5__["SupplierloginComponent"], { width: '500px', height: '400px' });
        }
        if (value === '2') {
            this.dialog.open(_admin_adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_3__["AdminloginComponent"], { width: '500px', height: '400px' });
        }
    }
    openSignupForm(value) {
        if (value === '0') {
            this.dialog.open(_farmer_farmersignup_farmersignup_component__WEBPACK_IMPORTED_MODULE_1__["FarmersignupComponent"], { width: '400px', height: '830px' });
        }
        if (value === '1') {
            this.dialog.open(_supplier_suppliersignup_suppliersignup_component__WEBPACK_IMPORTED_MODULE_4__["SuppliersignupComponent"], { width: '400px', height: '790px' });
        }
    }
    onSelect(login) {
        this.selectedUser = login;
    }
}
UserdetailComponent.ɵfac = function UserdetailComponent_Factory(t) { return new (t || UserdetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_loginmenu_service__WEBPACK_IMPORTED_MODULE_6__["LoginmenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"])); };
UserdetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserdetailComponent, selectors: [["app-userdetail"]], decls: 4, vars: 1, consts: [["fxLayout", "row", "fxLayout.sm", "column", "fxLayout.xs", "column", "fxLayoutAlign.gt-md", "space-around center", "fxLayoutGap", "10px", "fxLayoutGap.xs", "0", 1, "container"], ["fxFlex", "40"], ["class", "example-card", 4, "ngIf"], [1, "example-card"], [4, "ngFor", "ngForOf"], ["mat-card-image", "", 3, "src", "alt"], [1, "example-button-row"], ["mat-raised-button", "", "color", "", "mat-button", "", 3, "click"], [1, "flex-spacer"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "primary", "mat-button", "", 3, "click"]], template: function UserdetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserdetailComponent_mat_card_3_Template, 13, 3, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginmenu);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardTitle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["UpperCasePipe"]], styles: [".example-card[_ngcontent-%COMP%] {\n  max-width: 600px;\n}\n\n.example-button-row[_ngcontent-%COMP%] {\n  display: table-cell;\n  width: 490px;\n}\n\n.mat-tab-group[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcmRldGFpbC91c2VyZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVFO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDaEI7O0FBRUU7RUFDRSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC91c2VyZGV0YWlsL3VzZXJkZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkIHtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWJ1dHRvbi1yb3cge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHdpZHRoOiA0OTBweDtcclxuICB9XHJcblxyXG4gIC5tYXQtdGFiLWdyb3VwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserdetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-userdetail',
                templateUrl: './userdetail.component.html',
                styleUrls: ['./userdetail.component.scss']
            }]
    }], function () { return [{ type: _services_loginmenu_service__WEBPACK_IMPORTED_MODULE_6__["LoginmenuService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] }]; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\harsjosh\Desktop\Farming Assistance System\fas\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map