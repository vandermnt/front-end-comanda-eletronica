import { Injectable } from "@angular/core";
import { BackendService } from "app/backend";
import { Product } from "app/shared/models/product.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private path = "products";

  constructor(private backendService: BackendService<Product>) {}

  listAll(): Observable<Product[]> {
    return this.backendService.listAll(this.path);
  }

  create(product: Product): Observable<Product> {
    return this.backendService.create(this.path, product);
  }

  findById(id: string): Observable<Product> {
    return this.backendService.findById(`${this.path}/${id}`);
  }

  update(id: string, product: Product): Observable<Product> {
    return this.backendService.update(`${this.path}/${id}`, product);
  }

  remove(id: string): Observable<void> {
    return this.backendService.delete(`${this.path}/${id}`);
  }
}
