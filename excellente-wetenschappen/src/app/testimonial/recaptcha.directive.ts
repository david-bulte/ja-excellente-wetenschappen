import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit, ChangeDetectorRef,
  Directive,
  ElementRef,
  EventEmitter,
  forwardRef,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgZone,
  OnInit,
  Output
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor, FormBuilder,
  FormControl,
  NG_VALUE_ACCESSOR,
  NgControl,
  Validators
} from '@angular/forms';
import { Http } from '@angular/http';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

declare const grecaptcha: any;

declare global {
  interface Window {
    grecaptcha: any;
    reCaptchaLoad: () => void
  }
}

export const RECAPTCHA_URL = new InjectionToken('RECAPTCHA_URL');

@Injectable({
  providedIn: 'root'
})
export class ReCaptchaAsyncValidator {

  constructor(private http: HttpClient, @Inject(RECAPTCHA_URL) private url, private changeDetector: ChangeDetectorRef) {
  }

  validateToken(token: string) {
    return (_: AbstractControl) => {
      return this.http.get(this.url, {params: {response: encodeURIComponent(token)}}).pipe(
        map((res: any) => {
          if (!res.success) {
            return {tokenInvalid: true}
          }
          return null;
        }),
        tap(() => {
          setTimeout(() => {
            this.changeDetector.markForCheck();
          });
        })
      );
    }
  }
}

export interface ReCaptchaConfig {
  theme?: 'dark' | 'light';
  type?: 'audio' | 'image';
  size?: 'compact' | 'normal';
  tabindex?: number;
}

@Directive({
  selector: '[appRecaptcha]',
  exportAs: 'appRecaptcha',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RecaptchaDirective),
      multi: true
    },
    ReCaptchaAsyncValidator
  ]
})
export class RecaptchaDirective implements OnInit, AfterViewInit, ControlValueAccessor {
  @Input() key: string;
  @Input() config: ReCaptchaConfig = {};
  @Input() lang: string;

  @Output() captchaResponse = new EventEmitter<string>();
  @Output() captchaExpired = new EventEmitter();

  private control: FormControl;
  private widgetId: number;

  private onChange: (value: string) => void;
  private onTouched: (value: string) => void;

  constructor(private element: ElementRef, private  ngZone: NgZone,
              private injector: Injector,
              private reCaptchaAsyncValidator: ReCaptchaAsyncValidator,
              private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.registerReCaptchaCallback();
    this.addScript();
  }

  registerReCaptchaCallback() {
    window.reCaptchaLoad = () => {
      const config = {
        ...this.config,
        'sitekey': this.key,
        'callback': this.onSuccess.bind(this),
        'expired-callback': this.onExpired.bind(this)
      };
      this.widgetId = this.render(this.element.nativeElement, config);
    };
  }

  ngAfterViewInit() {
    this.control = this.injector.get(NgControl).control;
    this.setValidators();
  }

  /**
   * Useful for multiple captcha
   * @returns {number}
   */
  getId() {
    return this.widgetId;
  }

  /**
   * Calling the setValidators doesn't trigger any update or value change event.
   * Therefore, we need to call updateValueAndValidity to trigger the update
   */
  private setValidators() {
    setTimeout(() => {
      this.control.setValidators(Validators.required);
      this.control.updateValueAndValidity();
      this.changeDetector.markForCheck();
    });
  }

