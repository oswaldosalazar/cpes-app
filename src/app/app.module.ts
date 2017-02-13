import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Product1Component } from './components/product1/product1.component';
import { LoginComponent } from './components/login/login.component';
import { CreateComponent } from './components/create/create.component';

const appRoutes: Routes = [
  { path: 'product1', component: Product1Component },
  { path: 'login', component: LoginComponent },
  { path: 'create', component: CreateComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    Product1Component,
    LoginComponent,
    CreateComponent
  ],
  imports: [
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
