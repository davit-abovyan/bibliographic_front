import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllPanelComponent } from './controll-panel.component';

describe('ControllPanelComponent', () => {
  let component: ControllPanelComponent;
  let fixture: ComponentFixture<ControllPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControllPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
