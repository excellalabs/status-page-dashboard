import { Component, OnInit, Input } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {
  @Input() process
  constructor() {}

  ngOnInit() {}
}
