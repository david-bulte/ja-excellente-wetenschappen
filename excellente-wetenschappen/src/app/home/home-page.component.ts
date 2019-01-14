import { transition, trigger, style, animate, state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { getDayOfYear } from 'date-fns';
import { filter, map } from 'rxjs/operators';
import { TestimonialService } from '../testimonial/testimonial.service';

@Component({
  selector: 'app-home',
  template: `


    <div class="container d-flex flex-row justify-content-center">
      <button class="btn btn-link mr-2" (click)="jump(welkom)">Welkom</button>
      <button class="btn btn-link mr-2" (click)="jump(schaar)">Schaar</button>
      <button class="btn btn-link mr-2" (click)="jump(activiteiten)">Activiteiten</button>
    </div>

    <div class="container">
      <!--<img src="http://www.igta5.com/images/trailer-2-gtav-logo.jpg" alt="GTA V" />-->
      <app-news class="ml-5 d-none d-sm-block"></app-news>

      <div class="d-flex flex-row justify-content-start align-items-baseline">
        <h1 class="display-4" #welkom>Welkom</h1>
        <button class="btn btn-link" (click)="jump()">(top)</button>
      </div>
      <p class="lead">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Sit amet mauris commodo quis imperdiet massa tincidunt nunc. Porttitor lacus luctus accumsan
        tortor
        posuere ac ut. Morbi blandit cursus risus at ultrices. Magna etiam tempor orci eu lobortis elementum nibh tellus
        molestie. Sit amet consectetur adipiscing elit pellentesque. Porta nibh venenatis cras sed. Ultricies leo
        integer
        malesuada nunc vel risus. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Adipiscing commodo
        elit
        at imperdiet dui accumsan. Dui nunc mattis enim ut tellus elementum. Integer enim neque volutpat ac tincidunt
        vitae semper quis lectus. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Risus sed vulputate odio
        ut enim. Ut morbi tincidunt augue interdum velit euismod in pellentesque.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Sit amet mauris commodo quis imperdiet massa tincidunt nunc. Porttitor lacus luctus accumsan
        tortor
        posuere ac ut. Morbi blandit cursus risus at ultrices. Magna etiam tempor orci eu lobortis elementum nibh tellus
        molestie. Sit amet consectetur adipiscing elit pellentesque. Porta nibh venenatis cras sed. Ultricies leo
        integer
        malesuada nunc vel risus. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Adipiscing commodo
        elit
        at imperdiet dui accumsan. Dui nunc mattis enim ut tellus elementum. Integer enim neque volutpat ac tincidunt
        vitae semper quis lectus. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Risus sed vulputate odio
        ut enim. Ut morbi tincidunt augue interdum velit euismod in pellentesque.
      </p>

      <carousel [interval]="5000">
        <slide *ngFor="let testimonial of testimonials$ | async;">

          <div class="w-100">
            <app-testimonial-item [content]="testimonial.content"></app-testimonial-item>
          </div>

          <!--<div class="carousel-caption">-->
            <!--<h4>Slide {{index}}</h4>-->
            <!--<p>{{slide.text}}</p>-->
          <!--</div>-->
        </slide>
      </carousel>
      
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Sit amet mauris commodo quis imperdiet massa tincidunt nunc. Porttitor lacus luctus accumsan
          tortor
          posuere ac ut. Morbi blandit cursus risus at ultrices. Magna etiam tempor orci eu lobortis elementum nibh
          tellus
          molestie. Sit amet consectetur adipiscing elit pellentesque. Porta nibh venenatis cras sed. Ultricies leo
          <img src="assets/cartoons/Getuigenis 1.png" class="mr-5 mt-5 mb-5 w-25" style="float: left;"/>
          integer
          malesuada nunc vel risus. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Adipiscing commodo
          elit
          at imperdiet dui accumsan. Dui nunc mattis enim ut tellus elementum. Integer enim neque volutpat ac tincidunt
          vitae semper quis lectus. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Risus sed vulputate
          odio
          ut enim. Ut morbi tincidunt augue interdum velit euismod in pellentesque.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Sit amet mauris commodo quis imperdiet massa tincidunt nunc. Porttitor lacus luctus accumsan
          tortor
          posuere ac ut. Morbi blandit cursus risus at ultrices. Magna etiam tempor orci eu lobortis elementum nibh
          tellus
          molestie. Sit amet consectetur adipiscing elit pellentesque. Porta nibh venenatis cras sed. Ultricies leo
          integer
          malesuada nunc vel risus. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Adipiscing commodo
          elit
          at imperdiet dui accumsan. Dui nunc mattis enim ut tellus elementum. Integer enim neque volutpat ac tincidunt
          vitae semper quis lectus. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Risus sed vulputate
          odio
          ut enim. Ut morbi tincidunt augue interdum velit euismod in pellentesque.
        </p>
      </div>

      <br style="clear: both;"/>

      <app-testimonial-item [content]="(testimonials$ | async)?.second?.content"></app-testimonial-item>

      <div class="d-flex flex-row justify-content-start align-items-baseline">
        <h1 class="display-4" #schaar>Schaar</h1>
        <button class="btn btn-link" (click)="jump()">(top)</button>
      </div>

      <p>
        "Impliciete bias" betekent dat mensen niet neutraal zijn in hun oordeel en gedrag. Ze hebben daarentegen op
        ervaring gebaseerde associaties en voorkeuren (of aversies), zonder zich daarvan bewust te zijn. Het gaat
        dus niet om een expliciete vooringenomenheid, maar om een bekend psychologisch mechanisme dat ons allemaal
        beïnvloedt.
      </p>

      <img class="w-100" src="assets/img/scissor-graphs-2011.jpg"/>

      <app-logo
        class="d-none d-xl-block"
        [src]="'assets/img/Baanbrekende wetenschap.svg'"
        [align]="'right'"></app-logo>


      <app-logo
        class="d-none d-xl-block"
        [src]="'assets/img/Creatieve wetenschap.svg'"
        [align]="'left'"></app-logo>

      <!--<app-logo [src]="'assets/img/Frisse wetenschap.svg'"-->
      <!--[align]="'right'"></app-logo>-->

      <div class="d-flex flex-row justify-content-start align-items-baseline">
        <h1 class="display-4" #activiteiten>Activiteiten</h1>
        <button class="btn btn-link" (click)="jump()">(top)</button>
      </div>

    </div>

    <div class="container">

      <div class="row">
        <app-news class="col col-lg-4 col-md-6 col-xs-1"></app-news>
        <app-news class="col col-lg-4 col-md-6 col-xs-1"></app-news>
        <app-news class="col col-lg-4 col-md-6 col-xs-1"></app-news>
        <app-news class="col col-lg-4 col-md-6 col-xs-1"></app-news>
      </div>

      <h2>voorbij</h2>

      <div class="row" style="filter: grayscale(100%)">
        <app-news class="col col-lg-4 col-md-6 col-xs-1"></app-news>
        <app-news class="col col-lg-4 col-md-6 col-xs-1"></app-news>
        <app-news class="col col-lg-4 col-md-6 col-xs-1"></app-news>
        <app-news class="col col-lg-4 col-md-6 col-xs-1"></app-news>
      </div>

    </div>

  `,
  styles: [`
    div app-news {
      width: 240px;
      float: right;
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
