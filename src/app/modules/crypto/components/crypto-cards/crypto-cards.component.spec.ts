import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoCardsComponent } from './crypto-cards.component';

describe('CryptoCardsComponent', () => {
  let component: CryptoCardsComponent;
  let fixture: ComponentFixture<CryptoCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
