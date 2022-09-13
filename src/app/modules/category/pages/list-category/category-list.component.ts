import { Component, OnInit } from "@angular/core";
import { Category } from "app/shared/models/category.model";
import { CategoryService } from "../../services/category.service";

@Component({
  selector: "app-category-list",
  templateUrl: "./category-list.component.html",
  styleUrls: ["./category-list.component.css"],
})
export class CategoryListComponent implements OnInit {
  categories: Category[];

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categoryService
      .listAll()
      .subscribe((categories: any) => (this.categories = categories));
  }
}