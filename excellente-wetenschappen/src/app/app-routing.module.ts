import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActuaPageComponent } from './actua/actua-page.component';
import { AdminPageComponent } from './admin/admin-page.component';
import { CampagnePageComponent } from './campagne/campagne-page.component';
import { CharterComponent } from './charter/charter.component';
import { ContactPageComponent } from './contact/contact-page.component';
import { CovidAppComponent } from './covid/covid-app/covid-app.component';
import { CovidLinksPageComponent } from './covid/covid-links/covid-links-page.component';
import { CovidFactsAndFiguresPageComponent } from './covid/facts-and-figures/covid-facts-and-figures-page.component';
import { CovidHomePageComponent } from './covid/home/covid-home-page.component';
import { CovidToolboxPageComponent } from './covid/toolbox/covid-toolbox-page.component';
import { FactsAndFiguresPageComponent } from './facts-and-figures/facts-and-figures-page.component';
import { HomePageComponent } from './home/home-page.component';
import { ImplicitBiasPageComponent } from './implicit-bias/implicit-bias-page.component';
import { LandingComponent } from './landing/landing.component';
import { LinksPageComponent } from './links/links-page.component';
import { OldAppComponent } from './old/old-app/old-app.component';
import { BiasPageComponent } from './testimonial/bias-page.component';
import { TestimonialFormComponent } from './testimonial/testimonial-form.component';
import { ToolboxPageComponent } from './toolbox/toolbox-page.component';

const routes: Routes = [
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'implicit-gender',
    component: OldAppComponent,
    children: [
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
        path: 'charter',
        component: CharterComponent
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
    ]
  },
  {
    path: 'covid',
    component: CovidAppComponent,
    children: [
      {
        path: 'facts-and-figures',
        component: CovidFactsAndFiguresPageComponent
      },
      {
        path: 'links',
        component: CovidLinksPageComponent
      },
      {
        path: 'toolbox',
        component: CovidToolboxPageComponent
      },
      {
        path: 'contact',
        component: ContactPageComponent
      },
      {
        path: 'home',
        component: CovidHomePageComponent
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ],
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
