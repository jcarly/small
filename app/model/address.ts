import { Country } from './country';

export class Address {
  zipCode: string;
  country: Country;
  
  constructor(zipCode: string, country : Country) {
       this.zipCode = zipCode;
       this.country = country;
  };  
}