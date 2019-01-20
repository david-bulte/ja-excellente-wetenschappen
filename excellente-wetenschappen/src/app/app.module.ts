import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons/faQuoteLeft';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons/faQuoteRight';
import { CarouselModule } from 'ngx-bootstrap';
import { environment } from '../environments/environment';
import { ActuaPageComponent } from './actua/actua-page.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FactsAndFiguresPageComponent } from './facts-and-figures/facts-and-figures-page.component';
import { HomePageComponent } from './home/home-page.component';
import { ImplicitBiasPageComponent } from './implicit-bias/implicit-bias-page.component';
import { NavComponent } from './nav/nav.component';
import { LogoComponent } from './logo/logo.component';
import { LinksPageComponent } from './links/links-page.component';
import { CampagnePageComponent } from './campagne/campagne-page.component';
import { BiasPageComponent } from './testimonial/bias-page.component';
import { TestimonialFormComponent } from './testimonial/testimonial-form/testimonial-form.component';
import { TestimonialItemComponent } from './testimonial/testimonial-item/testimonial-item.component';
import { FooterComponent } from './footer/footer.component';
import { RECAPTCHA_URL, RecaptchaDirective } from './testimonial/recaptcha.directive';
import { ToolboxPageComponent } from './toolbox/toolbox-page.component';
import { InfoBoxComponent } from './components/info-box/info-box.component';
import { ActuaItemComponent } from './actua/actua-item/actua-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomePageComponent,
    LogoComponent,
    BiasPageComponent,
    LinksPageComponent,
    CampagnePageComponent,
    TestimonialFormComponent,
    TestimonialItemComponent,
    FooterComponent,
    RecaptchaDirective,
    ActuaPageComponent,
    ToolboxPageComponent,
    FactsAndFiguresPageComponent,
    ImplicitBiasPageComponent,
    InfoBoxComponent,
    ActuaItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot()
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireFunctionsModule
  ],
  // providers: [{provide: RECAPTCHA_URL, useValue: 'https://us-central1-excellente-wetenschappen.cloudfunctions.net/checkRecaptcha'}],
  providers: [{provide: RECAPTCHA_URL, useValue: '/checkRecaptcha'}],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    library.add(faCaretRight, faQuoteRight, faQuoteLeft);
  }

}
