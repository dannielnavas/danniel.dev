import { Component, Input } from '@angular/core';
import { IResponseStatistics } from 'src/app/core/models/statistics.interface';

@Component({
  selector: 'app-card-statistics',
  templateUrl: './card-statistics.component.html',
  styleUrls: ['./card-statistics.component.scss'],
})
export class CardStatisticsComponent {
  @Input() stast!: IResponseStatistics;
}
