import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './home/products/products.component';
import { SignUpComponent } from './home/signup/signup.component';
import { LoginComponent } from './home/login/login.component';
import { ServerComponent } from './server/server.component';
import { AppRoutingModule } from './app-routing.module';
import { CartComponent } from './home/cart/cart.component';

// import { SignUpFormComponent } from "./signup/signup.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '',redirectTo: '/home', pathMatch:'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    HomeComponent,
    ProductsComponent,
    SignUpComponent,
    LoginComponent,
    CartComponent,
    // SignUpFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
