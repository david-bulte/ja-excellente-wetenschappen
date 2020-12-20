import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-covid-toolbox',
  template: `

    <div class="d-flex flex-column align-items-center w-100 position-relative">

      <div class="position-absolute side-menu d-none d-lg-block" #sticky>
        <ul class="list-inline text-muted">
          <li>
            <button class="btn btn-link text-muted" [ngxScrollTo]="'#begrijp'">Begrijp corona-impact door erover te
              lezen
            </button>
          </li>
          <li>
            <button class="btn btn-link text-muted" [ngxScrollTo]="'#communiceer'">Communiceer over de impact van de
              coronacrisis op jouw werk tijdens beoordelingen
            </button>
          </li>
          <li>
            <button class="btn btn-link text-muted" [ngxScrollTo]="'#bewust'"> Maak anderen bewust van de ongelijke
              impact van de coronacrisis
            </button>
          </li>
          <li>
            <button class="btn btn-link text-muted" [ngxScrollTo]="'#rekening'">Houd rekening met corona-impact bij
              beoordelingen
            </button>
          </li>
          <li>
            <button class="btn btn-link text-muted" [ngxScrollTo]="'#ondersteun'">Ondersteun een gezonde work-life
              balans
            </button>
          </li>
        </ul>
      </div>

      <div class="d-none d-md-block">
        <div class="text-container d-flex flex-row align-items-stretch toolbox-images">
          <div><a [ngxScrollTo]="'#begrijp'"><img src="assets/covid/toolbox-1.png"></a></div>
          <div class="d-flex flex-column toolbox-images--right">
            <div class="d-flex flex-row">
              <div><a [ngxScrollTo]="'#communiceer'"><img src="assets/covid/toolbox-2.png"></a></div>
              <div><a [ngxScrollTo]="'#bewust'"><img src="assets/covid/toolbox-3.png"></a></div>
            </div>
            <div class="d-flex flex-row">
              <div><a [ngxScrollTo]="'#rekening'"><img class="toolbox-4" src="assets/covid/toolbox-4.png"></a></div>
              <div><a [ngxScrollTo]="'#ondersteun'"><img class="toolbox-5" src="assets/covid/toolbox-5.png"></a></div>
            </div>
          </div>
        </div>
      </div>

      <div class="d-block d-md-none">
        <div class="text-container d-flex flex-column align-items-stretch toolbox-images toolbox-images--small">
          <div><a [ngxScrollTo]="'#begrijp'"><img src="assets/covid/toolbox-1.png"></a></div>
          <div><a [ngxScrollTo]="'#communiceer'"><img src="assets/covid/toolbox-2.png"></a></div>
          <div><a [ngxScrollTo]="'#bewust'"><img src="assets/covid/toolbox-3.png"></a></div>
          <div><a [ngxScrollTo]="'#rekening'"><img class="toolbox-4" src="assets/covid/toolbox-4.png"></a></div>
          <div><a [ngxScrollTo]="'#ondersteun'"><img class="toolbox-5" src="assets/covid/toolbox-5.png"></a></div>
        </div>
      </div>

      <div class="text-container" id="begrijp">
        <h2>
          Begrijp corona-impact door erover te lezen
        </h2>

        <ul class="pl-4">
          <li>
            <a [routerLink]="'/covid/facts-and-figures'">Lees over de ongelijke impact van corona op wetenschappers (m,
              v, x) met zorgtaken of een zware onderwijslast.</a>
          </li>
          <li>
            <a [routerLink]="'/covid/facts-and-figures'">Informeer je aan de hand van de handige factsheet.</a>
          </li>
          <li><a [routerLink]="'/covid/facts-and-figures'">Lees enkele van de artikels in de referenties bij de feiten
            figuren.</a></li>
        </ul>
      </div>

      <div class="text-container" id="communiceer">
        <h2>
          Communiceer over de impact van de coronacrisis op jouw werk
        </h2>

        <ul class="pl-4">
          <li>Communiceer open over de positieve én negatieve impact van de coronacrisis op jouw werk.</li>
          <li>Maak officieel melding van de impact van de coronacrisis op jouw werk
            (bijvoorbeeld door enquêtes in te vullen, door melding te maken bij officiële instanties, etc.)
          </li>
          <li>Beschrijf duidelijk je persoonlijke situatie (bijvoorbeeld in motivatiebrieven, personal statements,
            ruimte voor carrière onderbrekingen, etc.).
            Duid aan welk percentage van je tijd je normaal kan besteden aan onderzoek, onderwijs en dienstverlening
            en hoe dit is veranderd tijdens de coronacrisis
            (door bijvoorbeeld extra onderwijsbelasting, zorgtaken, fysieke of mentale problemen, etc.)
          </li>
          <li>Geef duidelijk aan welke (onderzoeks)doelstellingen wel en niet behaald zijn.
            Indien doelstellingen niet behaald zijn, leg uit waarom
            (bijvoorbeeld door een heroriëntering van het onderzoek, door extra onderwijsbelasting, zorgtaken,
            sluiting archieven en labo’s, etc.).
          </li>
          <li>Geef aan welke andere, niet-vooropgestelde (onderzoeks)doelstellingen er eventueel behaald zijn.</li>
          <li>Geef aan welke extra taken je hebt opgenomen tijdens de coronacrisis:
            onderwijs, leiderschap, mentorschap, vrijwilligerswerk, etc.
          </li>
          <li>Geef aan welke nieuwe vaardigheden je hebt ontwikkeld tijdens de coronacrisis:
            bijvoorbeeld online teaching, leiderschap, mentorschap, etc.
          </li>
        </ul>


        <div class="text-container" id="bewust">
          <h2>
            Maak anderen bewust van de ongelijke impact van de coronacrisis
          </h2>

          <ul class="pl-4">
            <li><a [routerLink]="'/covid/facts-and-figures'">Deel de handige factsheet.</a></li>
            <li>Deel informatie over corona-impact via sociale media.</li>
            <li>Praat over de impact van de coronacrisis op jouw werk. Die kan zowel positief als negatief zijn.</li>
            <li>Geef zelf de impact van de coronacrisis aan in aanvragen, interviews, enz. ook als er niet naar gevraagd
              wordt.
            </li>
            <li>Maak officieel melding van de impact van de coronacrisis op jouw werk (bijvoorbeeld door enquêtes in te
              vullen,
              door melding te maken bij officiële instanties, etc.) ook als er niet naar gevraagd wordt.
            </li>
            <li>Wees eerlijk over jouw situatie,
              ook als je jouw doelstellingen net beter hebt kunnen behalen door de coronacrisis.
            </li>
            <li>Voeg een Corona-impact statement toe aan je email-handtekening.
              Maak anderen bewust van het feit dat je bv. meer onderwijs opneemt en/of ouderschapsverlof
              en dat je daardoor minder snel emails kan opvolgen.
            </li>
            <li>Stel een out-of office in op de dagen dat je niet werkt door (corona)ouderschapsverlof.</li>

          </ul>

        </div>

        <div class="text-container" id="rekening">
          <h2>
            Houd rekening met corona-impact bij beoordelingen
          </h2>

          <ul class="pl-4">
            <li>Informeer (mede-)commissieleden over de (ongelijke) impact van corona op het dossier van kandidaten.
              Voorzitters kunnen commissieleden informeren <a [routerLink]="'/covid/facts-and-figures'">
                aan de hand van de handige factsheet.</a></li>
            <li>Voorzie ruimte voor kandidaten om de impact van de coronacrisis toe te lichten
              (bijvoorbeeld in een aparte rubriek, bij de personal statement of
              biosketch, in reflectieverslagen of inpassingsteksten en tijdens interviews).
            </li>
            <li>Houd rekening met de context van de individuele onderzoeker.
              Onderzoek toont aan dat de impact van de coronacrisis niet gelijk is:
              alhoewel 70% een negatieve impact ervaarde, was deze voor 30% neutraal of zelfs positief
              (bv. meer tijd om te schrijven). Stel verwachtingen daarom niet zomaar (naar beneden)
              bij voor iedereen maar houd rekening met de persoonlijke context,
              zoals beschreven door de onderzoeker zelf (bijvoorbeeld in een personal statement of biosketch).
            <li>Maak geen assumpties op basis van het CV of gender van een kandidaat,
              maar laat kandidaten zelf de persoonlijke situatie toelichten
            </li>
            (bijvoorbeeld in een bijzondere rubriek of tijdens een interview).
            Dit vermijdt <a [routerLink]="'/implicit-gender'">implicit bias.</a>
            <li>Spreek af op welke manier er rekening wordt gehouden met de context van de individuele onderzoeker
              en communiceer dit transparant naar de kandidaten.
              Wordt er bijvoorbeeld rekening gehouden met de effectieve onderzoekstijd,
              vraag dan vooraf aan de kandidaten om de effectieve onderzoekstijd mee te delen in het dossier
              (inclusief de effectieve onderzoekstijd tijdens de coronacrisis).
            </li>
            <li>Valoriseer een brede waaier aan relevante academische taken
              (onderwijs, onderzoek, dienstverlening, mentorschap, leiderschap, etc.).
            <li>Laat kandidaten zelf hun belangrijkste verwezenlijkingen opsommen en toelichten.</li>
            <li>Kijk wat er wel behaald is (in plaats van wat er niet behaald is).
              Misschien zijn bepaalde doelstellingen op een andere manier behaald? Of zijn er bijkomende doelstellingen
              behaald?
            </li>
            <li>Houd rekening met de langetermijneffecten van de coronacrisis.
              Onderzoekers kunnen doelstellingen niet zomaar later inhalen.
              Het inhalen kost namelijk ook tijd en energie, wat dan weer een impact heeft op andere doelstellingen of
              op een gezonde work-life balans (zie onder).
            </li>

          </ul>

        </div>
        <div class="text-container" id="ondersteun">
          <h2>
            Ondersteun een gezonde work-life balans
          </h2>

          <ul class="pl-4">
            <li>Vermijd om te (over)compenseren op minder drukke momenten. Gun jezelf de adempauze die je nodig hebt.</li>
            <li>Bewaak een gezond werkritme. Meer is niet altijd beter.</li>
            <li>Wees mild voor jezelf en voor anderen.</li>
            <li>Neem (corona-)ouderschapsverlof of andere verlofdagen op en communiceer hierover via verschillende kanalen
                (op je CV, in je email-handtekening, etc).</li>
            <li>Laat je contract in percentage verminderen wanneer zorgtaken niet langer te combineren zijn met je werk
              en communiceer hierover via verschillende kanalen (op je CV, in je email-handtekening, etc).</li>
            <li>(Indien van toepassing), pleit voor een pro-rata-verlenging van je contract met de duur van het verlof.</li>
            <li>Voor leidinggevenden: Faciliteer het opnemen van (corona)ouderschapsverlof door mee na te denken
              over wie welke taken kan overnemen en door te waarborgen dat tijdelijke contracten pro-rata-verlengd worden.</li>
            <li>Voor leidinggevenden: Houd in selectie- en bevorderingsprocedures rekening met
              de effectieve onderzoekstijd van kandidaten die niet voltijds werken of werkonderbrekingen hebben gehad.</li>
            <li>Wees een goed rolmodel met betrekking tot work-life balans door geregeld vakantiedagen op te nemen,
              out-of-office berichten in te stellen, deel te nemen aan sociale activiteiten die coronaproof zijn, …</li>
          </ul>

        </div>

      </div>
    </div>
  `,
  styleUrls: ['covid-toolbox-page.component.scss']
})
export class CovidToolboxPageComponent implements OnInit, AfterViewInit {

  @ViewChild('sticky') stickyMenu: ElementRef;
  private sticked = false;
  private menuPosition;
  private anchorPositions;

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
