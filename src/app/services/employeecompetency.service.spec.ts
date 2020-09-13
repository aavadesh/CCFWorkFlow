import { TestBed } from '@angular/core/testing';

import { EmployeecompetencyService } from './employeecompetency.service';

describe('EmployeecompetencyService', () => {
  let service: EmployeecompetencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeecompetencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
