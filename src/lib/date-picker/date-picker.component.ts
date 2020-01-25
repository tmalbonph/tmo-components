import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Host,
  Inject,
  OnDestroy,
  ViewEncapsulation,
  Optional
} from '@angular/core';
import { MatCalendar } from '@angular/material';
import { DateAdapter, MAT_DATE_FORMATS, MatDateFormats } from '@angular/material/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// custom date picker header for tmo + GLUE compliance
@Component({
  selector: 'tmo-date-picker-header',
  template: `
    <div class="spacer-h-s"></div>
    <div class="header" fxLayout="column" fxLayoutAlign="start center">
      <div class="display-5">Select first payment date</div>
      <div class="spacer-h-xs"></div>
      <div>Optional content is placed here</div>
    </div>
    <div class="date-picker-header">
      <button mat-icon-button (click)="previousClicked('month')">
        <mat-icon>keyboard_arrow_left</mat-icon>
      </button>
      <span class="date-picker-header-label">{{ periodLabel }}</span>
      <button mat-icon-button (click)="nextClicked('month')">
        <mat-icon>keyboard_arrow_right</mat-icon>
      </button>
    </div>
    <div class="footer" fxLayout="row" fxLayoutAlign="end center"></div>
  `,
  styleUrls: ['./date-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatePickerHeaderComponent<D> implements OnDestroy {
  private destroyed = new Subject<void>();

  constructor(
    @Host() private calendar: MatCalendar<D>,
    private dateAdapter: DateAdapter<D>,
    @Inject(MAT_DATE_FORMATS) private dateFormats: MatDateFormats,
    @Optional() cdr: ChangeDetectorRef
  ) {
    calendar.stateChanges.pipe(takeUntil(this.destroyed)).subscribe(() => cdr.markForCheck());
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  get periodLabel() {
    return this.dateAdapter
      .format(this.calendar.activeDate, this.dateFormats.display.monthYearLabel)
      .toLocaleUpperCase();
  }

  previousClicked(mode: 'month' | 'year') {
    this.calendar.activeDate =
      mode === 'month'
        ? this.dateAdapter.addCalendarMonths(this.calendar.activeDate, -1)
        : this.dateAdapter.addCalendarYears(this.calendar.activeDate, -1);
  }

  nextClicked(mode: 'month' | 'year') {
    this.calendar.activeDate =
      mode === 'month'
        ? this.dateAdapter.addCalendarMonths(this.calendar.activeDate, 1)
        : this.dateAdapter.addCalendarYears(this.calendar.activeDate, 1);
  }
}

// reusable theme-agnostic date picker
@Component({
  selector: 'tmo-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatePickerComponent {
  minDate = new Date(2000, 10, 30);
  maxDate = new Date(2118, 11, 30);
  datePickerHeader = DatePickerHeaderComponent;
}
