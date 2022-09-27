import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, AfterViewInit {

  constructor() { }
  ngOnInit(): void {
    console.log("Você entrou na pagina principal");
  }

  ngAfterViewInit(): void {
    
  }

}
