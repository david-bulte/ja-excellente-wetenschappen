import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  private testimonialsSubj = new BehaviorSubject([]);

  constructor(private http: HttpClient) { }

  load() {
    if (this.testimonialsSubj.getValue().length > 0) {
      return;
    }

    this.http.get<Testimonial[]>('/assets/testimonials.json').subscribe(testimonials => {
      this.testimonialsSubj.next(testimonials);
    })
  }

  getTestimonials() {
    return this.testimonialsSubj.asObservable();
  }
}

export interface Testimonial {
  content: string;
  created: string;
  author: string;
}
