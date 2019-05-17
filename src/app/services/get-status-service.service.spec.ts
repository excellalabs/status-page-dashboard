import { TestBed } from '@angular/core/testing';

import { GetStatusServiceService } from './get-status-service.service';

describe('GetStatusServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetStatusServiceService = TestBed.get(GetStatusServiceService);
    expect(service).toBeTruthy();
  });
});
