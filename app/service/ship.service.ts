import { Injectable } from '@angular/core';

import { Country } from '../model/country';
import { COUNTRIES_DEST } from './mock-countries';
import { COUNTRIES_ORIGINE } from './mock-countries';

@Injectable()
export class ShipService {

	getCountriesDest() {
    	return COUNTRIES_DEST;
  	}
  	
  	getCountriesOrig() {
    	return COUNTRIES_ORIGINE;
  	}

}