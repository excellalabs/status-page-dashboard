import { Component, Input, OnInit } from '@angular/core'
import { UpdateMethod, IService } from '../../models/service.interface'
import { MatDialog } from '@angular/material'
import { ManualUpdateModalComponent } from '../manual-update-modal/manual-update-modal.component'
import { ThemeService } from '../../services/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent implements OnInit {
  @Input() service: IService

  isLightTheme$: boolean;

  constructor(private themeService: ThemeService, private dialog: MatDialog) {
    themeService.getTheme()
      .subscribe(val => {
      this.isLightTheme$ = val;
    })
  }

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
