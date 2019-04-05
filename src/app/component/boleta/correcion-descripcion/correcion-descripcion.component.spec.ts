import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrecionDescripcionComponent } from './correcion-descripcion.component';

describe('CorrecionDescripcionComponent', () => {
  let component: CorrecionDescripcionComponent;
  let fixture: ComponentFixture<CorrecionDescripcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrecionDescripcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrecionDescripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
