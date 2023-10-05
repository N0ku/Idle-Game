import type { Factory, Success, Product } from "../implements";

export class User {
  id?: string | undefined;
  username: string;
  password: string;
  factories?: Factory[] | undefined;
  success?: Success[] | undefined;
  token?: string | undefined;
  money: number = 0;
  products: Product[] = [];

  constructor(
    username: string,
    password: string,
    factories?: Factory[],
    success?: Success[],
    token?: string,
    money: number = 0,
    products: Product[] = []
  ) {
    this.username = username;
    this.password = password;
    this.money = money;
    this.products = products;
    this.factories = factories;
    this.success = success;
    this.id = token;
  }

  getUser(): User {
    return this;
  }

  getFactories(): Factory[] | undefined {
    return this.factories;
  }

  getSuccess(): Success[] | undefined {
    return this.success;
  }

  getId(): string | undefined {
    return this.id;
  }

  getUsername(): string {
    return this.username;
  }

  getPassword(): string {
    return this.password;
  }

  setFactories(factories: Factory[]): void {
    this.factories = factories;
  }

  setSuccess(success: Success[]): void {
    this.success = success;
  }

  setId(id: string): void {
    this.id = id;
  }

  setUsername(username: string): void {
    this.username = username;
  }
  getMoney(): number {
    return this.money;
  }

  setMoney(money: number): void {
    this.money = money;
  }

  getProducts(): Product[] {
    return this.products;
  }

  setProducts(products: Product[]): void {
    this.products = products;
  }
}
