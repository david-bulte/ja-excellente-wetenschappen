import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharterPageComponent } from './charter/charter-page/charter-page.component';
import {HomeComponent} from './home/home.component';
import { LinksPageComponent } from './links/links-page/links-page.component';
import { TestimonialsPageComponent } from './testimonial/testimonials-page/testimonials-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'testimonials',
    component: TestimonialsPageComponent
  },
  {
    path: 'charter',
    component: CharterPageComponent
  },
  {
    path: 'links',
    component: LinksPageComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
