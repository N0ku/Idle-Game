//TODO Faire vos appels d'implémentes (imports) de classes ici 

import {Factory} from "./classes/Factory";
import {User} from "./classes/User";
import {Success} from "./classes/Success";
import { Product } from "./classes/Products";
import {TestClasses} from "./classes/template";

import type { TestInterface } from "./interface/template";
import type {  FactoryInfo } from "./interface/interfaceFactory";

import { enumTest } from "./enums/template";
import { Products, TypeFactory } from "./enums/enumFactory";



export { Factory,User,TestClasses,Product,Success }; // Ne pas oublier de export !! 
export type { TestInterface, FactoryInfo }; // Ne pas oublier de export!! 
export { enumTest, Products, TypeFactory }; // Ne pas oublier de export!! 


// Pour import implements :  import * as Implements from '../global/implements';

