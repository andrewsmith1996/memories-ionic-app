import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearbyLocationModalPage } from './nearby-location-modal.page';

describe('NearbyLocationModalPage', () => {
  let component: NearbyLocationModalPage;
  let fixture: ComponentFixture<NearbyLocationModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearbyLocationModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearbyLocationModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
