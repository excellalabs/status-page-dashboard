import {
  IService,
  ServiceStatus,
  UpdateMethod
} from '../models/service.interface'
import { Observable, of, BehaviorSubject } from 'rxjs'

import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class GetAppStatusService {
  services: IService[] = [
    {
      name: 'Teem',
      status: ServiceStatus.UP,
      statusText: 'Teem is Running',
      updateMethod: UpdateMethod.manual
    },
    {
      name: 'Unanet',
      status: ServiceStatus.UP,
      updateMethod: UpdateMethod.manual
    },
    {
      name: 'UltiPro',
      status: ServiceStatus.UP,
      updateMethod: UpdateMethod.manual
    },
    {
      name: 'Microsoft',
      status: ServiceStatus.ISSUE,
      statusText: 'Email is down.',
      updateMethod: UpdateMethod.manual,
      subProcesses: [
        {
          name: 'Office 365',
          status: ServiceStatus.UP,
          updateMethod: UpdateMethod.manual
        },
        {
          name: 'Email',
          status: ServiceStatus.DOWN,
          statusText: 'Email is DOWN',
          updateMethod: UpdateMethod.manual
        },
        {
          name: 'SharePoint',
          status: ServiceStatus.UP,
          updateMethod: UpdateMethod.manual
        }
      ]
    },
    {
      name: 'Zoom',
      status: ServiceStatus.DOWN,
      updateMethod: UpdateMethod.manual
    },
    {
      name: 'JumpCloud',
      status: ServiceStatus.ISSUE,
      updateMethod: UpdateMethod.automatic
    }
  ]
  services$ = new BehaviorSubject(this.services)

  constructor() {}

  get(): Observable<IService[]> {
    return this.services$
  }

  updateStatus(service: IService) {
    const index = this.services.findIndex(s => {
      return service.name === s.name
    })
    this.services[index] = service
    this.services$.next(this.services)
  }
}
