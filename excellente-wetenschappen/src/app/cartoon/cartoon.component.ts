import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartoon',
  template: `
    <div class="w-25">
      <img src="assets/cartoons/Getuigenis 1.png">
    </div>
  `,
  styles: [
    `
      img {
        width: 100%
      }
    `
  ]
})
export class CartoonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
