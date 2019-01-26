import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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
            [author]="t.author" [created]="t.created"
            [content]="t.content" [showMoreButton]="false"></app-testimonial-item>
        </ng-container>
        
      </div>

    </div>
  `,
  styleUrls: ['./bias-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BiasPageComponent implements OnInit {

  testimonials$ = this.testimonialService.getTestimonials();

  constructor(private testimonialService: TestimonialService) {
  }

  ngOnInit() {
    this.testimonialService.load();
    window.scrollTo(0, 0);
  }

  send(testimonial: Testimonial) {
    this.testimonialService.send(testimonial).subscribe(res => {
      console.log("res", res);
    });
  }
}
