import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InjectCustomScriptService {

  constructor(
    @Inject(DOCUMENT) private _document: Document
  ) { }

  /**
   * Set JSON-LD Microdata on the Document Body.
   *
   * @param renderer2             The Angular Renderer
   * @param data                  The data for the JSON-LD script
   * @returns                     Void
   */
  public setScriptToBody(renderer2: Renderer2, data: any): void {
    let script = JSON.stringify(data);
    renderer2.appendChild(this._document.head, script);
  }

  public setScriptToHeader(renderer2: Renderer2, data: any): void {
    let script = JSON.stringify(data);
    renderer2.appendChild(this._document.head, script);
  }

}
