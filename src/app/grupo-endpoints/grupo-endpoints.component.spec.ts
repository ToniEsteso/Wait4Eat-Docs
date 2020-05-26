import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoEndpointsComponent } from './grupo-endpoints.component';

describe('GrupoEndpointsComponent', () => {
  let component: GrupoEndpointsComponent;
  let fixture: ComponentFixture<GrupoEndpointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoEndpointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoEndpointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
