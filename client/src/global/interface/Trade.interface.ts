import {Products} from "@/global/enums/enumFactory";

export interface TradeInterface{
    product: Products
    quantity : number
    price: number
    sellerId : string
}