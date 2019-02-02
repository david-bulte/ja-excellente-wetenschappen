import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charter-page',
  template: `

    <div class="d-flex flex-column align-items-center w-100">

      <p class="text-container">
        Ondanks inspanningen op het gebied van work-life balance en selectieprocedures, is het merendeel
        van de professoren anno 2019 nog steeds man. Wetenschappelijke literatuur toont aan dat dit o.a.
        het gevolg is van onbewuste vooroordelen die de genderdiversiteit aan de Vlaamse universiteiten
        niet ten goede komen. Met deze website wil de <a href="http://www.jongeacademie.be" target="_blank">
        Jonge Academie</a> studenten en academici bewust maken
        van het bestaan van deze onbewuste vooroordelen en de invloed ervan op de (academische) carrière.
      </p>

      <p class="text-container">
        Deze website is een onderdeel van de bewustzijnscampagne “Wetenschap=m+v+x” die gelanceerd werd
        op 11 februari 2019 met onder meer een posteractie en een campagne op sociale media. In
        samenwerking met de <a href="http://www.vlir.be/" target="_blank">VLIR</a>, werken de leden van
        de Jonge Academie momenteel aan een charter over gendergelijkheid.
      </p>

      <p class="text-container">
        <a href="/assets/posters/JA_10GenderPosters.pdf" download>Download de pdf van de campagneposters.</a>
      </p>


      <div class="text-container d-flex flex-column flex-md-row flex-md-wrap posters">
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
      @media (max-width: 769px) {
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
  }

}
