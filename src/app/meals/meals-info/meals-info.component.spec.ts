import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsInfoComponent } from './meals-info.component';

describe('MealsInfoComponent', () => {
  let component: MealsInfoComponent;
  let fixture: ComponentFixture<MealsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
