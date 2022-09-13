import { Component, OnInit } from "@angular/core";
import { Product } from "app/shared/models/product.model";
import { ProductService } from "../../services/product.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService
      .listAll()
      .subscribe((products: any) => (this.products = products));
  }
}
