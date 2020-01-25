import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { isBoolean, isEmpty, isEqual, isString } from 'lodash-es';

@Component({
  selector: 'tmo-price-lockup',
  templateUrl: './price-lockup.component.html',
  styleUrls: ['./price-lockup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriceLockupComponent {
  @Input() leftAmount: string;
  @Input() leftMagenta: string;
  @Input() leftOnly: string;
  @Input() leftText: string;
  @Input() rightAmount: string;
  @Input() rightSubText: string;
  @Input() rightText: string;
  @Input() showAsDiscount: string;
  @Input() showTotalPricing: string;
  @Input() sizeClass: string;
  @Input() spin: string;
  @Input() totalOriginalPrice: string;
  @Input() totalPrice: string;
  @Input() totalPriceOnly: string;
  @Input() totalPriceText: string;
  autoPayOn: string;
  autoPayDiscount: string;
  leftSubText: string;
  rightAutoPayText: string;
  rightTaxText: string;
  hybridBanSubText: string;
  hybridBanFlag: boolean;
  decimalSeparator: string;
  rightAutoPayStartingText: string;
  legalTermsText: string;
  legalTermsMobile: string;

  public setBooleanValues = function (property, force) {
    const defaultValue = isBoolean(force) ? force : false;
    if (!isBoolean(property)) {
      property = isString(property) ? isEqual(property.toLowerCase(), 'true') : defaultValue;
    }
    return property;
  };

  constructor() {
    this.leftOnly = this.setBooleanValues(this.leftOnly, false);
    this.showAsDiscount = this.setBooleanValues(this.showAsDiscount, false);
    this.showTotalPricing = this.setBooleanValues(this.showTotalPricing, false);
    this.leftMagenta = this.setBooleanValues(this.leftMagenta, false);
    this.legalTermsMobile = this.setBooleanValues(this.legalTermsMobile, true);
    this.totalPriceOnly = this.setBooleanValues(this.totalPriceOnly, true);
    if (isEmpty(this.decimalSeparator)) this.decimalSeparator = '.';
    if (isEmpty(this.sizeClass)) this.sizeClass = 'price-lockup-xl';
    if (isEmpty(this.leftAmount)) this.leftAmount = '$0';
    if (isEmpty(this.rightAmount)) this.rightAmount = '$0';
  }

  getLeftMagenta = function () {
    return this.setBooleanValues(this.leftMagenta, false);
  };

  getLeftOnly = function () {
    return this.setBooleanValues(this.leftOnly, false);
  };

  getShowAsDiscount = function () {
    return this.setBooleanValues(this.showAsDiscount, false);
  };

  getShowTotalPricing = function () {
    return this.setBooleanValues(this.showTotalPricing, false);
  };

  showlegalTermsMobile = function () {
    return this.setBooleanValues(this.legalTermsMobile, false);
  };

  getTotalPriceOnly = function () {
    return this.setBooleanValues(this.totalPriceOnly, false);
  };
}
