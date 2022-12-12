import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { AccountService } from "./account.service";

@Injectable({
  providedIn: "root",
})
export class AccountGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router, private accountService: AccountService) {}
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.accountService.isUserLoggedIn()) {
      return true;
    }
    this.router.navigate(["login"]);
    return false;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.accountService.isUserLoggedIn()) {
      return true;
    }
    this.router.navigate(["login"]);
    return false;
  }
}
