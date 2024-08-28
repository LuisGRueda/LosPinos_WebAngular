import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CrudAdminComponent } from './crud-admin/crud-admin.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PackagesComponent } from './packages/packages.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent},
    {path:'about',
    component:AboutComponent},
    {path:'packages',
    component:PackagesComponent},
    {path:'contact',
  component:ContactComponent},
  {path:'gallery',
component:GalleryComponent},
{path:'crud-admin',
component:CrudAdminComponent, canActivate:[AuthGuard]},
{path:'login',
component:LoginComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
