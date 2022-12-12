import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AccountService } from "../shared/account.service";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  @ViewChild("loginForm") loginForm!: NgForm;

  login = {
    email: "teste",
    password: "opdkwaopd",
  };
  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit(): void {}

  async onSubmit() {
    this.accountService.login(this.login).subscribe((response) => {
      if (response.token) {
        window.localStorage.setItem("token", response.token);
        this.router.navigate([""]);
      }
    });
  }
}
