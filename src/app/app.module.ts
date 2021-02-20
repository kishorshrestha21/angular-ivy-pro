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
const appRoutes:Routes =[
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path: 'gallery', component:GalleryComponent},
  {path:'contact', component:ContactComponent}
]
@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, NavComponent, ContactComponent, HomeComponent, GalleryComponent ],
  bootstrap:    [ AppComponent ],
  exports:[RouterModule],
  providers: [HeaderServiceService, MyGalleryModule]
})
export class AppModule { }

