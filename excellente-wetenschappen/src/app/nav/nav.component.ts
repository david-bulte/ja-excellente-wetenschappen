import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SlideInOutAnimation } from '../animations';

@Component({
  selector: 'app-nav',
  template: `

    <!--small screen-->

    <nav class="navbar navbar-expand-lg navbar-light d-flex flex-row justify-content-center bg-white d-md-none pb-0">
      <img class="nav__logo" [routerLink]="'/home'" src="assets/img/Excellente wetenschap.png" (click)="toggleMenu()">
    </nav>

    <div class="d-flex d-md-none flex-row flex-wrap justify-content-between">
      <a class="p-2 text-dark menu-item"
         #home
         (mouseenter)="hover(home, true)" (mouseleave)="hover(home, false)"
         routerLinkActive="active" [routerLink]="'/home'">Home</a>
      <a class="p-2 text-dark menu-item"
         #implicitBias
         (mouseenter)="hover(implicitBias, true)" (mouseleave)="hover(implicitBias, false)"
         routerLinkActive="active" [routerLink]="'/implicit-bias'">Implicit Bias</a>
      <a class="p-2 text-dark menu-item"
         #factsAndFigures
         (mouseenter)="hover(factsAndFigures, true)" (mouseleave)="hover(factsAndFigures, false)"
         routerLinkActive="active" [routerLink]="'/facts-and-figures'">Facts and Figures</a>
      <a class="p-2 text-dark menu-item"
         #bias
         (mouseenter)="hover(bias, true)" (mouseleave)="hover(bias, false)"
         routerLinkActive="active" [routerLink]="'/bias-in-de-praktijk'">Bias in de praktijk</a>
      <a class="p-2 text-dark menu-item"
         #toolbox
         (mouseenter)="hover(toolbox, true)" (mouseleave)="hover(toolbox, false)"
         routerLinkActive="active" [routerLink]="'/toolbox'">Toolbox</a>
      <a class="p-2 text-dark menu-item"
         #actua
         (mouseenter)="hover(actua, true)" (mouseleave)="hover(actua, false)"
         routerLinkActive="active" [routerLink]="'/actua'">Actua</a>
      <a class="p-2 text-dark menu-item" *ngIf="showMore$ | async"
         #campagne
         (mouseenter)="hover(campagne, true)" (mouseleave)="hover(campagne, false)"
         routerLinkActive="active" [routerLink]="'/campagne'">Campagne</a>
      <a class="p-2 text-dark menu-item" *ngIf="showMore$ | async"
         #links
         (mouseenter)="hover(links, true)" (mouseleave)="hover(links, false)"
         routerLinkActive="active" [routerLink]="'/links'">Referenties</a>
      <a href="p-2 http://jongeacademie.be/" target="_blank"
         class="p-2 menu-item text-dark" *ngIf="showMore$ | async">
        Over JA
      </a>
      <a class="p-2 text-muted font-italic"
         #moreLess
         (mouseenter)="hover(moreLess, true)" (mouseleave)="hover(moreLess, false)"
         (click)="toggleMore()">{{(showMore$ | async) ? 'minder' : 'meer'}}</a>
    </div>

    <!--bigger screen-->

    <div class="flex-row justify-content-between align-items-center container container-nav d-none d-md-flex">
      <img class="nav__logo position-absolute" [routerLink]="'/home'" style="top: -11px; left: 50px"
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
             routerLinkActive="active" [routerLink]="'/links'">Referenties</a>
          <a href="http://jongeacademie.be/" target="_blank"
             class="mr-3 menu-item__small text-dark">
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
      <div
        class="container container-nav d-flex flex-column flex-md-row align-items-center justify-content-between px-md-4">
      </div>
    </div>
  `,
  styleUrls: ['nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [SlideInOutAnimation]
})
export class NavComponent implements OnInit {

  showMenu$ = new BehaviorSubject(false);
  showMore$ = new BehaviorSubject(false);

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

  toggleMenu() {
    this.showMenu$.next(!this.showMenu$.getValue());
  }

  toggleMore() {
    this.showMore$.next(!this.showMore$.getValue());
  }
}
