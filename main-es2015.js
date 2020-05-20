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

/***/ "./node_modules/raw-loader/index.js!./src/app/_components/alert.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/_components/alert.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"message.cssClass\">{{message.text}}</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<alert></alert>\n<router-outlet></router-outlet>\n<div class=\"col-md-12 text-center\" style=\"\nbottom: 0;\">\n  <span>Developed by: Aryan @2020</span>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand navbar-light bg-primary d-flex justify-content-between\">\n    <div class=\"navbar-brand mb-0 h1 text-white\">HP Bill Invoice</div>\n    <a class=\"nav-item nav-link\" (click)=\"logout()\" style=\"cursor: pointer; background: red; color: white;\">Mukesh (Logout)</a>\n  </nav>\n  <div class=\"container-fluid\" style=\"background: white;\">\n    <form #resumeForm=\"ngForm\">\n      <div class=\"row\">\n        <div class=\"col-md-8\">\n          <div class=\"shadow-sm card\">\n            <div class=\"card-body\">\n              <h4 class=\"card-title d-flex align-items-center\">\n                <i class=\"material-icons\">\n                  timeline\n                </i>\n                Vendor Details</h4>\n              <div class=\"row\">\n                <div class=\"col-md-8\">\n                  <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <div class=\"form-group vendor\">\n                        <label class=\"form-control\">\n                            {{bill.vendorName }}\n                        </label>\n                        <label class=\"form-control\">\n                          <span>VILL:-</span> {{bill.village }}\n                        </label>\n                        <label class=\"form-control\">\n                          <span>PS:-</span> {{bill.post }}\n                        </label>\n                        <label class=\"form-control\">\n                          <span>DIST:-</span> {{bill.dist }}\n                        </label>\n                      </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                      <div class=\"form-group\">\n                        <label>Phone number</label>\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"bill.contactNo\" name=\"contactNo\"\n                          placeholder=\"Contact No.\" #ContactNo=\"ngModel\" required\n                          [ngClass]=\"{'is-invalid': ContactNo.invalid && (ContactNo.touched || resumeForm.submitted) }\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-4\" style=\"text-align: center;\">\n                    <div class=\"form-group\">\n                      <img src=\"../assets/hp-gas-logo.png\" style=\"height: 130px;\">\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- Customer Info -->\n          <div class=\"shadow-sm card\">\n            <div class=\"card-body\">\n              <div class=\"d-flex justify-content-between card-title\">\n                <h4 class=\"d-flex align-items-center\">\n                  <i class=\"material-icons\">\n                    timeline\n                  </i>\n                  Customer Info (Bill To)</h4>\n                <!-- <button class=\"btn btn-primary\" (click)=\"addCustomerInfo()\">+</button> -->\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <label>Customer Name</label>\n                    <input type=\"text\" class=\"form-control\" name=\"customerName\" [(ngModel)]=\"bill.customerInfo.name\"\n                      placeholder=\"Customer Name\" #CustomerName=\"ngModel\" required\n                      [ngClass]=\"{'is-invalid': CustomerName.invalid && (CustomerName.touched || resumeForm.submitted) }\">\n                  </div>\n                </div>\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <label>Mobile</label>\n                    <input type=\"text\" class=\"form-control\" name=\"customerContactNumber\" [(ngModel)]=\"bill.customerInfo.contactNumber\"\n                      placeholder=\"Phone number\" #ContactNumber=\"ngModel\" required\n                      [ngClass]=\"{'is-invalid': ContactNumber.invalid && (ContactNumber.touched || resumeForm.submitted) }\">\n                  </div>\n                </div>\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n                    <div class=\"form-group\">\n                      <label>Address</label>\n                      <textarea class=\"form-control\" name=\"customerAddress\" required [(ngModel)]=\"bill.customerInfo.address\" rows=\"3\"\n                        placeholder=\"Address (post, vill, dist)\" #CustomerAddress  [ngClass]=\"{'is-invalid': CustomerAddress.invalid && (CustomerAddress.touched || resumeForm.submitted) }\"></textarea>\n                    </div>\n                  </div>\n                </div>\n              </div>\n  \n            </div>\n          </div>\n  \n          <!-- Items -->\n          <div class=\"shadow-sm card\">\n            <div class=\"card-body\">\n              <div class=\"d-flex justify-content-between card-title\">\n                <h4 class=\"d-flex align-items-center\">\n                  <i class=\"material-icons\">\n                    timeline\n                  </i>\n                  Items (Invoice items detail)</h4> \n                <button class=\"btn btn-primary\" (click)=\"addItems()\">Add Item</button>\n              </div>\n              <div class=\"row\" *ngFor=\"let ed of bill.items; let i=index\">\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n                    <label>Date</label>\n                    <input  class=\"form-control\" placeholder=\"Date\" name=\"date{{i}}\" [(ngModel)]=\"ed.date\"\n                    #Date=\"ngModel\" required type=\"date\"\n                    [ngClass]=\"{'is-invalid': Date.invalid && (Date.touched || resumeForm.submitted) }\">\n                  </div>\n                </div>\n                <div class=\"col-md-8\">\n                  <div class=\"form-group\">\n                    <label>Description</label>\n                    <input type=\"text\" class=\"form-control\" name=\"description{{i}}\" [(ngModel)]=\"ed.description\"\n                      placeholder=\"Description\" #Description=\"ngModel\" required\n                      [ngClass]=\"{'is-invalid': Description.invalid && (Description.touched || resumeForm.submitted) }\">\n                  </div>\n                </div>\n                <div class=\"col-md-4\">\n                  <div class=\"form-group\">\n                    <label>Unit price</label>\n                    <input type=\"number\" class=\"form-control\" name=\"unitPrice{{i}}\" (change)=\"calculate(i)\" [(ngModel)]=\"ed.unitPrice\"\n                      placeholder=\"Unit Price\" #UnitPrice=\"ngModel\" required\n                      [ngClass]=\"{'is-invalid': UnitPrice.invalid && (UnitPrice.touched || resumeForm.submitted) }\">\n                  </div>\n                </div>\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <label>Quantity</label>\n                    <input type=\"number\" class=\"form-control\" name=\"qty{{i}}\" (change)=\"calculate(i)\" [(ngModel)]=\"ed.qty\"\n                      placeholder=\"qty\" #Qty=\"ngModel\" required\n                      [ngClass]=\"{'is-invalid': Qty.invalid && (Qty.touched || resumeForm.submitted) }\">\n                  </div>\n                </div>\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <label>Tax</label>\n                    <input type=\"number\" class=\"form-control\" name=\"tax{{i}}\" (change)=\"calculate(i)\" [(ngModel)]=\"ed.tax\"\n                      placeholder=\"Tax\" #Tax=\"ngModel\" required\n                      [ngClass]=\"{'is-invalid': Tax.invalid && (Tax.touched || resumeForm.submitted) }\">\n                  </div>\n                </div>\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n                    <p class=\"m-0\">\n                    <label class=\"font-weight-bold\">Total Amount: </label>\n                       {{ed.total}}\n                    </p>\n                    <p class=\"m-0\">\n                      <label class=\"font-weight-bold\">Tax Amount: </label>\n                      {{ed.taxAmount}}    \n                    </p>\n                    <p class=\"m-0\">\n                      <label class=\"font-weight-bold\">Sub. Total amount (Inc tax): </label>\n                      {{ed.totalAmountWithTax}}  \n                    </p>\n                  </div>\n                </div>\n              </div>\n              <hr>\n              <h2 style=\"color: #fd5f60;\">Total: <span style=\"color: #17a2b8;\">Rs: {{totalAmount}}</span></h2>\n              <button *ngIf=\"bill.items.length>0\" class=\"btn btn-danger\" (click)=\"removeItems()\" style=\"float: right;\">Remove Item</button>\n            </div>\n          </div>\n  \n          <!-- Other Details -->\n  \n          <div class=\"shadow-sm card\">\n            <div class=\"card-body\">\n              <h4 class=\"card-title d-flex align-items-center\">\n                <i class=\"material-icons\"> list </i>Notes</h4>\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n                    <textarea type=\"text\" class=\"form-control\" placeholder=\"Type notes\" [(ngModel)]=\"bill.otherDetails\" name=\"otherDetails\"\n                      rows=\"4\"></textarea>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n  \n        <div class=\"col-md-4\">\n          <div class=\"shadow-sm card action-buttons\">\n            <button (click)=\"resumeForm.valid ? generatePdf('open') : ''\"\n              class=\"btn btn-primary d-flex align-items-center justify-content-center\">\n              <i class=\"material-icons\">\n                picture_as_pdf\n              </i> <span>Open PDF</span></button>\n            <button (click)=\"resumeForm.valid ? generatePdf('download') : ''\"\n              class=\"btn btn-primary d-flex align-items-center justify-content-center\">\n              <i class=\"material-icons\">\n                cloud_download\n              </i><span>Download PDF</span></button>\n            <button (click)=\"resumeForm.valid ? generatePdf('print') : ''\"\n              class=\"btn btn-primary d-flex align-items-center justify-content-center\">\n              <i class=\"material-icons\">\n                print\n              </i><span>Print PDF</span></button>\n  \n            <button type='reset' (click)=\"resetForm()\"\n              class=\"btn btn-primary d-flex align-items-center justify-content-center\">\n              <i class=\"material-icons\">\n                clear\n              </i><span>Reset</span></button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12 text-center\">\n                <img src=\"../../assets/hp-gas-logo.png\" style=\"height:180px\">\n            </div>\n            <div class=\"col-sm-6 offset-sm-3\">\n\n<h2>Login</h2>\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.username.errors.required\">Username is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">\n            <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n            Login\n        </button>\n    </div>\n</form>\n</div>\n<!-- <div class=\"col-md-12 text-center\" style=\"margin-top: 115px;\">\n    <span>Developed by: Aryan @2020</span>\n</div> -->\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/_components/alert.component.ts":
/*!************************************************!*\
  !*** ./src/app/_components/alert.component.ts ***!
  \************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");



let AlertComponent = class AlertComponent {
    constructor(alertService) {
        this.alertService = alertService;
    }
    ngOnInit() {
        this.subscription = this.alertService.getAlert()
            .subscribe(message => {
            switch (message && message.type) {
                case 'success':
                    message.cssClass = 'alert alert-success';
                    break;
                case 'error':
                    message.cssClass = 'alert alert-danger';
                    break;
            }
            this.message = message;
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
AlertComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }
];
AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'alert', template: __webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/index.js!./src/app/_components/alert.component.html") })
], AlertComponent);



/***/ }),

