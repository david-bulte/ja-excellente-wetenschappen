import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charter-page',
  template: `

    <div class="d-flex flex-column align-items-center w-100">

      <div class="text-container">
        <p>
          Deze website maakte deel uit van de campagne "Wetenschap=M+V+X" die de <a [routerLink]="'/contact'">Jonge Academie</a> lanceerde op 11 februari 2019:
          de <a href="http://www.un.org/en/events/women-and-girls-in-science-day/" target="_blank">(UNESCO) International Day for Women and Girls in Science</a>. 
        </p>
      
        <p>
          Ondanks inspanningen op het gebied van work-life balance en selectieprocedures, was het merendeel
          van de professoren anno 2019 nog steeds man. Wetenschappelijke literatuur toont aan dat dit o.a.
          het gevolg is van onbewuste vooroordelen (<i>implicit bias</i>) en de uitingen ervan. 
          Met deze website en campagne wou de <a [routerLink]="'/contact'">
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
          Je kan de cartoons ook <a href="/assets/cartoons/Cartoons.zip" download>hier</a> downloaden.
        </p>

        <h3>Een nieuwe blik op het genderactieplan van 2013</h3>
        <p>
          De <a [routerLink]="'/contact'">Jonge Academie</a> en de <a href="http://www.vlir.be/" target="_blank">Vlaamse Interuniversitaire Raad (VLIR)</a> werkten samen om het genderactieplan voor de Vlaamse universiteiten uit 2013 aan een kritische blik te onderwerpen en te vertalen naar concrete actiepunten, zodat gendergelijkheid onder het academisch personeel onder de aandacht en op de agenda blijft. Een gezamenlijke taskforce van <a [routerLink]="'/contact'">Jonge Academie</a> en <a href="http://www.vlir.be/" target="_blank">VLIR</a> ging in maart aan de slag, en kon bij afronding van de campagne in juni 2019 een gedragen document voorleggen, dat ondertekend werd door de rectoren en vicerectoren van de vijf Vlaamse universiteiten. U kan het <a href="http://jongeacademie.be/wp-content/uploads/2019/06/Gendercharter_VLIR-JA.pdf/" target="_blank">Gendercharter VLIR/JA hier lezen</a>.
        </p>

        <h3>Publieksevent</h3>
        <p>
          De campagne werd inhoudelijk besloten met een publieksevent dat plaats vond op 26 juni van 10:30 tot 12:00 in het Paleis der Academiën te Brussel. Enkele sfeerbeelden vind je <a href="https://www.facebook.com/pg/JongeAcademie/photos/?tab=album&album_id=2559422564077373&__tn__=-UC-R" target="_blank">hier</a>. Opnames van de lezingen en het debat vind je <a href="https://www.youtube.com/channel/UCl2m0LEBoOPz8OQK72QoWGw" target="_blank">hier</a>
        </p>

        <h3>Maja #6</h3>
        <p>
          Het jaarlijkse <a href="http://jongeacademie.be/home/maja/" target="_blank">Magazine van de Jonge Academie (Maja)</a> was aan zijn zesde editie toe in 2019. De redactie werkte aan een themanummer <i>gender in academia</i>. Het werd verspreid begin academiejaar 2019-2020.
        </p>

        <h3>Campagnebeelden op posters, postkaarten en infoschermen</h3>
        <p>
          Tien gezichten en hun slogans richtten de aandacht van studenten en academici op het genderthema. In alle universiteiten werden deze campagnebeelden verspreid -- zowel op <a href="/assets/posters/JA_10GenderPosters.pdf" download>posters</a> als op de <a href="/assets/posters/campagne.zip" download>universitaire infoschermen</a>. 
          Daarnaast verspreidden we ook een <a href="/assets/cartoons/JA_PostkaartGender.pdf" download>postkaart</a> met een cartoon en een samenvatting van de <a [routerLink]="'/toolbox'">toolbox</a> op de achterkant.
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
