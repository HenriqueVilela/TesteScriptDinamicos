import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomScriptInjectComponent } from './custom-script-inject.component';

describe('CustomScriptInjectComponent', () => {
  let component: CustomScriptInjectComponent;
  let fixture: ComponentFixture<CustomScriptInjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomScriptInjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomScriptInjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
