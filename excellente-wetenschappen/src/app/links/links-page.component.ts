import { Component, OnInit } from '@angular/core';
import { LinkService } from './link.service';

@Component({
  selector: 'app-links-page',
  template: `

    <div class="d-flex flex-column align-items-center w-100">

      <div class="text-container">
        <ng-container *ngFor="let rootConfig of rootConfigs$ | async">
          <h2>{{rootConfig.title}}</h2>

          <!--<ul class="list-inline" *ngIf="rootConfig.links">-->
          <ul class="pl-4" *ngIf="rootConfig.links">
            <li *ngFor="let linkConfig of rootConfig.links">
              <span class="font-italic link-page__authors" *ngIf="linkConfig.authors">{{linkConfig.authors}}. </span>
              <a href="{{linkConfig.link}}" target="_blank">{{linkConfig.title}}.</a>
              <span class="link-page__reference" *ngIf="linkConfig.reference"> {{linkConfig.reference}}.</span>
            </li>
          </ul>

          <ng-container *ngFor="let groupConfig of rootConfig.groups">
            <h3>{{groupConfig.title}}</h3>

            <ul class="pl-4">
              <li *ngFor="let linkConfig of groupConfig.links">
                <span class="font-italic link-page__authors" *ngIf="linkConfig.authors">{{linkConfig.authors}}. </span>
                <a href="{{linkConfig.link}}" target="_blank">{{linkConfig.title}}.</a>
                <span class="link-page__reference" *ngIf="linkConfig.reference"> {{linkConfig.reference}}.</span>
              </li>
            </ul>

          </ng-container>

        </ng-container>
      </div>

    </div>
  `,
  styles: []
})
export class LinksPageComponent implements OnInit {

  rootConfigs$ = this.service.getConfigs();

  constructor(private service: LinkService) {
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.service.load();
  }

}
