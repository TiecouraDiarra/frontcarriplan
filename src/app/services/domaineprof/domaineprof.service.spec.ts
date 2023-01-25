import { TestBed } from '@angular/core/testing';

import { DomaineprofService } from './domaineprof.service';

describe('DomaineprofService', () => {
  let service: DomaineprofService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DomaineprofService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
