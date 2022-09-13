import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ProductService } from "./services/product.service";
import { BackendService } from "app/backend";
import { NewProductComponent } from "./pages/new-product/new-product.component";
import { ProductListComponent } from "./pages/list-product/product-list.component";

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, FormsModule, HttpClientModule],
  providers: [ProductService, BackendService],
})
export class ProductModule {}
