import { TestBed } from '@angular/core/testing';

import { IsOfflineServiceService } from './is-offline-service.service';

describe('IsOfflineServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IsOfflineServiceService = TestBed.get(IsOfflineServiceService);
    expect(service).toBeTruthy();
  });
});
