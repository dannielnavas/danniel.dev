import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderModule } from 'src/app/components/header/header.module';
import { CardProjectsModule } from 'src/app/components/shared/card-projects/card-projects.module';
import { CardStatisticsModule } from 'src/app/components/shared/card-statistics/card-statistics.module';
import { CardVideoModule } from 'src/app/components/shared/card-video/card-video.module';
import { PostCardsModule } from 'src/app/components/shared/post-cards/post-cards.module';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';

@NgModule({
  declarations: [PortfolioComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    HeaderModule,
    PostCardsModule,
    CardProjectsModule,
    CardVideoModule,
    CardStatisticsModule,
  ],
})
export class PortfolioModule {}
