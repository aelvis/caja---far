import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescuentoTotalFacturaComponent } from './descuento-total-factura.component';

describe('DescuentoTotalFacturaComponent', () => {
  let component: DescuentoTotalFacturaComponent;
  let fixture: ComponentFixture<DescuentoTotalFacturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescuentoTotalFacturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescuentoTotalFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
