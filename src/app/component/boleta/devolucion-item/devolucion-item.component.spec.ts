import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolucionItemComponent } from './devolucion-item.component';

describe('DevolucionItemComponent', () => {
  let component: DevolucionItemComponent;
  let fixture: ComponentFixture<DevolucionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevolucionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevolucionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
