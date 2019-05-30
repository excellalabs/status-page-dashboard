import { Component } from '@angular/core'
import { IProcess } from './models/page'
import { GetAppStatusService } from './services/get-app-status.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  processes: Observable<IProcess[]>
  constructor(processService: GetAppStatusService) {
    this.processes = processService.get()
  }
}
