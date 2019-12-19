import { TestBed } from '@angular/core/testing';

import { MemoryDataService } from './memory-data.service';

describe('MemoryDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MemoryDataService = TestBed.get(MemoryDataService);
    expect(service).toBeTruthy();
  });
});
