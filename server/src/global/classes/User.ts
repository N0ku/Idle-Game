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

    getEmail(): string {
        return this.email;
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

    setEmail(email: string): void {
        this.email = email;
    }
}