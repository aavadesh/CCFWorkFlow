import { TestBed } from '@angular/core/testing';

import { CompetencyframeworkService } from './competencyframework.service';

describe('CompetencyframeworkService', () => {
  let service: CompetencyframeworkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompetencyframeworkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
