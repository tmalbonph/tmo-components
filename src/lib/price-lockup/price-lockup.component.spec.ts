import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceLockupComponent } from './price-lockup.component';
import { MoneyComponent } from '../money/money.component';

describe('PriceLockupComponent', () => {
  let component: PriceLockupComponent;
  let fixture: ComponentFixture<PriceLockupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PriceLockupComponent, MoneyComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceLockupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});