import { TestBed } from '@angular/core/testing';

import { BreedDataService } from './breed-data.service';

describe('BreedDataService', () => {
  let service: BreedDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreedDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
