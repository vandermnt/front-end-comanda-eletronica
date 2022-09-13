import { Category } from "./category.model";

export class Product {
  public id: string;
  public name: string;
  public price: number;
  public description: number;
  public category: Category;

  constructor() {}
}
