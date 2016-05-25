import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators } from '@angular/common';
import {Router} from '@angular/router-deprecated';

import { ShipService } from '../service/ship.service';
import { AddressValidator } from '../validator/address.validator';
import { UserData } from '../service/user.data';
import { Country } from '../model/country';

@Component({
  selector: 'address',
  templateUrl : 'app/views/simple-address-form.html',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
  providers: [ShipService]
})

export class AddressComponent implements OnInit { 
	
	/**
	  La liste des pays de destination.		
	*/
	countriesDest: Country[];	
	
	/**
	  La liste des pays d'orgine.		
	*/	
	countriesOrig: Country[];		
	
	/**
	  Le formulaire d'addresse
	*/
	addressForm: ControlGroup;
	
	/**
	   L'objet model qui contient toutes les informations qui a saisi l'utilsiateur
	*/	
	userData = null;
	
	/**
		Flag qui permet à cliquer sur le bouton 'submit'
	*/
	private submitted: boolean = false;
	
	constructor(fb: FormBuilder, private shipService: ShipService, private router: Router) { 
	
		this.addressForm = fb.group({  
      		'shipperZipCode': ['', Validators.compose([Validators.required, AddressValidator.isZipCode])],
      		'receiveZipCode': ['', Validators.required],
      		'shipperCountry': [new Country("",""), Validators.required],
      		'receiveCountry': [new Country("",""), Validators.required], 
      		'weight': ['', Validators.required],
      		'nbParcels': ['', Validators.required]
    	});  
	}
	
	getCountriesDest() {
    	this.countriesDest = this.shipService.getCountriesDest();
  	}
  	
  	getCountriesOrig() {
    	this.countriesOrig = this.shipService.getCountriesOrig();
  	}
  	
  	ngOnInit() {
    	this.getCountriesDest();
    	this.getCountriesOrig();
    	this.userData = new UserData();
  	}
  	  	
  	onSubmit(valueForm: any): void {
  	
  		this.submitted = true;
  		 	    
  		if (this.addressForm.valid) {
  			console.log('you submitted value: ', this.addressForm);
			console.log('you submitted value: ', valueForm.shipperZipCode);
   			console.log('you submitted value: ', this.userData.shipper.country.label);   			
			sessionStorage.setItem("user-data", this.userData);
			//this.router.navigateByUrl('/step-one');
			this.router.navigate(['StepOne']);			  			
  		} 
  	}

}