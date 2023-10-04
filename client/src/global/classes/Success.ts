export class Success{
    id?: string | undefined;
    name: string;
    description: string;
    illustration: string

    constructor(id: string | undefined, name: string, description: string, illustration: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.illustration = illustration;
    }

    static fromJSON(json: any): Success {
        return new Success(json.id, json.name, json.description, json.illustration);
    }

    toJSON(): any {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            illustration: this.illustration
        };
    }

    getSucces(): Success{
        return this;
    }

    getName(): string{
        return this.name;
    }

    getDescription(): string{
        return this.description;
    }

    getIllustration(): string{
        return this.illustration;
    }

    setId(id: string){
        this.id = id;
    }

    setName(name: string){
        this.name = name;
    }

    setDescription(description: string){
        this.description = description;
    }

    setIllustration(illustration: string){
        this.illustration = illustration;
    }

    toString(): string{
        return "Name: " + this.name + " Description: " + this.description + " Illustration: " + this.illustration;
    }
}