import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolucionTotalFacturaComponent } from './devolucion-total-factura.component';

describe('DevolucionTotalFacturaComponent', () => {
  let component: DevolucionTotalFacturaComponent;
  let fixture: ComponentFixture<DevolucionTotalFacturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevolucionTotalFacturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevolucionTotalFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
