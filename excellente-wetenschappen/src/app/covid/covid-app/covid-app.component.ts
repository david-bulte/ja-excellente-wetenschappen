import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covid-app',
  template: `
    <app-covid-nav></app-covid-nav>

    <div class="container container-router mb-3 mt-0 mt-md-5 bg-white p-4">
      <router-outlet></router-outlet>
    </div>

    <app-footer></app-footer>
  `,
  styles: [
  ]
})
export class CovidAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
