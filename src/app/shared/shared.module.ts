import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RepoListPipe } from './pipes/repo-list.pipe';



@NgModule({
  declarations: [RepoListPipe],
  imports: [CommonModule],
  exports: [RepoListPipe]
})
export class SharedModule {}
