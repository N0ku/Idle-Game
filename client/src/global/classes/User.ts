import type { Factory,Success } from '../implements';

export class User {
    id?: string | undefined;
    name: string;
    email: string;
    password: string;
    factories?: Factory[] | undefined;
    success?: Success[] | undefined;

    constructor(name: string, email: string, password: string, factories?: Factory[], success?: Success[], id?: string) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.factories = factories;
        this.success = success;
        this.id = id;
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

    getName(): string {
        return this.name;
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

    setName(name: string): void {
        this.name = name;
    }

    setEmail(email: string): void {
        this.email = email;
    }
}