import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { IProcess, Status } from '../models/page'

@Injectable({
  providedIn: 'root'
})
export class GetAppStatusService {
  constructor() {}

  get(): Observable<IProcess[]> {
    return of([
      {
        name: 'Teem',
        status: Status.up,
        statusText: 'Teem is Running'
      },
      {
        name: 'Zoom',
        status: Status.up
      },
      {
        name: 'Office 365',
        status: Status.issue
      },
      {
        name: 'Slack',
        status: Status.down
      }
    ])
  }
}
