export interface Horario {
    seccion: String;
    aula: String;
    hora: string;
    lunes: number;
    martes: number;
    miercoles: number;
    jueves: number;
    viernes: number;
    sabado: number;
  
  }
  
 export const horario_data: Horario[] = [];


  export const secciones = [{
    codigo_siceu:'01S-2614-D1',
    semestre:'PRIMERO',
    num_semestre:1,
    carrera:'ING DE SISTEMAS',
    turno:'DIURNO',
    Aula:null
  },
  {
    codigo_siceu:'02S-2614-D1',
    semestre:'SEGUNDO',
    num_semestre:2,
    carrera:'ING DE SISTEMAS',
    turno:'DIURNO',
    Aula:null
  },{
    codigo_siceu:'03S-2614-D1',
    semestre:'TERCERO',
    num_semestre:3,
    carrera:'ING DE SISTEMAS',
    turno:'DIURNO',
    Aula:null
  },
  {
    codigo_siceu:'06S-2614-D1',
    semestre:'SEXTO',
    num_semestre:6,
    carrera:'ING DE SISTEMAS',
    turno:'DIURNO',
    Aula:null
  }]


  export var seccionSelected = secciones.filter((seccion)=>{
    return seccion.codigo_siceu == '02S-2614-D1';
  })




export function saveHour(seccionS){
  var minuts = 420;
  
  while(minuts <= 1020){
 var minuts_last = minuts + 45; 


   
  let hour = `${Math.floor(minuts/60)}:${ minutes(minuts) } a ${Math.floor(minuts_last/60)}:${ minutes(minuts_last) }`
  horario_data.push({hora: hour, lunes: null , martes: null, miercoles: null,jueves: null, viernes : null, sabado:null,seccion:seccionS,aula:null})

  minuts += 45;
  }
  
}

function minutes(minuts){
  var seconds
  if((minuts/60 - Math.floor(minuts/60)) == 0 ){
    seconds = '00'
  }else if((minuts/60 - Math.floor(minuts/60)) == 0.25){
    seconds = '15'
  }else if((minuts/60 - Math.floor(minuts/60)) == 0.5){
    seconds = '30'
  }else if((minuts/60 - Math.floor(minuts/60)) == 0.75){
    seconds = '45'
  }

  return seconds
}


export const aulas = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]