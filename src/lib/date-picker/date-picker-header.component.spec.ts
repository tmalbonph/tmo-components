import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDatepickerModule, MatCalendar } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DatePickerComponent, DatePickerHeaderComponent } from './date-picker.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material';
import { ChangeDetectorRef } from '@angular/core';

describe('DatePickerHeaderComponent', () => {
    let component: DatePickerHeaderComponent<{}>;
    let fixture: ComponentFixture<DatePickerHeaderComponent<{}>>;

    const mockChangeDetectorRef = {};

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DatePickerHeaderComponent, DatePickerComponent],
            imports: [MatDatepickerModule,
                MatFormFieldModule,
                MatInputModule,
                MatIconModule,
                MatNativeDateModule,
                NoopAnimationsModule],
            providers: [MatCalendar, DatePickerComponent,
                {
                    provide: ChangeDetectorRef,
                    useValue: mockChangeDetectorRef
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DatePickerHeaderComponent);
        component = fixture.componentInstance;
        // fixture.detectChanges();
    });

    xit('should create', () => {
        expect(component).toBeTruthy();
    });
});
