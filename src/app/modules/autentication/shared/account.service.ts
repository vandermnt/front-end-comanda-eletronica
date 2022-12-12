import { Injectable } from "@angular/core";
import { BackendService } from "app/backend";
import { User } from "app/shared/models/user.model";
import { Observable } from "rxjs";

interface IDataAuthenticate {
  email: string;
  password: string;
}

interface IResponseLogin extends IDataAuthenticate {
  token: string
}

@Injectable({
  providedIn: "root",
})
export class AccountService {
  private readonly path = "sessions";
  constructor(private backendService: BackendService<User>) {}

  login(user: IDataAuthenticate): Observable<IResponseLogin> {
    return this.backendService.login(this.path, user);
  }
}
