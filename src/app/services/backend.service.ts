import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  _baseURL: string = 'http://localhost:5000';

  constructor(private httpClient: HttpClient) {}

  fetchData(url: string, params: any): Observable<any> {
    return this.httpClient.get(this._baseURL + url, { params });
  }
}
