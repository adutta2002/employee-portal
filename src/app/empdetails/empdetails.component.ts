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
  isShow : boolean = false;

  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {
  }

  getName() {
    console.log('Employee id is ',this.empId);

    // checking empId is null or undefined using nullish coalescing
    this.empId ?? alert('Plesae enter employee id');

    this.isShow = true;
    this.employeeService.getEmployeeName(this.empId)
                        .subscribe((res)=>{
    console.log("Response .............",res);
    this.empName = res;                      
    })
    this.getTenure();
  }

  getTenure(){
    console.log('Employee id is ',this.empId);
    this.employeeService.getEmployeeTenure(this.empId)
                        .subscribe((res)=>{
                          console.log("Response .............",res);
                          this.empTenure = res;  
                        })    
  }

}
