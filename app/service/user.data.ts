import { Address } from '../model/address';
import { Country } from '../model/country';

export class UserData {	
  
  shipper: Address = new Address("", new Country("", ""));
  receive: Address = new Address("", new Country("", ""));
  nbParcels:string = "";
  weight:string = "";
  total:number;	  
  
  constructor() {
  
  }
  
}