  writeValue(obj: any): void {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  onExpired() {
    this.ngZone.run(() => {
      this.captchaExpired.emit();
      this.onChange(null);
      this.onTouched(null);
    });
  }

  onSuccess(token: string) {
    this.ngZone.run(() => {
      this.verifyToken(token);
      this.captchaResponse.emit(token);
      this.onChange(token);
      this.onTouched(token);
    });
  }

  verifyToken(token: string) {
    this.control.setAsyncValidators(this.reCaptchaAsyncValidator.validateToken(token));
    this.control.updateValueAndValidity();
    this.changeDetector.markForCheck();
  }

  /**
   * Renders the container as a reCAPTCHA widget and returns the ID of the newly created widget.
   * @param element
   * @param config
   * @returns {number}
   */
  private render(element: HTMLElement, config): number {
    return grecaptcha.render(element, config);
  }

  /**
   * Resets the reCAPTCHA widget.
   */
  reset(): void {
    if (!this.widgetId) return;
    grecaptcha.reset(this.widgetId);
    this.onChange(null);
  }

  /**
   * Gets the response for the reCAPTCHA widget.
   * @returns {string}
   */
  getResponse(): string {
    if (!this.widgetId)
      return grecaptcha.getResponse(this.widgetId);
  }

  /**
   * Add the script
   */
  addScript() {
    let script = document.createElement('script');
    const lang = this.lang ? '&hl=' + this.lang : '';
    script.src = `https://www.google.com/recaptcha/api.js?onload=reCaptchaLoad&render=explicit${lang}`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }

}


// import { Directive, Input, AfterViewInit, OnInit, ElementRef, NgZone, Injector } from '@angular/core';
// import { ControlValueAccessor, NgControl, Validators, FormControl } from '@angular/forms';
//
// declare const grecaptcha : any;
//
// declare global {
//   interface Window {
//     grecaptcha : any;
//     reCaptchaLoad : () => void
//   }
// }
//
// @Directive({
//   selector: '[appRecaptcha]'
// })
// export class RecaptchaDirective implements OnInit, AfterViewInit, ControlValueAccessor {
//   @Input() key : string;
//   @Input() config : ReCaptchaConfig = {};
//   @Input() lang : string;
//
//   private onChange : ( value : string ) => void;
//   private onTouched : ( value : string ) => void;
//
//   private widgetId : number;
//   private control: FormControl;
//
//   constructor( private element : ElementRef, private  ngZone : NgZone, private injector : Injector ) {}
//
//   ngOnInit() {
//     this.registerReCaptchaCallback();
//     this.addScript();
//   }
//
//   ngAfterViewInit() {
//     this.control = this.injector.get(NgControl).control;
//     this.setValidator();
//   }
//
//   private setValidator() {
//     setTimeout(() => {
//       this.control.setValidators(Validators.required);
//       this.control.updateValueAndValidity();
//     }, 0);
//   }
//
//   writeValue( obj : any ) : void {
//   }
//
//   registerOnChange( fn : any ) : void {
//     this.onChange = fn;
//   }
//
//   registerOnTouched( fn : any ) : void {
//     this.onTouched = fn;
//   }
//
//   onExpired() {
//     this.ngZone.run(() => {
//       this.onChange(null);
//       this.onTouched(null);
//     });
//   }
//
//   onSuccess( token : string ) {
//     this.ngZone.run(() => {
//       this.onChange(token);
//       this.onTouched(token);
//     });
//   }
//
//   registerReCaptchaCallback() {
//     window.reCaptchaLoad = () => {
//       const config = {
//         ...this.config,
//         'sitekey': this.key,
//         'callback': this.onSuccess.bind(this),
//         'expired-callback': this.onExpired.bind(this)
//       };
//       this.widgetId = this.render(this.element.nativeElement, config);
//     };
//   }
//
//   private render( element : HTMLElement, config ) : number {
//     return grecaptcha.render(element, config);
//   }
//
//   addScript() {
//     let script = document.createElement('script');
//     const lang = this.lang ? '&hl=' + this.lang : '';
//     script.src = `https://www.google.com/recaptcha/api.js?onload=reCaptchaLoad&render=explicit${lang}`;
//     script.async = true;
//     script.defer = true;
//     document.body.appendChild(script);
//   }
//
// }
//
// export interface ReCaptchaConfig {
//   theme?: 'dark' | 'light';
//   type?: 'audio' | 'image';
//   size?: 'compact' | 'normal';
//   tabindex?: number;
// }
