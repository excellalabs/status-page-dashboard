import { AppComponent } from './app.component'
import { BrowserModule } from '@angular/platform-browser'
import { MaterialModule } from './mat.module'
import { NgModule } from '@angular/core'
import { ServiceCardComponent } from './components/service-card/service-card.component'
import { StatusComponent } from './components/service-card/status/status.component'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ManualUpdateModalComponent } from './components/manual-update-modal/manual-update-modal.component'
import { LoginComponent } from './components/login/login.component'
import { AppRoutingModule } from './app-routing.module'
import { LoginService } from './services/login.service'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { TokenInterceptor } from './auth/token.interceptor'

@NgModule({
  entryComponents: [ManualUpdateModalComponent],
  declarations: [
    AppComponent,
    ServiceCardComponent,
    StatusComponent,
    DashboardComponent,
    ManualUpdateModalComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
