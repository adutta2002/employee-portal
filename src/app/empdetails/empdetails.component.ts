import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {

  empId : any;
  empName : any;
  empTenure : any;

  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {
  }

  getName() {
    console.log('Employee id is ',this.empId);
    this.employeeService.getEmployeeName(this.empId)
                        .subscribe((data)=>{
    console.log("Data got .............",data);
    this.empName = data;                      
    })
    this.getTenure();
  }

  getTenure(){
    console.log('Employee id is ',this.empId);
    this.employeeService.getEmployeeTenure(this.empId)
                        .subscribe((data)=>{
                          console.log("Data got .............",data);
                          this.empTenure = data;  
                        })    
  }

}