/***/ "./src/app/_components/index.ts":
/*!**************************************!*\
  !*** ./src/app/_components/index.ts ***!
  \**************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component */ "./src/app/_components/alert.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });




/***/ }),

/***/ "./src/app/_helpers/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/_helpers/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");




let AuthGuard = class AuthGuard {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    canActivate(route, state) {
        const currentUser = this.userService.isUser();
        console.log('data', currentUser);
        if (currentUser) {
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AuthGuard);



/***/ }),

/***/ "./src/app/_helpers/index.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/_helpers/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "./src/app/_services/alert.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let AlertService = class AlertService {
    constructor(router) {
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.keepAfterRouteChange = false;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert message
                    this.clear();
                }
            }
        });
    }
    getAlert() {
        return this.subject.asObservable();
    }
    success(message, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'success', text: message });
    }
    error(message, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'error', text: message });
    }
    clear() {
        // clear by calling subject.next() without parameters
        this.subject.next();
    }
};
AlertService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AlertService);



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthenticationService = class AuthenticationService {
    constructor() {
    }
    login(username, password) {
        if (username === 'mukesh@alpha@hp' && password === 'hp_123@mukesh') {
            localStorage.setItem('currentUser', JSON.stringify({ username, password }));
            return true;
        }
        return false;
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
};
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AuthenticationService);



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AlertService, AuthenticationService, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.service */ "./src/app/_services/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]; });

