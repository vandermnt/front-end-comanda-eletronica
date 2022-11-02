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

  create(table: Table): Observable<Table> {
    return this.backendService.create(this.path, table);
  }

  findById(id: string): Observable<Table> {
    return this.backendService.findById(`${this.path}/${id}`);
  }

  update(table: Table): Observable<Table> {
    return this.backendService.update(`${this.path}/${table.id}`, table);
  }

  remove(id: string): Observable<void> {
    return this.backendService.delete(`${this.path}/${id}`);
  }
}
