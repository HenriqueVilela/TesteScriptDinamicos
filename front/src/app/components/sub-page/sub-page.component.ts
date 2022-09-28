import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { InjectCustomScriptService } from 'src/app/services/custom-script/inject-custom-script.service';

@Component({
  selector: 'sub-page',
  templateUrl: './sub-page.component.html',
  styleUrls: ['./sub-page.component.scss']
})
export class SubPageComponent implements OnInit, AfterViewInit {

  script = `
  <!-- Meta Pixel Code -->
  <script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '457526166340322');
  fbq('track', 'PageView');
  </script>
  <noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=457526166340322&ev=PageView&noscript=1"
  /></noscript>
  <!-- End Meta Pixel Code -->
`;

  constructor(
    public injectCustomScriptService: InjectCustomScriptService
  ) {}

  ngOnInit(): void {
    console.log("Você entrou na pagina secundaria");
    console.log('garai',this.script);
    // this.injectCustomScriptService.setScriptToHeader(this.script)
    this.injectCustomScriptService.setScriptToBody(this.script)
  }

  ngAfterViewInit(): void {
    
  }

}
