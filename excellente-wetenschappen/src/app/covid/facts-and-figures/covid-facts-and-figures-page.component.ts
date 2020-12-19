import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covid-facts-and-figures',
  template: `
    <div class="d-flex flex-column align-items-center w-100 position-relative">

      <div class="text-container mb-3 mt-3">
        <h2>
          Impact van de coronacrisis op de onderzoeksactiviteit van academici
        </h2>

        <img src="assets/covid/factsandfigures1.png">

        <p>
          <a href="https://www.nature.com/articles/s41562-020-0921-y" target="_blank">Myers et al. (2020)</a> vroegen 4.535 principal investigators of PI’s (d.w.z. professoren en andere
          onderzoeksleiders aan universiteiten) uit de VS en Europa naar hun ervaringen tijdens de beginperiode van de
          coronacrisis (april 2020). Uit hun bevraging bleek dat 70% van de respondenten tijdens de eerste maanden van
          de coronacrisis een negatieve impact op de onderzoekstijd rapporteerde, tegenover slechts 9% en 21%
          onderzoekers die respectievelijk geen of een positieve impact hebben ervaren.
        </p>
        <p>
          Dit komt sterk overeen met de resultaten van ondervragingen onder het personeel van KULeuven en UGent. Hier
          gaf 70% van de respondenten aan een (sterk) negatieve impact op het onderzoek te ervaren, waar de overige 30%
          geen of zelfs een positieve impact rapporteerde.
        </p>
        <h2>
          Academici (M/V/X) met zorgtaken of een hoge onderwijsopdracht worden disproportioneel hard getroffen
        </h2>
        <img src="assets/covid/factsandfigures2.png">
        <p>
          De UGent bevroeg ook of de coronacrisis een impact had op de afronding van lopende projecten. De antwoorden
          waren significant verschillend wanneer onderzoekers wel of geen zorgtaken hadden. Zo gaf 55% van de
          onderzoekers zonder zorgtaken aan een impact op de afronding van lopende projecten te ervaren. Bij
          onderzoekers met zorgtaken liep dat cijfer op tot 70%.
        </p>
        <img src="assets/covid/factsandfigures3.png">

        <p>
          <a href="https://www.nature.com/articles/s41562-020-0921-y" target="_blank">Ook de internationale studie van Myers et al. </a>stelde vast dat het al dan niet hebben van zorgtaken een sterke
          impact had op de gerapporteerde onderzoekstijd. Vooral de zorg voor jonge kinderen (0-11) jaar veroorzaakte
          een sterke daling van de gemiddelde tijd die bevraagde onderzoekers konden besteden aan onderzoek.
        </p>
        <h2>
          Vrouwen droegen gemiddeld genomen het grootste deel van deze extra lasten
        </h2>
        <p>
          Bovenstaande resultaten tonen de impact van zorgtaken op onderzoekers. Gemiddeld worden deze taken vaker
          opgenomen door vrouwen wat blijkt uit onderstaande gegevens.
        </p>
        <p>
          <a href="https://today.vub.be/nl/artikel/eerste-bevindingen-vub-tijdsbestedingsonderzoek-in-tijden-van-corona" target="_blank">Het dagboekonderzoek onder de Vlaamse bevolking</a> wees uit dat vrouwen gemiddeld 13u per week meer tijd besteedden aan
          zorgtaken tijdens de lockdown dan voordien. Mannen rapporteren daarentegen gemiddeld méér vrije tijd. Ook de
          mate waarin corona-ouderschapsverlof werd opgenomen in België, verschilde sterk tussen mannen en vrouwen. <a href="https://www.demorgen.be/nieuws/corona-duwt-vrouwen-weer-naar-de-haard" target="_blank">De
          Rijksdienst voor Arbeidsvoorziening </a>telde bijna 265.000 ouders die corona-ouderschapsverlof opnamen en stelde
          vast dat 70% hiervan vrouw was8.
        </p>
        <p>
          Bovenstaande gegevens die gelden voor de hele populatie zijn niet beschikbaar voor de subpopulatie van
          academici in Vlaanderen. Maar <a href="https://www.nature.com/articles/s41562-020-0921-y" target="_blank">de internationale studie van Myers et al. </a>laat zien dat de afname van de
          onderzoekstijd groter is bij vrouwelijke PI’s dan bij mannelijke. Onderstaande grafiek toont de gemiddelde
          daling van de onderzoekstijd voor vrouwelijke onderzoekers, ingedeeld volgens de mate waarin ze zorg opnemen
          voor anderen. Ter referentie zijn de gemiddelden voor alle onderzoekers (mannen en vrouwen samen) weergegeven
          als donkerrode lijnen. Zo valt op dat vrouwen gemiddeld een nog sterkere daling rapporteren van hun
          onderzoekstijd wanneer ze ook zorgtaken opnemen.
          <img src="assets/covid/factsandfigures4.png">

        <h2>
          Eerste impact op projectaanvragen wordt zichtbaar
        </h2>

        <div class="row">
          <img class="col col-6" src="assets/covid/factsandfigures5.png">
          <img class="col col-6" src="assets/covid/factsandfigures6.png">
        </div>

        <p>
          Het FWO opende tijdens de lockdown periode een bijzondere oproep voor projecten rond COVID-19 (lancering
          oproep op 11 april 2020, indiendeadline 30 april). De slaagpercentages van projecten met een vrouwelijke
          hoofdaanvrager lagen hier met 14,29% (1/7) opvallend lager dan wanneer de hoofdaanvrager een man was (34,78%
          of 8/23). Zo ging amper 5% van het totale budget naar een vrouwelijke hoofdaanvrager. Ter vergelijking, de
          oproep voor onderzoeksprojecten in 2019 resulteerde in slaagpercentages van 23,06% (220/954) voor mannen
          versus 20,30% voor vrouwen (82/404).
        </p>
        <p>
          Deze cijfers van het FWO zijn natuurlijk beperkt tot één bijzondere oproep waardoor voorzichtigheid geboden is
          bij het trekken van algemene conclusies. Toch toont internationaal onderzoek aan dat de onder-representatie en
          lagere succeskansen van vrouwen tijdens de Covid-19 crisis niet beperkt zijn tot Vlaanderen en/of tot
          projectoproepen. Zo stelden <a href="https://go.nature.com/2XhxqxR" target="_blank">3 databases met registered-reports (n = 14.000)</a> vast dat er een significante
          daling was van het aantal onderzoeksprojecten dat vrouwelijke PI’s registreerden in maart en april 2020 dan in
          dezelfde periode in 2019.10 Daarbovenop blijken <a href="https://voxeu.org/article/who-doing-new-research-time-covid-19-not-female-economists" target="_blank">vrouwen in verschillende wetenschapsgebieden minder betrokken
          te zijn bij COVID-gerelateerd onderzoek dan bij niet-COVID gerelateerd onderzoek (12% vs. 21% in economie
          bv.)</a> De verwachting is dat deze lagere betrokkenheid bij projecten op termijn zal resulteren in minder
          publicaties van vrouwelijke auteurs, en dat terwijl de periode van lockdown reeds gekenmerkt werd door een
          lager aantal publicatie-registraties en -inzendingen van (vooral junior) vrouwen dan voorheen.
        </p>
      </div>

    </div>



  `,
  styles: [
    `
      img {
        width: 100%;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }

      @media (min-width: 768px) {
        img {
          width: 75%;
        }
      }
    `

  ]
})
export class CovidFactsAndFiguresPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
