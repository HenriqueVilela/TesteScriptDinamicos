import { Component, OnInit, Input, AfterViewInit, Renderer2 } from '@angular/core';
import { InjectCustomScriptService } from 'src/app/services/custom-script/inject-custom-script.service';

@Component({
  selector: 'sub-page',
  templateUrl: './sub-page.component.html',
  styleUrls: ['./sub-page.component.scss']
})
export class SubPageComponent implements OnInit, AfterViewInit {

  script = '<script>console.log(\'script da pagina secundaria executando\');</script>';

  constructor(
    public injectCustomScriptService: InjectCustomScriptService,
    public renderer2: Renderer2
  ) {}

  ngOnInit(): void {
    console.log("Você entrou na pagina secundaria");
    console.log('garai',this.script);
    this.injectCustomScriptService.setScriptToHeader(this.renderer2, this.script)
  }

  ngAfterViewInit(): void {
    
  }

}
