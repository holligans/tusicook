import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsOrderComponent } from './meals-order.component';

describe('MealsOrderComponent', () => {
  let component: MealsOrderComponent;
  let fixture: ComponentFixture<MealsOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealsOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
