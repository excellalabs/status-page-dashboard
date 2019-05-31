import { Component, OnInit } from '@angular/core';

import { GetAppStatusService } from './../../services/get-app-status.service';
import { IService } from '../../models/service.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  processes: Observable<IService[]>

  constructor(private processService: GetAppStatusService) {}

  ngOnInit() {
    this.processes = this.processService.get()
  }

}
