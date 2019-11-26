import { Injectable } from '@angular/core';

export interface Aulas{
  aula:number
}

@Injectable({
  providedIn: 'root'
})

export class AulasService {

constructor() { }

aulas:Aulas[] = [
  {aula:1},{aula:2},{aula:3},{aula:4},{aula:5},{aula:6},{aula:7},{aula:8},{aula:9},{aula:10},
  {aula:11},{aula:12},{aula:13},{aula:14},{aula:15},{aula:16},{aula:17},{aula:18},{aula:19},
  {aula:20},{aula:21},{aula:22},{aula:23}];

  getAulas(){
    return this.aulas;
  }
  
   ok=false;

   setAula(data){
     
      this.aulas.push(data);
      

  }

  //eliminar aula
  async deleteAula(codigo){
    let aulas2 = await this.aulas.filter((Naula)=>{
      return Naula.aula != codigo
    })
    this.aulas = aulas2
  }

  //editar aula
  async updateAula(codigo,value:number){
    let aulas2 = await this.aulas.filter((Naula)=>{
      if(Naula.aula == codigo ){
        Naula.aula = value
      }
      return Naula
    })
    this.aulas = aulas2
  }


}



