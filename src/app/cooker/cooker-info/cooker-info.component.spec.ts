import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookerInfoComponent } from './cooker-info.component';

describe('CookerInfoComponent', () => {
  let component: CookerInfoComponent;
  let fixture: ComponentFixture<CookerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
