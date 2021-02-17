import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from './tamplate';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators"

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient) { }

    getProducts(): Observable<Product[]> {
        return this.http.get('https://fakestoreapi.com/products')
            .pipe(
                map(response => {
                    
                    let value = response as Product[];
                    let result: Product[] = [];
                    value.forEach(element => {
                        result.push(new Product(element.id, element.title, element.price, element.image, element.category));
                    });
                    return result;
                })
            );
    }

    getProduct(productId:number): Observable<Product> {
        return this.http.get(`https://fakestoreapi.com/products/${productId}`)
            .pipe(
                map(response => {
                    let value = response as Product;
                    return new Product(value.id, value.title, value.price, value.image, value.category)
                })
            );
    }

}
