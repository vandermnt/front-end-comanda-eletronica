import { Component, OnInit } from "@angular/core";
import { Product } from "app/shared/models/product.model";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../../services/product.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.listAll();
  }

  listAll() {
    this.productService
      .listAll()
      .subscribe((products: any) => (this.products = products));
  }

  deleteProduct(productId: string) {
    if (confirm("Deseja realmente remover esse produto?")) {
      this.productService.remove(productId).subscribe(() => {
        this.listAll();
      });
    }
  }
}
