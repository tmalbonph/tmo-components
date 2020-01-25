import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertComponent } from './alert.component';
import { MatIconModule } from '@angular/material/icon';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlertComponent],
      imports: [MatIconModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('verify method `ngOnInit`', () => {
    component.alertType = 'critical';
    spyOn(component, 'setIcons');
    component.ngOnInit();
    expect(component.setIcons).toHaveBeenCalledWith('critical');
  });

  it('verify method `setIcons`  when `alertType` is `critical`', () => {
    component.setIcons('critical');
    expect(component.typeIcon).toBe('alert-outline');
    expect(component.actionIcon).toBe('keyboard_arrow_right');
  });

  it('verify method `setIcons`  when `alertType` is `warning`', () => {
    component.setIcons('warning');
    expect(component.typeIcon).toBe('error-outline');
    expect(component.actionIcon).toBe('close');
  });

  it('verify method `setIcons`  when `alertType` is `success`', () => {
    component.setIcons('success');
    expect(component.typeIcon).toBe('error-outline');
    expect(component.actionIcon).toBe('close');
    expect(component.alertType).toBe('warning');
  });
});
