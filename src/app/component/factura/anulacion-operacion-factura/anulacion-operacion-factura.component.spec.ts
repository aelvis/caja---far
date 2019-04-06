import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnulacionOperacionFacturaComponent } from './anulacion-operacion-factura.component';

describe('AnulacionOperacionFacturaComponent', () => {
  let component: AnulacionOperacionFacturaComponent;
  let fixture: ComponentFixture<AnulacionOperacionFacturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnulacionOperacionFacturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnulacionOperacionFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
