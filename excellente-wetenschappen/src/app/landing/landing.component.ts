import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-landing',
  template: `

    <div class="bg-white position-relative w-100 h-100">

      <div class="d-flex flex-column container align-items-center">

        <div>
          <img class="logo" src="assets/img/Excellente wetenschap.png">
        </div>


        <div class="d-flex flex-md-row flex-column justify-content-around align-self-stretch">

          <div class="info-block" [routerLink]="'/covid'">
            <p class="info-block_title">COVID, zorg en (gender)ongelijkheid</p>
            <img src="assets/covid/covid.png">
          </div>
          <div class="info-block" [routerLink]="'/implicit-gender'">
            <p class="info-block_title">Implicit gender bias</p>
            <img src="assets/covid/implicit-gender.png">
          </div>
        </div>
        <div class="info-block align-self-stretch">
          Wetenschap is divers, in onderzoeksvragen, domeinen en methodologieën. Ook de wetenschappers, de mensen achter
          de wetenschap, zijn erg divers. Divers in gender, geaardheid, cultuur, gezinssituatie, opgenomen zorgtaken,
          enz. Die diversiteit onder wetenschappers is een meerwaarde omdat aangetoond is dat ze leidt tot betere
          wetenschap. Toch wordt die meerwaarde niet altijd erkend. Zoals we op deze website laten zien, worden groepen
          wetenschappers die niet voldoen aan het stereotype van de oude, witte, mannelijke wetenschapper bewust of
          onbewust benadeeld. Gelukkig kunnen we hier samen iets aan doen: we kunnen ons informeren over systematische
          ongelijkheden en deze benoemen alsook specifieke tools gebruiken om gelijke kansen te waarborgen voor íedere
          wetenschapper. Een greep uit die wetenschappelijk onderbouwde informatie en concrete tools vind je op deze
          website.
        </div>


      </div>

    </div>

  `,
  styleUrls: ['landing.component.scss']
})
export class LandingComponent implements OnInit, OnDestroy {

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'bg-white');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'bg-white');
  }


}
