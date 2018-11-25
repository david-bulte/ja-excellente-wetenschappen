import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
    <div>
      <img [src]="src"
           [class.left]="align === 'left'" 
           [class.right]="align === 'right'">
    </div>
  `,
  styles: [
    `
      :host img {
        position: absolute;
        width: 300px;
        bottom: 20px;
        opacity: 0.7;
      }
      
      :host img.right {
        right: 0;
      }

      :host img.left {
        left: 0;
      }
    `
  ]
})
export class LogoComponent implements OnInit {

  @Input()
  align: 'left' | 'right' = 'left';

  @Input()
  src: string;

  constructor() { }

  ngOnInit() {
  }

}
