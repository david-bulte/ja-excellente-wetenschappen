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
             #testimonials
             (mouseenter)="hover(testimonials, true)" (mouseleave)="hover(testimonials, false)"
             routerLinkActive="active" [routerLink]="'/testimonials'">Getuigenissen</a>
          <a class="p-2 text-dark menu-item border-primary border-0"
             #charter
             (mouseenter)="hover(charter, true)" (mouseleave)="hover(charter, false)"
             routerLinkActive="active" [routerLink]="'/charter'">Charter</a>
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
