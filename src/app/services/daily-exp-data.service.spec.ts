import { TestBed, inject } from '@angular/core/testing';

import { DailyExpDataService } from './daily-exp-data.service';

describe('DailyExpDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DailyExpDataService]
    });
  });

  it('should be created', inject([DailyExpDataService], (service: DailyExpDataService) => {
    expect(service).toBeTruthy();
  }));
});
