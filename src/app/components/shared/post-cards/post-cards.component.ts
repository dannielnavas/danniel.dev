import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-cards',
  templateUrl: './post-cards.component.html',
  styleUrls: ['./post-cards.component.scss'],
})
export class PostCardsComponent {
  @Input() post!: any;
}
