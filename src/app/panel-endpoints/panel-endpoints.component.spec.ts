import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelEndpointsComponent } from './panel-endpoints.component';

describe('PanelEndpointsComponent', () => {
  let component: PanelEndpointsComponent;
  let fixture: ComponentFixture<PanelEndpointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelEndpointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelEndpointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
