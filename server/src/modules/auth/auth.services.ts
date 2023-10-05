import crypto from "crypto";
import { WithId } from "mongodb";
import { db } from "@/db/mongo";
import { User } from "../../../../global/implements";

export async function register(body: User) {
  const Users = db!.collection<User>("users");
  const alreadyExist = await Users.findOne({ username: body.username });
  if (alreadyExist) {
    return { status: false, message: "User already exists" };
  }

  const hashedPassword = crypto
    .createHash("sha256")
    .update(body.password)
    .digest("hex");
  const token = crypto.randomBytes(32).toString("hex");

  const newUser: User = new User(
    body.username,
    body.email,
    hashedPassword,
    [],
    [],
    token
  );

  await Users.insertOne(newUser);

  return { success: true, token };
}

export async function login(body: User) {
  const Users = db!.collection<User>("users");
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

  return { success: true, token };
}

export function findByToken(token: string) {
  const Users = db!.collection<User>("users");
  return Users.findOne<WithId<User>>(
    { token },
    { projection: { password: 0, token: 0 } }
  );
}
