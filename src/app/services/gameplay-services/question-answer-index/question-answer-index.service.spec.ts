import { TestBed } from '@angular/core/testing';

import { QuestionAnswerIndexService } from './question-answer-index.service';

describe('QuestionAnswerIndexService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionAnswerIndexService = TestBed.get(QuestionAnswerIndexService);
    expect(service).toBeTruthy();
  });
});
