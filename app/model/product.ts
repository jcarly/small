export class Product {

  code: string;
  label: string;
  detail: string;
  price: string;
  
  constructor(code: string, label: string, detail:string, price:string) {
       this.code = code;
       this.label = label;
       this.detail = detail;
       this.price = price;
  }; 
}