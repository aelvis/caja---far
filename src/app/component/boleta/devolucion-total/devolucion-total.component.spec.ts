import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolucionTotalComponent } from './devolucion-total.component';

describe('DevolucionTotalComponent', () => {
  let component: DevolucionTotalComponent;
  let fixture: ComponentFixture<DevolucionTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevolucionTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevolucionTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
