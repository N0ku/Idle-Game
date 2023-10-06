
import {Express, Request, Response} from "express";
import {addEchange, getAllEchange, updateEchange} from "@/modules/echange/echange.services";
import {Echange} from "@/global/classes/Echange";
import {ObjectId} from "mongodb";


export function EcahgneRoutes(app: Express) {
    app.get(
        "/echanges",
        async (_req: Request<unknown, unknown, unknown>, res: Response) =>
            res.json(await getAllEchange())
    );

    app.post(
        "/echange",
        async (req: Request<unknown, unknown, Echange>, res: Response) => {
            try {
                const result = await addEchange(req.body);
                res.json(result);
            } catch (error) {
                console.log(error);
            }
        }
    );

    app.put(
        "/echange/:id",
        async (req: Request<{ id: ObjectId }, unknown, Echange>, res: Response) => {
            const result = await updateEchange(req.params.id, req.body);
            res.json(result);
        }
    );





}