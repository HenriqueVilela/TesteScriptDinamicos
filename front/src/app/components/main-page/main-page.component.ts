import { Component, OnInit, Input, AfterViewInit, Renderer2 } from '@angular/core';
import { InjectCustomScriptService } from '../../services/custom-script/inject-custom-script.service'

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, AfterViewInit {
  

  script = '<script>console.log(\'script da pagina principal executando\');</script>';

  constructor(
    public injectCustomScriptService: InjectCustomScriptService
  ) {}

  ngOnInit(): void {
    console.log("Você entrou na pagina principal");
    this.injectCustomScriptService.setScriptToHeader(this.script)
  }

  ngAfterViewInit(): void {
    
  }

}
