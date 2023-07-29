import { Component, OnInit } from '@angular/core';
import { IResponseGithub } from 'src/app/core/models/response-github.interface';
import { GithubService } from 'src/app/core/services/github.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects!: IResponseGithub[];
  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.getProjectsGithub();
  }

  getProjectsGithub(): void {
    this.githubService.getProjects().subscribe({
      next: (response) => {
        this.projects = response;
      },
      error: (error) => {
        throw new Error(error);
      },
    });
  }

  trackByFn(index: number, item: IResponseGithub): number {
    return item.id;
  }
}
