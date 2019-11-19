import { Component, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { LoginService } from './services/login.service';
import { ElectronService } from 'ngx-electron';
import { UsuariosService } from './services/usuarios.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   
  mobileQuery: MediaQueryList; // codigo Materials

  opened: boolean = true; // codigo Materials

  async TSN($event){ // codigo Materials
    await (this.opened = $event); // codigo Materials
  } 


  ToggleSidenav(){ // codigo Materials
    this.opened = !this.opened; // codigo Materials
  }

  private _mobileQueryListener: () => void; // codigo Materials

  constructor(
    private changeDetectorRef: ChangeDetectorRef,  // codigo Materials
    media: MediaMatcher,  // codigo Materials
    public loginService:LoginService, // servicio de login
    private _electronService:ElectronService, // Esto es para comunicarse con la API de electron desde angular 
    private usuariosService: UsuariosService
    ) { 

    this.mobileQuery = media.matchMedia('(max-width: 1000px)'); // codigo Materials
    this._mobileQueryListener = () => { // codigo Materials
      this.changeDetectorRef.detectChanges();
      if(this.mobileQuery.matches){
        this.opened = false;
      }else{
        this.opened = true;
      }
    };
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

async ngOnInit(){
 
  if(localStorage.length>0){
    await this.loginService.getUserLog()
  }
}
// variables de control
coordinador;
maximizado = false;

Minimizar(){
  // para minimizar la ventana principal
this._electronService.ipcRenderer.send('minimizar', 'minimizar') // envia un evento main.js de electron

}

Maximizar(){
  // para maximizar  la ventana principal
  this.maximizado= false;
  this._electronService.ipcRenderer.send('maximizar', 'maximizar')
  
  this._electronService.ipcRenderer.on('maximizado',(event,args)=>{
    this.maximizado= true;
  })

}

Cerrar(){
  // para cerrar la ventana principal
  this._electronService.ipcRenderer.send('cerrar', 'cerrar')

}






  ngOnDestroy(): void { // codigo Materials
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngAfterContentChecked(): void {
    this.changeDetectorRef.detectChanges();
  }
}
