import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceFieldComponent } from './science-field.component';

describe('ScienceFieldComponent', () => {
  let component: ScienceFieldComponent;
  let fixture: ComponentFixture<ScienceFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScienceFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScienceFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
