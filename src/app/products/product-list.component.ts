import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProducts } from "./IProduct";
import { ProductService } from "./product.service";

@Component({
    selector:'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css'],
    providers:[ProductService]
})
export class ProductListComponent implements OnInit,OnDestroy{
    
  constructor(private _productService : ProductService){}
  ngOnDestroy(): void {
      this.sub.unsubscribe();
  }
    
    ngOnInit(): void {
      this.sub = this._productService.getProducts().subscribe(
         {
           next: pro => {
             this.products = pro;
             this.filteredProducts=this.products;
           },
           error: err=>this.errorMessage=err
         }
       );
       //this.filteredProducts=this.products;
    }
    // this need to commit to working clone then merge to Main gg
       pageTitle : string ='Product lists';
       imageWidth : number =50;
       imageMargin : number =2;
       showImage : boolean = false;
       private _listFilter :string ='';
       errorMessage :string ='';
       sub! : Subscription
       
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
           this.pageTitle = 'Thanks for rating '+ productName + ' the rating for ' +productName + ' is '+  parseFloat(message);
        }
    }






