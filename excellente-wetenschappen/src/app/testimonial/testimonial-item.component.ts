import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BehaviorSubject } from 'rxjs';
import { TestimonialFormItemComponent } from '../admin/testimonial-form-item.component';
import { Testimonial } from './testimonial.service';

@Component({
  selector: 'app-testimonial-item',
  template: `

    <blockquote class="position-relative d-inline">

      <div class="mb-0 font-italic d-inline">
        <fa-icon [icon]="'quote-left'"
                 class="text-primary testimonial__quote testimonial__quote__start"></fa-icon>
        <div class="d-inline ml-3 mr-3" [innerHTML]="testimonial.content"></div>
        <fa-icon [icon]="'quote-right'"
                 class="text-primary testimonial__quote testimonial__quote__end"></fa-icon>
      </div>
      <div class="d-flex flex-row justify-content-end">
        <button class="btn btn-link small" [routerLink]="'/testimonials'"
                *ngIf="showMoreButton">vertel uw verhaal
        </button>
        <button class="btn btn-link small" [routerLink]="'/testimonials'"
                *ngIf="showMoreButton">meer verhalen
        </button>
      </div>

    </blockquote>

    <div *ngIf="editable">
      <div class="d-flex justify-content-between align-items-center">
        <div>
          {{testimonial.created}}
          | {{testimonial.status === 1 ? 'publiek' : 'niet gepubliceerd'}}
          <span *ngIf="testimonial.author">|</span> {{testimonial.author}}
        </div>
        <div>
          <button class="btn btn-link" (click)="deleteTestimonial.emit(testimonial)">delete</button>
          <button class="btn btn-link" (click)="showEdit()">edit</button>
        </div>
      </div>
      <hr>
    </div>

    <br/>

  `,
  styles: [
      `
      /*.testimonial__quote {*/
      /*font-size: larger;*/
      /*}*/

      .testimonial__quote__start {
        vertical-align: bottom;
      }

      .testimonial__quote__end {
        vertical-align: top;
      }
    `
  ]
})
export class TestimonialItemComponent implements OnInit {

  @Input() testimonial: Testimonial;

  @Input() showMoreButton = true;

  @Input() editable = false;

  @Output() saveTestimonial = new EventEmitter<Testimonial>();
  @Output() deleteTestimonial = new EventEmitter<Testimonial>();

  modalRef: BsModalRef;
  editMode$ = new BehaviorSubject(false);

  constructor(private modalService: BsModalService) {
  }

  ngOnInit() {
  }

  showEdit() {
    const initialState = {
      testimonial: this.testimonial,
    };
    this.modalRef = this.modalService.show(TestimonialFormItemComponent, {initialState});
    this.modalRef.content.save.subscribe($event => {
      this.modalRef.hide();
      this.saveTestimonial.emit($event);
    });
    this.modalRef.content.cancel.subscribe(() => {
      this.modalRef.hide();
    });
  }

}
