import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <div class="d-flex flex-column align-items-center w-100 position-relative">

      <div class="text-container mb-3 mt-3">

        <p>
          Wetenschap=M+V+X is een <a [routerLink]="'/campagne'">campagne</a> van de 
          <a href="http://jongeacademie.be/" target="_blank">Jonge Academie.</a>
        </p>
        <p>De Jonge Academie is een interdisciplinaire en interuniversitaire ontmoetingsplaats van jonge toponderzoekers
          en -kunstenaars met een eigen kijk op wetenschap, maatschappij, kunst en beleid. Via standpunten, opinies en
          evenementen over actuele thema’s wil zij bijdragen aan de publieke beeldvorming over wetenschap en aan het
          debat over wetenschapsbeleid, specifiek vanuit het perspectief van de jonge academicus en kunstenaar.
        </p>
        <p>

          De Jonge Academie maakt deel uit van de <a href="http://www.kvab.be/" target="_blank">Koninklijke Vlaamse
          Academie van België voor Wetenschappen & Kunsten</a> en kan werken dankzij een subsidie van de <a
          href="https://www.nationale-loterij.be/" target="_blank">Nationale Loterij</a>.</p>

        <div class="d-flex flex-row justify-content-between">

          <div class="w-50">
            <p>
              Contacteer ons<br/>
              <b>Jonge Academie</b><br/>
              Paleis der Academiën<br/>
              Hertogsstraat 1 <br/>
              1000 Brussel<br/>
              België
            </p>

            <ul class="list-inline">
              <li>02/550 23 32</li>
              <li><a href="mailto:info@jongeacademie.be">info@jongeacademie.be</a></li>
              <li>@JongeAcademie</li>
            </ul>

          </div>

          <div>
            <img src="/assets/img/JongeAcademie_logo.jpg" class="logo">
          </div>
        </div>

      </div>

    </div>
  `,
  styles: [`
    .logo {
      width: 200px;
    }
  `]
})
export class ContactPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
