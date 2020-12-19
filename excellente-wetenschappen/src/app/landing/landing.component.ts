import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-landing',
  template: `

    <div class="bg-white position-relative w-100 h-100">

      <div class="d-flex flex-column container align-items-center">

        <div>
          <img class="logo" src="assets/img/Excellente wetenschap.png">
        </div>

        <div class="info-block align-self-stretch">
          info
        </div>

        <div class="d-flex flex-row justify-content-around align-self-stretch">
          <div class="info-block">
            <a [routerLink]="'/implicit-gender'"><img src="assets/covid/implicit-gender.png"></a>
          </div>
          <div class="info-block">
            <a [routerLink]="'/covid'"><img src="assets/covid/covid.png"></a>
          </div>
        </div>


      </div>

    </div>

  `,
  styleUrls: ['landing.component.scss']
})
export class LandingComponent implements OnInit, OnDestroy {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'bg-white');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'bg-white');
  }


}
