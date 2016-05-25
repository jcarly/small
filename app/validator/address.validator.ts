import { Control } from "@angular/common";

interface ValidationResult {
 	[key:string]:boolean;
}

export class AddressValidator {
 
 	static isZipCode(control: Control): ValidationResult {  
		var valid = /^\d{5}$/.test(control.value);
	    if(valid){
	        return null;
	    }
	    return {"invalidZipCode":true};
 	}
 
}