import { Products, TypeFactory } from "../implements";

export class Success{
    name: string;
    description: string;
    illustration: string
    conditionType: Products | TypeFactory;
    amountCondition: number;

    constructor( name: string, description: string, illustration: string, conditionType: Products | TypeFactory, amountCondition: number) {
        this.name = name;
        this.description = description;
        this.illustration = illustration;
        this.conditionType = conditionType;
        this.amountCondition = amountCondition;
    }

    static fromJSON(json: any): Success {
        return new Success( json.name, json.description, json.illustration, json.conditionType, json.amountCondition);
    }

    toJSON(): any {
        return {
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

    setName(name: string){
        this.name = name;
    }

    setDescription(description: string){
        this.description = description;
    }

    setIllustration(illustration: string){
        this.illustration = illustration;
    }

    getConditionType(): Products | TypeFactory | undefined{
        return this.conditionType;
    }

    setConditionType(conditionType: Products | TypeFactory){
        this.conditionType = conditionType;
    }

    getAmountCondition(): number | undefined{
        return this.amountCondition;
    }

    setAmountCondition(amountCondition: number){
        this.amountCondition = amountCondition;
    }

    toString(): string{
        return "Name: " + this.name + " Description: " + this.description + " Illustration: " + this.illustration;
    }
}