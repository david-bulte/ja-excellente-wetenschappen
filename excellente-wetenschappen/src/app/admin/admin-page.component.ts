import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { BehaviorSubject, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Testimonial, TestimonialService } from '../testimonial/testimonial.service';
import { TestimonialFormItemComponent } from './testimonial-form-item.component';

@Component({
  selector: 'app-admin',
  template: `

    <div class="d-flex justify-content-center w-100">
      <div class="text-container d-flex flex-column">

        <div class="text-danger" *ngIf="errorMsg$ | async">
          {{errorMsg$ | async}}
        </div>
        
        <div [ngSwitch]="loggedIn$ | async">
          <form class="form-group" [formGroup]="loginForm" (ngSubmit)="login()" *ngSwitchCase="false">
            <label for="inputEmail">Email address</label>
            <input class="form-control" id="inputEmail" type="email" formControlName="email">
            <label for="inputPassword">Password</label>
            <input class="form-control" id="inputPassword" type="password" formControlName="password">
            <button class="btn btn-link mt-2" type="submit">login</button>
          </form>

          <div *ngSwitchDefault>
            <div class="d-flex flex-row justify-content-end">
              <button class="btn btn-link" (click)="createTestimonial()">new testimonial</button>
              <button class="btn btn-link" (click)="logout()">logout</button>
            </div>
            <hr>
          </div>
        </div>


        <app-testimonial-item *ngFor="let t of testimonials$ | async; let index = index"
                              [testimonial]="t" [showMoreButton]="false"
                              [editable]="true" 
                              (saveTestimonial)="saveTestimonial($event)"
                              (deleteTestimonial)="deleteTestimonial($event)"></app-testimonial-item>


      </div>

    </div>

  `,
  styles: []
})
export class AdminPageComponent implements OnInit {

  errorMsg$ = new BehaviorSubject(null);
  loggedIn$ = new BehaviorSubject(false);
  testimonials$ = this.loggedIn$.pipe(
    switchMap(loggedIn => {
      return loggedIn ? this.testimonialService.getTestimonials(true) : of([])
    })
  );
  loginForm: FormGroup;
  modalRef: BsModalRef;

  loadAll() {
    // this.http.get<Testimonial[]>('/assets/testimonials.json')
    //   .pipe(
    //     mergeMap(ts => zip(
    //       fromArray(ts),
    //       timer(1000, 2000),
    //       (item, i) => item
    //       )
    //     ),
    //     tap(t => this.testimonialService.createTestimonial(t))
    //   )
    //   .subscribe();
  }

  constructor(private testimonialService: TestimonialService,
              private http: HttpClient,
              private fire: AngularFireAuth,
              private fb: FormBuilder,
              private modalService: BsModalService) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    this.errorMsg$.next(null);
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    this.fire.auth.signInWithEmailAndPassword(email, password)
      .then(done => {
        console.log("done", done);
        this.loggedIn$.next(true);
      })
      .catch(error => {
        console.error("error", error);
        this.errorMsg$.next('Er ging iets fout bij het inloggen - is gebruiker/wachtwoord gekend?')
      });
  }

  logout() {
    this.fire.auth.signOut()
      .then(done => {
        console.log("done", done);
        this.loggedIn$.next(false);
      })
      .catch(function (error) {
        console.log("error", error);
      });
  }

  saveTestimonial(testimonial: Testimonial) {
    this.testimonialService.updateTestimonial(testimonial);
  }

  deleteTestimonial(testimonial: Testimonial) {
    this.testimonialService.deleteTestimonial(testimonial);
  }

  createTestimonial() {
    this.modalRef = this.modalService.show(TestimonialFormItemComponent);
    this.modalRef.content.save.subscribe($event => {
      this.modalRef.hide();
      this.testimonialService.createTestimonial($event);
    });
    this.modalRef.content.cancel.subscribe(() => {
      this.modalRef.hide();
    });
  }

}
