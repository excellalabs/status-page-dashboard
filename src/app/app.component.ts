import { Component } from '@angular/core'
import { GetAppStatusService } from './services/get-app-status.service'
import { IService } from './models/service.interface'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  processes: Observable<IService[]>
  constructor(processService: GetAppStatusService) {
    this.processes = processService.get()
  }
}
