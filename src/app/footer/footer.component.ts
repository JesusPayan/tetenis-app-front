import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  author:string ='Jesus A. Hernandez Payan.';
  releaceYear:string = '2022';
  socialNetworktext:string = 'Para Promociones Siguenos:'
  constructor() { }

  ngOnInit(): void {
  }

}
