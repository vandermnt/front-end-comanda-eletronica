import { Component, OnInit } from "@angular/core";
import { CommandService } from "../../services/command.service";

@Component({
  selector: "command",
  templateUrl: "./list-command.component.html",
  styleUrls: ["./list-command.component.css"],
})
export class ListCommandComponent implements OnInit {
  commands: Command;
  payment: string;
  moneyValue: number;

  constructor(private commandService: CommandService) {}

  ngOnInit(): void {
    this.listAll();
  }

  listAll(): void {
    this.commandService.listAll().subscribe((commands: any) => {
      this.commands = commands;
    });
  }

  closeTable(tableId: string, commandId: string) {
    this.commandService
      .closeTable({ tableId, commandId })
      .subscribe(() => this.listAll());
  }

  formatValueCommand(value: any) {
    return value.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      style: "currency",
      currency: "BRL",
    });
  }
}
