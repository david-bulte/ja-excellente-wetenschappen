import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  template: `

    <div class="d-flex flex-column align-items-center w-100 position-relative">

      <div class="position-absolute side-menu d-none d-lg-block" #sticky>
        <ul class="list-inline text-muted">
          <li (click)="jump('begrijp')">Begrijp bias door erover te lezen</li>
          <li (click)="jump('rekening')">Houd rekening met <i>implicit bias</i> tijdens beoordelingen</li>
          <li (click)="jump('leguit')">Leg anderen uit dat <i>implicit bias</i> bestaat</li>
          <li (click)="jump('talenten')">Kom als vrouw uit voor je talenten</li>
          <li (click)="jump('zichtbaar')">Stimuleer succesvolle vrouwen om zichtbaar te zijn</li>
          <li (click)="jump('ondersteun')">Ondersteun een gezonde work-life balans</li>
        </ul>
      </div>

      <div class="text-container mb-3">
        <img src="assets/img/Infographic_Gender_bias_toolbox.png" class="w-100">
      </div>

      <div class="text-container" #begrijp>
        <h2>
          Begrijp bias door erover te lezen
        </h2>

        <ul>
          <li>
            Check je eigen bias: <a href="https://implicit.harvard.edu/implicit/takeatest.html" target="_blank">
            Harvard toolkit implicit bias</a>
          </li>
          <li>
            <a [routerLink]="'/links'">Lees over <i>implicit bias</i></a>
          </li>
          <li>Volg een gender bias training (indien voorhanden op jouw universiteit)</li>
        </ul>
      </div>

      <div class="text-container" #rekening>
        <h2>
          Houd rekening met <i>implicit bias</i> tijdens beoordelingen
        </h2>

        <h3>
          1. Vooraf
        </h3>

        <ul>
          <li>Bij vacatures, zorg voor een voldoende wijde verspreiding van de vacature waardoor verschillende netwerken
            worden aangesproken.
          </li>
          <li>Stel gender/diversiteitsspitsen aan die getraind zijn om vooringenomenheid te erkennen en betrek hen bij
            elke stap van het beoordelingsproces.
          </li>
          <li>Informeer commissieleden over <i>implicit bias</i>. Dit kan door een korte uitleg van de voorzitter van de
            selectiecommissie of door het bekijken van een instructievideo, zoals deze <a
              href="https://www.youtube.com/watch?v=g978T58gELo&index=2&list=PLIRaTLZqki-CuOpGbTSp_CUgJvyBM_Btj&t=0s"
              target="_blank">Recruitment bias in Research institutes</a>.
          </li>
          <li>Let op taalgebruik. Taal in vacatures en referentiebrieven bevat vaak woorden die we onbewust met een
            specifiek gender associëren. Via deze ‘gender bias calculator’, kan je een tekst scannen op woorden die als
            expliciet mannelijk of vrouwelijk worden gepercipieerd: <a href="https://www.tomforth.co.uk/genderbias/"
                                                                       target="_blank">https://www.tomforth.co.uk/genderbias/</a>
          </li>
        </ul>

        <h3>
          2. Selectiecriteria
        </h3>

        <ul>
          <li>Maak selectiecriteria duidelijk en verwijder ‘standaardzinnen’ waardoor weinig relevante criteria mee
            geëvalueerd zouden worden.
          </li>
          <li>Leg minimumvereisten vast. Zo kan voor publicatie-output een drempel vastgelegd worden. Wanneer de
            kandidaten deze drempel bereiken, wordt dit criterium niet verder besproken.
          </li>
          <li>Vóór commissieleden dossiers bekijken, moeten ze duidelijk gebrieft worden over de criteria, wat ze
            betekenen en hoe ze worden geëvalueerd.
          </li>
        </ul>

        <h3>
          3. Beoordelen van dossiers
        </h3>

        <ul>
          <li>Werk met een evaluatietabel waarbij de namen van de kandidaten in de kolommen worden vermeld en elk
            criterium dat meetelt in de beoordeling in een rij wordt geplaatst. Dit helpt de commissieleden om alle
            dossiers op eenzelfde manier te analyseren.
          </li>
          <li>Voorzitters in selectiecommissies hebben een belangrijke rol. Zij zorgen ervoor dat alle leden van de
            commissie aan het woord komen, dat er per kandidaat evenveel tijd wordt besteed, dat er vermeden wordt enkel
            over de voorkeurskandidaat te praten, dat de aannames van de commissieleden over welke criteria belangrijk
            zijn en hoe die worden geëvalueerd correct zijn.
          </li>
          <li>Vermijd het afleiden van familieverplichtingen uit het CV van een kandidaat en tel geen ‘gaten in een cv’
            als automatisch negatief. Geef kandidaten de gelegenheid om hiaten te verklaren door er tijdens de
            interviewfase direct naar te vragen.
          </li>
          <li>Houd geen rekening met informele informatie.</li>
        </ul>

        <h3>
          4. Interviews
        </h3>

        <ul>
          <li>Zorg ervoor dat alle gesprekken met kandidaten op eenzelfde manier verlopen. Werk met een interviewschema
            en
            stel aan alle kandidaten dezelfde vragen.
          </li>
          <li>Geef de score tijdens de gesprekken en niet nadat alle kandidaten werden gezien. Een mogelijkheid is om
            elke
            beoordelaar een specifiek criterium toe te wijzen. Hierdoor wordt het makkelijker om de kandidaten
            rechtstreeks, op basis van de vooraf opgestelde criteria, te vergelijken.
          </li>
          <li>Eindevaluaties waarbij de kandidaten vergeleken worden, verlopen best per criterium.</li>
          <li>Neem geen finale beslissingen op de dag van de gesprekken zelf, maar laat er een paar dagen tijd overgaan,
            vooraleer de finale scores van alle commissieleden moeten ingediend en bekeken worden.
          </li>
          <li>Reageer als je impliciete bias herkent.</li>
        </ul>

        <h3>
          5. Feedback
        </h3>

        <ul>
          <li>Geef eerlijke feedback aan iedereen die is geëvalueerd. Zo krijgt elke kandidaat inzicht in zijn/haar
            dossier en beoordeling en hangt dit niet af van informele netwerken.
          </li>
        </ul>

        <p class="text-muted small">
          Geïnspireerd op: Claartje Vinkenburg, Keynote voor HeforShe campagne, Ghent, 10 november 2016 en <a
          href="https://biasinterrupters.org/#tools" target="_blank">https://biasinterrupters.org/#tools</a>
        </p>

      </div>

      <div class="text-container" #leguit>
        <h2>
          Leg anderen uit dat <i>implicit bias</i> bestaat
        </h2>

        <ul>
          <li>Reageer als je <i>implicit bias</i> herkent op de werkvloer. Houd er wel rekening mee dat dit doorgaans onbewust
            en
            onbedoeld gebeurt.
          </li>
          <li>Overtuig anderen van het belang aan (gender)diversiteit. Onderzoek toont aan dat (gender)diverse groepen
            beter presteren en meer betrokken, innovatief en loyaal zijn. Zij hebben een betere collectieve
            intelligentie
            waardoor de prestaties van de groep en haar leden verbeteren en overwegen een breder scala aan
            alternatieven,
            waardoor er betere beslissingen worden genomen en het probleemoplossend vermogen van de groep omhoog gaat.
            (<a href="https://biasinterrupters.org/wp-content/uploads/Talking-Points-for-your-CEO.pdf" target="_blank">https://biasinterrupters.org/wp-content/uploads/Talking-Points-for-your-CEO.pdf</a>)
          </li>
          <li>Download en print een van onze posters, hang ze uit, en ondersteun zo mee de campagne ‘wetenschap =
            m+v+x’.
          </li>
          <li>Deel informatie op sociale media met de hashtag #wetenschapismvx.</li>
          <li>Organiseer een debat over gender bias in je vakgroep of nodig een expert over om hierover te spreken
            (eventueel in samenwerking met de diversiteits- of gendermedewerker van je universiteit).
          </li>
        </ul>

      </div>

      <div class="text-container" #talenten>
        <h2>
          Kom als vrouw uit voor je talenten
        </h2>

        <ul>
          <li>Vaak hebben vrouwen (maar ook mannen) last van het <b>imposter syndrome of oplichterssyndroom</b>. Ook al
            hebben ze duidelijk bewijs geleverd van hun competentie, toch blijven mensen met dit syndroom ervan
            overtuigd
            dat ze hun succes niet verdienen. Ze schrijven hun succes toe aan geluk, toevallige timing of het ongewild
            misleiden van anderen die daardoor denken dat ze competenter en intelligenter zijn dan ze zelf geloven. Dit
            is
            op zich een normaal psychologisch mechanisme, maar het kan mensen ook beletten om hun talenten ten volle te
            tonen of te benutten.
          </li>
          <li>Cultiveer een ‘<b>groei-mindset</b>’ (Carol S. Dweck’s idee) om je te talenten te blijven verbeteren.
            Volgens Carol S. Dweck hebben vrouwen vaker het idee dat ze bevestiging nodig hebben en haken ze af wanneer
            deze uitblijft. Een groei-mindset zou volgens haar een goede reflex zijn om jezelf te blijven verbeteren.
          </li>
        </ul>

      </div>

      <div class="text-container" #zichtbaar>
        <h2>
          Stimuleer succesvolle vrouwen om zichtbaar te zijn
        </h2>

        <ul>
          <li>Nodig vrouwelijke sprekers binnen je vakgebied uit als keynote bij het organiseren van symposia,
            conferenties of debatten.
          </li>
          <li>Stimuleer goede vrouwelijke wetenschappers om te kandideren voor belangrijke posities, beurzen, en prijzen
            …. of nomineer ze indien mogelijk.
          </li>
          <li>Let erop dat standpunten van vrouwen in debatten of vergaderingen niet ondergesneeuwd worden door
            wetenschappers die graag het woord voeren.
          </li>
          <li>Vraag ‘stille’ collega’s expliciet naar hun mening (zeker wanneer ze expertise hebben in een bepaald
            gebied)
            en waardeer verschillende meningen.
          </li>
          <li>Let op voor het ‘<b>queen-bee-syndroom</b>’. Hierbij zal een vrouw die een autoriteitspositie bereikt
            heeft
            soms kritischer zijn ten opzichte van ondergeschikte vrouwen, dan mannen. Hierdoor maakt ze het moeilijker
            voor andere vrouwen om door te groeien tot hetzelfde niveau als zijzelf.
          </li>
          <li>Let op een goede taakverdeling tussen verschillende medewerkers en laat taken roteren: vaak geeft men
            taken
            die onzichtbaarheid in de hand werken (vergaderingen vastleggen, notities maken, …) onbedoeld aan vrouwen.
            Laat dit werk ook niet afhangen van vrijwilligers: vrouwen zullen zich vaker als vrijwilliger opgeven.
          </li>
        </ul>

      </div>

      <div class="text-container" #ondersteun>
        <h2>
          Ondersteun een gezonde work-life balans
        </h2>

        <ul>
          <li>Plan vergaderingen binnen de reguliere kantooruren.</li>
          <li>Faciliteer ouderschapsverlof voor m+v+x.</li>
          <li>Faciliteer thuiswerken/telewerken (indien mogelijk).</li>
          <li>Houd in selectie- en bevorderingsprocedures rekening met de effectief gepresteerde onderzoekstijd van
            kandidaten die niet voltijds werken, of werkonderbrekingen gehad hebben.
          </li>
          <li>Wees een goed rolmodel met betrekking tot work-life balans door geregeld vakantiedagen op te nemen,
            out-of-office berichten in te stellen, deel te nemen aan sociale activiteiten, …
          </li>
        </ul>

      </div>

    </div>
  `,
  styles: []
})
export class ToolboxPageComponent implements OnInit, AfterViewInit {

  @ViewChild('sticky') stickyMenu: ElementRef;
  @ViewChild('begrijp') begrijp: ElementRef;
  @ViewChild('rekening') rekening: ElementRef;
  @ViewChild('leguit') leguit: ElementRef;
  @ViewChild('talenten') talenten: ElementRef;
  @ViewChild('zichtbaar') zichtbaar: ElementRef;
  @ViewChild('ondersteun') ondersteun: ElementRef;
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
      begrijp: getOffset(this.begrijp.nativeElement),
      rekening: getOffset(this.rekening.nativeElement),
      leguit: getOffset(this.leguit.nativeElement),
      talenten: getOffset(this.talenten.nativeElement),
      zichtbaar: getOffset(this.zichtbaar.nativeElement),
      ondersteun: getOffset(this.ondersteun.nativeElement)
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
