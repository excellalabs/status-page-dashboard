import { Component, Inject } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material'
import { GetAppStatusService } from '../../services/get-app-status.service'
import { ServiceStatus, IService, UpdateMethod } from '../../models/service.interface'
@Component({
  selector: 'app-manual-update-modal',
  templateUrl: './manual-update-modal.component.html',
  styleUrls: ['./manual-update-modal.component.scss']
})
export class ManualUpdateModalComponent {
  statuses: Array<string>
  service: IService
  updateMethods: Array<string>
  constructor(
    public dialogRef: MatDialogRef<ManualUpdateModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private appStatusService: GetAppStatusService
  ) {
    this.service = Object.assign({}, data.service)
    this.statuses = [ServiceStatus.UP, ServiceStatus.ISSUE, ServiceStatus.DOWN]
    this.updateMethods = [UpdateMethod.manual, UpdateMethod.automatic]
  }
  
  cancel(): void {
    this.dialogRef.close()
  }

  save(): void {
    this.appStatusService.updateStatus(this.service)
    this.dialogRef.close()
  }
}
