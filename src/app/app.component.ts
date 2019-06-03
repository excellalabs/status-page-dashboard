import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
  <link href="https://fonts.googleapis.com/css?family=Muli&display=swap" rel="stylesheet">

  <div class="top">
    <img src="../assets/excellaLogo.png" alt="Excella" height="35" width="150">
  </div>

  <app-dashboard class="content"></app-dashboard>
  `,
  styleUrls: ['app.component.scss']
})
export class AppComponent {}
