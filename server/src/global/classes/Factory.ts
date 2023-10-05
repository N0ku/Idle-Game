import { ObjectId } from 'mongodb';
import type { Products, TypeFactory, FactoryInfo } from '../implements';
export class Factory implements FactoryInfo{
    productName: Products;
    factoryType: TypeFactory;
    userId: string | ObjectId;
    production: number;
    level?: number | undefined;
    id?: string | undefined;
    id_localisation?: number | undefined;

    constructor(productName: Products, factoryType: TypeFactory,  userId: ObjectId | string, production: number,level?: number, id?: string, id_localisation?: number){
        this.productName = productName;
        this.factoryType = factoryType;
        this.level = level;
        this.id = id;
        this.id_localisation = id_localisation;
        this.production = production;
        this.userId = userId;
    }

    getFactory(): Factory{
        return this;
    }

    setFactory(factory: Factory): void{
        this.productName = factory.productName;
        this.factoryType = factory.factoryType;
        this.level = factory.level;
        this.id = factory.id;
        this.id_localisation = factory.id_localisation;
        this.production = factory.production;
    }

    setProduction(production: number): void{
        this.production = production;
    }

    getProduction(): number{
        return this.production;
    }

    setFactoryType(factoryType: TypeFactory): void{
        this.factoryType = factoryType;
    }

    getFactoryType(): TypeFactory{
        return this.factoryType;
    }

    setLevel(level: number): void{
        this.level = level;
    }

    getLevel(): number | undefined{
        return this.level;
    }

    setProductName(productName: Products): void{
        this.productName = productName;
    }

    getProductName(): Products{
        return this.productName;
    }

    setId(id: string): void{
        this.id = id;
    }

    getId(): string | undefined{
        return this.id;
    }

    setIdLocalisation(id_localisation: number): void{
        this.id_localisation = id_localisation;
    }

    getIdLocalisation(): number | undefined{
        return this.id_localisation;
    }
}