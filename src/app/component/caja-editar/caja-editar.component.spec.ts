import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaEditarComponent } from './caja-editar.component';

describe('CajaEditarComponent', () => {
  let component: CajaEditarComponent;
  let fixture: ComponentFixture<CajaEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CajaEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CajaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
