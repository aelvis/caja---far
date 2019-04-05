import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuluacionErrorRucComponent } from './anuluacion-error-ruc.component';

describe('AnuluacionErrorRucComponent', () => {
  let component: AnuluacionErrorRucComponent;
  let fixture: ComponentFixture<AnuluacionErrorRucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnuluacionErrorRucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnuluacionErrorRucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
