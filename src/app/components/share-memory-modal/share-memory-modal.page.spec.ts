import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareMemoryModalPage } from './share-memory-modal.page';

describe('ShareMemoryModalPage', () => {
  let component: ShareMemoryModalPage;
  let fixture: ComponentFixture<ShareMemoryModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareMemoryModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareMemoryModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
