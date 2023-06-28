import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/core/models/post.interface';
import { DevtoPostService } from '../../core/services/devto-post/devto-post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  articles!: IPost[];

  constructor(private devtoPostService: DevtoPostService) {}

  ngOnInit(): void {
    this.getAllArticles();
  }

  getAllArticles(): void {
    this.devtoPostService.allArticles().subscribe({
      next: (response) => {
        console.log(response);
        this.articles = response;
      },
      error: (error) => {
        throw new Error(error);
      },
    });
  }
}
