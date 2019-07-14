import { Injectable } from '@angular/core';
import { User } from '../login/user';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  loggedIn=false;

  login(user:User):boolean{
    if(user.username=="nakip" && user.password=="nakip"){
      this.loggedIn=true;
      localStorage.setItem("isLogged",user.username);
      console.log("fine");
      return true;
    }
    else return false;
  }

  isLoggedIn(){
    return this.loggedIn;
  }

  logout(){
    localStorage.removeItem("isLogged");
    this.loggedIn=false;
  }

}
