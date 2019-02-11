import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="pt-4 pb-4 pt-md-5 border-top bg-light text-success m-0">
      <div class="container d-flex flex-row justify-content-start align-items-center">

        <a [routerLink]="'/contact'">
          <img src="assets/img/JA_logo.png" width="50" alt="">
        </a>

        <div class="ml-3 small font-italic">
          Wetenschap is M+V+X is een campagne van de Jonge Academie.
        </div>
        
      </div>
    </footer>
  `,
  styles: [
    `
      .container {
        max-width: 960px;
      }
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
