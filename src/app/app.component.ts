import { Component } from '@angular/core'
import { Page } from './models/page'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages = [
    new Page(
      'Teem',
      'https://status.teem.com/api/v2/',
      'working',
      'All Systems Operational'
    ),
    new Page(
      'Slack',
      'https://status.teem.com/api/v2/',
      'interruption',
      'Experiencing an Interruption'
    ),
    new Page('Zoom', 'https://status.teem.com/api/v2/', 'down', 'Down')
  ]
}
