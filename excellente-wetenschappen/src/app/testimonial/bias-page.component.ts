import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { getDayOfYear } from "date-fns";
import { filter, map } from 'rxjs/operators';
import { Testimonial, TestimonialService } from './testimonial.service';

@Component({
  selector: 'app-testimonials-page',
  template: `
    <div class="d-flex flex-column align-items-center w-100">

      <div class="text-container">

        <ng-container *ngFor="let t of testimonials$ | async; let index = index">

          <div class="d-flex flex-column justify-content-end align-items-center 
              flex-md-row text-container border-md-bottom mb-3 p-2 p-md-0 bias-page__cta" *ngIf="index === 0">
            <div class="text-nowrap">Heb je zelf iets meegemaakt?</div>
            <button class="btn btn-link float-right text-nowrap" [routerLink]="'/bias-in-de-praktijk/add'">
              Laat ons iets weten!
            </button>
          </div>

          <app-testimonial-item
            [testimonial]="t" [showMoreButton]="false"></app-testimonial-item>
        </ng-container>

      </div>

    </div>
  `,
  styleUrls: ['./bias-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BiasPageComponent implements OnInit {

  testimonials$ = this.testimonialService.getTestimonials().pipe(
    filter(testimonials => testimonials && testimonials.length > 0),
    map(testimonials => {
      // elke dag 4 verse quotes
      const date = getDayOfYear(new Date());
      const idx1 = (date * 4) % testimonials.length
      const idx2 = (date * 4 + 1) % testimonials.length
      const idx3 = (date * 4 + 2) % testimonials.length
      const idx4 = (date * 4 + 3) % testimonials.length
      return [testimonials[idx1], testimonials[idx2], testimonials[idx3], testimonials[idx4]];
    })
  );

  constructor(private testimonialService: TestimonialService) {
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  send(testimonial: Testimonial) {
    // this.testimonialService.send(testimonial).subscribe(res => {
    //   console.log("res", res);
    // });
  }
}
