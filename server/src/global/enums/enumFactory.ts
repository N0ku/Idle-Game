export enum Products {
  Wood,
  Stone,
  Weed,
  CBD,
  Water,
  Fertilizer,
}

export class ProductsExtensions {
  public static GetImage(product: Products) {
    switch (product) {
      case Products.Wood:
        return "wood.png";
      case Products.Stone:
        return "stone.png";
      case Products.Weed:
        return "weed.png";
      case Products.CBD:
        return "cbd.png";
      case Products.Water:
        return "water.png";
      case Products.Fertilizer:
        return "fertilizer.png";
      default:
        return;
    }
  }

  public static GetPrice(product: Products) {
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
  public static GetImage(this: TypeFactory | undefined) {
    switch (this) {
      case TypeFactory.WoodProduction:
        return "src/assets/img/wood.png";
      case TypeFactory.StoneProduction:
        return "stone.png";
      case TypeFactory.WeedProduction:
        return "weed.png";
      case TypeFactory.CBDProduction:
        return "cbd.png";
      case TypeFactory.WaterProduction:
        return "water.png";
      case TypeFactory.FertilizerProduction:
        return "fertilizer.png";
      default:
        return "fertilizer.png";
    }
  }

  public static GetPrice(factory: TypeFactory, level: number) {
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
}
