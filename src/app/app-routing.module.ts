import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { DetailsComponent } from './details/details.component';
import { ProductMainComponent } from './product-main/product-main.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  { path: "", redirectTo: "product", pathMatch: "full" },
  { path: "cart", component: CartComponent },
  { path: "home", component: HomeComponent },

  {
    path: "product", component: ProductMainComponent, // Шаблон компонента ProductHomeComponent содержит свой <router-outlet> 
    children: [                                             // для определения маршрутов и компонентов для этого <router-outlet> используется свойство children
      { path: "", component: ProductComponent},
      { path: ":id", component: DetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
