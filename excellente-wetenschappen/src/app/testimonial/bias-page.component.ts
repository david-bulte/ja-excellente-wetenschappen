import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { getDayOfYear } from "date-fns";
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { filter, map, takeUntil, tap } from 'rxjs/operators';
import { TestimonialService } from './testimonial.service';

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

      <button class="btn btn-link" *ngIf="hasMore$ | async" (click)="showMore()">toon meer</button>

    </div>
  `,
  styleUrls: ['./bias-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BiasPageComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject();
  hasMore$ = new BehaviorSubject(false);
  private date$ = new BehaviorSubject(getDayOfYear(new Date()));
  private size$ = new BehaviorSubject(4);
  testimonials$ = new BehaviorSubject([]);

  constructor(private testimonialService: TestimonialService) {
  }

  ngOnInit() {
    combineLatest(this.testimonialService.getTestimonials(), this.date$)
      .pipe(
        tap(([testimonials]) => {
          this.size$.next(testimonials.length)
        }),
        filter((testimonials) => testimonials && testimonials.length > 0),
        map(([testimonials, date]) => {
          let remaining = this.size$.getValue() - this.testimonials$.getValue().length;
          if (remaining > 4) {
            remaining = 4;
          }
          const result = [];
          for (let i = 0; i < remaining; i++) {
            const idx = (date * 4 + i) % testimonials.length
            result.push(testimonials[idx])
          }
          return result;
        }),
        tap(() => {
          this.hasMore$.next(this.size$.getValue() > this.testimonials$.getValue().length)
        }),
        takeUntil(this.destroy$)
      ).subscribe(testimonials => this.testimonials$.next(this.testimonials$.getValue().concat(testimonials)));

    window.scrollTo(0, 0);
  }

  showMore() {
    this.date$.next(this.date$.getValue() + 1);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

}
