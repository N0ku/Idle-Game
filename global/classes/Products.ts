import type { Products } from '../implements';

export class Product {
    name: Products;
    price: number;
    description: string;
    illustration: string;


    constructor(name: Products, price: number, description: string, illustration: string) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.illustration = illustration;
    }
}