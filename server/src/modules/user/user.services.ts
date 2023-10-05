import { User, Factory } from "../../global/implements";
import { db } from "../../db/mongo";
import { ObjectId } from "mongodb";

export async function getUserById(id: ObjectId) {
  const Users = db!.collection<User>("users");

  const user = await Users.findOne({ _id: new ObjectId(id) });

  return { user };
}

export async function updateUser(id: ObjectId, body: User) {
  const Users = db!.collection<User>("users");

  await Users.updateOne({ _id: new ObjectId(id) }, { $set: body });

  return { success: true };
}

export async function addFactoryToUser(id: ObjectId, body: Factory) {
  const Users = db!.collection<User>("users");

  await Users.updateOne(
    { _id: new ObjectId(id) },
    { $push: { factories: body } }
  );

  return { success: true };
}
