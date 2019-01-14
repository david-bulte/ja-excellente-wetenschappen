import { ChangeDetectionStrategy, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <div class="bg-white border-bottom box-shadow mb-3">

      <!--<h5 class="my-0 mr-md-auto font-weight-normal">excellente wetenschap</h5>-->

      <div class="container d-flex flex-column flex-md-row align-items-center justify-content-between px-md-4">

        <nav class="mr-md-3 justify-content-around w-100 justify-content-sm-center">
          <a class="p-2 text-dark menu-item border-primary border-0" 
             #home
             (mouseenter)="hover(home, true)" (mouseleave)="hover(home, false)"
             routerLinkActive="active" [routerLink]="'/home'">Home</a>
          <a class="p-2 text-dark menu-item border-primary border-0"
             #implicitBias
             (mouseenter)="hover(implicitBias, true)" (mouseleave)="hover(implicitBias, false)"
             routerLinkActive="active" [routerLink]="'/implicit-bias'">Implicit Bias</a>
          <a class="p-2 text-dark menu-item border-primary border-0"
             #factsAndFigures
             (mouseenter)="hover(factsAndFigures, true)" (mouseleave)="hover(factsAndFigures, false)"
             routerLinkActive="active" [routerLink]="'/facts-and-figures'">Facts And Figures</a>
          <a class="p-2 text-dark menu-item border-primary border-0"
             #bias
             (mouseenter)="hover(bias, true)" (mouseleave)="hover(bias, false)"
             routerLinkActive="active" [routerLink]="'/bias-in-de-praktijk'">Bias in de praktijk</a>
          <a class="p-2 text-dark menu-item border-primary border-0"
             #toolbox
             (mouseenter)="hover(toolbox, true)" (mouseleave)="hover(toolbox, false)"
             routerLinkActive="active" [routerLink]="'/toolbox'">Toolbox</a>
          <a class="p-2 text-dark menu-item border-primary border-0"
             #actua
             (mouseenter)="hover(actua, true)" (mouseleave)="hover(actua, false)"
             routerLinkActive="active" [routerLink]="'/actua'">Actua</a>
          <a class="p-2 text-dark menu-item border-primary border-0"
             #campagne
             (mouseenter)="hover(campagne, true)" (mouseleave)="hover(campagne, false)"
             routerLinkActive="active" [routerLink]="'/campagne'">Campagne</a>
          <a class="p-2 text-dark menu-item border-primary border-0"
            #links
            (mouseenter)="hover(links, true)" (mouseleave)="hover(links, false)"
            routerLinkActive="active" [routerLink]="'/links'">Links</a>
          <a href="http://jongeacademie.be/" 
             class="menu-item pb-0 d-inline d-sm-none float-right">
            <img src="assets/img/JA_logo.png" width="30" height="30" alt="">
          </a>
        </nav>

        <a href="http://jongeacademie.be/" class="d-none d-sm-block">
          <img src="assets/img/JA_logo.png" width="30" height="30" alt="">
        </a>
      </div>
      <!--<a class="btn btn-outline-primary" href="#">Sign up</a>-->

    </div>
  `,
  styleUrls: ['nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  hover(menuItem: HTMLDivElement, $event) {
    if ($event) {
      menuItem.classList.add('_hover_');
    } else {
      menuItem.classList.remove('_hover_');
    }
  }
}
