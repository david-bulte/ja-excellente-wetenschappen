import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { TestimonialService } from '../testimonial.service';

@Component({
  selector: 'app-testimonials-page',
  template: `
    <div>

      <div class="d-block d-sm-none d-flex flex-row align-items-center">
        <span>Heb je zelf iets meegemaakt?</span>
        <button class="btn btn-link float-right" [routerLink]="'/testimonials/add'">
          Laat ons iets weten!
        </button>
      </div>

      <div style="max-width: 330px; min-width: 330px;" class="pl-3 float-right d-none d-sm-block">

        <app-testimonial-form></app-testimonial-form>

      </div>

      <app-testimonial-item
        [author]="t.author" [created]="t.created"
        [content]="t.content" [showMoreButton]="false"
        *ngFor="let t of testimonials$ | async"></app-testimonial-item>

    </div>
  `,
  styles: [`
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestimonialsPageComponent implements OnInit {

  testimonials$ = this.testimonialService.getTestimonials();

  constructor(private testimonialService: TestimonialService) {
  }

  ngOnInit() {
    this.testimonialService.load();
    window.scrollTo(0, 0);
  }

}
