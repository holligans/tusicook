import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookerOfferComponent } from './cooker-offer.component';

describe('CookerOfferComponent', () => {
  let component: CookerOfferComponent;
  let fixture: ComponentFixture<CookerOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookerOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookerOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
