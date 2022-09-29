import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class InjectCustomScriptService {

  constructor(
  ) { }

  public setScriptToBody(data: string): void {
    console.log(document.getElementsByClassName("script_personalizado_body").length);
    if (document.getElementsByClassName("script_personalizado").length === 0) {
      $(data).toArray().forEach(element => {
        if (element.tagName === "SCRIPT" || element.tagName === "NOSCRIPT") {
          element.classList.add("script_personalizado_body");
          $("body").append(element);
        }
      });
    }
  }

  public setScriptToHeader(data: string): void {
    if (document.getElementsByClassName("script_personalizado_header").length === 0) {
      $(data).toArray().forEach(element => {
        if (element.tagName === "SCRIPT" || element.tagName === "NOSCRIPT") {
          element.classList.add("script_personalizado_header");
          $("head").append(element);
        }
      });
    }
  }

}
