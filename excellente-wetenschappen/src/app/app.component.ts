import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `

    <app-nav></app-nav>

    <div class="container mb-3 mt-5 bg-white p-0 p-md-4">
      <router-outlet></router-outlet>
    </div>

    <app-footer></app-footer>

  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
