import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../else/product.service';
import { Product } from '../else/tamplate';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  product: Product | undefined;

  constructor(private router: Router,
      private activatedRoute: ActivatedRoute,
      private service: ProductService) { }

  ngOnInit() {
      this.activatedRoute.params.forEach((params: Params) => {
          let id = +params["id"]; 
          this.service
              .getProduct(id)  
              .subscribe(result => this.product = result);  
      });
  }

  goToProductList() {
      this.router.navigate(["/"]); 
  }

}
