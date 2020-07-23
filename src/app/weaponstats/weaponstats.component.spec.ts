import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponstatsComponent } from './weaponstats.component';

describe('WeaponstatsComponent', () => {
  let component: WeaponstatsComponent;
  let fixture: ComponentFixture<WeaponstatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaponstatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
