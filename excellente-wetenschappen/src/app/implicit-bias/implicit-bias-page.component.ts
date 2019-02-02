import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-implicit-bias',
  template: `

    <div class="d-flex flex-column align-items-center w-100 position-relative">

      <div class="position-absolute side-menu d-none d-lg-block" #sticky>
        <ul class="list-inline text-muted">
          <li (click)="jump('wat')">Wat is implicit bias?</li>
          <li (click)="jump('waar')">Waar komt implicit bias vandaan?</li>
          <li (click)="jump('doen')">Wat kunnen we er aan doen?</li>
          <li (click)="jump('minder')">Minder vrouwelijke professoren door implicit bias</li>
          <li (click)="jump('bias')">Bias ten opzichte van onderzoek naar gender bias</li>
        </ul>
      </div>

      <div class="text-container" #wat>
        <h2>
          Wat is Implicit bias?
        </h2>

        <p>
          Implicit bias (impliciete vooroordelen) is een term die gebruikt wordt voor onbewuste vooroordelen die mensen
          met zich meedragen. Iedereen heeft associaties en voorkeuren (of aversies), zonder zich daarvan bewust te
          zijn. Implicit bias is geen expliciete vooringenomenheid, maar een psychologisch mechanisme dat mensen snel in
          categorieën indeelt en sterk beïnvloed wordt door onze ervaringen, omgeving, scholing en beelden uit onze
          maatschappij. Implicit bias treft iedereen en is niet te voorkomen.
        </p>
      </div>

      <div class="text-container mb-3">
        <iframe class="d-none d-md-block" width="560" height="315"
                src="https://www.youtube.com/embed/V6NqxTKGO4U?rel=0&cc_load_policy=1"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        <div class="d-block d-md-none embed-responsive embed-responsive-4by3">
          <iframe class="embed-responsive-item" width="560" height="315"
                  src="https://www.youtube.com/embed/V6NqxTKGO4U?rel=0&cc_load_policy=1"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
        </div>
      </div>

      <div class="text-container" #waar>
        <h2>
          Waar komt implicit bias vandaan?:
        </h2>

        <p>
          Onze hersenen werken op basis van geïnternaliseerde schema’s. Deze laten ons toe om informatie
          snel en efficiënt te verwerken en om snel te reageren, maar ze kunnen ons ook onbedoeld misleiden.
          Zo besteden we meer aandacht aan informatie die onze verwachtingen of vooroordelen bevestigen
          dan aan andere, nieuwe informatie die onze verwachtingen tegenspreken. Hierdoor veronderstellen
          we bijvoorbeeld zaken over een persoon die we associëren met een bepaalde groep, zonder dat dit
          van toepassing hoeft te zijn op de specifieke persoon waarover het gaat. Bijvoorbeeld: “deze vrouw
          wordt moeder en zal dus wel geen tijd hebben om spreker te zijn op het volgende congres” of
          “deze man wordt vader, maar hij zal vast geen ouderschapsverlof willen opnemen.” Vaak zijn deze
          aanvullingen subtiel en goed bedoeld, maar ze kunnen verstrekkende gevolgen hebben. Zo kunnen ze
          een impact hebben op het leven en de carrière van de groepen waarover deze vooroordelen bestaan.
        </p>
      </div>

      <div class="d-none d-md-flex justify-content-center mb-5 mt-3 d-none d-md-block">
        <img class="cartoon" src="assets/cartoons/Professor Smith.png">
      </div>

      <div class="text-container" #doen>
        <h2>
          Wat kunnen we er aan doen?
        </h2>

        <p>
          Het is vooral zaak om te erkennen dat bias bestaat en dat we dit kunnen tegengaan door ons bewust te zijn van
          onze associaties. Tegelijkertijd kunnen we onze associaties bijstellen op basis van nieuwe ervaringen door
          hier extra aandacht aan te geven. In processen die carrières beïnvloeden zoals aanstellingen en bevorderingen,
          maar ook in het toekennen van fondsen en het uitnodigen van sprekers voor congressen kunnen er maatregelen
          genomen worden om te voorkomen dat beslissingen onbedoeld beïnvloedt worden door implicit bias.
        </p>
      </div>

      <div class="text-container" #minder>
        <h2>
          Minder vrouwelijke professoren door implicit bias
        </h2>

        <p>
          Hoewel vrouwen niet de enigen zijn die nadeel ondervinden van implicit bias, toont wetenschappelijk
          onderzoek aan dat implicit bias belangrijke struikelblokken creëert in de academische loopbaan van
          vrouwen. Al deze drempels kunnen samen een groot effect hebben op de carrière van jonge academici.
          Een aantal voorbeelden van deze struikelblokken:
        </p>

        <h3>
          Vacatures
        </h3>

        <p>
          Taalgebruik in vacatures kan mannelijk of vrouwelijk gekleurd zijn. In beroepen waar het gender
          onevenwicht groot is, is het taalgebruik in de vacatures vaker gendergekleurd
          (Gaucher, Friesen, & Kay, 2011). Het gebruik van genderneutraal taalgebruik heeft een positief
          effect op de kans dat vrouwen zich kandidaat stellen voor een functie (Born & Taris, 2010) en
          kan helpen gender onevenwichten aan te pakken.
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
          excellentie, terwijl die voor vrouwelijke kandidaten het vaker hebben over onderwijscapaciteiten (Leslie et
          al., 2015). Aanbevelingsbrieven voor kandidaten, zowel mannelijke als vrouwelijke, zouden een diversiteit van
          talenten moeten benadrukken.
        </p>

        <h3>
          Geselecteerd worden voor posities
        </h3>

        <p>
          Uit een Amerikaanse dubbel-blind gerandomiseerde studie blijkt dat identieke cv’s voor een functie
          van labomanager die rondgestuurd werden met een vrouwennaam of een mannennaam verschillend beoordeeld
          werden. De mannelijke namen scoorden significant beter (Moss-Racusin, Dovidio, Brescoll, Graham, &
          Handelsman, 2012). Nederlands onderzoek laat zien dat implicit bias effect heeft op de procedures
          omtrent aanwervingen en aanstellingen binnen de wetenschap en een negatief effect hebben op de
          kansen van vrouwelijke kandidaten (Van den Brink & Benschop, 2012). Uit een Amerikaans onderzoek
          (Isaac, Lee, & Carnes, 2009) blijkt dat dat een minimum van 25% vrouwelijke kandidaten, de bias
          tegen vrouwelijke kandidaten drastisch kan verminderen.
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
          Onderzoek toont aan dat cv’s met de naam van een man een hoger startsalaris en meer
          carrière-mentoring werd aangeboden vergeleken met dezelfde cv’s met de naam van een vrouw
          (Moss-Racusin et al., 2012). De bias was zelfs sterker bij vrouwelijke dan bij mannelijke
          evaluatoren (Moss-Racusin et al., 2012). Dit geeft aan dat alleen het aantal vrouwen in
          evaluatiecommissies verhogen niet zinvol is. Leden moeten actief geïnformeerd en getraind
          worden om implicit bias te herkennen.
        </p>

        <h3>
          Verkrijgen van funding en fellowships:
        </h3>

        <p>
          Een vroege studie van Wennerås & Wold (1997) toont aan dat vrouwelijke wetenschappers in Zweden
          ruim twee keer meer moeten publiceren dan hun mannelijke collega’s om dezelfde score te
          krijgen voor een fellowship bij de Medical Research Council. Gelijkaardige resultaten zijn
          later herhaaldelijk teruggevonden bij andere funding agencies (Ahlqvist, Andersson, Soderqvist,
          & Tumpone, 2015; van der Lee & Ellemers, 2015; Wouters et al., 2018). Uit deze studies blijkt
          dat vrouwen vergelijkbare scores krijgen voor hun onderzoeksvoorstel maar een lagere score krijgen
          als kandidaat.
        </p>

        <h3>
          Geciteerd worden en mogelijkheid tot samenwerking:
        </h3>

        <p>
          In een artikel uit 2015 werd aangetoond dat proefpersonen identieke wetenschappelijke papers positiever
          beoordelen als de auteur een man is, en dat men sneller bereid was samen te werken met auteurs van
          wetenschappelijke papers geschreven door mannen (Kaatz et al., 2015).
        </p>

        <h3>
          Uitgenodigd worden als spreker voor congressen:
        </h3>

        <p>
          Bij een Europese organisatie van biologen werd vastgesteld dat vrouwen ondervertegenwoordigd waren
          op de sprekerslijsten (Schroeder et al., 2013). Verschillende studies tonen aan dat het verhogen
          van het aantal vrouwen in de organisatie of symposiumcommissie het aantal vrouwelijke sprekers
          verhoogt en het aantal panels met enkel mannen verlaagt (Casadevall & Handelsman, 2014; Isbell,
          Young, & Harcourt, 2012).
        </p>

        <h3>
          Onderwijsevaluaties:
        </h3>

        <p>
          Verschillende onderzoeken tonen aan dat studenten vrouwelijke docenten lager evalueren op
          onderwijsevaluaties dan mannelijke docenten (Basow & Silberg, 1987; Boring, 2017; Mitchell &
          Martin, 2018; Sandler, 1991). In een klein online experiment werd aangetoond dat studenten
          docenten hoger evalueren wanneer ze denken dat de docent een man is dan wanneer ze denken dat
          de docent een vrouw is, ongeacht de prestatie van de docent (McNell, 2014). Toch is gender bias
          in onderwijsevaluaties een complex verhaal. Sommige onderzoekers stellen vast dat vrouwelijke
          lesgevers lager worden gescoord dan hun mannelijke collega’s, anderen vinden dan weer dat
          vrouwelijke lesgevers hoger scoren (Bachen, McLouglin & Garcia, 1999; Feldman, 2007; Tatro, 1995).
          Nog anderen vinden geen verschillen (Goodwin & Stevens, 1993; Hancock, Shannon & Trentham, 1992).
          Onderwijs is iets heel persoonlijks. De leermethoden, aanpak en persoonlijkheden binnen de
          lespraktijk zorgen voor complexe interacties die niet makkelijk te analyseren zijn. Waar
          we ons wel bewust van dienen te zijn is dat mannelijke en vrouwelijke studenten mannelijke
          docenten anders percipiëren. Ze zien hen als intelligenter en als sterkere leidersfiguren,
          wat overeenstemt met ons stereotiepe beeld van de (mannelijke) professor. Onderwijsevaluaties
          zijn zeker niet immuun voor gender bias, wat een negatieve invloed kan hebben op de loopbaan
          en bevordering van vrouwelijke docenten in hun academische carrière.
        </p>

        <div class="d-none d-md-flex justify-content-center mb-5 mt-3">
          <img class="cartoon" src="assets/cartoons/Meeting.png">
        </div>

      </div>
      
      <div class="text-container" #bias>
        <h2>
          Bias ten opzichte van onderzoek naar gender bias:
        </h2>

        <p>
          Onderzoek toont aan dat gender bias ook een rol speelt in het beoordelen van onderzoek,
          inclusief onderzoek naar gender bias. Zo zouden mannen negatiever staan ten opzichte van
          resultaten uit onderzoek naar gender bias in STEM-domeinen (science, technology, engineering,
          mathematics) dan vrouwen (Moss-Racusin et al., 2015). Dit zou in het bijzonder gelden voor
          mannelijke STEM-onderzoekers: zij zouden onderzoeksresultaten die gender bias in
          STEM-domeinen bevestigen minder makkelijk aanvaarden dan vrouwen (Handley et al., 2015).
          Ook in Nederland is weerstand ten opzichte van genderbiasonderzoek onderzocht. Marieke
          Van den Brink (2015) onderscheidt drie types reacties bij academische beleidsmakers:
          weerstand ten opzichte van de gebruikte methodes en epistemologie (bijv. ten opzichte van
          kwalitatief onderzoek of onderzoek vanuit feministische hoek), weerstand ten opzichte van
          de inhoud en resultaten van het onderzoek, en engagement om gender bias tegen te gaan.
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

    .side-menu {
      left: 0;
      top: 0;
      width: 150px;
      font-size: smaller;
    }

    .side-menu li {
      line-height: 20px;
      margin-bottom: 5px;
    }

    .side-menu li:hover {
      cursor: pointer;
    }
  `]
})
export class ImplicitBiasPageComponent implements OnInit, AfterViewInit {

