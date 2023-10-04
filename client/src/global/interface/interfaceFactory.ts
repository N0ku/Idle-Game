import * as Implements from '../implements';


export interface FactoryInfo {
    productName: Implements.Products;
    factoryType: Implements.TypeFactory;
    level?: number;
    id?: string;
    id_localisation?:number;
    production: number;
}
  
// export const WoodFactory: FactoryInfo = {
//     productName: Implements.Products.Wood, 
//     factoryType: Implements.TypeFactory.WoodProduction,

// };
  
// export const StoneFactory: FactoryInfo = {
//     productName: Implements.Products.Stone, 
//     factoryType: Implements.TypeFactory.StoneProduction,
// };

// export const WeedFactory: FactoryInfo = {
//     productName: Implements.Products[Implements.Products.Weed],
//     factoryType: Implements.TypeFactory.WeedProduction,
// };

// export const CBDFactory: FactoryInfo = {
//     productName: Implements.Products[Implements.Products.CBD],
//     factoryType: Implements.TypeFactory.CBDProduction,
// };

// export const WaterFactory: FactoryInfo = {
//     productName: Implements.Products[Implements.Products.Water],
//     factoryType: Implements.TypeFactory.WaterProduction
// };

// export const FertilizerFactory: FactoryInfo = {
//     productName: Implements.Products[Implements.Products.Fertilizer],
//     factoryType: Implements.TypeFactory.FertilizerProduction
// };


