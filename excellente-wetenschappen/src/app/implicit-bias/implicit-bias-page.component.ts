import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-implicit-bias',
  template: `

    <div class="d-flex flex-column align-items-center w-100">

      <div class="text-container">
        <h2>
          Wat is Implicit bias?
        </h2>

        <p>
          ‘Implicit bias’ (impliciete vooroordelen) is een term die gebruikt wordt voor onbewuste vooroordelen die
          mensen met zich meedragen. Iedereen heeft associaties en voorkeuren (of aversies), zonder zich daarvan bewust
          te zijn. Dit is geen expliciete vooringenomenheid, maar een psychologisch mechanisme dat mensen snel in
          categorieën indeelt en sterk beïnvloed wordt door onze ervaringen, omgeving, scholing en beelden uit onze
          maatschappij. Implicit bias treft iedereen en is niet te voorkomen.
        </p>
      </div>

      <div class="d-none d-md-flex justify-content-center mb-5 mt-3">
        <img class="cartoon" src="assets/cartoons/Meeting.png">
      </div>

      <div class="text-container">
        <h2>
          Waar komt implicit bias vandaan?:
        </h2>

        <p>
          Onze hersenen werken op basis van geïnternaliseerde schema’s. Deze laten ons toe informatie snel en efficiënt
          te verwerken en snel te reageren, maar ze kunnen ons onbedoeld ook misleiden. Zo besteden we meer aandacht aan
          informatie die onze verwachtingen of vooroordelen bevestigen dan aan andere, nieuwe informatie die onze
          verwachtingen tegenspreken. En hierdoor veronderstellen we zaken die we associëren met een groep, zonder dat
          dit van toepassing hoeft te zijn op de specifieke persoon waarover het gaat. Daarbij kan gedacht worden aan
          voorbeelden als: “deze vrouw wordt moeder en zal dus wel geen tijd hebben om spreker te zijn op het volgende
          congres” of “deze man wordt vader, maar hij zal vast geen ouderschapsverlof willen opnemen.” Vaak zijn deze
          aanvullingen goed bedoeld en subtiel van aard, maar ze kunnen verstrekkende gevolgen hebben en een impact
          hebben op de carrière van de groepen waarover deze vooroordelen bestaan.
        </p>
      </div>

      <div class="d-none d-md-flex justify-content-center mb-5 mt-3 d-none d-md-block">
        <img class="cartoon" src="assets/cartoons/Professor Smith.png">
      </div>

      <div class="text-container">

        <h2>
          Wat kunnen we er aan doen?
        </h2>

        <p>
          Het is vooral zaak om te erkennen dat bias bestaat en dat we dit kunnen tegengaan door ons bewust te zijn van
          onze associaties. Tegelijkertijd kunnen we onze associaties bijstellen op basis van nieuwe ervaringen door
          hier extra aandacht aan te geven. In processen die carrières beïnvloeden zoals aanstellingen en bevorderingen,
          maar ook in het toekennen van funding en het uitnodigen van sprekers voor congressen kunnen er maatregelen
          genomen worden om te voorkomen dat beslissingen onbedoeld beïnvloedt worden door implicit bias.
        </p>

        <h2>
          Minder vrouwelijke professoren door implicit bias
        </h2>

        <p>
          Vrouwen zijn niet de enigen die nadeel ondervinden van implicit bias, maar wetenschappelijk onderzoek toont
          aan dat implicit bias belangrijke struikelblokken creëert in de academische loopbaan van vrouwen. Al deze
          drempels kunnen samen een groot effect hebben op de carrière van jonge academici. Een aantal voorbeelden van
          deze struikelblokken:
        </p>

        <h3>
          Vacatures
        </h3>

        <p>
          Taalgebruik in vacatures kan onbewust ofwel mannelijk ofwel vrouwelijk gekleurd zijn. In beroepen waar het
          gender onevenwicht groot is, is het taalgebruik in de vacatures vaker gendergekleurd (Gaucher, Friesen, & Kay,
          2011). Het gebruik van taal die geassocieerd wordt met vrouwelijk heeft een positief effect op de kans dat
          vrouwen zich kandidaat stellen voor een functie (Born & Taris, 2010) en kan helpen gender onevenwichten aan te
          pakken.
        </p>

      </div>

      <div class="d-none d-md-flex justify-content-center mb-5 mt-3 d-none d-md-block">
        <img class="cartoon" src="assets/cartoons/Ideas.png">
      </div>

      <div class="text-container">
        <h3>
          Aanbevelingsbrieven
        </h3>

        <p>
          Aanbevelingsbrieven voor mannelijke kandidaten zijn gemiddeld langer en verwijzen vaker naar talenten en
          excellentie, terwijl die voor vrouwelijke kandidaten het vaker hebben over onderwijscapaciteiten. (Leslie et
          al., 2015)
        </p>

        <h3>
          Geselecteerd worden voor posities
        </h3>

        <p>
          Uit een Amerikaanse dubbel-blind gerandomiseerde studie blijkt dat identieke CV’s voor een functie van
          labomanager die rondgestuurd werden met een een vrouwennaam of een mannen naam verschillend beoordeeld werden.
          De mannelijke namen scoorden significant beter.(Moss-Racusin, Dovidio, Brescoll, Graham, & Handelsman, 2012).
          Nederlands onderzoek laat zien dat de implicit bias effect heeft op de procedures rond recruitment en
          aanstellingen binnen de wetenschap en een negatief effect hebben op de kansen van vrouwelijke kandidaten (Van
          den Brink & Benschop, 2012), maar uit een Amerikaans onderzoek (Isaac, Lee, & Carnes, 2009) blijkt dat dat een
          minimum van 25% vrouwelijke kandidaten, de bias tegen vrouwelijke kandidaten drastisch kan verminderen.
        </p>
      </div>

      <div class="d-none d-md-flex justify-content-center mb-5 mt-3 d-none d-md-block">
        <img class="cartoon" src="assets/cartoons/Secretary.png">
      </div>

      <div class="text-container">
        <h3>
          Loon en loopbaanondersteuning:
        </h3>

        <p>
          Het onderzoek van Moss-Racusin et al.(2012) toonde ook aan dat cv’s met de naam van een man een hoger
          startsalaris en meer carrière-mentoring werd aangeboden vergeleken met dezelfde cv’s met de naam van een
          vrouw. De bias was zelfs sterker bij vrouwelijke dan bij mannelijke evaluatoren. (Moss-Racusin et al., 2012).
          Dit geeft wel aan dat alleen het aantal vrouwen in een evaluatiecommissies verhogen geen zin heeft. Leden
          moeten actief geïnformeerd en getraind worden om implicit bias te herkennen.
        </p>

        <h3>
          Verkrijgen van funding en fellowships:
        </h3>

        <p>
          In een van de bekendste studies rond dit onderwerp toonde Wennerås & Wold (1997) al aan dat vrouwelijke
          wetenschapper in Zweden ruim 2 keer meer moeten publiceren dan hun mannelijke collega’s om dezelfde score te
          krijgen voor een fellowship bij de Medical Research Council. Gelijkaardige resultaten zijn later herhaaldelijk
          teruggevonden bij andere funding agencies (Ahlqvist, Andersson, Soderqvist, & Tumpone, 2015; van der Lee &
          Ellemers, 2015; Wouters et al., 2018). Hieruit blijkt steeds dat vrouwen vergelijkbare scores krijgen voor hun
          onderzoeksvoorstel maar een lagere score krijgen als kandidaat.
        </p>

        <h3>
          Geciteerd worden en mogelijkheid tot samenwerking:
        </h3>

        <p>
          In een artikel uit 2015 werd aangetoond dat proefpersonen identieke wetenschappelijke papers positiever
          beoordelen als de auteur een man is. (Kaatz et al., 2005) en ook de bereidheid tot samenwerking met auteurs
          van wetenschappelijke papers geschreven door mannen groter is dan met vrouwelijke auteurs.
        </p>

        <h3>
          Uitgenodigd worden als spreker voor congressen:
        </h3>

        <p>
          Bij een Europese organisatie van biologen werd vastgesteld dat vrouwen ondervertegenwoordigd waren op de
          sprekerslijsten (Schroeder et al., 2013). Verschillende studies tonen aan dat het verhogen van het aantal
          vrouwen in de organisatie of symposiumcommissie het aantal vrouwelijke sprekers verhoogt en het aantal panels
          met enkel mannen verlaagt (Casadevall & Handelsman, 2014; Isbell, Young, & Harcourt, 2012).
        </p>

        <h3>
          Evaluatie van gegeven onderwijs:
        </h3>

        <p>
          In een klein online experiment werd aangetoond dat studenten docenten hoger evalueerden als ze dachten dat de
          docent een man was dan als ze dachten dat de docent een vrouw was, ongeacht hoe deze docenten het eigenlijk
          gedaan hadden. (McNell, 2014)
        </p>

        <p>
          Voor meer informatie zie het rapport van LERU (hier een link naar het rapport zetten?)
        </p>
      </div>

    </div>
  `,
  styles: [`
    img.cartoon {
      height: 220px;
    }
  `]
})
export class ImplicitBiasPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
