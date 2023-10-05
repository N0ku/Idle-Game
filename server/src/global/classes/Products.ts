import type { Products } from '../implements';

export class Product {
  name: Products;
  price: number;
  description: string;
  illustration: string;
  quantity: number;

  constructor(
    name: Products,
    price: number,
    description: string,
    illustration: string,
    quantity: number
  ) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.illustration = illustration;
    this.quantity = quantity;
  }
}