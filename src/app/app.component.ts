import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
  <link href="https://fonts.googleapis.com/css?family=Muli&display=swap" rel="stylesheet">

  <h1>Excella</h1>
  <app-dashboard class="body"></app-dashboard>
  `,
  styleUrls: ['app.component.scss']
})
export class AppComponent {}
