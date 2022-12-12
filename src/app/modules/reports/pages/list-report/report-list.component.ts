import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { ReportService } from "../../services/report.service";

@Component({
  selector: "app-report-list",
  templateUrl: "./report-list.component.html",
  styleUrls: ["./report-list.component.css"],
})
export class ReportListComponent implements OnInit {
  @ViewChild("reportForm") reportForm!: NgForm;

  reports: any[];
  dateEnd: Date;
  dateStart: Date;
  totalValue: number;

  constructor(private reportService: ReportService, private router: Router) {}

  ngOnInit() {}

  extractReport() {
    if (this.reportForm.valid) {
      this.validateInput();

      this.reportService
        .getCommandsByDate(this.dateStart, this.dateEnd)
        .subscribe((commands) => {
          this.reports = commands;
          this.totalValue = this.getTotal(commands);
        });
    }
  }

  getTotal(reports: any) {
    let total = 0;

    for (let report of reports) {
      console.log(report);
      total += parseFloat(report.value);
    }

    return total;
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
