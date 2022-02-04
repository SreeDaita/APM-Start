import { Component, OnInit } from "@angular/core";
import { IProducts } from "./IProduct";
import { ProductService } from "./product.service";

@Component({
    selector:'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css'],
    providers:[ProductService]
})
export class ProductListComponent implements OnInit{
    
  constructor(private _productService : ProductService){}

    ngOnInit(): void {
       this.products= this._productService.getProducts();
       this.filteredProducts=this._productService.getProducts();
    }
       pageTitle : string ='Product lists';
       imageWidth : number =50;
       imageMargin : number =2;
       showImage : boolean = false;
       private _listFilter :string ='';
       
       get listFilter ():string {
         return this._listFilter;
       }

       set listFilter(value :string) {
           this._listFilter=value;
           console.log('set value=', value);
           this.filteredProducts = this.filterProducts(value); // without this it wont work because out of domain
       }
       
       filteredProducts: IProducts[] = [];

       products :IProducts []= [];
          toogleImage() : void{
           this.showImage = !this.showImage;
        }

        filterProducts(filterBy:string): IProducts[] {
            filterBy = filterBy.toLocaleLowerCase();
            return this.products.filter((product)=>product.productName.toLocaleLowerCase().includes(filterBy));
        }

        thanksForRating(productName:string,message:string) : void{
           this.pageTitle = 'Thanks for rating '+ productName + ' the current rating for ' +productName + ' is '+  parseFloat(message);
        }
    }






