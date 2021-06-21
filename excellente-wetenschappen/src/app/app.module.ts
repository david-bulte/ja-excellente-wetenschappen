import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons/faCaretLeft';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight';
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons/faCloudDownloadAlt';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons/faQuoteLeft';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons/faQuoteRight';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ModalModule } from 'ngx-bootstrap/modal';
import { environment } from '../environments/environment';
import { ActuaItemComponent } from './actua/actua-item/actua-item.component';
import { ActuaPageComponent } from './actua/actua-page.component';
import { AdminPageComponent } from './admin/admin-page.component';
import { TestimonialFormItemComponent } from './admin/testimonial-form-item.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CampagnePageComponent } from './campagne/campagne-page.component';
import { CharterComponent } from './charter/charter.component';
import { InfoBoxComponent } from './components/info-box/info-box.component';
import { ContactPageComponent } from './contact/contact-page.component';
import { CovidAppComponent } from './covid/covid-app/covid-app.component';
import { CovidLinksPageComponent } from './covid/covid-links/covid-links-page.component';
import { CovidNavComponent } from './covid/covid-nav/covid-nav.component';
import { CovidFactsAndFiguresPageComponent } from './covid/facts-and-figures/covid-facts-and-figures-page.component';
import { CovidHomePageComponent } from './covid/home/covid-home-page.component';
import { CovidToolboxPageComponent } from './covid/toolbox/covid-toolbox-page.component';
import { FactsAndFiguresPageComponent } from './facts-and-figures/facts-and-figures-page.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home/home-page.component';
import { ImplicitBiasPageComponent } from './implicit-bias/implicit-bias-page.component';
import { LandingComponent } from './landing/landing.component';
import { LinksPageComponent } from './links/links-page.component';
import { LogoComponent } from './logo/logo.component';
import { NavComponent } from './nav/nav.component';
import { OldAppComponent } from './old/old-app/old-app.component';
import { BiasPageComponent } from './testimonial/bias-page.component';
import { RECAPTCHA_URL, RecaptchaDirective } from './testimonial/recaptcha.directive';
import { TestimonialFormComponent } from './testimonial/testimonial-form.component';
import { TestimonialItemComponent } from './testimonial/testimonial-item.component';
import { ToolboxPageComponent } from './toolbox/toolbox-page.component';
import { SummaryInEnglishComponent } from './covid/summary-in-english/summary-in-english.component';
import { VlaamseUniversiteitenComponent } from './covid/vlaamse-universiteiten/vlaamse-universiteiten.component';

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
    ActuaItemComponent,
    AdminPageComponent,
    TestimonialFormItemComponent,
    ContactPageComponent,
    LandingComponent,
    CovidAppComponent,
    CovidNavComponent,
    OldAppComponent,
    CovidFactsAndFiguresPageComponent,
    CovidHomePageComponent,
    CovidToolboxPageComponent,
    CovidLinksPageComponent,
    CharterComponent,
    SummaryInEnglishComponent,
    VlaamseUniversiteitenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ModalModule.forRoot(),
    ScrollToModule.forRoot()
  ],
  providers: [{provide: RECAPTCHA_URL, useValue: 'https://us-central1-excellente-wetenschappen.cloudfunctions.net/checkRecaptcha'}],
  entryComponents: [TestimonialFormItemComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(library: FaIconLibrary) {
    library.addIcons(faCaretLeft, faCaretRight, faQuoteRight, faQuoteLeft, faCloudDownloadAlt);
  }

}
