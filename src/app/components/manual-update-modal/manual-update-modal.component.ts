import { Component, Inject } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material'
import { GetAppStatusService } from '../../services/get-app-status.service'
import { ServiceStatus, IService } from '../../models/service.interface'
@Component({
  selector: 'app-manual-update-modal',
  templateUrl: './manual-update-modal.component.html',
  styleUrls: ['./manual-update-modal.component.css']
})
export class ManualUpdateModalComponent {
  statuses: Array<string>
  service: IService
  constructor(
    public dialogRef: MatDialogRef<ManualUpdateModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private appStatusService: GetAppStatusService
  ) {
    this.service = Object.assign({}, data.service)
    this.statuses = [ServiceStatus.UP, ServiceStatus.ISSUE, ServiceStatus.DOWN]
  }

  cancel(): void {
    this.dialogRef.close()
  }

  save(): void {
    this.appStatusService.updateStatus(this.service)
    this.dialogRef.close()
  }
}
