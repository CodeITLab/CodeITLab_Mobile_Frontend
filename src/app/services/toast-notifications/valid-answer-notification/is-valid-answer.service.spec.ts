import { TestBed } from '@angular/core/testing';

import { ValidAnswerService } from './is-valid-answer.service';

describe('ValidAnswerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidAnswerService = TestBed.get(ValidAnswerService);
    expect(service).toBeTruthy();
  });
});
