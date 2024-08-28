import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PackagesComponent } from './packages/packages.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule}from '@angular/common/http';
import { GalleryComponent } from './gallery/gallery.component';

import { CargarscripService } from './cargarscrip.service';
import { CrudAdminComponent } from './crud-admin/crud-admin.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PackagesComponent,
    ContactComponent,
    GalleryComponent,
    CrudAdminComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [
    CargarscripService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
