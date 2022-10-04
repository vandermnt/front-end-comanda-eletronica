import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "app/shared/models/user.model";
import { UserProfileService } from "../services/user-profile.service";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"],
})
export class UserProfileComponent implements OnInit {
  @ViewChild("userForm") userForm!: NgForm;

  user: User;

  constructor(
    private userService: UserProfileService,
    private router: Router
  ) {}

  ngOnInit() {
    this.user = new User();
  }

  create(): void {
    if (this.userForm.form.valid) {
      this.userService
        .create(this.user)
        .subscribe(() => this.router.navigate(["product"]));
    }
  }
}
