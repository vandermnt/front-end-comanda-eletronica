import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ReportService } from "../../services/report.service";

@Component({
  selector: "app-report-list",
  templateUrl: "./report-list.component.html",
  styleUrls: ["./report-list.component.css"],
})
export class ReportListComponent implements OnInit {
  @ViewChild("reportForm") reportForm!: NgForm;

  dateStart: Date;
  dateEnd: Date;
  reports: any[];

  constructor(private reportService: ReportService, private router: Router) {}

  ngOnInit() {}

  extractReport() {
    if (this.reportForm.valid) {
      this.validateInput();

      this.reportService
        .getCommandsByDate(this.dateStart, this.dateEnd)
        .subscribe((commands) => {
          this.reports = commands;
        });
    }
  }

  validateInput() {
    if (this.dateStart > this.dateEnd) {
      alert("A data inicial não pode ser maior que a final. Tente novamente!");
      throw new Error(
        "A data inicial não pode ser maior que a final. Tente novamente!"
      );
    }
  }
}
