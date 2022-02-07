import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducts } from './IProduct';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService : ProductService) { }

  product : IProducts| undefined;
  pageTitle: string = 'The product you choose is';
  errorMessage! : string; 

  ngOnInit(): void {
    const id = Number (this.route.snapshot.paramMap.get('id'));
    console.log('product id =' + id);
    if (id) {
      this.getProduct(id);
    }
  }
  onBack():void{
    this.router.navigate(['/products']);
  }

  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });
  }

}
