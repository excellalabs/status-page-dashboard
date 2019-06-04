import {
  MatDividerModule,
  MatExpansionModule,
  MatDialogModule,
  MatButtonModule,
  MatInputModule,
  MatRadioModule
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
  MatInputModule
]

@NgModule({
  imports: materialModules,
  exports: materialModules
})
export class MaterialModule {}
