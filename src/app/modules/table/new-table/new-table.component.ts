import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Table } from "app/shared/models/table.model";
import { TableService } from "../services/table.service";

@Component({
  selector: "app-new-table",
  templateUrl: "./new-table.component.html",
  styleUrls: ["./new-table.component.css"],
})
export class NewTableComponent implements OnInit {
  @ViewChild("tableForm") tableForm!: NgForm;

  table: Table;

  constructor(private tableService: TableService, private router: Router) {}

  ngOnInit() {
    this.table = new Table();
  }

  create(): void {
    if (this.tableForm.form.valid) {
      this.tableService
        .create(this.table)
        .subscribe(() => this.router.navigate(["tables"]));
    }
  }
}
