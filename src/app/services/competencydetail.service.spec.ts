import { TestBed } from '@angular/core/testing';

import { CompetencydetailService } from './competencydetail.service';

describe('CompetencydetailService', () => {
  let service: CompetencydetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompetencydetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
