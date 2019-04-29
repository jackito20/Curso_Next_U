/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TareasGruposComponent } from './tareas-grupos.component';

describe('TareasGruposComponent', () => {
  let component: TareasGruposComponent;
  let fixture: ComponentFixture<TareasGruposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareasGruposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasGruposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
