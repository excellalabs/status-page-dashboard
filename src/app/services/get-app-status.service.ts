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
        name: 'Unanet',
        status: ServiceStatus.UP
      },
      {
        name: 'UltiPro',
        status: ServiceStatus.UP
      },
      {
        name: 'Microsoft',
        status: ServiceStatus.ISSUE,
        statusText: 'Email is down.',
        subProcesses: [
          {
            name: 'Office 365',
            status: ServiceStatus.UP,
          },
          {
            name: 'Email',
            status: ServiceStatus.DOWN,
            statusText: 'Email is DOWN'
          },
          {
            name: 'SharePoint',
            status: ServiceStatus.UP,
          }
        ]
      },
      {
        name: 'Zoom',
        status: ServiceStatus.DOWN,
      },
      {
        name: 'JumpCloud',
        status: ServiceStatus.UP,
      }
    ])
  }
}
