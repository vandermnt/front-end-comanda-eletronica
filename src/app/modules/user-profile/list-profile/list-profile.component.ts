import { Component, OnInit } from "@angular/core";
import { User } from "app/shared/models/user.model";
import { UserProfileService } from "../services/user-profile.service";

@Component({
  selector: "app-list-profile",
  templateUrl: "./list-profile.component.html",
  styleUrls: ["./list-profile.component.css"],
})
export class ListProfileComponent implements OnInit {
  users: User[];

  constructor(private userService: UserProfileService) {}

  ngOnInit(): void {
    this.userService.listAll().subscribe((users: any) => (this.users = users));
  }
}
