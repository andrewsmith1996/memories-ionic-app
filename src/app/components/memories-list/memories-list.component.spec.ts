import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoriesListComponent } from './memories-list.component';

describe('MemoriesListComponent', () => {
  let component: MemoriesListComponent;
  let fixture: ComponentFixture<MemoriesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoriesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
