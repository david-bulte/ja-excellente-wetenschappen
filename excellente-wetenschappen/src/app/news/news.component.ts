import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  template: `

    <div class="d-flex flex-column">

      <div class="d-flex flex-column w-100 border-bottom mb-2 border-top border-primary" style="border-top-width: 10px !important;">
        <div class="d-flex flex-row">
          <div class="text-muted">actua</div>
        </div>
        <div class="text-primary font-weight-bold news__title mb-2">Jonge academie bij van gils</div>
        <img src="https://images.vrt.be/canvas_2015_1200s630_j70/2017/06/20/3c03fb81-55a8-11e7-9786-02b7b76bf47f.jpg" class="w-100">
        <p class="small mt-2">
          bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
          bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
          bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
          bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
        </p>
      </div>
      
      
      
    </div>
  `,
  styles: [
    `
        .news__title {
          /*font-size: larger;*/
        }
    `
  ]
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
