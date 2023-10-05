import { Express, Request, Response } from "express";
import {
  getFactories,
  createFactory,
  getFactoryById,
  updateFactory,
  deleteFactory,
  getFactoriesByUserId,
} from "./factory.services";
import { Factory } from "../../global/implements";
import { ObjectId } from "mongodb";

export function factoryRoutes(app: Express) {
  app.get(
    "/factories",
    async (_req: Request<unknown, unknown, unknown>, res: Response) =>
      res.json(await getFactories())
  );

  app.post(
    "/factories",
    async (req: Request<unknown, unknown, Factory>, res: Response) => {
      try {
        const result = await createFactory(req.body);
        res.json(result);
      } catch (error) {
        console.log(error);
      }
    }
  );
  app.get(
    "/factories/:id",
    async (req: Request<{ id: ObjectId }, unknown, unknown>, res: Response) => {
      const result = await getFactoryById(req.params.id);
      res.json(result);
    }
  );
  app.put(
    "/factories/:id",
    async (req: Request<{ id: ObjectId }, unknown, Factory>, res: Response) => {
      const result = await updateFactory(req.params.id, req.body);
      res.json(result);
    }
  );

  app.delete(
    "/factories/:id",
    async (req: Request<{ id: ObjectId }, unknown, unknown>, res: Response) => {
      const result = await deleteFactory(req.params.id);
      res.json(result);
    }
  );

  app.get(
    "/factories/user/:id",
    async (req: Request<{ id: string }, unknown, unknown>, res: Response) => {
      const result = await getFactoriesByUserId(req.params.id);
      res.json(result);
    }
  );
}
