import { Injectable } from "@angular/core";
import { IProducts } from "./IProduct";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap} from "rxjs/operators"


@Injectable({
  providedIn :'root'
})
export class ProductService{
  constructor(private http : HttpClient){}
     private productUrl :string ="https://1b10345d-a10d-4f4c-b22a-1080bdb5b4af.mock.pstmn.io/products";
     getProducts() : Observable<IProducts[]>{
      return this.http.get<IProducts[]>(this.productUrl).pipe(
       tap((data) => console.log('All',JSON.stringify(data))),
       catchError(this.handleError)
       
      );
     }

     getProduct(id: number): Observable<IProducts | undefined> {
      return this.getProducts()
        .pipe(
          map((products: IProducts[]) => products.find(p => p.productId === id))
        );
    }

     handleError(err:HttpErrorResponse){
          return throwError(err.message);
          
     }
}


