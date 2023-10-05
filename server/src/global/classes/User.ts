import type { Factory,Success } from '../implements';

export class User {
    id?: string | undefined;
    username: string;
    email: string;
    password: string;
    factories?: Factory[] | undefined;
    success?: Success[] | undefined;
    token?: string | undefined;

    constructor(username: string, email: string, password: string, factories?: Factory[], success?: Success[], token?: string) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.factories = factories;
        this.success = success;
        this.id = token;
    }
}