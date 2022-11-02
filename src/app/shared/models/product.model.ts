import { Category } from "./category.model";

export class Product {
  public id: string;
  public name: string;
  public price: string;
  public description: number;
  public id_category: Category;

  constructor() {}
}
