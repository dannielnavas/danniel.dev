import { Component, Input } from '@angular/core';
import { IPost } from 'src/app/core/models/post.interface';
import { GoogleAnalyticsService } from 'src/app/core/services/google-analytics.service';

@Component({
  selector: 'app-post-cards',
  templateUrl: './post-cards.component.html',
  styleUrls: ['./post-cards.component.scss'],
})
export class PostCardsComponent {
  @Input() article!: IPost;

  constructor(private googleAnalyticsService: GoogleAnalyticsService) {}

  goToArticle(nameTitle: string, url: string): void {
    this.googleAnalyticsService.logEvent(
      'click',
      'articles',
      'go to article',
      nameTitle
    );
    window.open(url, '_blank');
  }
}
