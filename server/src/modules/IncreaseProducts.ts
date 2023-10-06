import { getFactoriesByUserId } from "./factory/factory.services";
import { ObjectId } from "mongodb";
import { ObjectIdLike } from "bson";
import { Product } from "@/global/implements";

export async function increaseResources(
  users:
    | {
        _id: string | number | ObjectId | ObjectIdLike | Uint8Array | undefined;
        products: Product[];
      }[]
    | undefined
) {
  if (!users) return;

  for (const user of users) {
    let factories = await getFactoriesByUserId(new ObjectId(user._id));

    if (factories && factories.factories) {
      factories.factories.forEach((factory) => {
        const product = user.products.find((product) => {
          return product.name === factory.productName;
        });

        if (product && factory.level !== undefined) {
          product.quantity += factory.level * factory.production;
        } else if (!product && factory.level) {
          user.products.push({
            name: factory.productName,
            quantity: factory.production * factory.level,
            price: 20,
            description: "",
          });
        }
      });
    }
  }
}
