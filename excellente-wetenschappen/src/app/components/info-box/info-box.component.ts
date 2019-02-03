import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-box',
  template: `
    <div class="d-flex flex-column p-2 align-items-center mb-5" [routerLink]="link">
      <ng-content select=".info-box__cartoon"></ng-content>
      <h4 class="text-success text-lowercase">
        {{title}}
      </h4>
      <div>
        <ng-content select=".info-box__description"></ng-content>
      </div>
    </div>
  `,
  styles: [
    `
      :host:hover {
        cursor: pointer;
      }
      
    `
  ]
})
export class InfoBoxComponent implements OnInit {

  @Input() title: string;
  @Input() link: string;

  constructor() { }

  ngOnInit() {
  }

}
