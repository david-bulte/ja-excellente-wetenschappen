import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addDays, compareAsc, isPast, parse, startOfDay } from 'date-fns';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

const defaultPhoto = 'assets/img/Baanbrekende wetenschap.svg';

@Injectable({
  providedIn: 'root'
})
export class ActuaService {

  loaded$ = new BehaviorSubject(false);
  private itemsSubj = new BehaviorSubject<ActuaItem[]>([]);

  load() {
    if (this.itemsSubj.getValue().length > 0) {
      return;
    }

    this.http.get<ActuaItem[]>('/assets/actua.json').pipe(
      map(items => items.map(item => {
        const when = startOfDay(addDays(parse(item.when), 1));
        const photo = item.photo ? `assets/img/${item.photo}` : defaultPhoto;
        return {...item, when, past: isPast(when), photo};
      })),
      map((items: ActuaItem[]) => {
        items.sort((x, y) => compareAsc(x.when, y.when));
        return items;
      })
    ).subscribe(items => {
      this.itemsSubj.next(items);
      this.loaded$.next(true);
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
  moreInfo?: MoreInfo;
  photo: string;
  past?: boolean;
}

export interface MoreInfo {
  link: string;
  target: string;
}
