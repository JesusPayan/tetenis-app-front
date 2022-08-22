import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.css']
})
export class StorePageComponent implements OnInit {


  filters:string[] = ['Selecciona un filtro','Mayor precio','Menor precio', 'Promociones'];
  products:string[] = ['Selecciona un filtro','Mayor precio','Menor precio', 'Promociones'];
  constructor() { }

  ngOnInit(): void {
  }

}
