import { Component, Input } from '@angular/core';
import { Item } from 'src/app/core/models/response-youtube';

@Component({
  selector: 'app-card-video',
  templateUrl: './card-video.component.html',
  styleUrls: ['./card-video.component.scss'],
})
export class CardVideoComponent {
  @Input() video!: Item;

  goToVideo(videoId: string) {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  }
}
