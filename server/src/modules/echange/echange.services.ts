
import { db } from "../../db/mongo";
import {Echange} from "@/global/classes/Echange";
import {ObjectId} from "mongodb";

export async function getAllEchange() {
    const Echange = db!.collection<Echange>("echange");

    const echange = await Echange.find().toArray();
    console.log(echange)
    return { echange };
}

export async function addEchange(body: Echange) {
    const Echange = db!.collection<Echange>("echange");
    await Echange.insertOne(body);
    const result = await Echange.findOne(body);
    return { result };
}

export async function updateEchange(id: ObjectId, body: Echange) {
    const Products = db!.collection<Echange>("echange");

    await Products.updateOne({ _id: id }, { $set: body });

    return { success: true };
}


