import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CategoryService } from "app/modules/category/services/category.service";
import { Category } from "app/shared/models/category.model";

@Component({
  selector: "app-edit-category",
  templateUrl: "./edit-category.component.html",
  styleUrls: ["./edit-category.component.css"],
})
export class EditCategoryComponent implements OnInit {
  @ViewChild("categoryForm") categoryForm!: NgForm;

  category: Category;

  constructor(
    private categoryService: CategoryService,

    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.params["id"];
    this.categoryService
      .findById(id)
      .subscribe((category: Category) => (this.category = category));
  }

  update(): void {
    console.log(this.category);
    if (this.categoryForm.form.valid) {
      this.categoryService
        .update(this.category)
        .subscribe(() => this.router.navigate(["categories"]));
    }
  }
}
