import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../else/carts.tamplate';
import { CartsService } from '../else/carts.service';

@Component({
    selector: 'app-login',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    carts: Cart[] = [];
    tempProduct: Cart[] = [];

    constructor(private router: Router, private phraseService: CartsService) {}

    ngOnInit() {
        this.phraseService.getCarts()   
            .subscribe(
                product => {
                    this.carts = product;
                    this.tempProduct = this.carts;                   
                }
            );
    }
      
    // onSelect(selected: Cart) {
    //     this.router.navigate(["product/child", { id: selected.id }]);
    // }
}
