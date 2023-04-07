import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterModule } from 'src/app/components/footer/footer.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, NavbarModule, FooterModule],
})
export class HomeModule {}
