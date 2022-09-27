import { TestBed } from '@angular/core/testing';

import { InjectCustomScriptService } from './inject-custom-script.service';

describe('InjectCustomScriptService', () => {
  let service: InjectCustomScriptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InjectCustomScriptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
