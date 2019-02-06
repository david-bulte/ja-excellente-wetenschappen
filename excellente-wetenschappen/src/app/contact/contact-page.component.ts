import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <div class="d-flex flex-column align-items-center w-100 position-relative">

      <div class="text-container mb-3 mt-3">

        <p>
          Wetenschap=m+v+x is een campagne van de <a href="http://jongeacademie.be/" target="_blank">Jonge Academie</a>
        </p>

        <p>
          Hertogsstraat 1 <br/>
          1000 Brussel<br/>
          België
        </p>

        <ul class="list-inline">
          <li>02/550 23 32</li>
          <li><a href="mailto:info@jongeacademie.be">info@jongeacademie.be</a></li>
        </ul>
        
      </div>
      
    </div>
  `,
  styles: []
})
export class ContactPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
