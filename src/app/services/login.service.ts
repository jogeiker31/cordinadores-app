import { Injectable } from '@angular/core';
import { UsuariosService } from './usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

userLog = null;

async setUserLog(user){
  let info = {
    id: user.ci_coor,
    user: user.usuario
  }
  await localStorage.setItem('userLogged',JSON.stringify(info))
  this.getUserLog()
}

async getUserLog(){
   this.userLog = await JSON.parse(localStorage.getItem('userLogged'))
   this.usuariosService.setUserConected(this.userLog.id)

}

async clearUserLog(){
  this.userLog = null;
  await localStorage.clear()
}



constructor(private usuariosService:UsuariosService) { }

}
