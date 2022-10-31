import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BackendService } from "app/backend";

import { TableService } from "./services/table.service";

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, FormsModule, HttpClientModule],
  providers: [TableService, BackendService],
})
export class TableModule {}
