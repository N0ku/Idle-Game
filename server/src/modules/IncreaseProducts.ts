import { getFactoriesByUserId } from "./factory/factory.services";
import { ObjectId } from "mongodb";
import { ObjectIdLike } from "bson";
import { Product, Success } from "@/global/implements";
import { successList } from "@/global/successList";

export async function increaseResources(
  users:
    | {
        _id: string | number | ObjectId | ObjectIdLike | Uint8Array | undefined;
        products: Product[];
        success?: Success[];
      }[]
    | undefined
) {
  if (!users) return;

  for (const user of users) {
    let factories = await getFactoriesByUserId(new ObjectId(user._id));

    if (!user.success) {
      user.success = [];
    }

    successList.forEach((success) => {
      if (!user.success) {
        user.success = [];
      }
      if (user.success?.find((s) => s.name === success.name)) return;

      if (
        user.products.find(
          (p) =>
            p.name === success.conditionType &&
            p.quantity >= success.amountCondition
        )
      ) {
        user.success?.push(success);
      }
    });

    if (factories && factories.factories) {
      factories.factories.forEach((factory) => {
        const product = user.products.find(
          (product) => product.name === factory.productName
        );

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
