import type { Factory, Product, Success } from "../implements";

export interface UserStage {
    id: string;
    username: string;
    email: string;
    password: string;
    factories: Factory[];
    products: Product[];
    money: number;
    success: Success[];
    purchases: undefined;
    sells: undefined;
}