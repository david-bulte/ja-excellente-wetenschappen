import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  template: `
    <h2>
      Wat kun je eraan doen?
    </h2>

    <p>
      Onbewuste schema's zijn eigen aan de menselijke cognitie. Van implicit bias
      geraken we niet af, maar we kunnen wel (1) er bewust van zijn en er zo rekening
      mee houden en (2) jongeren niet inprenten met het "de-professor-is-een-man"-
      schema, dankzij rolmodellen. Concreet:
    </p>

    <ul class="list-inline">
      <li>
        1a. Bias begrijpen, door erover te lezen
      </li>
      <li>
        1b. Bewust rekening houden met implicit bias bij beoordelingen
      </li>
      <li>
        1c. Anderen duidelijk maken dat deze mechanismen bestaan
      </li>
      <li>
        2a. Als vrouw in de academische wereld zichtbaar uitkomen voor je talenten
      </li>
      <li>
        2b. Succesvolle vrouwen stimuleren om zichtbaar te zijn
      </li>
    </ul>

    <p>
      Universiteiten kunnen leiderschap, visie en strategie aan de dag leggen, structurele
      maatregelen nemen en ervoor zorgen dat die effectief uitgevoerd worden doorheen
      de hele instelling. Welke dat zijn, wordt beschreven in het LERU-rapport "Implicit bias
      in academia" (2018).
    </p>

    <h2>
      Nog meer cognitieve mechanismen
    </h2>

    <p>
      Vrouwelijke hoogleraren zijn schaars, maar dat is niet alleen het resultaat van
      implicit bias bij oude mannen in selectiecommissies. Twee andere onbewuste
      processen wijzen erop dat vrouwen zelf het onevenwicht in stand kunnen houden:
    </p>

    <ul>
      <li>
        "Stereotype threat": het risico dat mensen zich conformeren aan een
        stereotype van hun sociale groep, waardoor hun prestaties verminderen.
      </li>
      <li>
        Queen-bee-syndroom: een vrouw in een autoriteitspositie behandelt
        ondergeschikten kritischer als die vrouwen zijn.
      </li>
    </ul>

    <h2>
      Wat kan ik doen? (pledge)
    </h2>

    <h2>
      Posters om te downloaden
    </h2>

    <ul>
      <li>
        <a href="https://implicit.harvard.edu/implicit/takeatest.html">Harvard toolkit implicit bias</a>
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=g978T58gELo&index=2&list=PLIRaTLZqki-CuOpGbTSp_CUgJvyBM_Btj&t=0s">
          Recruitment bias in Research institutes
        </a>: filmpje gemaakt door Catalaanse instelling voor kankeronderzoek,
        wordt intussen ook gebruikt door het ERC. Dit is een soort inleidingsfilmpje voor mensen die in
        selectiecommissies zetelen om zich bewust te zijn van bias vooraleer een selectie begint:
      </li>
    </ul>

    <h3>
      Tips om impliciete bias uit te sluiten in selectie- of bevorderingsprocedures:
    </h3>

    <ul>
      <li>
        Maak de selectiecriteria die specifiek voor die functie belangrijk zijn, duidelijk, en verwijder
        ‘standaardzinnetjes’ waardoor weinig relevante criteria ook mee gescoord zouden worden.
      </li>
      <li>
        Voor alle criteria kunnen minimumvereisten vastgelegd worden. Zo kan voor publicatie-output een drempel
        vastgelegd worden. Wanneer de kandidaten deze drempel bereiken, wordt dit criterium niet verder besproken,
        gezien het gewenste niveau op vlak van publicaties werd bereikt. Dit geeft meer tijd om de andere criteria te
        beoordelen.
      </li>
      <li>
        Vóór commissieleden dossiers bekijken, moeten ze duidelijk gebrieft worden over de criteria, wat ze betekenen en
        hoe ze worden gescoord.
      </li>
      <li>
        Werk met een evaluatietabel waar de namen van de kandidaten in de kolommen worden vermeld, en elk criterium dat
        meetelt in de beoordeling, in een rij wordt geplaatst. Dit verplicht om alle kandidaten op dezelfde manier te
        analyseren.
      </li>
      <li>
        Voorzitters in selectiecommissies spelen een grote rol: ze kunnen ervoor zorgen dat alle leden van de commissie
        aan het woord komen, dat er per kandidaat evenveel tijd wordt besteed, dat er vermeden wordt enkel over de
        voorkeurskandidaat te praten, en dat de aannames van de commissieleden over welke criteria belangrijk zijn, en
        hoe die worden gescoord, correct zijn.
      </li>
      <li>
        Hou geen rekening met informele informatie die via-via is bekomen.
      </li>
      <li>
        Zorg dat alle gesprekken met kandidaten op eenzelfde manier verlopen, en dat dezelfde vragen worden gesteld.
      </li>
      <li>
        Geef de score tijdens de gesprekken, en niet pas nadat alle kandidaten werden gezin. Een mogelijkheid is de
        taken te verdelen, en elke assessor een specifiek criterium toe te wijzen. Hierdoor wordt het makkelijker om de
        kandidaten rechtstreeks, op basis van de vooraf opgestelde criteria, te vergelijken.
      </li>
      <li>
        Eindevaluaties waarbij de kandidaten vergeleken worden, verlopen best per criterium.
      </li>
      <li>
        Neem geen finale beslissingen op de dag van de gesprekken zelf, maar laat er een paar dagen tijd overgaan,
        vooraleer de finale scores van alle commissieleden moeten ingediend en bekeken worden.
      </li>
      <li>
        Reageer als je impliciete bias herkent. Een aantal voorbeelden hieronder:
        de onafhankelijkheid van vrouwen wordt vaker in vraag gesteld dan bij mannen.
      </li>
      <li>
        Let op beladen taalgebruik.
      </li>
    </ul>
  `,
  styles: []
})
export class ToolboxPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
