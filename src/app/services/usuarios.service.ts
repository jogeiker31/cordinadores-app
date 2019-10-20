import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  constructor() { }

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

async authUsuario(usuario,contrasena){
  let result = [];
  result = await this.usuarios.filter((user)=>{
    return user.usuario == usuario  && user.contra == contrasena;
  })

  if(result.length > 0){
    return result[0]
  }else {
    return null
  }
}

}
