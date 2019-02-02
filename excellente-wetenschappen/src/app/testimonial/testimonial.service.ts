import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { parseDate } from 'ngx-bootstrap';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  constructor(private http: HttpClient, private fire: AngularFirestore) {
  }

  createTestimonial(testimonial: Testimonial) {
    testimonial = {...testimonial, created: new Date().toUTCString(), author: '', status: 1};
    this.fire.collection('testimonials').add(testimonial).then(done => {
      console.log("done", done);
    });
  }

  updateTestimonial(testimonial: Testimonial): any {
    this.fire.doc(`testimonials/${testimonial.$id}`).update(testimonial);
  }

  deleteTestimonial(testimonial: Testimonial): any {
    this.fire.doc(`testimonials/${testimonial.$id}`).delete();
  }

  getTestimonials(inclPrivate = false) {
    return this.fire.collection<Testimonial>('testimonials').snapshotChanges().pipe(
      map(actions => actions.map(action => {
        const data = action.payload.doc.data();
        return {
          ...data,
          $id: action.payload.doc.id,
          created: data.created ? data.created : new Date().toUTCString()
        };
      })),
      map(testimonials => {
        return inclPrivate ? testimonials : testimonials.filter(testimonial => testimonial.status === 1)
      }),
      map(testimonials => {
        return testimonials.sort((left, right) => {
          // todo parseDate
          const l = parseDate(left.created);
          const r = parseDate(right.created);
          return (l.getTime() === r.getTime()) ? 0 : l < r ? -1 : 1;
        })
      })
    )
  }

  send(testimonial: Testimonial, captcha: string) {

    testimonial = {...testimonial, created: new Date().toUTCString()};

    let url = 'https://us-central1-excellente-wetenschappen.cloudfunctions.net/createTestimonial';
    let headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this.http.post(url, {testimonial, captcha}, {headers})
      .pipe(
        catchError(err => {
          console.error(err);
          return throwError(err);
        })
      );
  }

}

export interface Testimonial {
  $id?: string;
  content: string;
  status: number;
  created?: string;
  author?: string;
}
