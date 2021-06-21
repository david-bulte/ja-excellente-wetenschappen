import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-vlaamse-universiteiten',
    template: `

        <div class="d-flex flex-column align-items-center w-100 position-relative">

            <div class="position-absolute side-menu d-none d-lg-block" #sticky>
                <ul class="list-inline text-muted">
                    <li>
                        <button class="btn btn-link text-muted" [ngxScrollTo]="'#kul'">KULeuven
                        </button>
                    </li>
                    <li>
                        <button class="btn btn-link text-muted" [ngxScrollTo]="'#ua'">UAntwerpen
                        </button>
                    </li>
                    <li>
                        <button class="btn btn-link text-muted" [ngxScrollTo]="'#ugent'">UGent
                        </button>
                    </li>
                    <li>
                        <button class="btn btn-link text-muted" [ngxScrollTo]="'#uhasselt'">UHasselt
                        </button>
                    </li>
                    <li>
                        <button class="btn btn-link text-muted" [ngxScrollTo]="'#vub'">VUB</button>
                    </li>
                </ul>
            </div>

            <div class="text-container">
                <p>
                    Mede op aansporen van de Jonge Academie namen alle Vlaamse universiteiten maatregelen om de
                    ongelijke
                    impact van corona op onderzoekers en personeelsleden te verkleinen. In de zomer en herfst van 2020
                    verzamelde de Jonge Academie inspirerende best-practices uit binnen- en buitenland en deelde deze
                    met de
                    rectoren en bevoegde beleidsinstanties van de vijf universiteiten. Hieronder vind je een overzicht
                    van
                    de maatregelen die genomen werden per universiteit. Dit overzicht en de doorverwijzende links zijn
                    bedoeld om individuele onderzoekers zo goed mogelijk te informeren over de structurele maatregelen
                    waarop zij een beroep kunnen doen. Daarnaast kan iedereen een beroep doen op de <a [routerLink]="'/covid/toolbox'">Toolbox van de Jonge
                    Academie</a> om de ongelijke impact van corona in de directe
                    academische
                    omgeving te verkleinen.
                </p>
            </div>

            <div class="text-container" id="kul">
                <h2>
                    KULeuven
                </h2>

                <p>
                    De KU Leuven ontwikkelde een webpagina met gerichte communicatie omtrent Corona-gerelateerde
                    maatregelen (met o.m getuigenissen, informatie over de aanpak van evaluatiecommissies, initiatieven
                    ter ondersteuning van (jonge) onderzoekers i.v.m. onderzoeksvoortgang en mentaal welzijn, evenals
                    een verwijzing naar de corona-factsheet van de Jonge Academie).
                </p>

                <p>
                    Personeelsleden werden aangemoedigd om bij promotie-aanvragen de impact van Covid-19 te documenteren
                    in de biosketch. Voor jonge onderzoekers werd een <a
                        href="https://www.kuleuven.be/english/research/associatienet/phd/corona-contact/corona-contact-point">Corona
                    meldpunt</a> opgericht
                    waar informatie specifiek voor jongere onderzoekers werd gebundeld en hen de mogelijkheid werd
                    geboden hun <i>corona delay</i> online te melden. PhD-studenten die in de afrondingsfase van hun
                    doctoraat significant vertraagd werden door de impact van corona, komen in aanmerking voor
                    bijkomende fondsen om hun mandaat te verlengen.
                </p>

                <p>
                    Voor internationale onderzoekers werd bijkomende groepsondersteuning (<i>corona coaching</i>) voorzien.
                    Deze informatie werd gebundeld in een bestaande webpagina (<a
                        href="https://admin.kuleuven.be/personeel/intranet/loopbaan/ondersteunen-academische-loopbaan/indexOndersteunen"> Ondersteunen en
                    waarderen van diverse academische loopbanen</a>; Engelse versie <a
                        href="https://admin.kuleuven.be/personeel/english/intranet/career-development/supporting-academic-career-paths/index">
                    Supporting and valuing diverse
                    academic career paths</a>) en breed gecommuniceerd, via onder meer de genderspitsen, de facultaire
                    beoordelingscommissies en via de doctoral schools.
                </p>

                <p>
                    In het voorjaar 2021 werd ook een grootschalige <i>corona-survey</i> gelanceerd om te peilen naar de
                    individuele ervaringen van personeelsleden en daaruit (vnl.) lessen te trekken voor een meer
                    flexibele en hybride werkomgeving, conform gewijzigde noden. De resultaten kan men <a
                        href="https://admin.kuleuven.be/mykuleuven/thema/hr-welzijn/organisatie-samenwerking/nieuws/20210610-resultaten-corona-survey?utm_source=mykuleuven&utm_medium=email&utm_campaign=20210610">hier</a> raadplegen.
                </p>

            </div>

            <div class="text-container" id="ua">
                <h2>
                    UAntwerpen
                </h2>

                <p>
                    Aan de UAntwerpen werden diverse initiatieven genomen om bewustzijn over de ongelijke impact van
                    corona te vergroten.
                    Personeelsleden werden aangemoedigd om de impact van COVID-19 te documenteren voor verdere opvolging
                    (<a
                        href="https://pintra.uantwerpen.be/webapps/ua-pintrasite-BBLEARN/module/index.jsp?course_id=_6_1&tid=_39495_1&lid=_43381_1%7C_43391_1&l=nl_PINTRA">De impact van COVID-19 op geplande prestatieafspraken documenteren</a>). Aan Tenure Track-docenten werd
                    specifiek de mogelijkheid geboden om een <i>impact dossier</i> aan te leggen (<a
                        href="https://pintra.uantwerpen.be/webapps/ua-pintrasite-BBLEARN/module/index.jsp?course_id=_6_1&tid=_39495_1&lid=_43381_1%7C_43389_1&l=nl_PINTRA">Mogelijkheid tot het
                    aanleggen van een impactdossier voor TTZAPBOF</a>). Mandaatassistenten konden voor een bijkomende
                    termijn van een jaar worden aangesteld, wanneer uitzonderlijke omstandigheden dit vereisen en na
                    akkoord van de faculteit (<a
                        href="hhttps://pintra.uantwerpen.be/webapps/ua-pintrasite-BBLEARN/module/index.jsp?course_id=_6_1&tid=_39495_1&lid=_43381_1%7C_43393_1&l=nl_PINTRA">Extra jaar voor mandaatassistenten</a>). Ook bestaande programma's werden
                    uitgebreid om tegemoet te komen aan de uitzonderlijke omstandigheden (Talent Center en Career
                    Mentoring; informatie over de combinatie werk-prive, initiatieven rond psychosociaal welzijn, extra
                    opleidingen die inzetten op weerbaarheid, wendbaarheid en leiding geven van op afstand).
                </p>

                <ul>
                    <li>
                        <a href="https://pintra.uantwerpen.be/webapps/ua-pintrasite-BBLEARN/module/index.jsp?course_id=_6_1&tid=_925_1&lid=_35116_1&l=nl_PINTRA">talent
                            center</a>
                    </li>
                    <li>
                        <a href="https://pintra.uantwerpen.be/webapps/ua-pintrasite-BBLEARN/module/index.jsp?course_id=_6_1&tid=_925_1&lid=_35116_1|_38192_1&l=nl_PINTRA">career
                            mentoring
                        </a>
                    </li>
                    <li>
                        <a href="https://pintra.uantwerpen.be/webapps/ua-pintrasite-BBLEARN/module/index.jsp?course_id=_44_1&tid=_2541_1&lid=_2847_1&l=nl_PINTRA">psychosociale
                            ondersteuning</a>
                    </li>
                    <li>
                        <a href="https://pintra.uantwerpen.be/webapps/ua-pintrasite-BBLEARN/module/index.jsp?course_id=_6_1&tid=_925_1&lid=_17931_1|_1568_1&l=nl_PINTRA">opleidingsaanbod
                            voor leidinggevenden</a>
                    </li>
                </ul>

            </div>

            <div class="text-container" id="ugent">
                <h2>
                    UGent
                </h2>

                <p>
                    De UGent erkent de impact van Covid-19 op haar onderzoekers en raadt iedereen binnen haar
                    organisatie aan om zich te informeren over de (soms ongelijke) impact van Corona, deze zichtbaar te
                    maken en hiermee ook rekening te houden bij beoordelingen
                    (<a
                        href="https://www.ugent.be/nl/actueel/corona-en-academische-loopbanen.htm">https://www.ugent.be/nl/actueel/corona-en-academische-loopbanen.htm</a>).
                </p>

                <p>
                    Onderzoekers kunnen melding maken van opgelopen vertragingen via een speciaal daartoe voorzien
                    meldpunt (researchdelay@ugent.be). Doctorandi kunnen uitstel voor hun project vragen, indien hun
                    project een ernstige en niet te remedieren onderbreking of vertraging heeft opgelopen.
                </p>

                <p>
                    In de personeelsnieuwsbrief en via andere interne-communicatiekanalen werd ingezet op diverse
                    onderwerpen in het kader van telewerken en het welzijn van medewerkers in deze uitzonderlijke
                    tijden.
                </p>

                <p>
                    Ook voor PhD studenten en postdocs werden meerdere initiatieven georganiseerd
                    (<a
                        href="https://www.ugent.be/doctoralschools/en/well-being-phd.htm">https://www.ugent.be/doctoralschools/en/well-being-phd.htm</a>).
                </p>

                <p>
                    Tot slot zet het bevorderingsbeleid in op een evaluatie die gebaseerd is op een duurzame,
                    kwalitatieve carriere (DORA) met oog voor welzijn.
                </p>

                <p>
                    Alle informatie werd gebundeld op
                    <a
                            href="https://www.ugent.be/nl/actueel/corona-en-academische-loopbanen.htm">https://www.ugent.be/nl/actueel/corona-en-academische-loopbanen.htm</a>
                </p>

            </div>


            <div class="text-container" id="uhasselt">
                <h2>
                    UHasselt
                </h2>

                <p>
                    De UHasselt heeft verschillende webpagina's met gerichte communicatie omtrent Corona-gerelateerde
                    maatregelen. Op de algemeen toegankelijke UHasselt website is er een pagina voor studenten
                    (<a
                        href="https://www.ugent.be/nl/actueel/corona-en-academische-loopbanen.htm">https://www.uhasselt.be/FAQ-coronavirus</a>), en daarnaast is er ook een intranet webpagina voor alle
                    personeelsleden. Deze problematiek wordt opgevolgd via de Cel Gender en Diversiteit. Deze Cel bouwt
                    verder op het laatste gender beleidsplan, met reeds genomen concrete acties zoals het
                    vervangingsfonds, een gewijzigde beoordeling van ZAP-leden, een cultuuraudit en een
                    behoeftenonderzoek naar gezinsondersteunende maatregelen. In deze nieuw opgestarte overlegstructuur
                    wordt met regelmaat afgestemd over gender in academia, en bij uitbreiding diversiteit in de
                    instelling. Het uiteindelijke doel is om aan UHasselt volgende stappen te zetten naar een meer
                    inclusieve organisatie. Suggesties van de Jonge Academie worden hierin mee opgevolgd. Een reeds
                    concreet genomen corona-gerelateerde actie is een afsprakenkader om de achterstand van doctoraten
                    naar aanleiding van corona op te vangen. Mogelijke corona-effecten worden nauwkeurig gemonitord als
                    basis voor verdere acties.
                </p>

            </div>

            <div class="text-container" id="vub">
                <h2>
                    VUB
                </h2>

                <p>
                    De VUB werkte verschillende initiatieven uit om tegemoet te komen aan de impact van Covid-19 op
                    onderzoekers. Zo zal de impact van corona op de onderwijslast en onderzoekstijd in rekening gebracht
                    worden bij de evaluatie van het academische personeel (GelijkheidsActiePlan 2021-2024) en werd er
                    breed gecommuniceerd over de ongelijke impact van corona via de nieuwsbrief voor onderzoekers en de
                    website van R&D. De Basisfinanciering voor Vakgroepen (BAS) werd verdubbeld om directe financiele
                    noden met betrekking tot Covid-19 op te vangen (verlengen mandaten en kosten i.v.m. Open Access).
                    Ook werd de impact van corona op doctoraatsonderzoek in kaart gebracht via een speciaal daartoe
                    voorziene enquete. Tot slot investeert de VUB in diverse welzijnsinitiatieven voor zowel personeel
                    als studenten en faciliteert zij de opname van corona-ouderschapsverlof.
                </p>

            </div>


        </div>
    `,
    styles: []
})
export class VlaamseUniversiteitenComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
