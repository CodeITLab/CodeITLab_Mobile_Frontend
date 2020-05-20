import { TestBed } from '@angular/core/testing';

import { SelectedCategoryService } from './selected-category.service';

describe('SelectedCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectedCategoryService = TestBed.get(SelectedCategoryService);
    expect(service).toBeTruthy();
  });
});
