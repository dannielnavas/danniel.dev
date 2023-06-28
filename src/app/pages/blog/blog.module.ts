import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PostCardsModule } from 'src/app/components/shared/post-cards/post-cards.module';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';

@NgModule({
  declarations: [BlogComponent],
  imports: [CommonModule, BlogRoutingModule, PostCardsModule],
})
export class BlogModule {}
