import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covid-home',
  template: `

    <div class="d-flex flex-column flex-lg-row mt-0 mt-md-5
        justify-content-between justify-content-lg-around justify-content-xl-between
        align-items-center align-items-lg-start">

      <div class="col-4 mb-4 p-3 info-box-info align-self-stretch">
        bla bla bla
      </div>

      <app-info-box [title]="'Facts and Figures'"
                    [link]="'../facts-and-figures'"
                    class="col-4 mb-4 mb-md-0">
        <div class="info-box__cartoon">
          <img src="assets/undraw/growing.svg">
        </div>
        <div class="info-box__description">
          De evolutie naar meer gendergelijkheid in academia gaat nog steeds traag. Wat zijn de cijfers?
        </div>
      </app-info-box>

      <app-info-box [title]="'Toolbox'"
                    [link]="'../toolbox'"
                    class="col-4 mb-4 mb-md-0">
        <div class="info-box__cartoon">
          <img src="assets/undraw/teaching.svg"></div>
        <div class="info-box__description">
          Wat kan je zelf doen om gender bias tegen te gaan?
        </div>
      </app-info-box>

    </div>
  `,
  styles: [`
    div app-news {
      width: 240px;
      float: right;
    }

    .info-box__cartoon img {
      max-height: 150px;
    }

    .info-box-info {
      background-color: #f2f2f2 ;
      border-radius: 15px;
    }

  `]
})
export class CovidHomePageComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  jump(target?) {
    const top = target ? target.getBoundingClientRect().top : 0;
    window.scrollTo({top, behavior: 'smooth'});
  }
}
