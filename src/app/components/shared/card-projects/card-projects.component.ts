import { Component, Input } from '@angular/core';
import { IResponseGithub } from 'src/app/core/models/response-github.interface';
import { GoogleAnalyticsService } from 'src/app/core/services/google-analytics.service';

@Component({
  selector: 'app-card-projects',
  templateUrl: './card-projects.component.html',
  styleUrls: ['./card-projects.component.scss'],
})
export class CardProjectsComponent {
  @Input() project!: IResponseGithub;

  constructor(private googleAnalyticsService: GoogleAnalyticsService) {}

  goGeneric(name: string, url: string): void {
    this.googleAnalyticsService.logEvent(
      'click',
      'projects',
      'go to project',
      name
    );
    window.open(url, '_blank');
  }
}
