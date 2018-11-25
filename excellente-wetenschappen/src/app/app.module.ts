import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons/faQuoteLeft';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons/faQuoteRight';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { CartoonComponent } from './cartoon/cartoon.component';
import { LogoComponent } from './logo/logo.component';
import { NewsComponent } from './news/news.component';
import { TestimonialsPageComponent } from './testimonial/testimonials-page/testimonials-page.component';
import { LinksPageComponent } from './links/links-page/links-page.component';
import { CharterPageComponent } from './charter/charter-page/charter-page.component';
import { TestimonialFormComponent } from './testimonial/testimonial-form/testimonial-form.component';
import { TestimonialItemComponent } from './testimonial/testimonial-item/testimonial-item.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CartoonComponent,
    LogoComponent,
    NewsComponent,
    TestimonialsPageComponent,
    LinksPageComponent,
    CharterPageComponent,
    TestimonialFormComponent,
    TestimonialItemComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    library.add(faQuoteRight, faQuoteLeft);
  }

}
