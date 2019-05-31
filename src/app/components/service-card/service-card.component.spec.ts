import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { IService, ServiceStatus } from '../../models/service.interface';

import { MaterialModule } from '../../mat.module';
import { ServiceCardComponent } from './service-card.component';
import { StatusComponent } from './status/status.component';

describe('ServiceCardComponent', () => {
  let component: ServiceCardComponent;
  let fixture: ComponentFixture<ServiceCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceCardComponent, StatusComponent ],
      imports: [ MaterialModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCardComponent);
    component = fixture.componentInstance;
    component.process = {name: 'test service', status: ServiceStatus.UP} as IService
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
