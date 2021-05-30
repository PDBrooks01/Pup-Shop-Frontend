import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServerComponent } from './server/server.component';
import { AppRoutingModule } from './app-routing.module';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '',redirectTo: '/home', pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
