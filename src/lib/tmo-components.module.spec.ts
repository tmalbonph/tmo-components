import { async, TestBed } from '@angular/core/testing';
import { TmoComponentsModule } from './tmo-components.module';

describe('TmoComponentsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TmoComponentsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TmoComponentsModule).toBeDefined();
  });
});
