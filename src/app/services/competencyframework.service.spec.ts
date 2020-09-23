import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { CompetencyframeworkService } from './competencyframework.service';
import { environment } from 'src/environments/environment';

//Testing of CompetencyframeworkService
describe('CompetencyframeworkService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let competencyframeworkService: CompetencyframeworkService;
  let apiEndpoint : string  = environment.apiEndpoint;
  beforeEach(() => {
    //Configures testing app module
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        CompetencyframeworkService
      ]
    });

    //Instantaites HttpClient, HttpTestingController and EmployeeService
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    competencyframeworkService = TestBed.inject(CompetencyframeworkService);
  });

  afterEach(() => {
    httpTestingController.verify(); //Verifies that no requests are outstanding.
  });

  describe('#getAllCompetencyFrameworks', () => {
    let expectedData: any[];

    beforeEach(() => {
      //Dummy data to be returned by request.
      expectedData = [] as any;
    });
    
    //Test case 1
    it('should return expected Competency Frameworks by calling once', () => {
      competencyframeworkService.findAll().subscribe(
        resp => expect(resp).toEqual(expectedData, 'should return expected Competency Frameworks'),
        fail
      );

      const req = httpTestingController.expectOne(`${apiEndpoint}/api/CompetencyFramework`);
      expect(req.request.method).toEqual('GET');

      req.flush(expectedData); //Return expectedData
    });
    
    //Test case 2
    it('should be OK returning no Competency Framework', () => {
      competencyframeworkService.findAll().subscribe(
        resp => expect(resp.length).toEqual(0, 'should have empty array'),
        fail
      );

      const req = httpTestingController.expectOne(`${apiEndpoint}/api/CompetencyFramework`);
      req.flush([]); //Return empty data
    });
    
    //Test case 3
    it('should return expected Competency Frameworks when called multiple times', () => {
      competencyframeworkService.findAll().subscribe();
      competencyframeworkService.findAll().subscribe(
        resp => expect(resp).toEqual(expectedData, 'should return expected Competency Frameworks'),
        fail
      );

      const requests = httpTestingController.match(`${apiEndpoint}/api/CompetencyFramework`);
      expect(requests.length).toEqual(2, 'calls to findAllMethod()');

      requests[0].flush([]); //Return Empty body for first call
      requests[1].flush(expectedData); //Return expectedData in second call
    });
  });
});
 