import { ChangeDetectionStrategy, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `

    <div class="d-flex flex-row justify-content-between align-items-center container">
        <img class="nav__logo position-absolute" style="top: -11px; left: 50px" 
             src="assets/img/Excellente wetenschap.png">
        <div class="d-flex flex-column flex-grow-1">
          <div class="d-flex flex-row justify-content-end small">
            <a class="p-2 mr-3 text-dark menu-item__small border-primary border-0"
               #campagne
               (mouseenter)="hover(campagne, true)" (mouseleave)="hover(campagne, false)"
               routerLinkActive="active" [routerLink]="'/campagne'">Campagne</a>
            <a class="p-2 mr-3 text-dark menu-item__small border-primary border-0"
               #links
               (mouseenter)="hover(links, true)" (mouseleave)="hover(links, false)"
               routerLinkActive="active" [routerLink]="'/links'">Links</a>
            <a href="http://jongeacademie.be/" target="_blank"
               class="menu-item__small text-dark">
              Over JA
            </a>
          </div>
          <div class="d-flex flex-row justify-content-end">
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
               routerLinkActive="active" [routerLink]="'/facts-and-figures'">Facts and Figures</a>
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
          </div>
        </div>
    </div>
    
    
    <div class="bg-white border-bottom box-shadow mb-3">
      <div class="container d-flex flex-column flex-md-row align-items-center justify-content-between px-md-4">
      </div>
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
