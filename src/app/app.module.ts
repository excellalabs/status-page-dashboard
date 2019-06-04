import { AppComponent } from './app.component'
import { BrowserModule } from '@angular/platform-browser'
import { MaterialModule } from './mat.module'
import { NgModule } from '@angular/core'
import { ServiceCardComponent } from './components/service-card/service-card.component'
import { StatusComponent } from './components/service-card/status/status.component'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { FormsModule } from '@angular/forms'
import { ManualUpdateModalComponent } from './components/manual-update-modal/manual-update-modal.component'

@NgModule({
  entryComponents: [ManualUpdateModalComponent],
  declarations: [
    AppComponent,
    ServiceCardComponent,
    StatusComponent,
    DashboardComponent,
    ManualUpdateModalComponent
  ],
  imports: [BrowserModule, MaterialModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
