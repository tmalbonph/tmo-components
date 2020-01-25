import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tmo-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent implements OnInit {
  @Input() alertType: string;
  @Input() headline: string;
  @Input() subHeader: string;
  actionIcon: string;
  typeIcon: string;

  constructor() {}

  ngOnInit() {
    this.setIcons(this.alertType);
  }

  setIcons = function(alertType: string) {
    switch (alertType) {
      case 'critical':
        this.typeIcon = 'alert-outline';
        this.actionIcon = 'keyboard_arrow_right';
        break;

      case 'warning':
        this.typeIcon = 'error-outline';
        this.actionIcon = 'close';
        break;

      default:
        this.alertType = 'warning';
        this.typeIcon = 'error-outline';
        this.actionIcon = 'close';
        break;
    }
  };
}
