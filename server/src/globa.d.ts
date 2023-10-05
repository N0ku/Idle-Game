import { WithId } from "mongodb";
import { User } from "../../global/implements";

declare global {
  namespace Express {
    export interface Request {
      user?: WithId<User> | null;
    }
  }
}
