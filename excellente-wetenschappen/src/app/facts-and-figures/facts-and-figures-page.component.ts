import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facts-and-figures',
  template: `
    <p>
      In december 2018 publiceerde de VLIR 
      <a href="http://www.vlir.be/media/docs/VLIR_gelijke%20kansen_2018_corr%20DEF.pdf" target="_blank">
      het gelijkekansenrapport van de Vlaamse universiteiten</a> op basis van 
      cijfermateriaal uit de periode 2014-2018. Hieruit blijkt dat de Vlaamse Universiteiten al heel wat inspanningen 
      leverden om een duurzaam genderbeleid uit te tekenen, maar ook dat er nog heel wat werk aan de winkel is. 
      Het percentage vrouwen binnen het ZAP-personeelsbestand nam de voorbije jaren geleidelijk aan toe, van 20% uit 
      2010 tot 26% in 2017. Toch kan men een aantal kanttekeningen bij deze cijfers plaatsen. Zo gaat de evolutie 
      naar minder genderongelijkheid vrij traag en blijft de instroom van vrouwelijke postdoctorale onderzoekers in 
      het ZAP-kader een knelpunt.
    </p>

    <p>
      <b>In 2017 is 26% van het ZAP kader in de Vlaamse universiteiten een vrouw.</b> 
      Daarmee doen we het beter dan vorige jaren (20% in 2010, 15% in 2002), maar de evolutie naar minder 
      genderongelijkheid gebeurt vrij traag.
    </p>

    <div class="embed-responsive embed-responsive-4by3 d-md-none">
      <img class="embed-responsive-item" src="assets/img/grafiek1.png"/>
    </div>
    
    <div class="embed-responsive embed-responsive-4by3 d-md-none">
      <img class="embed-responsive-item" src="assets/img/grafiek1.png"/>
    </div>
    
    <div class="d-none d-md-block">
      <img src="assets/img/grafiek1.png"/>
      <img src="assets/img/grafiek2.png"/>
    </div>
    
  `,
  styles: []
})
export class FactsAndFiguresPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
