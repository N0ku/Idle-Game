import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { registerAuthRoutes } from "./modules/auth/auth.controller";
import { isLogin } from "./modules/auth/auth.middleware";
import { factoryRoutes } from "./modules/factory/factory.controller";
import { userRoutes } from "./modules/user/user.controller";
import { productRoutes } from "./modules/product/product.controller";

export function initWebServer() {
  // Creation du serveur http
  const app = express();

  // Utilise le plugin CORS
  app.use(
    cors({
      credentials: true,
    })
  );

  // lire les cookies
  app.use(cookieParser());

  // permet de décoder le contenu des requetes http (de type JSON)
  app.use(express.json());

  // Add isLogin middleware
  app.use(isLogin);

  // On enregistre nos controllers
  registerAuthRoutes(app);
  factoryRoutes(app);
  userRoutes(app);
  productRoutes(app);

  app.get("/", (_req, res) => {
    res.json({ message: "Hello World" });
  });

  // On ecoute sur le port configuré avec le .env
  app.listen(process.env.NODE_PORT, () => {
    console.log(`Listening on http://localhost:${process.env.NODE_PORT}`);
  });

  return app;
}
