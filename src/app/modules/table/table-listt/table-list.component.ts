import { Component, OnInit } from "@angular/core";
import { Table } from "app/shared/models/table.model";
import { TableService } from "../services/table.service";

@Component({
  selector: "app-table-list",
  templateUrl: "./table-list.component.html",
  styleUrls: ["./table-list.component.css"],
})
export class TableListComponent implements OnInit {
  tables: Table[];

  constructor(private tableService: TableService) {}

  ngOnInit() {
    this.listAll();
  }

  listAll() {
    this.tableService.listAll().subscribe((tables) => (this.tables = tables));
    console.log(this.tables);
  }
}
