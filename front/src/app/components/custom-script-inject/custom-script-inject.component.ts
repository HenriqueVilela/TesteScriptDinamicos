import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-custom-script-inject',
  templateUrl: './custom-script-inject.component.html',
  styleUrls: ['./custom-script-inject.component.scss']
})
export class CustomScriptInjectComponent implements OnInit, AfterViewInit {

  constructor() { }

  @Input() customScript?:string;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    
  }

}
