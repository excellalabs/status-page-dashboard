import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { MaterialModule } from './mat.module';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { StatusComponent } from './components/status/status.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ServiceCardComponent,
        StatusComponent
      ],
      imports: [ MaterialModule ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
