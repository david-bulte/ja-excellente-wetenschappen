import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charter-page',
  template: `

    <div class="d-flex flex-column align-items-center w-100">

      <div class="text-container">
        <p>
          Deze website maakt deel uit van de campagne "Wetenschap=M+V+X" die de <a [routerLink]="'/contact'">Jonge Academie</a> lanceerde op 11 februari 2019:
          de <a href="http://www.un.org/en/events/women-and-girls-in-science-day/" target="_blank">(UNESCO) International Day for Women and Girls in Science</a>. 
        </p>
      
        <p>
          Ondanks inspanningen op het gebied van work-life balance en selectieprocedures, is het merendeel
          van de professoren anno 2019 nog steeds man. Wetenschappelijke literatuur toont aan dat dit o.a.
          het gevolg is van onbewuste vooroordelen (<i>implicit bias</i>) en de uitingen ervan. 
          Met deze website wil de <a [routerLink]="'/contact'">
          Jonge Academie</a> academici en studenten bewust maken
          van het bestaan van deze onbewuste vooroordelen en de invloed ervan op de (academische) carrière.
        </p>
        
        <p>
          De lancering van de campagne kon rekenen op heel wat media-aandacht. 
          We haalden onder meer het VRT radio- en televisiejournaal, VTM, Knack, DeMorgen, ATV... 
          <a href="http://jongeacademie.be/gendercampagne-in-de-media/" target="_blank">Een overzicht</a>.
        </p>

        <h3>Cartoons</h3>

        <p>
          We werken samen met cartooniste Ayla Debraekeleer (doctoraatsstudente structurele biologie) die de verhalen uit de praktijk vertaalt in pittige cartoons. Je vindt ze terug op sociale media, deze website en op een <a href="/assets/cartoons/JA_PostkaartGender.pdf" download>postkaart</a>.
        </p>

        <h3>Een nieuw gendercharter</h3>
        <p>
          De <a [routerLink]="'/contact'">Jonge Academie</a> en de <a href="http://www.vlir.be/" target="_blank">Vlaamse Interuniversitaire Raad (VLIR)</a> engageren zich om samen het genderactieplan voor de Vlaamse universiteiten uit 2013 te actualiseren en te vertalen naar concrete actiepunten in de hoop gendergelijkheid onder het academisch personeel in een stroomversnelling te brengen. Een gezamenlijke taskforce van <a [routerLink]="'/contact'">Jonge Academie</a> en <a href="http://www.vlir.be/" target="_blank">VLIR</a> bereidt dit charter voor en toetst het af met de universiteiten, met het oog om tegen juni een hernieuwd charter ter ondertekening voor te leggen.
        </p>

        <h3>Publieksevent</h3>
        <p>
          Om de campagne inhoudelijk te besluiten, werken we aan een publieksevent eind juni of begin juli. Meer informatie volgt later!
        </p>

        <h3>Maja #6</h3>
        <p>
          Het jaarlijkse Magazine van de Jonge Academie (Maja) is aan zijn zesde editie toe in 2019. De redactie werkt aan een themanummer <i>gender in academia</i>. Het zal verspreid worden begin academiejaar 2019-2020.
        </p>

        <h3>Campagnebeelden op posters, postkaarten en infoschermen</h3>
        <p>
          Tien gezichten en hun slogans richten de aandacht van studenten en academici op het genderthema. In alle universiteiten zijn deze campagnebeelden verspreid -- zowel op <a href="/assets/posters/JA_10GenderPosters.pdf" download>posters</a> als op de <a href="/assets/posters/campagne.zip" download>universitaire infoschermen</a>. 
          Daarnaast verspreiden we ook een <a href="/assets/cartoons/JA_PostkaartGender.pdf" download>postkaart</a> met een cartoon en een samenvatting van de <a [routerLink]="'/toolbox'">toolbox</a> op de achterkant.
        </p>
      </div>
      
      <div class="text-container d-flex flex-column flex-sm-row flex-sm-wrap posters">
        <img class="m-1" src="/assets/posters/JA_AlexanderD.jpg">
        <img class="m-1" src="/assets/posters/JA_AngeliqueVO.jpg">
        <img class="m-1" src="/assets/posters/JA_AnnC.jpg">
        <img class="m-1" src="/assets/posters/JA_BertB.jpg">
        <img class="m-1" src="/assets/posters/JA_CarolineP.jpg">
        <img class="m-1" src="/assets/posters/JA_DamyaL.jpg">
        <img class="m-1" src="/assets/posters/JA_GabrieleB.jpg">
        <img class="m-1" src="/assets/posters/JA_GuyT.jpg">
        <img class="m-1" src="/assets/posters/JA_MagalyRG.jpg">
        <img class="m-1" src="/assets/posters/JA_PhilippeS.jpg">
      </div>

    </div>
  `,
  styles: [
    `
      @media (max-width: 577px) {
        .posters img {
          width: 100%;
        }
      }
    `
  ]
})
export class CampagnePageComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
