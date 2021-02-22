import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderServiceService } from './header-service.service';
import { GalleryComponent } from './gallery/gallery.component';
import { MyGalleryModule } from './my-gallery/my-gallery.module';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { ProductComponent } from './product/product.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { LoninComponent } from './lonin/lonin.component';
import { AboutComponent } from './about/about.component';
const appRoutes:Routes =[
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path: 'gallery', component:GalleryComponent},
  {path:'gallery/:id',component:GalleryItemComponent},
  {path:'product',component:ProductComponent},
  {path:'product/:id', component:ProductItemComponent},
  {path:'login', component:LoninComponent},
  {path:'contact', component:ContactComponent}
]
@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, NavComponent, ContactComponent, HomeComponent, GalleryComponent, GalleryItemComponent, ProductComponent, ProductItemComponent, LoninComponent, AboutComponent ],
  bootstrap:    [ AppComponent ],
  exports:[RouterModule],
  providers: [HeaderServiceService, MyGalleryModule]
})
export class AppModule { }

