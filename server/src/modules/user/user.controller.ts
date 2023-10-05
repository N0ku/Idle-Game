import { Express, Request, Response } from "express";
import { getUserById, updateUser, addFactoryToUser,getUserByToken } from "./user.services";
import { ObjectId } from "mongodb";
import { Factory, User } from "../../global/implements";

export function userRoutes(app: Express) {
  app.get(
    "/users/:id",
    async (req: Request<{ id: string}, unknown, unknown>, res: Response) => {
      const result = await getUserById(new ObjectId(req.params.id));
      res.json(result);
    }
  );

  app.put(
    "/users/:id",
    async (req: Request<{ id: string }, unknown, User>, res: Response) => {
      const result = await updateUser(new ObjectId(req.params.id), req.body);
      res.json(result);
    }
  );

  app.put(
    "/users/:id/factory",
    async (req: Request<{ id: string}, unknown, Factory>, res: Response) => {
      const result = await addFactoryToUser(new ObjectId(req.params.id), req.body);
      res.json(result);
    }
  );

  app.get("/users/token/:token", async (req: Request<{ token: string }, unknown, unknown>, res: Response) => {
    const result = await getUserByToken(req.params.token);    
    res.json(result);
  }
  );
}
