"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var common_1 = require('@angular/common');
var address_component_1 = require('./address.component');
var step_one_component_1 = require('./step.one.component');
var SmallComponent = (function () {
    function SmallComponent(router, location) {
        //location.go('/home');
    }
    SmallComponent = __decorate([
        core_1.Component({
            selector: 'small-app',
            template: '<router-outlet></router-outlet>',
            directives: [router_deprecated_1.RouterOutlet, router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [address_component_1.AddressComponent, step_one_component_1.StepOneComponent]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/home', component: address_component_1.AddressComponent, name: 'Home', useAsDefault: true },
            { path: '/', redirectTo: ['Home'] },
            { path: '/step-one', component: step_one_component_1.StepOneComponent, name: 'StepOne' }
        ]), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, common_1.Location])
    ], SmallComponent);
    return SmallComponent;
}());
exports.SmallComponent = SmallComponent;
//# sourceMappingURL=small.component.js.map