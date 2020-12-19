import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covid-facts-and-figures',
  template: `
    <div class="d-flex flex-column align-items-center w-100 position-relative">

      <div class="text-container mb-3 mt-3">
        <iframe class="d-none d-md-block" width="560" height="315" src="https://www.youtube.com/embed/tjApe30RaTY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div class="d-block d-md-none embed-responsive embed-responsive-4by3">
          <iframe class="embed-responsive-item" width="560" height="315"
                  src="https://www.youtube.com/embed/tjApe30RaTY"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
        </div>
      </div>

      <p>
        <a href=" http://www.vlir.be/personeelsstatistieken%20rapport" target="_blank">Bekijk hier de personeelsstatistieken van de VLIR.</a>
      </p>

    </div>



  `,
  styles: []
})
export class CovidFactsAndFiguresPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
