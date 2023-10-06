
import {Express, Request, Response} from "express";
import {addEchange, getAllEchange} from "@/modules/echange/echange.services";
import {Echange} from "@/global/classes/Echange";

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





}