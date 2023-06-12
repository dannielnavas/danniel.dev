import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostCardsComponent } from './post-cards.component';

@NgModule({
  declarations: [PostCardsComponent],
  imports: [CommonModule],
  exports: [PostCardsComponent],
})
export class PostCardsModule {}
