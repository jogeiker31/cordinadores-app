import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  constructor(private http: HttpClient) { }

  usuarios = [{
    ci_coor:'27040372',
    nom_coor:'Jogeiker',
    ape_coor:'Lizarraga',
    usuario:'user',
    contra:'user',
    correo_coor:'jogeiker1999@gmail.com'
  },
    {
      ci_coor:'27040373',
      nom_coor:'Victor',
      ape_coor:'Briceño',
      usuario:'user2',
      contra:'user2',
      correo_coor:'victorbri@gmail.com'
    }
]





userConected;


getUsuarios(){
  return this.usuarios;
}

setUsuario(newUser){
  this.usuarios.push(newUser)
}

getUsuario(id){
  return this.usuarios.filter((usuario)=>{
    return usuario.ci_coor == id
  })[0]
}

setUserConected(id){
  this.userConected = this.getUsuario(id)
}

authUsuario(usuario,password){
  return this.http.post('localhost:3000/api/usuario/auth',{usuario:usuario,password:password});

}

}