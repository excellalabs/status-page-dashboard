import { IService, ServiceStatus } from '../models/service.interface'
import { Observable, of } from 'rxjs'

import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class GetAppStatusService {
  constructor() {}

  get(): Observable<IService[]> {
    return of([
      {
        name: 'Teem',
        status: ServiceStatus.UP,
        statusText: 'Teem is Running'
      },
      {
        name: 'Zoom',
        status: ServiceStatus.UP
      },
      {
        name: 'Office 365',
        status: ServiceStatus.ISSUE
      },
      {
        name: 'Slack',
        status: ServiceStatus.DOWN
      }
    ])
  }
}
