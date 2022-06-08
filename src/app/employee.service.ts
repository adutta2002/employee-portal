import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient ) { }

  getEmployeeName(empId:number){
    return this.http.get('http://localhost:8080/api/employee/name?empId='+empId,{responseType: 'text'});
  }

  getEmployeeTenure(empId:number){
    return this.http.get('http://localhost:8080/api/employee/tenure?empId='+empId,{responseType: 'text'});
  }
}
