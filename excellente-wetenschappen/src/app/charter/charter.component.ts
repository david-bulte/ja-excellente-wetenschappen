import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charter',
  template: `
    <div class="d-flex flex-column align-items-center w-100">

      <div class="text-container">
        <h3>Een nieuwe blik op het genderactieplan van 2013</h3>
        <p>
          De <a [routerLink]="'../contact'">Jonge Academie</a> en de <a href="http://www.vlir.be/" target="_blank">Vlaamse Interuniversitaire Raad (VLIR)</a> werkten samen om het genderactieplan voor de Vlaamse universiteiten uit 2013 aan een kritische blik te onderwerpen en te vertalen naar concrete actiepunten, zodat gendergelijkheid onder het academisch personeel onder de aandacht en op de agenda blijft. Een gezamenlijke taskforce van <a [routerLink]="'/contact'">Jonge Academie</a> en <a href="http://www.vlir.be/" target="_blank">VLIR</a> ging in maart aan de slag, en kon bij afronding van de campagne in juni 2019 een gedragen document voorleggen, dat ondertekend werd door de rectoren en vicerectoren van de vijf Vlaamse universiteiten. U kan het <a href="http://jongeacademie.be/wp-content/uploads/2019/06/Gendercharter_VLIR-JA.pdf/" target="_blank">Gendercharter VLIR/JA hier lezen</a>.
        </p>

        <img src="assets/img/charter.jpg" class="w-100 mt-3">
      </div>

    </div>
  `,
  styles: [
  ]
})
export class CharterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
