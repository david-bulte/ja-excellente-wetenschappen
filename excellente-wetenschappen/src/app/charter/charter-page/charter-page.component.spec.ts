import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharterPageComponent } from './charter-page.component';

describe('CharterPageComponent', () => {
  let component: CharterPageComponent;
  let fixture: ComponentFixture<CharterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
