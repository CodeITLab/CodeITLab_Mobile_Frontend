import { TestBed } from '@angular/core/testing';

import { UserScoreService } from './user-score.service';

describe('UserScoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserScoreService = TestBed.get(UserScoreService);
    expect(service).toBeTruthy();
  });
});
