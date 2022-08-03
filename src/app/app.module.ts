import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { CategoryModule } from './modules/category/category.module';
import { OrderModule } from './modules/order/order.module';
import { ProductModule } from './modules/product/product.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent, SidebarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    OrderModule,
    ProductModule,
    CategoryModule,
    CommonModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
