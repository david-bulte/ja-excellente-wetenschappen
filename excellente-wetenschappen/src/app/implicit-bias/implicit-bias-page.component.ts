import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-implicit-bias',
  template: `

    <div class="d-flex flex-column align-items-center w-100 position-relative">

      <div class="position-absolute side-menu d-none d-lg-block" #sticky>
        <ul class="list-inline text-muted">
          <li>
            <button class="btn btn-link text-muted" [ngx-scroll-to]="'#wat'">Wat is <i>implicit bias</i>?</button>
          </li>
          <li>
            <button class="btn btn-link text-muted" [ngx-scroll-to]="'#waar'">Waar komt <i>implicit bias</i> vandaan?</button>
          </li>
          <li>
            <button class="btn btn-link text-muted" [ngx-scroll-to]="'#doen'">Wat kunnen we er aan doen?</button>
          </li>
          <li>
            <button class="btn btn-link text-muted" [ngx-scroll-to]="'#minder'">Minder vrouwelijke professoren door <i>implicit bias</i></button>
          </li>
          <li>
            <button class="btn btn-link text-muted" [ngx-scroll-to]="'#bias'">Bias ten opzichte van onderzoek naar gender bias</button>
          </li>
        </ul>

      </div>

      <div class="text-container" id="wat">
        <h2>
          Wat is <i>implicit bias</i>?
        </h2>

        <p>
          <i>Implicit bias</i> (impliciete vooroordelen) is een term die gebruikt wordt voor onbewuste vooroordelen die mensen
          met zich meedragen. Iedereen heeft associaties en voorkeuren (of aversies), zonder zich daarvan bewust te
          zijn. <i>implicit bias</i> is geen expliciete vooringenomenheid, maar een psychologisch mechanisme dat mensen snel in
          categorieën indeelt en sterk beïnvloed wordt door onze ervaringen, omgeving, scholing en beelden uit onze
          maatschappij. <i>Implicit bias</i> treft iedereen en is niet te voorkomen.
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

      <div class="text-container" id="waar">
        <h2>
          Waar komt <i>implicit bias</i> vandaan?:
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

      <div class="text-container" id="doen">
        <h2>
          Wat kunnen we er aan doen?
        </h2>

        <p>
          Het is vooral zaak om te erkennen dat bias bestaat en dat we dit kunnen tegengaan door ons bewust te zijn van
          onze associaties. Tegelijkertijd kunnen we onze associaties bijstellen op basis van nieuwe ervaringen door
          hier extra aandacht aan te geven. In processen die carrières beïnvloeden zoals aanstellingen en bevorderingen,
          maar ook in het toekennen van fondsen en het uitnodigen van sprekers voor congressen kunnen er maatregelen
          genomen worden om te voorkomen dat beslissingen onbedoeld beïnvloed worden door <i>implicit bias</i>.
        </p>
        
        <p>
          <a [routerLink]="'/toolbox'">Bezoek de toolbox pagina voor tips over wat jij kan doen.</a>
        </p>
      </div>

      <div class="text-container" id="minder">
        <h2>
          Minder vrouwelijke professoren door <i>implicit bias</i>
        </h2>

        <p>
          Hoewel vrouwen niet de enigen zijn die nadeel ondervinden van <i>implicit bias</i>, toont wetenschappelijk
          onderzoek aan dat <i>implicit bias</i> belangrijke struikelblokken creëert in de academische loopbaan van
          vrouwen. Al deze drempels kunnen samen een groot effect hebben op de carrière van jonge academici.
          Een aantal voorbeelden van deze struikelblokken:
        </p>

        <h3>
          Vacatures
        </h3>

        <p>
          Taalgebruik in vacatures kan mannelijk of vrouwelijk gekleurd zijn. In beroepen waar het genderonevenwicht groot is, is het taalgebruik in de vacatures vaker 
          <a href="https://psycnet.apa.org/record/2011-04642-001" target="_blank">gendergekleurd</a>. 
          Het gebruik van genderneutraal taalgebruik heeft een 
          <a href="https://www.ncbi.nlm.nih.gov/pubmed/21058576" target="_blank">positief effect</a> op de kans dat vrouwen zich kandidaat stellen voor een functie en
          kan helpen genderonevenwichten aan te pakken.
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
          <a href="http://science.sciencemag.org/content/347/6219/262/tab-pdf" target="_blank">Aanbevelingsbrieven</a> voor mannelijke kandidaten zijn gemiddeld langer en verwijzen vaker naar talenten en
          excellentie, terwijl die voor vrouwelijke kandidaten het vaker hebben over onderwijscapaciteiten. 
          Aanbevelingsbrieven voor kandidaten, zowel mannelijke als vrouwelijke, zouden een diversiteit van
          talenten moeten benadrukken.
        </p>

        <h3>
          Geselecteerd worden voor posities
        </h3>

        <p>
          Uit een Amerikaanse dubbel-blind <a href="https://www.pnas.org/content/109/41/16474" target="_blank">gerandomiseerde studie</a> blijkt dat identieke cv’s voor een functie
          van labomanager die rondgestuurd werden met een vrouwennaam of een mannennaam verschillend beoordeeld
          werden. De mannelijke namen scoorden significant beter. Nederlands onderzoek laat zien dat <i>implicit bias</i> effect heeft op de procedures
          omtrent aanwervingen en aanstellingen binnen de wetenschap en een 
          <a href="https://journals.sagepub.com/doi/abs/10.1177/1350508411414293" target="_blank">negatief effect</a> hebben op de
          kansen van vrouwelijke kandidaten. Uit een <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4554714/" target="_blank">Amerikaans onderzoek</a> blijkt dat een minimum van 25% vrouwelijke kandidaten, de bias
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
          <a href="https://www.pnas.org/content/109/41/16474" target="_blank">Onderzoek</a> toont aan dat cv’s met de naam van een man een hoger startsalaris en meer
          carrière-mentoring werd aangeboden vergeleken met dezelfde cv’s met de naam van een vrouw. De bias was zelfs sterker bij vrouwelijke dan bij mannelijke
          evaluatoren. Dit geeft aan dat alleen het aantal vrouwen in
          evaluatiecommissies verhogen niet zinvol is. Leden moeten actief geïnformeerd en getraind
          worden om <i>implicit bias</i> te herkennen.
        </p>

        <h3>
          Verkrijgen van funding en fellowships:
        </h3>

        <p>
          Een <a href="https://www.nature.com/articles/387341a0" target="_blank">vroege studie</a> toont aan dat vrouwelijke wetenschappers in Zweden
          ruim twee keer meer moeten publiceren dan hun mannelijke collega’s om dezelfde score te
          krijgen voor een fellowship bij de Medical Research Council. <a href="http://www.festa-europa.eu/public/swedish-report-gender-neutral-process-qualitative-study-evaluation-research-grant-application" target="_blank">Gelijkaardige</a> 
          <a href="https://www.pnas.org/content/112/40/12349" target="_blank"> resultaten</a> zijn
          later herhaaldelijk teruggevonden bij andere funding agencies. Uit deze studies blijkt
          dat vrouwen vergelijkbare scores krijgen voor hun onderzoeksvoorstel maar een lagere score krijgen
          als kandidaat.
        </p>

        <h3>
          Geciteerd worden en mogelijkheid tot samenwerking:
        </h3>

        <p>
          In <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4280285/" target="_blank">een artikel</a> uit 2015 werd aangetoond dat proefpersonen identieke wetenschappelijke papers positiever
          beoordelen als de auteur een man is, en dat men sneller bereid was samen te werken met auteurs van
          wetenschappelijke papers geschreven door mannen.
        </p>

        <h3>
          Uitgenodigd worden als spreker voor congressen:
        </h3>

        <p>
          Bij <a href="https://www.ncbi.nlm.nih.gov/pubmed/23786459" target="_blank">een Europese organisatie van biologen</a> werd vastgesteld dat vrouwen ondervertegenwoordigd waren
          op de sprekerslijsten. 
          <a href="https://www.ncbi.nlm.nih.gov/pubmed/24399856" target="_blank">Verschillende </a> 
          <a href="https://www.ncbi.nlm.nih.gov/pubmed/23185407" target="_blank">studies</a> tonen aan dat het verhogen
          van het aantal vrouwen in de organisatie of symposiumcommissie het aantal vrouwelijke sprekers
          verhoogt en het aantal panels met enkel mannen verlaagt.
        </p>

        <h3>
          Onderwijsevaluaties:
        </h3>

        <p>
          <a href="https://psycnet.apa.org/record/1988-02814-001" target="_blank">Verschillende </a> 
          <a href="http://doi.org/10.1016/j.jpubeco.2016.11.006" target="_blank">onderzoeken </a>
          <a href="http://doi.org/10.1017/S104909651800001X" target="_blank">tonen </a><a href="https://www.tandfonline.com/doi/abs/10.1080/03634529109378821" target="_blank">aan</a> dat studenten vrouwelijke docenten lager evalueren op
          onderwijsevaluaties dan mannelijke docenten. In een klein  <a href="https://link.springer.com/article/10.1007/s10755-014-9313-4" target="_blank">
          online experiment</a> werd aangetoond dat studenten
          docenten hoger evalueren wanneer ze denken dat de docent een man is dan wanneer ze denken dat
          de docent een vrouw is, ongeacht de prestatie van de docent. Toch is gender bias
          in onderwijsevaluaties een complex verhaal. <a href="https://www.tandfonline.com/doi/abs/10.1080/03634529909379169" target="_blank">Sommige</a>
          <a href="https://link.springer.com/chapter/10.1007/1-4020-5742-3_5" target="_blank"> onderzoekers </a>
          <a href="https://psycnet.apa.org/record/1995-45371-001" target="_blank">stellen vast</a> dat vrouwelijke
          lesgevers lager worden gescoord dan hun mannelijke collega’s, anderen vinden dan weer dat
          vrouwelijke lesgevers hoger scoren.
          <a href="https://www.jstor.org/stable/2960028?seq=1#page_scan_tab_contents" target="_blank">Nog</a>
            <a href="https://link.springer.com/article/10.1007%2FBF00125150" target="_blank"> anderen</a> vinden geen verschillen.
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
      
      <div class="text-container" id="bias">
        <h2>
          Bias ten opzichte van onderzoek naar gender bias:
        </h2>

        <p>
          <a href="http://pwq.sagepub.com/content/39/2/194" target="_blank">Onderzoek toont aan</a> dat gender bias ook een rol speelt in het beoordelen van onderzoek,
          inclusief onderzoek naar gender bias. Zo zouden mannen negatiever staan ten opzichte van
          resultaten uit onderzoek naar gender bias in STEM-domeinen (science, technology, engineering,
          mathematics) dan vrouwen. Dit zou <a href="http://www.pnas.org/content/early/2015/10/06/1510649112.short" target="_blank">in het bijzonder gelden</a> voor
          mannelijke STEM-onderzoekers: zij zouden onderzoeksresultaten die gender bias in
          STEM-domeinen bevestigen minder makkelijk aanvaarden dan vrouwen.
          Ook in Nederland is weerstand ten opzichte van genderbiasonderzoek onderzocht. <a href="https://www.emeraldinsight.com/doi/abs/10.1108/EDI-01-2015-0004" target="_blank">Marieke
          Van den Brink</a> onderscheidt drie types reacties bij academische beleidsmakers:
          weerstand ten opzichte van de gebruikte methodes en epistemologie (bijv. ten opzichte van
          kwalitatief onderzoek of onderzoek vanuit feministische hoek), weerstand ten opzichte van
          de inhoud en resultaten van het onderzoek, en engagement om gender bias tegen te gaan.
        </p>

        <p>
          <a href="https://www.leru.org/files/implicit-bias-in-academia-full-paper.pdf" target="_blank">Voor meer informatie zie het rapport van LERU </a>
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
export class ImplicitBiasPageComponent implements OnInit, AfterViewInit {

  @ViewChild('sticky') stickyMenu: ElementRef;
  private sticked = false;
  private menuPosition;

  constructor() {
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  ngAfterViewInit(): void {
    this.menuPosition = getOffset(this.stickyMenu.nativeElement);
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

}

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
}
