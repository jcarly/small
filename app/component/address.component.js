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
var common_1 = require('@angular/common');
var router_deprecated_1 = require('@angular/router-deprecated');
var ship_service_1 = require('../service/ship.service');
var address_validator_1 = require('../validator/address.validator');
var user_data_1 = require('../service/user.data');
var country_1 = require('../model/country');
var AddressComponent = (function () {
    function AddressComponent(fb, shipService, router) {
        this.shipService = shipService;
        this.router = router;
        /**
           L'objet model qui contient toutes les informations qui a saisi l'utilsiateur
        */
        this.userData = null;
        /**
            Flag qui permet à cliquer sur le bouton 'submit'
        */
        this.submitted = false;
        this.addressForm = fb.group({
            'shipperZipCode': ['', common_1.Validators.compose([common_1.Validators.required, address_validator_1.AddressValidator.isZipCode])],
            'receiveZipCode': ['', common_1.Validators.required],
            'shipperCountry': [new country_1.Country("", ""), common_1.Validators.required],
            'receiveCountry': [new country_1.Country("", ""), common_1.Validators.required],
            'weight': ['', common_1.Validators.required],
            'nbParcels': ['', common_1.Validators.required]
        });
    }
    AddressComponent.prototype.getCountriesDest = function () {
        this.countriesDest = this.shipService.getCountriesDest();
    };
    AddressComponent.prototype.getCountriesOrig = function () {
        this.countriesOrig = this.shipService.getCountriesOrig();
    };
    AddressComponent.prototype.ngOnInit = function () {
        this.getCountriesDest();
        this.getCountriesOrig();
        this.userData = new user_data_1.UserData();
    };
    AddressComponent.prototype.onSubmit = function (valueForm) {
        this.submitted = true;
        if (this.addressForm.valid) {
            console.log('you submitted value: ', this.addressForm);
            console.log('you submitted value: ', valueForm.shipperZipCode);
            console.log('you submitted value: ', this.userData.shipper.country.label);
            sessionStorage.setItem("user-data", this.userData);
            //this.router.navigateByUrl('/step-one');
            this.router.navigate(['StepOne']);
        }
    };
    AddressComponent = __decorate([
        core_1.Component({
            selector: 'address',
            templateUrl: 'app/views/simple-address-form.html',
            directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
            providers: [ship_service_1.ShipService]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, ship_service_1.ShipService, router_deprecated_1.Router])
    ], AddressComponent);
    return AddressComponent;
}());
exports.AddressComponent = AddressComponent;
//# sourceMappingURL=address.component.js.map