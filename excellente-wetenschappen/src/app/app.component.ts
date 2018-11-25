import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

    <app-nav></app-nav>

    <!--<button class="btn btn-primary">test</button>-->

    
    <div class="container">
        <router-outlet></router-outlet>
    </div>

  
  
  `,
  styles: [
    `      
      html {
        font-size: 14px;
      }
      @media (min-width: 768px) {
        html {
          font-size: 16px;
        }
      }

      .container {
        max-width: 960px;
      }

      .pricing-header {
        max-width: 700px;
      }

      .card-deck .card {
        min-width: 220px;
      }

      .border-top { border-top: 1px solid #e5e5e5; }
      .border-bottom { border-bottom: 1px solid #e5e5e5; }

      /*.box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }*/
    `
  ]
})
export class AppComponent {
  title = 'excellente-wetenschappen';
}
