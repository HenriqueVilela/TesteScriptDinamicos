import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'sub-page',
  templateUrl: './sub-page.component.html',
  styleUrls: ['./sub-page.component.scss']
})
export class SubPageComponent implements OnInit, AfterViewInit {

  constructor() { }
  ngOnInit(): void {
    console.log("Você entrou na pagina secundaria");

  }

  ngAfterViewInit(): void {
    
  }

}
