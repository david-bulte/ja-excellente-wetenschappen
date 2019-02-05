import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `

    <div class="d-flex flex-column flex-lg-row mt-0 mt-md-5 
        justify-content-between justify-content-lg-around justify-content-xl-between 
        align-items-center align-items-lg-start">
      <app-info-box [title]="'implicit bias'"
                    [link]="'/implicit-bias'"
                    class="mb-4 mb-md-0">
        <div class="info-box__cartoon">
          <img src="assets/undraw/science.svg">
        </div>
        <div class="info-box__description">
          Wat is implicit bias? Hoe herken je implicit bias?
        </div>
      </app-info-box>

      <app-info-box [title]="'Facts and Figures'"
                    [link]="'/facts-and-figures'"
                    class="mb-4 mb-md-0">
        <div class="info-box__cartoon">
          <img src="assets/undraw/growing.svg">
        </div>
        <div class="info-box__description">
          De evolutie naar meer gendergelijkheid in academia gaat nog steeds traag. Wat zijn de cijfers?
        </div>
      </app-info-box>

      <app-info-box [title]="'Bias in de praktijk'" 
                    [link]="'/bias-in-de-praktijk'"
                    class="mb-4 mb-md-0">
        <div class="info-box__cartoon">
          <img src="assets/undraw/programmer_imem.svg">
        </div>
        <div class="info-box__description">
          Lees hier verhalen over gendergerelateerde uitdagingen en opportuniteiten. Zelf iets te melden? Dat kan!
        </div>
      </app-info-box>

      <app-info-box [title]="'Toolbox'" 
                    [link]="'/toolbox'"
                    class="mb-4 mb-md-0">
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
    
  `]
})
export class HomePageComponent implements OnInit {

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
