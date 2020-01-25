import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyComponent } from './money.component';

describe('MoneyComponent', () => {
  let component: MoneyComponent;
  let fixture: ComponentFixture<MoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MoneyComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('verify method `ngOnInit`', () => {
    spyOn(component, 'parse');
    component.price = '1';
    component.ngOnInit();
    expect(component.parse).toHaveBeenCalledWith('1');
  });
});
