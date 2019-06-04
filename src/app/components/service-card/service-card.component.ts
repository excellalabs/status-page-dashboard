import { Component, Input, OnInit } from '@angular/core'
import { UpdateMethod, IService } from '../../models/service.interface'
import { MatDialog } from '@angular/material'
import { ManualUpdateModalComponent } from '../manual-update-modal/manual-update-modal.component'

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent implements OnInit {
  @Input() service: IService

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  isManualUpdate(): Boolean {
    if (this.service.updateMethod === UpdateMethod.manual) {
      return true
    } else {
      return false
    }
  }

  openDialog(): void {
    this.dialog.open(ManualUpdateModalComponent, {
      width: '400px',
      data: { service: this.service }
    })
  }
}
