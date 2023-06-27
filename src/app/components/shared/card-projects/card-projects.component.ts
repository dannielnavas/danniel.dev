import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IResponseGithub } from 'src/app/core/models/response-github.interface';

@Component({
  selector: 'app-card-projects',
  templateUrl: './card-projects.component.html',
  styleUrls: ['./card-projects.component.scss'],
})
export class CardProjectsComponent {
  @Input() project!: IResponseGithub;

  constructor(private router: Router) {}

  goGeneric(url: string): void {
    window.open(url, '_blank');
  }
}
