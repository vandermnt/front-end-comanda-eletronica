import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { BackendService } from "app/backend";
import { User } from "app/shared/models/user.model";

@Injectable({
  providedIn: "root",
})
export class UserProfileService {
  private path = "users";

  constructor(private backendService: BackendService<User>) {}

  listAll(): Observable<User[]> {
    return this.backendService.listAll(this.path);
  }

  create(product: User): Observable<User> {
    return this.backendService.create(this.path, product);
  }

  findById(id: string): Observable<User> {
    return this.backendService.findById(`${this.path}/${id}`);
  }

  update(id: string, product: User): Observable<User> {
    return this.backendService.update(`${this.path}/${id}`, product);
  }

  remove(id: string): Observable<void> {
    return this.backendService.delete(`${this.path}/${id}`);
  }
}
