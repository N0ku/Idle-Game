import type { Factory, Product } from "../implements";

export interface UserStage {
    id: string;
    username: string;
    email: string;
    password: string;
    factories: Factory[];
    products: Product[];
    money: number;
    purchases: undefined;
    sells: undefined;
}