import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyExpGraphComponent } from './daily-exp-graph.component';

describe('DailyExpGraphComponent', () => {
  let component: DailyExpGraphComponent;
  let fixture: ComponentFixture<DailyExpGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyExpGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyExpGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
