import { Component, OnInit, Input, AfterViewInit, Renderer2 } from '@angular/core';
import { InjectCustomScriptService } from '../../services/custom-script/inject-custom-script.service'

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, AfterViewInit {
  

  constructor(
    injectCustomScriptService: InjectCustomScriptService,
    renderer2: Renderer2
  ) { 
    injectCustomScriptService.setScriptToHeader(renderer2, this.script)
  }

  script = `
  <script>
    console.log('script da pagina principal executando');
  </script>
  `;

  ngOnInit(): void {
    console.log("Você entrou na pagina principal");
  }

  ngAfterViewInit(): void {
    
  }

}
