import { UserListAction, ADD_USER} from "./user-list.action";

const intialState={
    userList : ["Messi","Ronaldo"]
}

export function userListReducer(state=intialState, action:UserListAction)
{
    switch (action.type) {

        case ADD_USER:
          return { ...state, userList: [...state.userList, action.payload] }; // Here we are using the spread (…) operator to copy the current state.This operator is used to make shallow copies of javascript objects.

        default:
          return intialState;  
    
      }
}