import { Component, OnInit } from '@angular/core';
import { map, share, shareReplay, tap } from 'rxjs/operators';
import { ActuaService } from './actua.service';

@Component({
  selector: 'app-actua',
  template: `

    <ng-container *ngIf="(present$ | async)?.length > 0; else nothingPlanned">

      <div class="card-deck" *ngFor="let group of present$ | async">
        <div class="card border-0" *ngFor="let item of group" [class.past]="item?.past">
          <app-actua-item [item]="item" *ngIf="item"></app-actua-item>
        </div>
      </div>

    </ng-container>

    <ng-template #nothingPlanned>
      <div class="nothing-planned">
        Er is momenteel niets gepland.
      </div>
    </ng-template>

    <div class="past-container mt-3" *ngIf="(past$ | async)?.length > 0">

      <hr class="bg-success">
      <h2>voorbij</h2>

      <div class="card-deck" *ngFor="let group of past$ | async">
        <div class="card border-0" *ngFor="let item of group" [class.past]="item?.past">
          <app-actua-item [item]="item" *ngIf="item"></app-actua-item>
        </div>
      </div>

    </div>

  `,
  styles: [`
    
    .actua-type {
    }
    
    .img-container {
      overflow: hidden;
      max-height: 150px;
    }
    
    .past {
      
    }
    
    .nothing-planned {
      
    }
    
  `]
})
export class ActuaPageComponent implements OnInit {

  private items$ = this.service.getItems().pipe(
    shareReplay()
  );

  present$ = this.items$.pipe(
    map(items => items.filter(item => !item.past)),
    map(items => group(items, 3))
  );

  past$ = this.items$.pipe(
    map(items => items.filter(item => item.past)),
    map(items => group(items, 3))
  );

  constructor(private service: ActuaService) {
  }

  ngOnInit() {
    this.service.load();
  }

}

function group(items, groupSize) {
  return items.reduce((groups, item, idx) => {
    let mod = idx % groupSize;
    if (mod === 0) {
      return [...groups, [item, null, null]];
    } else {
      let lastGroup = groups[groups.length - 1];
      lastGroup.splice(mod, 1, item);
      groups.splice(groups.length - 1, 1, lastGroup);
      return [...groups];
    }
  }, []);
}
