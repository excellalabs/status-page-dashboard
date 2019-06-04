import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualUpdateModalComponent } from './manual-update-modal.component';

describe('ManualUpdateModalComponent', () => {
  let component: ManualUpdateModalComponent;
  let fixture: ComponentFixture<ManualUpdateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualUpdateModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualUpdateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
