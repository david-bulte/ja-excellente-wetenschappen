import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `

    <app-nav></app-nav>

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
