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
  
 export const horario_data: Horario[] = [
    {hora: '7:00 a 7:45', lunes: null , martes: null, miercoles: null,jueves: null, viernes : null, sabado:null,seccion:'06S-2614-D1',aula:null},
    {hora: '7:45 a 8:30', lunes: null, martes: null, miercoles: null,jueves: null, viernes : null, sabado: null,seccion:'06S-2614-D1',aula:null},
    {hora: '8:30 a 9:15', lunes: null, martes: null, miercoles: null,jueves: null, viernes : null, sabado: null,seccion:'06S-2614-D1',aula:null},
    {hora: '9:15 a 10:00', lunes: null, martes: null, miercoles: null,jueves: null, viernes : null, sabado: null,seccion:'06S-2614-D1',aula:null},
    {hora: '10:00 a 10:45', lunes: null, martes: null, miercoles: null,jueves: null, viernes : null, sabado: null,seccion:'06S-2614-D1',aula:null},
    {hora: '10:45 a 11:30', lunes: null, martes: null, miercoles: null,jueves: null, viernes : null, sabado: null,seccion:'06S-2614-D1',aula:null},
    {hora: '11:30 a 12:15', lunes: null, martes: null, miercoles: null,jueves: null, viernes : null, sabado: null,seccion:'06S-2614-D1',aula:null},
    {hora: '12:15 a 13:00', lunes: null, martes: null, miercoles: null,jueves: null, viernes : null, sabado: null,seccion:'06S-2614-D1',aula:null},
    {hora: '13:00 a 13:45', lunes: null, martes: null, miercoles: null,jueves: null, viernes : null, sabado: null,seccion:'06S-2614-D1',aula:null},
    {hora: '13:45 a 14:30', lunes: null, martes: null, miercoles: null,jueves: null, viernes : null, sabado: null,seccion:'06S-2614-D1',aula:null},
    {hora: '14:30 a 15:15', lunes: null, martes: null, miercoles: null,jueves: null, viernes : null, sabado: null,seccion:'06S-2614-D1',aula:null},
    {hora: '15:15 a 16:00', lunes: null, martes: null, miercoles: null,jueves: null, viernes : null, sabado: null,seccion:'06S-2614-D1',aula:null},
    {hora: '16:00 a 16:45', lunes: null, martes: null, miercoles: null,jueves: null, viernes : null, sabado: null,seccion:'06S-2614-D1',aula:null},
    {hora: '16:45 a 17:30', lunes: null, martes: null, miercoles: null,jueves: null, viernes : null, sabado: null,seccion:'06S-2614-D1',aula:null},
    {hora: '7:00 a 7:45', lunes: null , martes: null, miercoles: null,jueves: null, viernes : null, sabado:null,seccion:'02S-2614-D1',aula:null}
  
  ];


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