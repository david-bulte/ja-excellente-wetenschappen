import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  constructor(private http: HttpClient, private fire: AngularFirestore) {
    // this.send({author: 'me', content: 'bla', public: true, created: new Date().toDateString()}).subscribe(resp => {
    //   console.log("resp", resp);
    // });
  }

  createTestimonial(testimonial: Testimonial) {
    this.fire.collection('testimonials').add(testimonial).then(done => {
      console.log("done", done);
    });
  }

  updateTestimonial(testimonial: Testimonial): any {
    this.fire.doc(`testimonials/${testimonial.$id}`).update(testimonial);
  }

  getTestimonials(inclPrivate = false) {
    return this.fire.collection<Testimonial>('testimonials').snapshotChanges().pipe(
      map(actions => actions.map(action => {
        return {...action.payload.doc.data(), $id: action.payload.doc.id};
      })),
      map(testimonials => {
        return inclPrivate ? testimonials : testimonials.filter(testimonial => testimonial.status === 1)
      })
    )

    // const racesCollection: AngularFirestoreCollection<Testimonial>;
    // return this.fire.collection('testimonials').snapshotChanges().map(actions => {
    //   return actions.map(a => {
    //     const data = a.payload.doc.data() as Race;
    //     data.id = a.payload.doc.id;
    //     return data;
    //   });
    // });
  }

  send(testimonial: Testimonial) {

    // let url = 'https://us-central1-excellente-wetenschappen.cloudfunctions.net/sendMail';
    // // let url = `/sendMail`
    // let headers = new HttpHeaders({'Content-Type': 'application/json'});
    //
    // return this.http.post(url, testimonial, {headers})
    //   .pipe(
    //     catchError(err => {
    //       console.error(err);
    //       return throwError(err);
    //     })
    //   );
  }

}

export interface Testimonial {
  $id?: string;
  content: string;
  status: number;
  created?: string;
  author?: string;
}
