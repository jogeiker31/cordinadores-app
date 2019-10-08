import { Component, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { LoginService } from './services/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   
  mobileQuery: MediaQueryList;

  opened: boolean = true;

  async TSN($event){
    await (this.opened = $event);
  }


  ToggleSidenav(){
    this.opened = !this.opened;
  }

  private _mobileQueryListener: () => void;

  constructor(private changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public loginService:LoginService) {
    this.mobileQuery = media.matchMedia('(max-width: 1000px)');
    this._mobileQueryListener = () => {
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


  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngAfterContentChecked(): void {
    this.changeDetectorRef.detectChanges();
  }
}