  @ViewChild('sticky') stickyMenu: ElementRef;
  @ViewChild('wat') wat: ElementRef;
  @ViewChild('waar') waar: ElementRef;
  @ViewChild('doen') doen: ElementRef;
  @ViewChild('minder') minder: ElementRef;
  @ViewChild('bias') bias: ElementRef;
  private sticked = false;
  private menuPosition;
  private anchorPositions;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.menuPosition = getOffset(this.stickyMenu.nativeElement);
    this.anchorPositions = {
      wat: getOffset(this.wat.nativeElement),
      waar: getOffset(this.waar.nativeElement),
      doen: getOffset(this.doen.nativeElement),
      minder: getOffset(this.minder.nativeElement),
      bias: getOffset(this.bias.nativeElement)
    };
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= this.menuPosition.top) {
      this.sticked = true;
      const el = this.stickyMenu.nativeElement;
      const {left, top} = this.menuPosition;
      el.style.left = `${left}px`;
      el.style.top = `20px`;
      el.classList.add('position-fixed');
      el.classList.remove('position-relative');
    } else {
      const el = this.stickyMenu.nativeElement;
      el.style.left = '0';
      el.style.top = '0';
      el.classList.add('position-relative');
      el.classList.remove('position-fixed');
    }
  }

  jump(target) {
    // const {top} = getOffset(target);
    // window.scrollTo({top, behavior: 'smooth'});
    const {top} = this.anchorPositions[target];
    window.scrollTo({top, behavior: 'smooth'});
  }

}

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
}
