import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from './core/services/google-analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'danniel.dev';

  constructor(private _$gaService: GoogleAnalyticsService) {}

  ngOnInit(): void {
    this._$gaService.init();
  }
}
