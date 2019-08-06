import { TestBed } from '@angular/core/testing';

import { UserInterestsService } from './user-interests.service';

describe('UserInterestsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserInterestsService = TestBed.get(UserInterestsService);
    expect(service).toBeTruthy();
  });
});
