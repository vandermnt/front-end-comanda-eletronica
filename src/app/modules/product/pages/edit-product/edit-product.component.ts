import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CategoryService } from "app/modules/category/services/category.service";
import { Category } from "app/shared/models/category.model";
import { Product } from "app/shared/models/product.model";
import { ProductService } from "../../services/product.service";

@Component({
  selector: "app-edit-product",
  templateUrl: "./edit-product.component.html",
  styleUrls: ["./edit-product.component.css"],
})
export class EditProductComponent implements OnInit {
  @ViewChild("productForm") productForm!: NgForm;

  product!: Product;
  categories: Category[];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,

    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.categoryService
      .listAll()
      .subscribe((categories: any) => (this.categories = categories));

    let id = this.route.snapshot.params["id"];

    this.productService
      .findById(id)
      .subscribe((product: Product) => (this.product = product));
  }

  update(): void {
    if (this.productForm.form.valid) {
      this.productService
        .update(this.product)
        .subscribe(() => this.router.navigate(["products"]));
    }
  }
}
