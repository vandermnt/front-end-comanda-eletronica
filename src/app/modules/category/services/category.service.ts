import { Injectable } from '@angular/core';
import { BackendService } from 'app/backend';
import { Category } from 'app/shared/models/category.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private path = 'categories';

  constructor(private backendService: BackendService<Category>) {}

  listAll(): Observable<Category[]> {
    return this.backendService.listAll(this.path);
  }

  create(category: Category): Observable<Category> {
    return this.backendService.create(this.path, category);
  }

  findById(id: string): Observable<Category> {
    return this.backendService.findById(`${this.path}/${id}`);
  }

  update(id: string, category: Category): Observable<Category> {
    return this.backendService.update(`${this.path}/${id}`, category);
  }

  remove(id: string): Observable<void> {
    return this.backendService.delete(`${this.path}/${id}`);
  }
}
