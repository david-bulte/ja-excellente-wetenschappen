import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  private testimonialsSubj = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
    this.send({author: 'me', content: 'bla', created: new Date().toDateString()}).subscribe(resp => {
      console.log("resp", resp);
    });
  }

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

  send(testimonial: Testimonial) {

    let url = 'https://us-central1-excellente-wetenschappen.cloudfunctions.net/sendMail';
    // let url = `/sendMail`
    let headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this.http.post(url, testimonial, {headers})
      .pipe(
        catchError(err => {
          console.error(err);
          return throwError(err);
        })
      );
  }

}

export interface Testimonial {
  content: string;
  created: string;
  author: string;
}
