import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FramestatsComponent } from './framestats.component';

describe('FramestatsComponent', () => {
  let component: FramestatsComponent;
  let fixture: ComponentFixture<FramestatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FramestatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FramestatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
