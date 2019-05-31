import { Component, Input, OnInit } from '@angular/core'

import { Status } from '../../../models/page'

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
    if (this.status === Status.up) {
      return 'All systems functional'
    }
    return 'Issue'
  }
}
