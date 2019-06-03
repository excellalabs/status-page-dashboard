import {
  IService,
  ServiceStatus,
  UpdateMethod
} from '../models/service.interface'
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
        statusText: 'Teem is Running',
        updateMethod: UpdateMethod.automatic
      },
      {
        name: 'Unanet',
        status: ServiceStatus.UP,
        updateMethod: UpdateMethod.automatic
      },
      {
        name: 'UltiPro',
        status: ServiceStatus.UP,
        updateMethod: UpdateMethod.automatic
      },
      {
        name: 'Microsoft',
        status: ServiceStatus.ISSUE,
        statusText: 'Email is down.',
        updateMethod: UpdateMethod.automatic,
        subProcesses: [
          {
            name: 'Office 365',
            status: ServiceStatus.UP,
            updateMethod: UpdateMethod.automatic
          },
          {
            name: 'Email',
            status: ServiceStatus.DOWN,
            statusText: 'Email is DOWN',
            updateMethod: UpdateMethod.automatic
          },
          {
            name: 'SharePoint',
            status: ServiceStatus.UP,
            updateMethod: UpdateMethod.automatic
          }
        ]
      },
      {
        name: 'Zoom',
        status: ServiceStatus.DOWN,
        updateMethod: UpdateMethod.automatic
      },
      {
        name: 'JumpCloud',
        status: ServiceStatus.ISSUE,
        updateMethod: UpdateMethod.automatic
      }
    ])
  }
}
