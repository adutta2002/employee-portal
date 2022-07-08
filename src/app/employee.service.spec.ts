import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule , HttpTestingController} from '@angular/common/http/testing';
import { EmployeeService } from './employee.service';
import { HttpClient } from '@angular/common/http';

describe('EmployeeService', () => {
  let service: EmployeeService;
  let httpcontroller : HttpTestingController;
  let http : HttpClient

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [EmployeeService]
    });
    service = TestBed.inject(EmployeeService);
    httpcontroller = TestBed.inject(HttpTestingController);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Emp Name API', () => {

      service.getEmployeeName(5)
      .subscribe((res)=>{
        console.log("Response .............",res);
        expect(res).toEqual("Arijit");
      })
      
      const req = httpcontroller.expectOne({method: 'GET'});
      expect(req.request.method).toEqual('GET')
      req.flush('Arijit');
  });
  
});
