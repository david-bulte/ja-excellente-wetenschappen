import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActuaPageComponent } from './actua/actua-page.component';
import { AdminPageComponent } from './admin/admin-page.component';
import { CampagnePageComponent } from './campagne/campagne-page.component';
import { ContactPageComponent } from './contact/contact-page.component';
import { FactsAndFiguresPageComponent } from './facts-and-figures/facts-and-figures-page.component';
import { HomePageComponent } from './home/home-page.component';
import { ImplicitBiasPageComponent } from './implicit-bias/implicit-bias-page.component';
import { LinksPageComponent } from './links/links-page.component';
import { BiasPageComponent } from './testimonial/bias-page.component';
import { TestimonialFormComponent } from './testimonial/testimonial-form.component';
import { ToolboxPageComponent } from './toolbox/toolbox-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'implicit-bias',
    component: ImplicitBiasPageComponent
  },
  {
    path: 'facts-and-figures',
    component: FactsAndFiguresPageComponent
  },
  {
    path: 'bias-in-de-praktijk',
    component: BiasPageComponent
  },
  {
    path: 'bias-in-de-praktijk/add',
    component: TestimonialFormComponent
  },
  {
    path: 'toolbox',
    component: ToolboxPageComponent
  },
  {
    path: 'actua',
    component: ActuaPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: 'admin',
    component: AdminPageComponent
  },
  {
    path: 'campagne',
    component: CampagnePageComponent
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
