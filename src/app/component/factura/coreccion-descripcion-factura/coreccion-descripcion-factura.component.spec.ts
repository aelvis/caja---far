import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreccionDescripcionFacturaComponent } from './coreccion-descripcion-factura.component';

describe('CoreccionDescripcionFacturaComponent', () => {
  let component: CoreccionDescripcionFacturaComponent;
  let fixture: ComponentFixture<CoreccionDescripcionFacturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreccionDescripcionFacturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreccionDescripcionFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
