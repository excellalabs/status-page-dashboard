import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
  <link href="https://fonts.googleapis.com/css?family=Muli&display=swap" rel="stylesheet">

  <h1 class="temp-title">Excella</h1>
  <app-dashboard class="content"></app-dashboard>
  `,
  styleUrls: ['app.component.scss']
})
export class AppComponent {}
