import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BohComponent } from './boh.component';

describe('BohComponent', () => {
  let component: BohComponent;
  let fixture: ComponentFixture<BohComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BohComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BohComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
