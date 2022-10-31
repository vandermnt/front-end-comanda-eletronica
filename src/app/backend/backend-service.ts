import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { httpOptions } from './config';

@Injectable()
class BackendService<T> {
  private BASE_URL: string;

  constructor(private httpClient: HttpClient) {
    this.BASE_URL = environment.BASE_URL;
  }

  listAll(path: string): Observable<T[]> {
    return this.httpClient.get<T[]>(`${this.BASE_URL}/${path}`, httpOptions);
  }

  findById(path: string): Observable<T> {
    return this.httpClient.get<T>(`${this.BASE_URL}/${path}`, httpOptions);
  }

  create(path: string, data: T): Observable<T> {
    return this.httpClient.post<T>(`${this.BASE_URL}/${path}`, data, httpOptions);
  }

  update(path: string, data: T): Observable<T> {
    return this.httpClient.put<T>(`${this.BASE_URL}/${path}`, data, httpOptions);
  }

  delete(path: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.BASE_URL}/${path}`, httpOptions);
  }

  closeTable(path: string, data: T): Observable<void> {
    return this.httpClient.put<void>(`${this.BASE_URL}/${path}`, data, httpOptions);
  }
}

export { BackendService };
