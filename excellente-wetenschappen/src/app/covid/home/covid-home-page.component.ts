import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covid-home',
  template: `

    <div class="d-flex flex-column flex-lg-row mt-0 mt-md-5
        justify-content-between justify-content-lg-around justify-content-xl-between
        align-items-center align-items-lg-start">

      <div class="col-4 mb-4 p-3 info-box-info align-self-stretch">
        Net zoals van vele mensen, heeft de COVID-19-crisis de afgelopen maanden ook van academici heel wat gevergd. Nog het hele verdere academiejaar zullen extra inspanningen van het academisch personeel noodzakelijk zijn om veilig onderwijs en onderzoek te kunnen garanderen. Helaas is de impact van de voorbije en komende periode niet voor iedereen gelijk: ze treft disproportioneel de academici (m, v, x) met zorgtaken en/of een hoge onderwijslast – zaken waarvan we weten dat ze vaker door vrouwen worden opgenomen. Daardoor dreigt de COVID-19-crisis de bestaande (gender)ongelijkheid in academia (net als in de bredere maatschappij) te vergroten.
      </div>

      <app-info-box [title]="'Facts and Figures'"
                    [link]="'../facts-and-figures'"
                    class="col-4 mb-4 mb-md-0">
        <div class="info-box__cartoon">
          <img src="assets/undraw/growing.svg">
        </div>
        <div class="info-box__description">
          Een overzicht van enkele feiten en figuren die de ongelijke impact van
          de coronacrisis duidelijk weergeven.
        </div>
      </app-info-box>

      <app-info-box [title]="'Toolbox'"
                    [link]="'../toolbox'"
                    class="col-4 mb-4 mb-md-0">
        <div class="info-box__cartoon">
          <img src="assets/undraw/teaching.svg"></div>
        <div class="info-box__description">
          Een concrete set van tools die aangeven hoe we dit probleem onder de
          aandacht kunnen brengen en de negatieve impact ervan kunnen trachten te verkleinen.
        </div>
      </app-info-box>

    </div>
  `,
  styles: [`
    div app-news {
      width: 240px;
      float: right;
    }

    .info-box__cartoon img {
      max-height: 150px;
    }

    .info-box-info {
      background-color: #f2f2f2 ;
      border-radius: 15px;
    }

  `]
})
export class CovidHomePageComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  jump(target?) {
    const top = target ? target.getBoundingClientRect().top : 0;
    window.scrollTo({top, behavior: 'smooth'});
  }
}
