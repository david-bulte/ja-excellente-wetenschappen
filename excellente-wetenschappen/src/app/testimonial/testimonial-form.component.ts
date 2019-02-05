import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { RecaptchaDirective } from './recaptcha.directive';
import { TestimonialService } from './testimonial.service';

@Component({
  selector: 'app-testimonial-form',
  template: `


    <div class="d-flex justify-content-center w-100">
      <div class="text-container d-flex flex-column">

        <div class="d-flex flex-row justify-content-start 
              text-container border-md-bottom mb-3 p-2 w-100" style="border-bottom: 1px solid #ced4da;">
          <a [routerLink]="['/bias-in-de-praktijk']" class="text-nowrap">
            <fa-icon [icon]="'caret-left'"></fa-icon>
            terug naar de verhalen
          </a>
        </div>

        <form class="pt-2 " [formGroup]="form" novalidate>
          <div class="form-group">
            <label for="inputEmail">Emailadres *</label>
            <input type="email" class="form-control"
                   [class.is-invalid]="!form.get('email').pristine && !form.get('email').valid"
                   [class.is-valid]="!form.get('email').pristine && form.get('email').valid"
                   formControlName="email"
                   id="inputEmail" aria-describedby="emailHelp">
            <small id="emailHelp" class="form-text text-muted">Uw verhaal wordt anoniem gepubliceerd.</small>
            <small class="invalid-feedback" *ngIf="!!form.get('email').errors?.email">Is het formaat juist?</small>
            <small class="invalid-feedback" *ngIf="!!form.get('email').errors?.required">Dit is een verplicht veld!
            </small>
          </div>
          <div class="form-group">
            <label for="inputTestimonial">Uw verhaal *</label>
            <textarea type="text" class="form-control"
                      [class.is-invalid]="!form.get('content').pristine && !form.get('content').valid"
                      [class.is-valid]="!form.get('content').pristine && form.get('content').valid"
                      formControlName="content"
                      id="inputTestimonial" aria-describedby="emailHelp"></textarea>
            <!--<small id="emailHelp" class="form-text text-muted">Bondigheid!</small>-->
            <small class="invalid-feedback">dit is een verplicht veld!</small>
          </div>

          <div appRecaptcha key="6LfuVX4UAAAAAAfqqkvCLpoGdP8S0seDkIdj0Sm8"
               formControlName="captcha" #captcha></div>

          <ng-container [ngSwitch]="sent$ | async">
            <button class="btn btn-primary text-white"
                    *ngSwitchDefault
                    (click)="submit()"
                    [disabled]="!form.valid">Verstuur
            </button>
            <div *ngSwitchCase="true" class="text-success">
              Thanks! We contacteren U zo snel mogelijk.
            </div>
          </ng-container>
        </form>

      </div>

    </div>
  `,
  styles: [`
    #inputTestimonial {
      height: 250px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestimonialFormComponent implements OnInit {

  @ViewChild(RecaptchaDirective)
  captcha: RecaptchaDirective;

  form: FormGroup;
  sent$ = new BehaviorSubject(false);

  constructor(private fb: FormBuilder, private testimonialService: TestimonialService, private router: Router) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: new FormControl(null, {
        validators: [Validators.required, Validators.email],
        updateOn: 'blur'
      }),
      content: ['', [Validators.required]],
      captcha: new FormControl()
    })
  }

  submit() {
    const {email, content, captcha} = this.form.getRawValue();
    this.testimonialService.send({status: 0, content, author: email}, captcha)
      .subscribe(() => {
        this.sent$.next(true);
        setTimeout(() => {
          this.captcha.reset();
          this.form.reset();
          this.router.navigate(['/bias-in-de-praktijk'])
        }, 2000);
      });

  }

  reset() {
    this.sent$.next(false);
  }

}
