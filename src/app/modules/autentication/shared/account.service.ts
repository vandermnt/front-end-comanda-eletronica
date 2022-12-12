import { Injectable } from "@angular/core";
import { BackendService } from "app/backend";
import { User } from "app/shared/models/user.model";
import { Observable } from "rxjs";
import jwt_decode from "jwt-decode";

interface IDataAuthenticate {
  email: string;
  password: string;
}

interface IResponseLogin extends IDataAuthenticate {
  token: string;
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

  getTokenExpirationDate(token: string): number {
    const decoded: any = jwt_decode(token);

    if (!decoded.exp) {
      return null;
    }

    const date = new Date(0);
    return date.setUTCSeconds(decoded.exp);
  }

  isTokenExpired(token: string): boolean {
    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }

    return !(date.valueOf() > new Date().valueOf());
  }

  isUserLoggedIn() {
    const token = window.localStorage.getItem("token");
    if (!token) {
      return false;
    }

    if (this.isTokenExpired(token)) {
      return false;
    }

    return true;
  }
}
