import {Products} from "@/global/enums/enumFactory";

export class Trade{
    id : string
    productName: Products
    quantity : number
    price: number
    sellerId : string
    buyerId? : string | null

    constructor(id: string,product: Products, quantity: number, price: number, sellerId: string, buyerId? : string | null) {
        this.id = id;
        this.productName = product;
        this.quantity = quantity;
        this.price = price;
        this.sellerId = sellerId;
        this.buyerId = buyerId
    }

}