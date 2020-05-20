import { TestBed } from '@angular/core/testing';

import { DbQServiceService } from './db-q-service.service';

describe('DbQServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbQServiceService = TestBed.get(DbQServiceService);
    expect(service).toBeTruthy();
  });
});
