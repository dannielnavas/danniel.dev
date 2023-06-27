import { Component, Input } from '@angular/core';
import { IPost } from 'src/app/core/models/post.interface';

@Component({
  selector: 'app-post-cards',
  templateUrl: './post-cards.component.html',
  styleUrls: ['./post-cards.component.scss'],
})
export class PostCardsComponent {
  @Input() article!: IPost;

  goToArticle(url: string): void {
    window.open(url, '_blank');
  }
}
