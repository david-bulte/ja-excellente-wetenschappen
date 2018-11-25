import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

    <app-nav></app-nav>

    <!--<button class="btn btn-primary">test</button>-->


    <div class="container mb-3">
      <router-outlet></router-outlet>
    </div>

    <app-footer></app-footer>

  `,
  styles: [
      `
    `
  ]
})
export class AppComponent {
  title = 'excellente-wetenschappen';
}
