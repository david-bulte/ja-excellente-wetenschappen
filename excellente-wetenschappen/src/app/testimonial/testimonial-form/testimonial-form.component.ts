import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { RecaptchaDirective } from '../recaptcha.directive';
import { Testimonial } from '../testimonial.service';

@Component({
  selector: 'app-testimonial-form',
  template: `


    <div class="d-block d-sm-none mb-2">
      <fa-icon [icon]="'caret-right'"></fa-icon>
      voeg een getuigenis toe
    </div>

    <form class="border-top border-primary pt-2 " [formGroup]="form" novalidate>
      <div class="font-weight-bold text-primary mb-2 d-none d-sm-block">Geef uw getuigenis</div>
      <div class="form-group">
        <label for="inputEmail">Email address *</label>
        <input type="email" class="form-control"
               [class.is-invalid]="!form.get('email').pristine && !form.get('email').valid"
               [class.is-valid]="!form.get('email').pristine && form.get('email').valid"
               formControlName="email"
               id="inputEmail" aria-describedby="emailHelp">
        <small id="emailHelp" class="form-text text-muted">No worries, dit dient enkel om U te contacteren</small>
        <small class="invalid-feedback" *ngIf="!!form.get('email').errors?.email">is het formaat juist?</small>
        <small class="invalid-feedback" *ngIf="!!form.get('email').errors?.required">dit is een verplicht veld!</small>
      </div>
      <div class="form-group">
        <label for="inputTestimonial">Uw getuigenis *</label>
        <textarea type="text" class="form-control"
                  [class.is-invalid]="!form.get('content').pristine && !form.get('content').valid"
                  [class.is-valid]="!form.get('content').pristine && form.get('content').valid"
                  formControlName="content"
                  id="inputTestimonial" aria-describedby="emailHelp"></textarea>
        <small id="emailHelp" class="form-text text-muted">Bondigheid!</small>
        <small class="invalid-feedback">dit is een verplicht veld!</small>
      </div>
      <div appRecaptcha key="6LfuVX4UAAAAAAfqqkvCLpoGdP8S0seDkIdj0Sm8" formControlName="captcha" #captcha></div>
      <ng-container [ngSwitch]="sent$ | async">
        <button class="btn btn-primary text-white w-100"
                *ngSwitchDefault
                (click)="submit()"
                [disabled]="!form.valid">Verstuur
        </button>
        <div *ngSwitchCase="true" class="text-success">
          Thanks! We contacteren U zo snel mogelijk.
        </div>
      </ng-container>
    </form>
    
    valid = {{form.valid}}
    valid content = {{form.get('content').valid}}
    valid captcha = {{form.get('captcha').valid}}
    valid captcha-value = {{form.get('captcha').value}}
  `,
  styles: [`
    #inputTestimonial {
      height: 250px;
    }

    @media (min-width: 576px) {
      form {
        border-top-width: 10px !important;
      }
    }

  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestimonialFormComponent implements OnInit {

  @Output()
  send = new EventEmitter<Testimonial>();

  @ViewChild(RecaptchaDirective)
  captcha: RecaptchaDirective;

  form: FormGroup;
  sent$ = new BehaviorSubject(false);

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: new FormControl(),
      // content: new FormControl(),
      // email: new FormControl(null, {
      //   validators: [Validators.required, Validators.email],
      //   updateOn: 'blur'
      // }),
      content: ['', [Validators.required]],
      captcha: new FormControl()
    })
  }

  submit() {
    const {email, content} = this.form.getRawValue();
    this.sent$.next(true);
    this.send.emit({author: email, content, created: new Date().toDateString()});
    setTimeout(() => {
      this.captcha.reset();
      this.form.reset();
      this.sent$.next(false);
    }, 3000);
  }

  reset() {
    this.sent$.next(false);
  }

}
