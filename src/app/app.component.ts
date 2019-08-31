import { Component, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

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

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 1000px)');
    this._mobileQueryListener = () => {
      changeDetectorRef.detectChanges();
      if(this.mobileQuery.matches){
        this.opened = false;
      }else{
        this.opened = true;
      }
    };
    this.mobileQuery.addListener(this._mobileQueryListener);
  }



  


  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
