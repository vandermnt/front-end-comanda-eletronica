import { Injectable } from "@angular/core";
import { BackendService } from "app/backend";
import { Product } from "app/shared/models/product.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ReportService {
  private path = "reports";

  constructor(private backendService: BackendService<Command>) {}

  getCommandsByDate(dateStart: Date, dateEnd: Date): Observable<Command[]> {
    return this.backendService.listByDate(`reports?dateStart=${dateStart}&dateEnd=${dateEnd}`);
  }
}
