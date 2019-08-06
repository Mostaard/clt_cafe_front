import { TestBed } from '@angular/core/testing';

import { ProficiencyService } from './proficiency.service';

describe('ProficiencyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProficiencyService = TestBed.get(ProficiencyService);
    expect(service).toBeTruthy();
  });
});
