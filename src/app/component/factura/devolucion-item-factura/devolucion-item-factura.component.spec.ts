import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolucionItemFacturaComponent } from './devolucion-item-factura.component';

describe('DevolucionItemFacturaComponent', () => {
  let component: DevolucionItemFacturaComponent;
  let fixture: ComponentFixture<DevolucionItemFacturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevolucionItemFacturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevolucionItemFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
