import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMemoryPage } from './add-memory.page';

describe('AddMemoryPage', () => {
  let component: AddMemoryPage;
  let fixture: ComponentFixture<AddMemoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMemoryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMemoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
