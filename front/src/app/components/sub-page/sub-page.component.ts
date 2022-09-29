import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { InjectCustomScriptService } from 'src/app/services/custom-script/inject-custom-script.service';

@Component({
  selector: 'sub-page',
  templateUrl: './sub-page.component.html',
  styleUrls: ['./sub-page.component.scss']
})
export class SubPageComponent implements OnInit, AfterViewInit {

  script = `<script>console.log(\'script da pagina secundaria executando\');</script>`;

  constructor(
    public injectCustomScriptService: InjectCustomScriptService
  ) {}

  ngOnInit(): void {
    console.log("Você entrou na pagina secundaria");
    this.injectCustomScriptService.setScriptToBody(this.script)
  }

  ngAfterViewInit(): void {
    
  }

}
