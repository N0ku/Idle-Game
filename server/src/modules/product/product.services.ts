import { db } from "@/db/mongo";
import { ObjectId } from "mongodb";
import { Product } from "../../../../global/implements";

export async function createProduct(body: Product) {
  const Products = db!.collection<Product>("products");

  await Products.insertOne(body);

  return { success: true };
}

export async function getProducts() {
  const Products = db!.collection<Product>("products");

  const products = await Products.find().toArray();

  return { products };
}

export async function getProductById(id: ObjectId) {
  const Products = db!.collection<Product>("products");

  const product = await Products.findOne({ _id: new ObjectId(id) });

  return { product };
}

export async function updateProduct(id: ObjectId, body: Product) {
  const Products = db!.collection<Product>("products");

  await Products.updateOne({ _id: new ObjectId(id) }, { $set: body });

  return { success: true };
}

export async function deleteProduct(id: ObjectId) {
  const Products = db!.collection<Product>("products");

  await Products.deleteOne({ _id: new ObjectId(id) });

  return { success: true };
}
