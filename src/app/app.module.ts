import { MatDividerModule, MatExpansionModule } from '@angular/material'

import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { ServiceCardComponent } from './components/service-card/service-card.component'
import { StatusComponent } from './components/status/status.component'

@NgModule({
  declarations: [AppComponent, ServiceCardComponent, StatusComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
