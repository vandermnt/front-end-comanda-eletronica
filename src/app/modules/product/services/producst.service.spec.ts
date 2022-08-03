import { TestBed } from '@angular/core/testing';

import { ProducstService } from './producst.service';

describe('ProducstService', () => {
  let service: ProducstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProducstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
