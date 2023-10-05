import crypto from "crypto";
import { Collection, WithId } from "mongodb";
import type { Factory, Success, User } from "../../global/implements";
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
    getUser: function (): User {
      return this;
    },
    getFactories: function (): Factory[] | undefined {
      return this.factories;
    },
    getSuccess: function (): Success[] | undefined {
      return this.success;
    },
    getId: function (): string | undefined {
      return this.id;
    },
    getUsername: function (): string {
      return this.username;
    },
    getEmail: function (): string {
      return this.email;
    },
    getPassword: function (): string {
      return this.password;
    },
    setFactories: function (factories: Factory[]): void {
      this.factories = factories;
    },
    setSuccess: function (success: Success[]): void {
      this.success = success;
    },
    setId: function (id: string): void {
      this.id = id;
    },
    setUsername: function (username: string): void {
      this.username = username;
    },
    setEmail: function (email: string): void {
      this.email = email;
    },
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

  return { success: true, token };
}

export function findByToken(token: string) {
  const Users: Collection<User> = db!.collection("users");
  return Users.findOne(
    { token },
    { projection: { password: 0, token: 0 } }
  ) as Promise<WithId<User> | null>;
}
