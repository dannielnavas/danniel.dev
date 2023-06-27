import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/core/models/post.interface';
import { IResponseGithub } from 'src/app/core/models/response-github.interface';
import { IResponseStatistics } from 'src/app/core/models/statistics.interface';
import { GithubService } from 'src/app/core/services/github.service';
import { StatisticsService } from 'src/app/core/services/statistics/statistics.service';
import { DevtoPostService } from '../../core/services/devto-post/devto-post.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  projects!: IResponseGithub[];
  articles!: IPost[];
  stasts!: IResponseStatistics[];

  constructor(
    private githubService: GithubService,
    private devtoPostService: DevtoPostService,
    private statisticsService: StatisticsService
  ) {}

  ngOnInit(): void {
    this.getProjectsGithub();
    this.getLastArticles();
    this.getStats();
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

  getLastArticles(): void {
    this.devtoPostService.latestArticles().subscribe({
      next: (response) => {
        this.articles = response;
      },
      error: (error) => {
        throw new Error(error);
      },
    });
  }

  getStats(): void {
    this.statisticsService.getStats().subscribe({
      next: (response) => {
        this.stasts = response;
      },
      error: (error) => {
        throw new Error(error);
      },
    });
  }

  trackByFn(index: number, item: IResponseGithub | IPost): number {
    return item.id;
  }
}
