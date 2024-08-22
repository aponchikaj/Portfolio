import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isNormal = true;
  isMenu = false;

  OpenMenu(){
    this.isNormal = false
    this.isMenu = true
  }

  CloseMenu(){
    this.isNormal = true
    this.isMenu = false
  }
}
