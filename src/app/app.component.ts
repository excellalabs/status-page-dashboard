import { Component, OnInit } from '@angular/core'
import { ThemeService } from './services/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  isLightTheme$: Observable<boolean>;

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.isLightTheme$ = this.themeService.isLightTheme$;
  }

  toggleLightTheme(checked: boolean) {
    this.themeService.setLightTheme(checked);
  }

}
