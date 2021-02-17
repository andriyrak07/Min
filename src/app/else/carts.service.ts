import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Cart } from './carts.tamplate';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private http: HttpClient) { }

    getCarts(): Observable<Cart[]> {
        return this.http.get('https://fakestoreapi.com/carts')
            .pipe(
                map(response => {
                    let value = response as Cart[];
                    let result: Cart[] = [];
                    value.forEach(element => {
                        result.push(new Cart(element.id, element.userId, element.date, element.products));
                    });
                    return result;
                })
            );
    }
}
