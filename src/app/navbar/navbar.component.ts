import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  MenuMode:boolean=false
  NormalMode:boolean=true
  MenuSystem(){
    if(!this.MenuMode&&this.NormalMode){
      this.MenuMode = true
      this.NormalMode=false
    }else if(this.MenuMode&&!this.NormalMode){
      this.NormalMode=true
      this.MenuMode=false
    }
  }
}
