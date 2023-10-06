
import { db } from "../../db/mongo";
import {Echange} from "@/global/classes/Echange";

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


