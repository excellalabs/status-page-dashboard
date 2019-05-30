import { TestBed } from '@angular/core/testing'

import { GetAppStatusService } from './get-app-status.service'

describe('GetAppStatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}))

  it('should be created', () => {
    const service: GetAppStatusService = TestBed.get(GetAppStatusService)
    expect(service).toBeTruthy()
  })
})
