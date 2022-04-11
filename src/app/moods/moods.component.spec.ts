/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MoodsComponent } from './moods.component';

describe('MoodsComponent', () => {
  let component: MoodsComponent;
  let fixture: ComponentFixture<MoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
