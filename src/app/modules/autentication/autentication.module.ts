import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from "./login/login.component";
import { BackendService } from "app/backend";
import { AccountService } from "./shared/account.service";

@NgModule({
  declarations: [LoginComponent],
  imports: [FormsModule, HttpClientModule],
  providers: [BackendService, AccountService]
})
export class AutenticationModule {}
