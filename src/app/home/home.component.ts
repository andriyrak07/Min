import { Component, OnInit} from '@angular/core';
import { Product } from '../else/tamplate';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  kor: Product[] = [];

  public count: number = 0;

  constructor(private router: Router) {
    
  }

  ngOnInit(): void {

    for (let i = 0; i < localStorage.length; i++){
      let key = localStorage.key(i);
      this.kor.push(JSON.parse(localStorage.getItem(key)));
      this.count += this.kor[i].price; 
      this.count = Math.round(this.count * 100) / 100;    
    }   
  }
  
  delete(i: any, kor:Product, id:any) {
    localStorage.removeItem(id)
    this.count -= this.kor[i].price;
    this.count = Math.round(this.count * 100) / 100;   
    this.kor.splice(i, 1);
  }

  onSelect(selected: Product) {
    this.router.navigate(["product/child", { id: selected.id }]);
  }
}