/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/_services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]; });






/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    isUser() {
        let user = JSON.parse(localStorage.getItem('currentUser'));
        if (user) {
            return true;
        }
        else {
            return false;
        }
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], UserService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");




let AppComponent = class AppComponent {
    constructor(router, authenticationService, userService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
    }
    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'app-root', template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html") })
], AppComponent);



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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_components */ "./src/app/_components/index.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_5__["appRoutingModule"]
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _home__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _login__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
            _components__WEBPACK_IMPORTED_MODULE_9__["AlertComponent"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);

;


/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: appRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingModule", function() { return appRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");




const routes = [
    { path: '', component: _home__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'login', component: _login__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
const appRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/home/bill.ts":
/*!******************************!*\
  !*** ./src/app/home/bill.ts ***!
  \******************************/
/*! exports provided: Bill, CustomerInfo, Items, Skill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bill", function() { return Bill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerInfo", function() { return CustomerInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Items", function() { return Items; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skill", function() { return Skill; });
class Bill {
    constructor() {
        this.vendorName = 'RAJNANDANI HP GAS GRAMIN VITRAK';
        this.village = "MAINARAHIKA BAJITPUR";
        this.post = "MANIGACHHI";
        this.dist = "DARBHANGA (847422)";
        this.contactNo = "9546081633, 8271608018";
        this.items = [];
        this.skills = [];
        this.customerInfo = new CustomerInfo();
        this.items.push(new Items());
        this.skills.push(new Skill());
    }
}
class CustomerInfo {
}
class Items {
    constructor() {
        this.unitPrice = 0;
        this.qty = 0;
        this.total = 0;
        this.tax = 0;
        this.taxAmount = 0;
        this.totalAmountWithTax = 0;
    }
}
class Skill {
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _bill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bill */ "./src/app/home/bill.ts");
/* harmony import */ var _script_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./script.service */ "./src/app/home/script.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7__);








pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_7___default.a.pdfMake.vfs;
let HomeComponent = class HomeComponent {
    constructor(scriptService, router, authenticationService) {
        this.scriptService = scriptService;
        this.router = router;
        this.authenticationService = authenticationService;
        this.bill = new _bill__WEBPACK_IMPORTED_MODULE_2__["Bill"]();
        this.degrees = ['B.E.', 'M.E.', 'B.Com', 'M.Com'];
        this.bill = JSON.parse(sessionStorage.getItem('bill')) || new _bill__WEBPACK_IMPORTED_MODULE_2__["Bill"]();
        this.bill.logo = `data:image/png;base64,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`;
        if (!this.bill.items || this.bill.items.length === 0) {
            this.bill.items = [];
            this.bill.items.push(new _bill__WEBPACK_IMPORTED_MODULE_2__["Items"]());
        }
        if (!this.bill.skills || this.bill.skills.length === 0) {
            this.bill.skills = [];
            this.bill.skills.push(new _bill__WEBPACK_IMPORTED_MODULE_2__["Skill"]());
        }
        this.totalAmount = this.bill.items.reduce(function (sum, a) {
            return sum + a.totalAmountWithTax;
        }, 0).toFixed(2);
        console.log('Loading External Scripts');
        this.scriptService.load('pdfMake', 'vfsFonts');
    }
    // addCustomerInfo() {
    //   this.bill.customerInfo.push(new CustomerInfo());
    // }
    addItems() {
        this.bill.items.push(new _bill__WEBPACK_IMPORTED_MODULE_2__["Items"]());
    }
    removeItems() {
        this.bill.items.splice(-1, 1);
        this.totalAmount = this.bill.items.reduce(function (sum, a) {
            return sum + a.totalAmountWithTax;
        }, 0).toFixed(2);
    }
    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
    calculate(i) {
        debugger;
        let item = this.bill.items[i];
        let totalPrice = item.unitPrice * item.qty;
        let taxAmount = parseFloat((totalPrice * item.tax / 100).toFixed(2));
        let totalWithTax = totalPrice + taxAmount;
        this.bill.items[i].total = totalPrice;
        this.bill.items[i].taxAmount = taxAmount;
        this.bill.items[i].totalAmountWithTax = totalWithTax;
        this.totalAmount = this.bill.items.reduce(function (sum, a) {
            return sum + a.totalAmountWithTax;
        }, 0).toFixed(2);
    }
    generatePdf(action = 'open') {
        console.log(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default.a);
        const documentDefinition = this.getDocumentDefinition();
        switch (action) {
            case 'open':
                pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default.a.createPdf(documentDefinition).open();
                break;
            case 'print':
                pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default.a.createPdf(documentDefinition).print();
                break;
            case 'download':
                pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default.a.createPdf(documentDefinition).download();
                break;
            default:
                pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_6___default.a.createPdf(documentDefinition).open();
                break;
        }
    }
    resetForm() {
        this.bill = new _bill__WEBPACK_IMPORTED_MODULE_2__["Bill"]();
    }
    getDocumentDefinition() {
        console.log(this.bill);
        sessionStorage.setItem('bill', JSON.stringify(this.bill));
        return {
            content: [
                {
                    text: 'Bill-Invoice',
                    bold: true,
                    fontSize: 20,
                    alignment: 'center',
                    margin: [0, 0, 0, 20]
                },
                {
                    columns: [
                        [{
                                text: this.bill.vendorName,
                                style: 'name'
                            },
                            {
                                text: 'VILL:- ' + this.bill.village.toLocaleUpperCase()
                            },
                            {
                                text: 'PS:- ' + this.bill.post.toLocaleUpperCase()
                            },
                            {
                                text: 'DIST:- ' + this.bill.dist.toLocaleUpperCase()
                            },
                            {
                                text: 'MO:- ' + this.bill.contactNo
                            }
                        ],
                        [
                            this.getProfilePicObject()
                        ]
                    ]
                },
                {
                    text: '_____________________________________  Bill Invoice _______ ',
                    bold: true,
                    fontSize: 20,
                    alignment: 'center',
                    margin: [0, 0, 0, 20]
                },
                {
                    text: 'Bill To',
                    style: 'header'
                },
                this.getCustomerInfoObject(this.bill.customerInfo),
                {
                    text: '',
                    style: 'header'
                },
                this.getEducationObject(this.bill.items),
                [{
                        columns: [
                            {
                                text: 'Total: ' + this.totalAmount,
                                alignment: 'right'
                            }
                        ]
                    }],
                {
                    text: 'Note*',
                    style: 'noteHeader'
                },
                {
                    text: this.bill.otherDetails,
                    style: 'noteText'
                },
                {
                    text: 'Signature',
                    style: 'sign'
                }
            ],
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                    margin: [0, 20, 0, 10],
                    decoration: 'underline',
                    width: '100%'
                },
                noteHeader: {
                    fontSize: 12,
                    bold: true,
                    margin: [0, 50, 0, 10],
                    decoration: 'underline',
                    width: '100%'
                },
                noteText: {
                    fontSize: 10,
                    italics: true
                },
                name: {
                    fontSize: 12,
                    bold: true
                },
                customerTitle: {
                    fontSize: 14,
                    bold: true,
                    italics: true
                },
                sign: {
                    margin: [0, 50, 0, 10],
                    alignment: 'right',
                    italics: true
                },
                totalAmt: {
                    margin: [0, 10, 0, 10],
                    alignment: 'right',
                    italics: true
                },
                tableHeader: {
                    bold: true,
                }
            }
        };
    }
    getCustomerInfoObject(customerInfo) {
        const exs = [];
        exs.push([{
                columns: [
                    [{
                            text: customerInfo.name,
                            style: 'customerTitle'
                        },
                        {
                            text: 'ADDRESS:- ' + customerInfo.address,
                        },
                        {
                            text: 'PHONE:- ' + customerInfo.contactNumber,
                        }
                    ],
                    {
                        text: 'Customer info ',
                        alignment: 'right'
                    }
                ]
            }]);
        return {
            table: {
                widths: ['*'],
                body: [
                    ...exs
                ]
            }
        };
    }
    getEducationObject(items) {
        return {
            table: {
                body: [
                    [{
                            text: 'DATE',
                            style: 'tableHeader'
                        },
                        {
                            text: 'Item Description',
                            style: 'tableHeader'
                        },
                        {
                            text: 'Unit Price (Rs.)',
                            style: 'tableHeader'
                        },
                        {
                            text: 'Qty',
                            style: 'tableHeader'
                        },
                        {
                            text: 'Total',
                            style: 'tableHeader'
                        },
                        {
                            text: 'Tax %',
                            style: 'tableHeader'
                        },
                        {
                            text: 'Tax Amount (Rs.)',
                            style: 'tableHeader'
                        },
                        {
                            text: 'Total (Inc tax) Rs.',
                            style: 'tableHeader'
                        },
                    ],
                    ...items.map(item => {
                        return [item.date, item.description, item.unitPrice, item.qty, item.total, item.tax, item.taxAmount, item.totalAmountWithTax];
                    })
                ]
            }
        };
    }
    getProfilePicObject() {
        if (this.bill.logo) {
            return {
                image: this.bill.logo,
                width: 75,
                alignment: 'right'
            };
        }
        return null;
    }
    addSkill() {
        this.bill.skills.push(new _bill__WEBPACK_IMPORTED_MODULE_2__["Skill"]());
    }
};
HomeComponent.ctorParameters = () => [
    { type: _script_service__WEBPACK_IMPORTED_MODULE_3__["ScriptService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.css */ "./src/app/home/home.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/home/home.css":
/*!*******************************!*\
  !*** ./src/app/home/home.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row{\r\n    padding: 10px;\r\n}\r\n\r\n.card{\r\n    margin: 10px;\r\n}\r\n\r\n.material-icons{\r\n    font-size: 30px;\r\n}\r\n\r\nbutton span{\r\n    font-size: 22px;\r\n}\r\n\r\n.action-buttons button{\r\n    margin : 5px;\r\n}\r\n\r\n.vendor .form-control {\r\n    padding: 0!important;\r\n    border: none!important;\r\n    height: 20px;\r\n    margin: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3d7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uY2FyZHtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLm1hdGVyaWFsLWljb25ze1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG5idXR0b24gc3BhbntcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxuLmFjdGlvbi1idXR0b25zIGJ1dHRvbntcclxuICAgIG1hcmdpbiA6IDVweDtcclxufVxyXG4udmVuZG9yIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgcGFkZGluZzogMCFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/index.ts":
/*!*******************************!*\
  !*** ./src/app/home/index.ts ***!
  \*******************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });




/***/ }),

/***/ "./src/app/home/script.service.ts":
/*!****************************************!*\
  !*** ./src/app/home/script.service.ts ***!
  \****************************************/
/*! exports provided: ScriptStore, ScriptService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptStore", function() { return ScriptStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptService", function() { return ScriptService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const ScriptStore = [
    { name: 'pdfMake', src: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.59/pdfmake.min.js' },
    { name: 'vfsFonts', src: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.59/vfs_fonts.js' }
];
let ScriptService = class ScriptService {
    constructor() {
        this.scripts = {};
        ScriptStore.forEach((script) => {
            this.scripts[script.name] = {
                loaded: false,
                src: script.src
            };
        });
    }
    load(...scripts) {
        const promises = [];
        scripts.forEach((script) => promises.push(this.loadScript(script)));
        return Promise.all(promises);
    }
    loadScript(name) {
        return new Promise((resolve, reject) => {
            // resolve if already loaded
            if (this.scripts[name].loaded) {
                resolve({ script: name, loaded: true, status: 'Already Loaded' });
            }
            else {
                // load script
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = this.scripts[name].src;
                script.onload = () => {
                    this.scripts[name].loaded = true;
                    console.log(`${name} Loaded.`);
                    resolve({ script: name, loaded: true, status: 'Loaded' });
                };
                script.onerror = (error) => resolve({ script: name, loaded: false, status: 'Loaded' });
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        });
    }
};
ScriptService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ScriptService);



/***/ }),

/***/ "./src/app/login/index.ts":
/*!********************************!*\
  !*** ./src/app/login/index.ts ***!
  \********************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });




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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");





let LoginComponent = class LoginComponent {
    constructor(formBuilder, route, router, authenticationService, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        // redirect to home if already logged in
        if (true) {
            this.router.navigate(['/']);
        }
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        if (this.authenticationService.login(this.f.username.value, this.f.password.value)) {
            this.router.navigate([this.returnUrl]);
        }
        else {
            this.alertService.error('Invalid user');
            this.loading = false;
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html") })
], LoginComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\devri\Documents\projects\bill-invoice\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map