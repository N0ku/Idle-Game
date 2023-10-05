import { db } from "@/db/mongo";
import { ObjectId } from "mongodb";
import { Factory } from "../../../../global/implements";

export async function createFactory(body: Factory) {
  const Factories = db!.collection<Factory>("factories");

  await Factories.insertOne(body);

  return { success: true };
}

export async function getFactories() {
  const Factories = db!.collection<Factory>("factories");

  const factories = await Factories.find().toArray();

  return { factories };
}

export async function getFactoryById(id: ObjectId) {
  const Factories = db!.collection<Factory>("factories");

  const factory = await Factories.findOne({ _id: new ObjectId(id) });

  return { factory };
}

export async function updateFactory(id: ObjectId, body: Factory) {
  const Factories = db!.collection<Factory>("factories");

  await Factories.updateOne({ _id: new ObjectId(id) }, { $set: body });

  return { success: true };
}

export async function deleteFactory(id: ObjectId) {
  const Factories = db!.collection<Factory>("factories");

  await Factories.deleteOne({ _id: new ObjectId(id) });

  return { success: true };
}

export async function getFactoriesByUserId(id: string) {
  const Factories = db!.collection<Factory>("factories");

  const factories = await Factories.find({ userId: id }).toArray();

  return { factories };
}
