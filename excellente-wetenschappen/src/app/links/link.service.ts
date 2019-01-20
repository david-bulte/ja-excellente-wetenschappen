import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  private configSubj = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
  }

  load() {
    if (this.configSubj.getValue().length > 0) {
      return;
    }

    this.http.get<RootConfig[]>('/assets/links.json').subscribe(links => {
      this.configSubj.next(links);
    });
  }

  getConfigs() {
    return this.configSubj.asObservable();
  }

}

export interface RootConfig {
  title: string;
  links: LinkConfig[];
  groups: GroupConfig[];
}

export interface GroupConfig {
  title: string;
  links: LinkConfig[];
}

export interface LinkConfig {
  authors?: string;
  title?: string;
  link: string;
}
