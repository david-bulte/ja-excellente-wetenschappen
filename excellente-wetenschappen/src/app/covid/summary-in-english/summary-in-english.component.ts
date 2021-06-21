import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-in-english',
  template: `
    <p>
      The corona crisis has hit many people hard, but not everyone equally. As an academic community, we are quite privileged as compared to other groups in our society -- no jobs are threatened, we already have quite some experience with working online and for most of us, flexibility and autonomy are core aspects of our jobs. However, the impact of the past and current Covid-19 period is not the same for everyone within academia: it disproportionately affects academics (m, f, x) with care responsibilities and/or high teaching loads, which are more often taken up by women. In addition, personal circumstances (e.g. being away from family and friends, etc.) can play a major role. As a result, the Covid-19 crisis threatens to exacerbate the existing (gender) inequality in academia.
    </p>
    <p>
      Read more about the unequal impact of Covid-19 and what to do about it in <a
        href="https://issuu.com/koninklijke_vlaamse_academie/docs/maja_pandemicedition">the Magazine of the Young Academy (Pandemic Edition): pp. 52-55</a>. This article offers a summary in English of the information that is available on this website, including the <i>facts and figures</i> and the <i>toolbox</i>.
    </p>
    <p>
      Download the factsheet in English here: <a [routerLink]="'/covid/facts-and-figures'">factsheet </a>
    </p>
    <p>
      Partly at the instigation of the Jonge Academie, all Flemish universities have taken measures to reduce the unequal impact of corona on researchers and other members of staff. Check the intranet of your university to see what measures apply to you.
    </p>
  `,
  styles: [
  ]
})
export class SummaryInEnglishComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
