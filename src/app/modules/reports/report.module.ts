import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BackendService } from "app/backend";
import { ReportService } from "./services/report.service";

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, FormsModule, HttpClientModule],
  providers: [ReportService, BackendService],
})
export class ReportModule {}
