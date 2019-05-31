import { Component, Input, OnInit } from '@angular/core'

import { ServiceStatus } from '../../../models/service.interface'

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  @Input() status: string
  @Input() statusText: string
  constructor() {}

  ngOnInit() {}

  getDefaultStatusText(): string {
    if (this.status === ServiceStatus.UP) {
      return 'All systems functional'
    }
    return 'Issue'
  }
}
