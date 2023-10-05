import {Products} from "@/global/enums/enumFactory";


export class Trade{
    id : string
    productName: Products
    quantity : number
    price: number
    sellerId : string
    buyerId? : string | null
    createdAt : string


    constructor(id: string, product: Products, quantity: number, price: number, sellerId: string, buyerId? : string | null) {
        //Definition de la date
        const currentDate = new Date(Date.now());
        const day : number = currentDate.getDate();
        const month :number = currentDate.getMonth() + 1; // Les mois sont indexés à partir de zéro, donc on ajoute 1
        const year : number = currentDate.getFullYear();

        this.id = id;
        this.productName = product;
        this.quantity = quantity;
        this.price = price;
        this.sellerId = sellerId;
        this.buyerId = buyerId
        this.createdAt = `${day}/${month}/${year}`
    }

    getPriceClean() : number{
        return this.price - (this.price * 0.03)
    }

}