import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class InjectCustomScriptService {

  constructor(
  ) { }

  public setScriptToBody(data: string, $replaceSript: boolean = false): void {
    if ($replaceSript) {
      this.removeOldScript("body");
    }
    if (document.getElementsByClassName("script_personalizado_body").length === 0) {
      $(data).toArray().forEach(element => {
        if (element.tagName === "SCRIPT" || element.tagName === "NOSCRIPT") {
          element.classList.add("script_personalizado_body");
          $("body").append(element);
        }
      });
    }
  }

  public setScriptToHeader(data: string, $replaceSript: boolean = false): void {
    if ($replaceSript) {
      this.removeOldScript("header");
    }
    if (document.getElementsByClassName("script_personalizado_header").length === 0) {
      $(data).toArray().forEach(element => {
        if (element.tagName === "SCRIPT" || element.tagName === "NOSCRIPT") {
          element.classList.add("script_personalizado_header");
          $("head").append(element);
        }
      });
    }
  }

  private removeOldScript($location: string) {
    const elements = document.getElementsByClassName("script_personalizado_" + $location);
    while(elements.length > 0) {
      elements[0].remove();
   }
  }

}
