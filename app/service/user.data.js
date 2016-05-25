"use strict";
var address_1 = require('../model/address');
var country_1 = require('../model/country');
var UserData = (function () {
    function UserData() {
        this.shipper = new address_1.Address("", new country_1.Country("", ""));
        this.receive = new address_1.Address("", new country_1.Country("", ""));
        this.nbParcels = "";
        this.weight = "";
    }
    return UserData;
}());
exports.UserData = UserData;
//# sourceMappingURL=user.data.js.map