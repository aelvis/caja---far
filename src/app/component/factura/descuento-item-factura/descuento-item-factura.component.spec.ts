import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescuentoItemFacturaComponent } from './descuento-item-factura.component';

describe('DescuentoItemFacturaComponent', () => {
  let component: DescuentoItemFacturaComponent;
  let fixture: ComponentFixture<DescuentoItemFacturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescuentoItemFacturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescuentoItemFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
