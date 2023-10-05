import { Express, Request, Response } from "express";
import { getUserById, updateUser, addFactoryToUser } from "./user.services";
import { ObjectId } from "mongodb";
import { Factory, User } from "../../global/implements";

export function userRoutes(app: Express) {
  app.get(
    "/users/:id",
    async (req: Request<{ id: ObjectId }, unknown, unknown>, res: Response) => {
      const result = await getUserById(req.params.id);
      res.json(result);
    }
  );

  app.put(
    "/users/:id",
    async (req: Request<{ id: ObjectId }, unknown, User>, res: Response) => {
      const result = await updateUser(req.params.id, req.body);
      res.json(result);
    }
  );

  app.put(
    "/users/:id/factory",
    async (req: Request<{ id: ObjectId }, unknown, Factory>, res: Response) => {
      const result = await addFactoryToUser(req.params.id, req.body);
      res.json(result);
    }
  );
}
