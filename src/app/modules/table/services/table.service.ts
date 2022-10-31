import { Injectable } from "@angular/core";
import { BackendService } from "app/backend";
import { Table } from "app/shared/models/table.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TableService {
  private path = "tables";

  constructor(private backendService: BackendService<Table>) {}

  listAll(): Observable<Table[]> {
    return this.backendService.listAll(this.path);
  }

  create(category: Table): Observable<Table> {
    return this.backendService.create(this.path, category);
  }

  findById(id: string): Observable<Table> {
    return this.backendService.findById(`${this.path}/${id}`);
  }

  update(category: Table): Observable<Table> {
    console.log(category);
    return this.backendService.update(`${this.path}/${category.id}`, category);
  }

  remove(id: string): Observable<void> {
    return this.backendService.delete(`${this.path}/${id}`);
  }
}
