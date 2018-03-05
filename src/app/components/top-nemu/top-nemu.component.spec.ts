import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNemuComponent } from './top-nemu.component';

describe('TopNemuComponent', () => {
  let component: TopNemuComponent;
  let fixture: ComponentFixture<TopNemuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopNemuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNemuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
