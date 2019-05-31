import { Component, OnInit } from '@angular/core';
import { IService, ServiceStatus } from '../../models/service.interface';

import { GetAppStatusService } from './../../services/get-app-status.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  criticalProcesses$: Observable<IService[]>
  hasCriticalProcesses$: Observable<boolean>

  greenProcesses$: Observable<IService[]>

  constructor(private processService: GetAppStatusService) {}

  ngOnInit() {
    this.criticalProcesses$ = this.processService.get()
      .pipe(map((serviceList: IService[]) =>
        serviceList.filter(s => s.status !== ServiceStatus.UP)
          .sort((a, b) => a.name.localeCompare(b.name))
      ));
    this.hasCriticalProcesses$ = this.criticalProcesses$.pipe(
      map(processes => processes ? processes.length > 0 : false)
    );

    this.greenProcesses$ = this.processService.get()
      .pipe(map((serviceList: IService[]) =>
        serviceList.filter(s => s.status === ServiceStatus.UP)
          .sort((a, b) => a.name.localeCompare(b.name))
      ));
  }

}
