import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { isBoolean, isEmpty, isEqual, isNumber, isString, isUndefined } from 'lodash-es';

@Component({
  selector: 'tmo-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.scss', '../price-lockup/price-lockup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoneyComponent implements OnInit {
  @Input() price: string;
  @Input() spinThePrice: string;
  @Input() symbolClass: string;
  @Input() dollarClass: string;
  @Input() decimalClass: string;
  @Input() pennyClass: string;
  @Input() decimalSeparator: string;
  @Input() thousandSeparator: string;
  @Input() strikeThrough: string;
  @Input() money: string;
  @Input() displayPrice: string;
  @Input() formattedPrice: string;

  public setBooleanValues = function(property, force) {
    const defaultValue = isBoolean(force) ? force : false;
    if (!isBoolean(property)) {
      property = isString(property) ? isEqual(property.toLowerCase(), 'true') : defaultValue;
    }
    return property;
  };

  constructor() {
    if (isEmpty(this.decimalSeparator)) this.decimalSeparator = '.';
    if (isEmpty(this.thousandSeparator)) this.thousandSeparator = this.decimalSeparator === '.' ? ',' : '.';
    if (isEmpty(this.decimalClass) || isUndefined(this.decimalClass)) this.decimalClass = 'decimal-hidden';
  }

  ngOnInit() {
    this.parse(this.price);
  }

  parse = function(price) {
    //parse function is expecting a string
    if (isNumber(price)) price = price.toString();

    if (isEmpty(price)) {
      //if price is empty, default to '$0' (zero dollars no cents)
      this.formattedPrice = ['$', '0', ''];
      return;
    }

    const pattern =
      '^\\s*[\'|"]?\\s*([\\D]*)?(\\d{1,3}(\\' +
      this.thousandSeparator +
      '?\\d{3})*)\\' +
      this.decimalSeparator +
      '(\\d{1,2})';
    const regEx = new RegExp(pattern);
    price = price.indexOf('.') === -1 ? parseFloat(price.replace('$', '').replace(',', '')).toFixed(2) : price;
    this.money = regEx.exec(price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));

    if (isEmpty(this.money)) {
      this.money = ['', '', '']; // symbol, dollars, cents
    } else {
      this.money.splice(0, 1); // remove original string
    }

    if (/\d+/.exec(this.money[0])) {
      this.money = [''].concat(this.money); // insert empty space if no currency symbol given.
    }

    if (isEmpty(this.money[0])) {
      this.money[0] = '$'; // default currency symbol to US Dollars
    }

    if (this.money.length > 3) {
      this.money.splice(2, 1); // remove redundant match from repeating group
    }

    this.formattedPrice = this.money;

    let centsText = '';
    if (!isEmpty(this.money[2]) && !isUndefined(this.money[2])) centsText = ' & ' + this.money[2] + ' cents';
    this.displayPrice = this.money[1] + ' ' + this.money[0] + centsText;
  };

  getStrikeThrough = function() {
    return this.setBooleanValues(this.strikeThrough, true);
  };
}
