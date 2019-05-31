import { MatDividerModule, MatExpansionModule } from '@angular/material'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'

const materialModules = [
    BrowserAnimationsModule,
    MatExpansionModule,
    MatDividerModule
  ];


@NgModule({
  imports: materialModules,
  exports: materialModules
})
export class MaterialModule {}
