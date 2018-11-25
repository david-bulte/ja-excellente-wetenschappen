import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial-item',
  template: `


    <blockquote class="blockquote position-relative d-inline">

      <div class="mb-0 font-italic d-inline">
        <fa-icon [icon]="'quote-left'"
                 class="text-primary testimonial__quote testimonial__quote__start"></fa-icon>
        <div class="d-inline ml-3 mr-3" [innerHTML]="content"></div>
        <fa-icon [icon]="'quote-right'"
                 class="text-primary testimonial__quote testimonial__quote__end"></fa-icon>
      </div>
      <div class="d-flex flex-row justify-content-end">
        <button class="btn btn-link small" [routerLink]="'/testimonials'"
                *ngIf="showMoreButton">geef een getuigenis</button>
        <button class="btn btn-link small" [routerLink]="'/testimonials'"
                *ngIf="showMoreButton">meer getuigenissen</button>
      </div>

    </blockquote>

    <br/>

  `,
  styles: [
    `
      .testimonial__quote {
        font-size: larger;
      }
      
      .testimonial__quote__start {
        vertical-align: bottom;
      }

      .testimonial__quote__end {
        vertical-align: top;
      }
    `
  ]
})
export class TestimonialItemComponent implements OnInit {

  @Input()
  author: string;

  @Input()
  created: string;

  @Input()
  content: string;

  @Input()
  showMoreButton = true;

  constructor() {
  }

  ngOnInit() {
  }

}
