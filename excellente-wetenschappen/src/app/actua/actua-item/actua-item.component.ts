import { Component, Input, OnInit } from '@angular/core';
import { ActuaItem } from '../actua.service';

@Component({
  selector: 'app-actua-item',
  template: `
    <div class="actua-type text-uppercase w-100 d-flex justify-content-end text-muted">
      <div>{{item.type}}</div>
    </div>
    <div class="card-img-top img-container">
      <img [src]="item.photo" alt="..." class="w-100">
    </div>
    <div class="card-body pl-0 pr-0">
      <div class="actua-datum">
        {{item.when | date: 'dd/MM/yyyy'}}
        <span *ngIf="item.past" class="ml-2 text-danger text-uppercase">voorbij</span>
      </div>
      <h5 class="card-title">{{item.title}}</h5>
      <p class="card-text" [innerHTML]="item.description"></p>
      <p class="card-text actua-where" *ngIf="item.where">
        <span class="font-weight-bold">waar?</span> {{item.where}}
      </p>
    </div>
  `,
  styles: []
})
export class ActuaItemComponent implements OnInit {

  @Input()
  item: ActuaItem;
  
  constructor() { }

  ngOnInit() {
  }

}
