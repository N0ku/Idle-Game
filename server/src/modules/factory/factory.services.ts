import type { Collection } from "mongodb";
import type { Factory } from "../../global/implements";
import { ObjectId } from "mongodb";
import { db } from "../../db/mongo";

export async function createFactory(body: Factory) {
  const Factories: Collection<Factory> = db!.collection("factories");

  const result = await Factories.insertOne(body);

  return result;
}

export async function getFactories() {
  const Factories: Collection<Factory> = db!.collection("factories");

  const factories = await Factories.find().toArray();

  return { factories };
}

export async function getFactoryById(id: ObjectId) {
  const Factories: Collection<Factory> = db!.collection("factories");

  const factory = await Factories.findOne({ _id: new ObjectId(id) });

  return { factory };
}

export async function updateFactory(id: ObjectId, body: Factory) {
  const Factories: Collection<Factory> = db!.collection("factories");

  await Factories.updateOne({ _id: new ObjectId(id) }, { $set: body });

  return { success: true };
}

export async function deleteFactory(id: ObjectId) {
  const Factories: Collection<Factory> = db!.collection("factories");

  await Factories.deleteOne({ _id: new ObjectId(id) });

  return { success: true };
}

export async function getFactoriesByUserId(id: string) {
  const Factories: Collection<Factory> = db!.collection("factories");

  const factories = await Factories.find({ userId: id }).toArray();

  return { factories };
}
