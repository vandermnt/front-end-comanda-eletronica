import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Category } from "app/shared/models/category.model";
import { CategoryService } from "../../services/category.service";

@Component({
  selector: "app-new-category",
  templateUrl: "./new-category.component.html",
  styleUrls: ["./new-category.component.css"],
})
export class NewCategoryComponent implements OnInit {
  @ViewChild("categoryForm") categoryForm!: NgForm;

  category: Category;

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit() {
    this.category = new Category();
  }

  create(): void {
    if (this.categoryForm.form.valid) {
      this.categoryService
        .create(this.category)
        .subscribe(() => this.router.navigate(["categories"]));
    }
  }
}
