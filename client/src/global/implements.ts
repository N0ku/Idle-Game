//TODO Faire vos appels d'implémentes (imports) de classes ici 

import {TestClasses} from "./classes/template"
import type { TestInterface } from "./interface/template";
import type {  FactoryInfo } from "./interface/interfaceFactoryInfo";

import { enumTest } from "./enums/template";
import { Products, TypeFactory } from "./enums/enumFactory";



export { TestClasses }; // Ne pas oublier de export !! 
export type { TestInterface, FactoryInfo }; // Ne pas oublier de export!! 
export { enumTest, Products, TypeFactory }; // Ne pas oublier de export!! 


// Pour import implements :  import * as Implements from '../global/implements';

