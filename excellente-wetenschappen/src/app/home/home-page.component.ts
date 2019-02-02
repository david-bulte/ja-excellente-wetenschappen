import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `

    <div class="d-flex flex-column flex-md-row mt-0 mt-md-5">
      <app-info-box [title]="'implicit bias'"
                    [link]="'/implicit-bias'"
                    class="mb-4 mb-md-0">
        <div class="info-box__cartoon">
          <img src="assets/undraw/science.svg">
        </div>
        <div class="info-box__description">
          Wat is implicit bias? Hoe herken je implicit bias?
        </div>
      </app-info-box>

      <app-info-box [title]="'Facts and Figures'"
                    [link]="'/facts-and-figures'"
                    class="mb-4 mb-md-0">
        <div class="info-box__cartoon">
          <img src="assets/undraw/growing.svg">
        </div>
        <div class="info-box__description">
          De evolutie naar meer gendergelijkheid in academia gaat nog steeds traag. Wat zijn de cijfers?
        </div>
      </app-info-box>

      <app-info-box [title]="'Bias in de praktijk'" 
                    [link]="'/bias-in-de-praktijk'"
                    class="mb-4 mb-md-0">
        <div class="info-box__cartoon">
          <img src="assets/undraw/programmer_imem.svg">
        </div>
        <div class="info-box__description">
          Lees hier getuigenissen over gendergerelateerde uitdagingen en opportuniteiten. Zelf iets te melden? Dat kan!
        </div>
      </app-info-box>

      <app-info-box [title]="'Toolbox'" 
                    [link]="'/toolbox'"
                    class="mb-4 mb-md-0">
        <div class="info-box__cartoon">
          <img src="assets/undraw/teaching.svg"></div>
        <div class="info-box__description">
          Wat kan je zelf doen om gender bias tegen te gaan?
        </div>
      </app-info-box>

    </div>
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
      <!--"implicit bias" betekent dat mensen niet neutraal zijn in hun oordeel en gedrag. Ze hebben daarentegen op-->
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

  constructor() {
  }

  ngOnInit() {
  }

  jump(target?) {
    const top = target ? target.getBoundingClientRect().top : 0;
    window.scrollTo({top, behavior: 'smooth'});
  }
}
