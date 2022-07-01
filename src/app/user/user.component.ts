import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserListAction } from '../store/user-list.action';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

   userList : Observable<{ userList: string[]; }>;

  constructor(private store : Store<{users:{userList:string[]}}>) { }

  ngOnInit(): void {
    this.userList = this.store.select('users');
  }

  public addNewUser(name:string){
    // this.userList.push(name);
    this.store.dispatch(new UserListAction(name));
  }

}
