import { TestBed } from '@angular/core/testing';

import { SerieetudiantService } from './serieetudiant.service';

describe('SerieetudiantService', () => {
  let service: SerieetudiantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerieetudiantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
