import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { compareAsc, isPast } from 'date-fns';
import { parseDate } from 'ngx-bootstrap';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

const defaultPhoto = 'assets/img/Baanbrekende wetenschap.svg';

@Injectable({
  providedIn: 'root'
})
export class ActuaService {

  private itemsSubj = new BehaviorSubject<ActuaItem[]>([]);

  load() {
    if (this.itemsSubj.getValue().length > 0) {
      return;
    }

    this.http.get<ActuaItem[]>('/assets/actua.json').pipe(
      map(items => items.map(item => {
        const when = parseDate(item.when, 'dd/MM/YYYY');
        const photo = item.photo ? `assets/img/${item.photo}` : defaultPhoto;
        return {...item, when, past: isPast(when), photo};
      })),
      map((items: ActuaItem[]) => {
        items.sort((x, y) => compareAsc(x.when, y.when));
        return items;
      })
    ).subscribe(items => {
      this.itemsSubj.next(items);
    })
  }

  getItems() {
    return this.itemsSubj.asObservable();
  }

  constructor(private http: HttpClient) {
  }
}

export interface ActuaItem {
  title: string;
  type: string;
  when: Date;
  where?: string;
  description: string;
  photo: string;
  past?: boolean;
}
