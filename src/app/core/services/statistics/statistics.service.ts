import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IResponseStatistics } from '../../models/statistics.interface';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  constructor(private http: HttpClient) {}

  getStats(): Observable<IResponseStatistics[]> {
    return this.http.get<IResponseStatistics[]>(environment.statistics);
  }
}
