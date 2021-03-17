import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: 'products', component: ProductComponent},
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: 'products/category/:categoryId', component: ProductComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryComponent,
    ProductComponent,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
