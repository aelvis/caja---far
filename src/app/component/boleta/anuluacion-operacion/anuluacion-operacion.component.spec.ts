import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuluacionOperacionComponent } from './anuluacion-operacion.component';

describe('AnuluacionOperacionComponent', () => {
  let component: AnuluacionOperacionComponent;
  let fixture: ComponentFixture<AnuluacionOperacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnuluacionOperacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnuluacionOperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
