import { TestBed, inject } from '@angular/core/testing';

import { NewsSearchService } from './news-search.service';

describe('NewsSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsSearchService]
    });
  });

  it('should ...', inject([NewsSearchService], (service: NewsSearchService) => {
    expect(service).toBeTruthy();
  }));
});
