import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { CategoryService } from "app/modules/category/services/category.service";
import { Category } from "app/shared/models/category.model";
import { Product } from "app/shared/models/product.model";
import { ProductService } from "../../services/product.service";

@Component({
  selector: "app-new-product",
  templateUrl: "./new-product.component.html",
  styleUrls: ["./new-product.component.css"],
})
export class NewProductComponent implements OnInit {
  @ViewChild("productForm") productForm!: NgForm;

  product: Product;
  categories: Category[];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit() {
    this.categoryService
      .listAll()
      .subscribe((categories: any) => (this.categories = categories));
    this.product = this.product = new Product();
  }

  create(): void {
    if (this.productForm.form.valid) {
      this.productService
        .create(this.product)
        .subscribe(() => this.router.navigate(["product"]));
    }
  }
}
