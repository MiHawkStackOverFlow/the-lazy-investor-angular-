import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedDepositsMainComponent } from './fixed-deposits-main.component';

describe('FixedDepositsMainComponent', () => {
  let component: FixedDepositsMainComponent;
  let fixture: ComponentFixture<FixedDepositsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedDepositsMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedDepositsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
