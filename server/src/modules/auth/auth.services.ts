import crypto from "crypto";
import { Collection, WithId } from "mongodb";
import { User } from "../../global/implements";
import { db } from "../../db/mongo";

export async function register(body: User) {
  const Users: Collection<User> = db!.collection("users");
  const alreadyExist = await Users.findOne({ username: body.username });
  if (alreadyExist) {
    return { status: false, message: "User already exists" };
  }

  const hashedPassword = crypto
    .createHash("sha256")
    .update(body.password)
    .digest("hex");
  const token = crypto.randomBytes(32).toString("hex");

  const newUser: User = {
    username: body.username,
    password: hashedPassword,
    email: "mailexemple@gmail.com",
    token: token,
    factories: [],
  };

  await Users.insertOne(newUser);

  return { success: true, token };
}

export async function login(body: User) {
  const Users: Collection<User> = db!.collection("users");

  const user = await Users.findOne({ username: body.username });
  if (!user) {
    return { success: false, message: "Bad password" };
  }

  const hashedPassword = crypto
    .createHash("sha256")
    .update(body.password)
    .digest("hex");
  if (user.password !== hashedPassword) {
    return { success: false, message: "Bad password" };
  }

  const token = crypto.randomBytes(32).toString("hex");

  await Users.updateOne({ _id: user._id }, { $set: { token } });

  return { success: true, token, id: user._id };
}

export function findByToken(token: string) {
  const Users: Collection<User> = db!.collection("users");
  return Users.findOne(
    { token },
    { projection: { password: 0, token: 0 } }
  ) as Promise<WithId<User> | null>;
}
