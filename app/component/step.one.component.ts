import { Component, OnInit, OnDestroy } from '@angular/core';

import { BrocoService } from '../service/broco.service';

import { UserData } from '../service/user.data';
import { Product } from '../model/product';

@Component({
  selector: 'stepOne',
  templateUrl : 'app/views/ship-step-one.html',
  providers: [BrocoService]
})

export class StepOneComponent implements OnInit, OnDestroy { 
	
	/**
	  La liste des produits.		
	*/
	products: Product[];
	
	/**
	   L'objet model qui contient toutes les informations qui a saisi l'utilsiateur
	*/	
	userData = null;
	
	constructor(private brocoService: BrocoService) { }
		
  	getProducts() {
    	this.products = this.brocoService.getProducts();
  	}
  	
  	ngOnInit() {
    	this.getProducts();
    	this.userData = sessionStorage.getItem("user-data");
  	}
  	
	ngOnDestroy() {
	    console.log('ngOnDestroy');
	}
  	
  	
}