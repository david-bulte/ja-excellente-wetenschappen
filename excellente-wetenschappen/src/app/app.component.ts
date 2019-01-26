import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `

    <app-nav></app-nav>

    <div class="container container-router mb-3 mt-0 mt-md-5 bg-white p-4">
      <router-outlet></router-outlet>
    </div>

    <app-footer></app-footer>

  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
