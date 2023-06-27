import { CommonModule, registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { LOCALE_ID, NgModule } from '@angular/core';
import { CardProjectsComponent } from './card-projects.component';

registerLocaleData(localeEs);

@NgModule({
  declarations: [CardProjectsComponent],
  imports: [CommonModule],
  exports: [CardProjectsComponent],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
})
export class CardProjectsModule {}
