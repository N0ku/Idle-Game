import {Products} from "@/global/enums/enumFactory";

export class ItemEchange{
    productName: Products
    quantity : number
    userId : string | null

    constructor(productName: Products, quantity: number, userId: string) {
        this.productName = productName;
        this.quantity = quantity;
        this.userId = userId;
    }
}

export class Echange{
    id : string
    fromUser : ItemEchange
    toUser : ItemEchange
    createdAt : string


    constructor(id: string, fromUser: ItemEchange, toUser: ItemEchange) {
        //Definition de la date
        const currentDate = new Date(Date.now());
        const day : number = currentDate.getDate();
        const month :number = currentDate.getMonth() + 1; // Les mois sont indexés à partir de zéro, donc on ajoute 1
        const year : number = currentDate.getFullYear();

        this.id = id;
        this.fromUser = fromUser
        this.toUser = toUser
        this.createdAt = `${day}/${month}/${year}`
    }


}

export interface EchangeAll{
   echange : Echange[];
}