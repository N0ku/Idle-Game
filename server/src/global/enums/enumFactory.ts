import { Factory, Product, UserStage } from "../implements";

export enum Products {
  Wood = "Wood",
  Stone = "Stone",
  Weed = "Weed",
  CBD = "CBD",
  Water = "Water",
  Fertilizer = "Fertilizer",
}

export class ProductsExtensions {
  public static GetImage(product: Products) {
    switch (product) {
      case Products.Wood:
        return "src/assets/img/products/wood.png";
      case Products.Stone:
        return "src/assets/img/products/stone.jpg";
      case Products.Weed:
        return "src/assets/img/products/weed.png";
      case Products.CBD:
        return "src/assets/img/products/cbd.png";
      case Products.Water:
        return "src/assets/img/products/water.png";
      case Products.Fertilizer:
        return "src/assets/img/products/fertilizer.png";
      default:
        return;
    }
  }

  public static GetBasePrice(product: Products | undefined) {
    switch (product) {
      case Products.Wood:
        return 1;
      case Products.Stone:
        return 15.0;
      case Products.Weed:
        return 20.0;
      case Products.CBD:
        return 25.0;
      case Products.Water:
        return 5.0;
      case Products.Fertilizer:
        return 7.5;
      default:
        return 0;
    }
  }
  public static GetPrice(product: Products | undefined, quantity: number = 1) {
    const basePrice = this.GetBasePrice(product);

    if (basePrice !== undefined) {
      return basePrice * quantity;
    }

    return 0;
  }
}

export enum TypeFactory {
  WoodProduction,
  StoneProduction,
  WeedProduction,
  CBDProduction,
  WaterProduction,
  FertilizerProduction,
}

export class TypeFactoryExtensions {
  public static GetImage(product: TypeFactory | undefined) {
    switch (product) {
      case TypeFactory.WoodProduction:
        return "src/assets/img/wood.png";
      case TypeFactory.StoneProduction:
        return "src/assets/img/factories/stone_factories.png";
      case TypeFactory.WeedProduction:
        return "src/assets/img/factories/weed_factories.png";
      case TypeFactory.CBDProduction:
        return "src/assets/img/factories/cdb_factories.png";
      case TypeFactory.WaterProduction:
        return "src/assets/img/factories/water_factories.png";
      case TypeFactory.FertilizerProduction:
        return "src/assets/img/factories/fertilizer_factories.png";
      default:
        return "";
    }
  }
  public static GetPrice(factory: TypeFactory | undefined, level: number) {
    switch (factory) {
      case TypeFactory.WoodProduction:
        return 100.0 * level;
      case TypeFactory.StoneProduction:
        return 150.0 * level;
      case TypeFactory.WeedProduction:
        return 200.0 * level;
      case TypeFactory.CBDProduction:
        return 250.0 * level;
      case TypeFactory.WaterProduction:
        return 50.0 * level;
      case TypeFactory.FertilizerProduction:
        return 75.0 * level;
      default:
        return;
    }
  }
  public static GetPriceUpgrade(factory: Factory) {
    const rawLevel = factory.getLevel();
    const level = typeof rawLevel === "number" ? rawLevel : 1;
    switch (factory.getFactoryType()) {
      case TypeFactory.WoodProduction:
        return 100.0 * Math.pow(2, level - 1);
      case TypeFactory.StoneProduction:
        return 150.0 * Math.pow(2, level - 1);
      case TypeFactory.WeedProduction:
        return 200.0 * Math.pow(2, level - 1);
      case TypeFactory.CBDProduction:
        return 250.0 * Math.pow(2, level - 1);
      case TypeFactory.WaterProduction:
        return 50.0 * Math.pow(2, level - 1);
      case TypeFactory.FertilizerProduction:
        return 75.0 * Math.pow(2, level - 1);
      default:
        return 0;
    }
  }
  public static CanUpgradeFactory(
    money: number,
    factory: Factory,
    user: UserStage
  ): boolean {
    const upgradePrice = TypeFactoryExtensions.GetPriceUpgrade(factory);
    const rawLevel = factory.getLevel();
    const level = typeof rawLevel === "number" ? rawLevel : 1;

    if (level >= 5) {
      const requiredResources =
        TypeFactoryExtensions.getRequiredProductsForUpgrade(factory);

      if (
        money >= upgradePrice &&
        TypeFactoryExtensions.hasRequiredResources(
          requiredResources,
          user.products
        )
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      if (money >= upgradePrice) {
        return true; // Vous pouvez effectuer l'upgrade
      } else {
        return false; // Vous ne pouvez pas effectuer l'upgrade
      }
    }
  }

  public static getRequiredProductsForUpgrade(factory: Factory): Product[] {
    const rawLevel = factory.getLevel();
    const level = typeof rawLevel === "number" ? rawLevel : 1;
    const requiredProducts: Product[] = [];
    const productRequirements: Record<
      TypeFactory,
      { first: Products; second: Products }
    > = {
      [TypeFactory.WoodProduction]: {
        first: Products.Wood,
        second: Products.Stone,
      },
      [TypeFactory.StoneProduction]: {
        first: Products.Stone,
        second: Products.Wood,
      },
      [TypeFactory.WeedProduction]: {
        first: Products.Wood,
        second: Products.Water,
      },
      [TypeFactory.CBDProduction]: {
        first: Products.Wood,
        second: Products.Stone,
      },
      [TypeFactory.FertilizerProduction]: {
        first: Products.Stone,
        second: Products.Wood,
      },
      [TypeFactory.WaterProduction]: {
        first: Products.Wood,
        second: Products.Water,
      },
    };

    const type = factory.getFactoryType();
    const requirements = productRequirements[type];

    if (requirements) {
      const firstQuantity = 50 * level;
      const secondQuantity = 25 * level;

      requiredProducts.push({
        name: requirements.first,
        price: 0,
        description: "",
        quantity: firstQuantity,
      });

      requiredProducts.push({
        name: requirements.second,
        price: 0,
        description: "",
        quantity: secondQuantity,
      });
    }

    return requiredProducts;
  }

  public static hasRequiredResources(
    requiredResources: Product[],
    availableResources: Product[]
  ): boolean {
    // Créez un dictionnaire pour stocker les ressources disponibles pour une recherche plus rapide
    const availableResourcesMap: Record<string, number> = {};

    for (const resource of availableResources) {
      availableResourcesMap[resource.name] = resource.quantity;
    }

    // Parcourez les ressources requises
    for (const requiredResource of requiredResources) {
      const { name, quantity } = requiredResource;

      // Vérifiez si la ressource requise existe dans les ressources disponibles
      if (
        availableResourcesMap[name] === undefined ||
        availableResourcesMap[name] < quantity
      ) {
        return false; // L'une des ressources requises n'est pas disponible en quantité suffisante
      }
    }

    return true; // Toutes les ressources sont disponibles en quantité suffisante
  }
}
