import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule
} from '@angular/material';

import { ButtonsComponent } from './buttons/buttons.component';
import { AlertComponent } from './alert/alert.component';
import { DatePickerComponent, DatePickerHeaderComponent } from './date-picker/date-picker.component';
import { DividerComponent } from './divider/divider.component';
import { PriceLockupComponent } from './price-lockup/price-lockup.component';
import { MoneyComponent } from './money/money.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AlertComponent,
    ButtonsComponent,
    DatePickerComponent,
    DatePickerHeaderComponent,
    DividerComponent,
    MoneyComponent,
    PriceLockupComponent
  ],
  exports: [
    AlertComponent,
    ButtonsComponent,
    DatePickerComponent,
    DividerComponent,
    MoneyComponent,
    PriceLockupComponent
  ],
  entryComponents: [DatePickerHeaderComponent]
})
export class TmoComponentsModule {}
