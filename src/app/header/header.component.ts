import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logged:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  isLogged():void{
    this.logged = (this.logged == true)? false :true;
   
  }
  closeSesion():void{
    alert('Se cerro la sesion')
    console.log('Se cerro la sesion')
  }

}
