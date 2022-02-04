import {TestBed} from '@angular/core/testing';

import {DataBreedsService} from './data-breeds.service';

describe('DataBreedsService', () => {
  let service: DataBreedsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataBreedsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
