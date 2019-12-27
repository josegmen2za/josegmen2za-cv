import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatospersonaComponent } from './datospersona.component';

describe('DatospersonaComponent', () => {
  let component: DatospersonaComponent;
  let fixture: ComponentFixture<DatospersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatospersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatospersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
