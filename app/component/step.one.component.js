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
var broco_service_1 = require('../service/broco.service');
var StepOneComponent = (function () {
    function StepOneComponent(brocoService) {
        this.brocoService = brocoService;
        /**
           L'objet model qui contient toutes les informations qui a saisi l'utilsiateur
        */
        this.userData = null;
    }
    StepOneComponent.prototype.getProducts = function () {
        this.products = this.brocoService.getProducts();
    };
    StepOneComponent.prototype.ngOnInit = function () {
        this.getProducts();
        this.userData = sessionStorage.getItem("user-data");
    };
    StepOneComponent.prototype.ngOnDestroy = function () {
        console.log('ngOnDestroy');
    };
    StepOneComponent = __decorate([
        core_1.Component({
            selector: 'stepOne',
            templateUrl: 'app/views/ship-step-one.html',
            providers: [broco_service_1.BrocoService]
        }), 
        __metadata('design:paramtypes', [broco_service_1.BrocoService])
    ], StepOneComponent);
    return StepOneComponent;
}());
exports.StepOneComponent = StepOneComponent;
//# sourceMappingURL=step.one.component.js.map