import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFriendModalPage } from './add-friend-modal.page';

describe('AddFriendModalPage', () => {
  let component: AddFriendModalPage;
  let fixture: ComponentFixture<AddFriendModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFriendModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFriendModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
