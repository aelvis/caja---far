import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnulacionErrorRucFacturaComponent } from './anulacion-error-ruc-factura.component';

describe('AnulacionErrorRucFacturaComponent', () => {
  let component: AnulacionErrorRucFacturaComponent;
  let fixture: ComponentFixture<AnulacionErrorRucFacturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnulacionErrorRucFacturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnulacionErrorRucFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
