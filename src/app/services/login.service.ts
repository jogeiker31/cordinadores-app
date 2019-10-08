import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

userLog = null;

async setUserLog(user){
  await localStorage.setItem('userLogged',JSON.stringify(user))
  this.getUserLog()
}

async getUserLog(){
   this.userLog = await JSON.parse(localStorage.getItem('userLogged'))
}

async clearUserLog(){
  this.userLog = null;
  await localStorage.clear()
}



constructor() { }

}
