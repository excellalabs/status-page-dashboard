import { Component, OnInit } from '@angular/core';
import { IService, ServiceStatus } from '../../models/service.interface';

import { GetAppStatusService } from './../../services/get-app-status.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  services$: Observable<IService[]>

  constructor(private processService: GetAppStatusService) {}

  ngOnInit() {
    this.services$ = this.processService.get()
      .pipe(map((serviceList: IService[]) => serviceList.sort(this.compareStatus)));
  }

  compareStatus(a: IService, b: IService): number {
    if (a === b) { return a.name.localeCompare(b.name) }
    if (a.status === ServiceStatus.UP) { return 1; }
    if (a.status === ServiceStatus.ISSUE && b.status === ServiceStatus.DOWN) {
      return 1;
    }
    return -1;
  }

}
