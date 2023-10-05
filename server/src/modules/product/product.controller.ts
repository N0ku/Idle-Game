import {
  getProductById,
  getProducts,
  deleteProduct,
  updateProduct,
} from "./product.services";
import { Express, Request, Response } from "express";
import { Product } from "../../global/implements";
import { ObjectId } from "mongodb";

export function productRoutes(app: Express) {
  app.get(
    "/products",
    async (_req: Request<unknown, unknown, unknown>, res: Response) =>
      res.json(await getProducts())
  );

  app.get(
    "/products/:id",
    async (req: Request<{ id: ObjectId }, unknown, unknown>, res: Response) => {
      const result = await getProductById(req.params.id);
      res.json(result);
    }
  );
  app.put(
    "/products/:id",
    async (req: Request<{ id: ObjectId }, unknown, Product>, res: Response) => {
      const result = await updateProduct(req.params.id, req.body);
      res.json(result);
    }
  );

  app.delete(
    "/products/:id",
    async (req: Request<{ id: ObjectId }, unknown, unknown>, res: Response) => {
      const result = await deleteProduct(req.params.id);
      res.json(result);
    }
  );
}
