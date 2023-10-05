import type { Products, } from '../implements';

export class Product {
  name: Products;
  price: number;
  description: string;
  quantity: number;

  constructor(
    name: Products,
    price: number,
    description: string,
    quantity: number
  ) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.quantity = quantity;
  }
}