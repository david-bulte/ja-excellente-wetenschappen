import { Component, OnInit } from '@angular/core';
import { TestimonialService } from '../testimonial.service';

@Component({
  selector: 'app-testimonials-page',
  template: `
    <div>
      <div style="float: right;" class="pl-3">
        <form class="border-top border-primary" style="border-top-width: 10px!important;">
          <div class="font-weight-bold text-primary mb-2">Geef uw getuignis</div>
          <div class="form-group">
            <label for="inputEmail">Email address</label>
            <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp">
            <small id="emailHelp" class="form-text text-muted">No worries, dit dient enkel om U te contacteren</small>
          </div>
          <div class="form-group">
            <label for="inputTestimonial">Uw getuignis</label>
            <textarea type="text" class="form-control" 
                      id="inputTestimonial" aria-describedby="emailHelp"></textarea>
            <small id="emailHelp" class="form-text text-muted">Bondigheid!</small>
          </div>
          <button class="btn btn-primary text-white w-100">Verstuur</button>
        </form>
      </div>

      <app-testimonial
        [author]="t.author" [created]="t.created"
        [content]="t.content" [showMoreButton]="false"
        *ngFor="let t of testimonials$ | async"></app-testimonial>
    </div>
  `,
  styles: [`
    #inputTestimonial {
      height: 250px;
    }
  `]
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
