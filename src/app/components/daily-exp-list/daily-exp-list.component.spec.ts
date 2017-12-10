import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyExpListComponent } from './daily-exp-list.component';

describe('DailyExpListComponent', () => {
  let component: DailyExpListComponent;
  let fixture: ComponentFixture<DailyExpListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyExpListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyExpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
