import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'tmo-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DividerComponent {
  @Input() dividerType: string;
}
