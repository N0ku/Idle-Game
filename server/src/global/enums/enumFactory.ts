export enum Products {
  Wood = "Wood",
  Stone = "Stone",
  Weed = "Weed",
  CBD = "CBD",
  Water = "Water",
  Fertilizer = "Fertilizer",
}

export class ProductsExtensions {
  public static GetImage(product: Products ) {
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

  public static GetPrice(product: Products | undefined) {
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
        return;
    }
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
        return "src/assets/img/factories/cbd_factories.png";
      case TypeFactory.WaterProduction:
        return "water.png";
      case TypeFactory.FertilizerProduction:
        return "fertilizer.png";
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
  public static GetPriceUpgrade(
    factory: TypeFactory | undefined,
    level: number
  ) {
    switch (factory) {
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
        return;
    }
  }
}
