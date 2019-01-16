import { Component, OnInit } from '@angular/core';
import { getDayOfYear } from 'date-fns';
import { filter, map } from 'rxjs/operators';
import { TestimonialService } from '../testimonial/testimonial.service';

@Component({
  selector: 'app-home',
  template: `

    <div class="d-flex flex-column flex-md-row mt-5">
      <app-info-box [title]="'Implicit Bias'"
                    [link]="'/implicit-bias'">
        <div class="info-box__cartoon">
          <img src="assets/undraw/science.svg">
        </div>
        <div class="info-box__description">
          Wat is Implicit Bias? Hoe herken je Implicit Bias?
        </div>
      </app-info-box>

      <app-info-box [title]="'Facts and Figures'"
                    [link]="'/facts-and-figures'">
        <div class="info-box__cartoon">
          <img src="assets/undraw/growing.svg">
        </div>
        <div class="info-box__description">
          De evolutie naar minder gendergelijkheid in academie gaat nog steeds traag. Wat zijn de cijfers?
        </div>
      </app-info-box>

      <app-info-box [title]="'Bias in de praktijk'" 
                    [link]="'/bias-in-de-praktijk'">
        <div class="info-box__cartoon">
          <img src="assets/undraw/programmer_imem.svg">
        </div>
        <div class="info-box__description">
          Lees hier getuigenissen van gendergerelateerde uitdagingen en opportuniteiten. Zelf iets te melden? Dat kan
          ook hier.
        </div>
      </app-info-box>

      <app-info-box [title]="'Toolbox'" 
                    [link]="'/toolbox'">
        <div class="info-box__cartoon">
          <img src="assets/undraw/teaching.svg"></div>
        <div class="info-box__description">
          Lees hier een aantal suggesties wat je zelf kan doen om gender bias tegen te gaan.
        </div>
      </app-info-box>


      <!--<carousel [interval]="5000">-->
      <!--<slide *ngFor="let testimonial of testimonials$ | async;">-->

      <!--<div class="w-100">-->
      <!--<app-testimonial-item [content]="testimonial.content"></app-testimonial-item>-->
      <!--</div>-->

      <!--&lt;!&ndash;<div class="carousel-caption">&ndash;&gt;-->
      <!--&lt;!&ndash;<h4>Slide {{index}}</h4>&ndash;&gt;-->
      <!--&lt;!&ndash;<p>{{slide.text}}</p>&ndash;&gt;-->
      <!--&lt;!&ndash;</div>&ndash;&gt;-->
      <!--</slide>-->
      <!--</carousel>-->


      <!--<br style="clear: both;"/>-->

      <!--<app-testimonial-item [content]="(testimonials$ | async)?.second?.content"></app-testimonial-item>-->

      <!--<div class="d-flex flex-row justify-content-start align-items-baseline">-->
      <!--<h1 class="display-4" #schaar>Schaar</h1>-->
      <!--<button class="btn btn-link" (click)="jump()">(top)</button>-->
      <!--</div>-->

      <!--<p>-->
      <!--"Impliciete bias" betekent dat mensen niet neutraal zijn in hun oordeel en gedrag. Ze hebben daarentegen op-->
      <!--ervaring gebaseerde associaties en voorkeuren (of aversies), zonder zich daarvan bewust te zijn. Het gaat-->
      <!--dus niet om een expliciete vooringenomenheid, maar om een bekend psychologisch mechanisme dat ons allemaal-->
      <!--beïnvloedt.-->
      <!--</p>-->

      <!--<img class="w-100" src="assets/img/scissor-graphs-2011.jpg"/>-->

      <!--<app-logo-->
      <!--class="d-none d-xl-block"-->
      <!--[src]="'assets/img/Baanbrekende wetenschap.svg'"-->
      <!--[align]="'right'"></app-logo>-->


      <!--<app-logo-->
      <!--class="d-none d-xl-block"-->
      <!--[src]="'assets/img/Creatieve wetenschap.svg'"-->
      <!--[align]="'left'"></app-logo>-->

      <!--&lt;!&ndash;<app-logo [src]="'assets/img/Frisse wetenschap.svg'"&ndash;&gt;-->
      <!--&lt;!&ndash;[align]="'right'"></app-logo>&ndash;&gt;-->

      <!--<div class="d-flex flex-row justify-content-start align-items-baseline">-->
      <!--<h1 class="display-4" #activiteiten>Activiteiten</h1>-->
      <!--<button class="btn btn-link" (click)="jump()">(top)</button>-->
      <!--</div>-->

      <!--</div>-->

      <!--<div class="container">-->

      <!--<div class="row">-->
      <!--<app-news class="col col-lg-4 col-md-6 col-xs-1"></app-news>-->
      <!--<app-news class="col col-lg-4 col-md-6 col-xs-1"></app-news>-->
      <!--<app-news class="col col-lg-4 col-md-6 col-xs-1"></app-news>-->
      <!--<app-news class="col col-lg-4 col-md-6 col-xs-1"></app-news>-->
      <!--</div>-->

      <!--<h2>voorbij</h2>-->

      <!--<div class="row" style="filter: grayscale(100%)">-->
      <!--<app-news class="col col-lg-4 col-md-6 col-xs-1"></app-news>-->
      <!--<app-news class="col col-lg-4 col-md-6 col-xs-1"></app-news>-->
      <!--<app-news class="col col-lg-4 col-md-6 col-xs-1"></app-news>-->
      <!--<app-news class="col col-lg-4 col-md-6 col-xs-1"></app-news>-->
      <!--</div>-->

      <!--</div>-->

  `,
  styles: [`
    div app-news {
      width: 240px;
      float: right;
    }

    app-info-box {
      marging-bottom: 30px;
    }
    
    .info-box__cartoon img {
      max-height: 150px;
    }
    
  `]
})
export class HomePageComponent implements OnInit {

  testimonials$ = this.testimonialService.getTestimonials().pipe(
    filter(testimonials => testimonials && testimonials.length > 0),
    map(testimonials => {
      // elke dag 2 verse quotes
      const date = getDayOfYear(new Date());
      const idx1 = date % testimonials.length
      const idx2 = (date + 2) % testimonials.length
      // return {first: testimonials[idx1], second: testimonials[idx2]};
      return [testimonials[idx1], testimonials[idx2]];
    })
  );

  constructor(private testimonialService: TestimonialService) {
  }

  ngOnInit() {
    this.testimonialService.load();
  }

  jump(target?) {
    const top = target ? target.getBoundingClientRect().top : 0;
    window.scrollTo({top, behavior: 'smooth'});
  }
}
