import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignSecComponent } from './sign-sec.component';

describe('SignSecComponent', () => {
  let component: SignSecComponent;
  let fixture: ComponentFixture<SignSecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignSecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
