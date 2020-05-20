import { TestBed } from '@angular/core/testing';

import { GameplayFlowService } from './gameplay-flow.service';

describe('GameplayFlowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameplayFlowService = TestBed.get(GameplayFlowService);
    expect(service).toBeTruthy();
  });
});
