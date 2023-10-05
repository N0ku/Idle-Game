import type { Factory } from "../implements";

export interface UserStage {
    id: string;
    username: string;
    email: string;
    password: string;
    factories: Factory[];
    // For later
    purchases: undefined;
    sells: undefined;
}