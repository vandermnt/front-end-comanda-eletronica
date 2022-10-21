import { Injectable } from "@angular/core";
import { BackendService } from "app/backend";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CommandService {
  private path = "commands";

  constructor(private backendService: BackendService<Command>) {}

  listAll(): Observable<Command[]> {
    return this.backendService.listAll(this.path);
  }
}
