import { Component, OnInit } from '@angular/core';
import { LinkService } from './link.service';

@Component({
  selector: 'app-links-page',
  template: `

    <ng-container *ngFor="let rootConfig of rootConfigs$ | async">
      <h2>{{rootConfig.title}}</h2>

      <ul class="list-inline" *ngIf="rootConfig.links">
        <li *ngFor="let linkConfig of rootConfig.links">
          <span class="font-italic link-page__authors" *ngIf="linkConfig.authors">{{linkConfig.authors}}. </span> 
          <a href="{{linkConfig.link}}" target="_blank">{{linkConfig.title}}.</a> 
          <span class="link-page__reference" *ngIf="linkConfig.reference"> {{linkConfig.reference}}</span>
        </li>
      </ul>
      
      <ng-container *ngFor="let groupConfig of rootConfig.groups">
        <h3>{{groupConfig.title}}</h3>

        <ul class="list-inline">
          <li *ngFor="let linkConfig of groupConfig.links">
            <span class="font-italic link-page__authors" *ngIf="linkConfig.authors">{{linkConfig.authors}}. </span>
            <a href="{{linkConfig.link}}" target="_blank">{{linkConfig.title}}</a>
            <span class="link-page__reference" *ngIf="linkConfig.reference"> {{linkConfig.reference}}</span>
          </li>
        </ul>
        
      </ng-container>
      
    </ng-container>

  `,
  styles: []
})
export class LinksPageComponent implements OnInit {

  rootConfigs$ = this.service.getConfigs();

  constructor(private service: LinkService) {
  }

  ngOnInit() {
    this.service.load();
  }

}
