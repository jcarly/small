"use strict";
var AddressValidator = (function () {
    function AddressValidator() {
    }
    AddressValidator.isZipCode = function (control) {
        var valid = /^\d{5}$/.test(control.value);
        if (valid) {
            return null;
        }
        return { "invalidZipCode": true };
    };
    return AddressValidator;
}());
exports.AddressValidator = AddressValidator;
//# sourceMappingURL=address.validator.js.map