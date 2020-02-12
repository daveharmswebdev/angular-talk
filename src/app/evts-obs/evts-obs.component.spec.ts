import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvtsObsComponent } from './evts-obs.component';

describe('EvtsObsComponent', () => {
  let component: EvtsObsComponent;
  let fixture: ComponentFixture<EvtsObsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvtsObsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvtsObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
