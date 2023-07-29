import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardProjectsModule } from 'src/app/components/shared/card-projects/card-projects.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';


@NgModule({
  declarations: [ProjectsComponent],
  imports: [CommonModule, ProjectsRoutingModule, CardProjectsModule, SharedModule],
})
export class ProjectsModule {}
