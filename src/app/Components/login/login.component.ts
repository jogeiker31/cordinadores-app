import { Component, OnInit } from '@angular/core';
import { coordinadores } from 'src/assets/DB/usuarios';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,  private router:Router, public loginService:LoginService) { }

  loginForm = this.fb.group({
    usuario: ['',[Validators.required]],
    contra: ['',[Validators.required]]
  })

  

  ngOnInit() {
    if(this.loginService.userLog !== null){
      this.router.navigateByUrl('/inicio')
    }
  }

  

  iniciarSesion(){
    let user = coordinadores.filter((cor)=>{
      return (cor.usuario == this.loginForm.value.usuario &&  cor.contra == this.loginForm.value.contra)
    })

    if(user.length > 0){
      let info = {
        id:user[0].ci_coor,
        user: user[0].usuario
      }
      
      this.loginService.setUserLog(info)
     
      this.router.navigateByUrl('/inicio')

    }else {
      alert('Usuario o clave incorrecta')
    }
  }

}
