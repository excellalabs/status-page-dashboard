import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { SiteComponent } from './components/site/site.component'
import { MatExpansionModule, MatDividerModule } from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { StatusComponent } from './components/status/status.component'

@NgModule({
  declarations: [AppComponent, SiteComponent, StatusComponent],
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
