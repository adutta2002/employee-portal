import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

   userList: string[] = [];

  constructor() { }

  ngOnInit(): void {
    
  }

  public addNewUser(name:string){
    this.userList.push(name);
  }

}
