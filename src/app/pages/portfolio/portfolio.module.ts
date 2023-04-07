import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderModule } from 'src/app/components/header/header.module';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';

@NgModule({
  declarations: [PortfolioComponent],
  imports: [CommonModule, PortfolioRoutingModule, HeaderModule],
})
export class PortfolioModule {}
