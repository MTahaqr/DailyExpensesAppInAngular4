import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveDailyExpComponent } from './save-daily-exp.component';

describe('SaveDailyExpComponent', () => {
  let component: SaveDailyExpComponent;
  let fixture: ComponentFixture<SaveDailyExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveDailyExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveDailyExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
