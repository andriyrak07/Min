import { Component, OnInit} from '@angular/core';
import { Product } from '../else/tamplate';
import { Router } from '@angular/router';
import { ProductService } from '../else/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  tempProduct: Product[] = [];
  optCategory?: string;
  kor: Product[] = [];

  constructor(private router: Router, private phraseService: ProductService) {}

    ngOnInit() {
      this.phraseService.getProducts()   
            .subscribe(
              products => {
                this.products = products;
                this.tempProduct = this.products;
              }
            ); 
    }

    onSelect(selected: Product) {
        this.router.navigate(["product/child", { id: selected.id }]);
    }

    start($event: string): void {
      if ($event === 'Category') {
        this.products = this.tempProduct;
      } else {
        this.products = this.tempProduct.filter(word => word.category === $event);
      }
    }
    add(id:any, product:any){
      localStorage.setItem(id, JSON.stringify(product));
    }   
}
