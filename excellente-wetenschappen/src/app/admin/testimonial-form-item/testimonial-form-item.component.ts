import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Testimonial } from '../../testimonial/testimonial.service';

@Component({
  selector: 'app-testimonial-form-item',
  template: `

    <div class="modal-header">
      <h4 class="modal-title pull-left">Testimonial</h4>
      <button type="button" class="close pull-right" aria-label="Close" (click)="cancel.emit()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <form [formGroup]="form" (ngSubmit)="submit()">
        <div class="form-group">
          <label for="inputContent">Content *</label>
          <textarea class="form-control" rows="10"
                    [class.is-invalid]="!form.get('content').pristine && !form.get('content').valid"
                    [class.is-valid]="!form.get('content').pristine && form.get('content').valid"
                    formControlName="content"
                    id="inputContent"></textarea>
          <small class="invalid-feedback" *ngIf="!!form.get('content').errors?.required">dit is een verplicht veld!
          </small>
        </div>

        <div class="form-group">
          <label for="inputStatus">Status *</label>
          <input type="text" class="form-control"
                 formControlName="status"
                 id="inputStatus">
        </div>

        <button type="submit" class="btn btn-primary text-white"
                [disabled]="!form.valid">Save
        </button>
        <button type="button" (click)="cancel.emit()" class="btn btn-link">Cancel
        </button>
      </form>
    </div>
  `,
  styles: []
})
export class TestimonialFormItemComponent implements OnInit, OnChanges {

  @Input() testimonial: Testimonial;

  @Output() save = new EventEmitter<Testimonial>();
  @Output() cancel = new EventEmitter();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      content: ['', [Validators.required]],
      status: [0, [Validators.required]]
    });

    if (this.testimonial) {
      this.form.patchValue({
        content: this.testimonial.content,
        status: this.testimonial.status
      }, {emitEvent: false});
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    let change = changes['testimonial'];
    if (change.currentValue && this.form) {
      this.form.patchValue(change.currentValue, {emitEvent: false});
    }
  }

  submit() {
    this.save.emit({
      $id: this.testimonial.$id,
      content: this.form.get('content').value,
      status: this.form.get('status').value,
    })
  }

}
