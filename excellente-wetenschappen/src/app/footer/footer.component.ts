import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="pt-4 pb-4 pt-md-5 border-top bg-light text-primary m-0">
      <div class="container d-flex flex-row justify-content-start align-items-center">

        <a href="http://jongeacademie.be/">
          <img src="assets/img/JA_logo.png" width="50" height="50" alt="">
        </a>

        <div class="ml-3">
          Deze site is gemaakt door de Jonge Academie in samenwerking met Nellie Konijnendijk.
        </div>
        
        <!--<div class="row">-->
          <!--<div class="col-12 col-md">-->
            <!--<img class="mb-2" src="assets/img/JA_logo.png"  alt="" width="24"-->
                 <!--height="24">-->
            <!--<small class="d-block mb-3 text-muted">&copy; 2018</small>-->
          <!--</div>-->
          <!--<div class="col-6 col-md">-->
            <!--<h5>Blabla</h5>-->
            <!--<ul class="list-unstyled text-small">-->
              <!--<li><a class="text-muted" href="#">Cool stuff</a></li>-->
              <!--<li><a class="text-muted" href="#">Random feature</a></li>-->
              <!--<li><a class="text-muted" href="#">Team feature</a></li>-->
              <!--<li><a class="text-muted" href="#">Stuff for developers</a></li>-->
              <!--<li><a class="text-muted" href="#">Another one</a></li>-->
              <!--<li><a class="text-muted" href="#">Last time</a></li>-->
            <!--</ul>-->
          <!--</div>-->
          <!--<div class="col-6 col-md">-->
            <!--<h5>Blibli</h5>-->
            <!--<ul class="list-unstyled text-small">-->
              <!--<li><a class="text-muted" href="#">Resource</a></li>-->
              <!--<li><a class="text-muted" href="#">Resource name</a></li>-->
              <!--<li><a class="text-muted" href="#">Another resource</a></li>-->
              <!--<li><a class="text-muted" href="#">Final resource</a></li>-->
            <!--</ul>-->
          <!--</div>-->
          <!--<div class="col-6 col-md">-->
            <!--<h5>Bloebloe</h5>-->
            <!--<ul class="list-unstyled text-small">-->
              <!--<li><a class="text-muted" href="#">Team</a></li>-->
              <!--<li><a class="text-muted" href="#">Locations</a></li>-->
              <!--<li><a class="text-muted" href="#">Privacy</a></li>-->
              <!--<li><a class="text-muted" href="#">Terms</a></li>-->
            <!--</ul>-->
          <!--</div>-->
        <!--</div>-->
      </div>
    </footer>
  `,
  styles: [
    `
      .container {
        max-width: 960px;
      }
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
