import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './Pages/SharedComponents/site-header/site-header.component';
import { SiteFooterComponent } from './Pages/SharedComponents/site-footer/site-footer.component';
import { IndexComponent } from './Pages/index/index.component';
import { SliderComponent } from './Pages/index/slider/slider.component';
import { SpecialProductsComponent } from './Pages/index/special-products/special-products.component';
import { NewProductsComponent } from './Pages/index/new-products/new-products.component';
import { PopularProductsComponent } from './Pages/index/popular-products/popular-products.component';
import { LastestNewsComponent } from './Pages/index/lastest-news/lastest-news.component';
import { BrandsComponent } from './Pages/index/brands/brands.component';
import { SliderService } from './services/slider.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { NarvanInterceptor } from './Utilities/NarvanInterceptor';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import {CookieService} from 'ngx-cookie-service';
import { ActiveAccountComponent } from './pages/active-account/active-account.component';
import { ProductsComponent } from './pages/products/products.component'
import { ProductService } from './services/product.service';
import { SingleProductComponent } from './pages/sharedComponents/single-product/single-product.component';
import { NgxLoadingModule } from 'ngx-loading';


@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    IndexComponent,
    SliderComponent,
    SpecialProductsComponent,
    NewProductsComponent,
    PopularProductsComponent,
    LastestNewsComponent,
    BrandsComponent,
    AboutUsComponent,
    ContactUsComponent,
    LoginComponent,
    RegisterComponent,
    ActiveAccountComponent,
    ProductsComponent,
    SingleProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
    NgxLoadingModule.forRoot({
      fullScreenBackdrop:true,
    })
    
  ],
  providers: [
  SliderService,
  {provide:HTTP_INTERCEPTORS,useClass:NarvanInterceptor,multi:true},
  CookieService,
  ProductService

],
  bootstrap: [AppComponent]
})
export class AppModule { }
