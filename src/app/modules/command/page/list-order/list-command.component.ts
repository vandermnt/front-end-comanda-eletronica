import { Component, OnInit } from "@angular/core";
import { CommandService } from "../../services/command.service";

@Component({
  selector: "command",
  templateUrl: "./list-command.component.html",
  styleUrls: ["./list-command.component.css"],
})
export class ListCommandComponent implements OnInit {
  commands: Command;
  constructor(private commandService: CommandService) {}

  ngOnInit(): void {
    this.commandService
      .listAll()
      .subscribe((commands: any) => (this.commands = commands));
  }
}
