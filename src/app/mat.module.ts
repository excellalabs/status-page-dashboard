import {
  MatDividerModule,
  MatExpansionModule,
  MatDialogModule,
  MatButtonModule,
  MatInputModule,
  MatRadioModule,
  MatToolbarModule,
  MatSlideToggleModule,
  MatButtonToggleModule
} from '@angular/material'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'

const materialModules = [
  BrowserAnimationsModule,
  MatExpansionModule,
  MatDividerModule,
  MatDialogModule,
  MatButtonModule,
  MatRadioModule,
  MatInputModule,
  MatToolbarModule,
  MatSlideToggleModule,
  MatButtonToggleModule
]

@NgModule({
  imports: materialModules,
  exports: materialModules
})
export class MaterialModule {}
