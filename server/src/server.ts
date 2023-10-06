import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import http from "http";
import { registerAuthRoutes } from "./modules/auth/auth.controller";
import { isLogin } from "./modules/auth/auth.middleware";
import { factoryRoutes } from "./modules/factory/factory.controller";
import { userRoutes } from "./modules/user/user.controller";
import { productRoutes } from "./modules/product/product.controller";
import {EcahgneRoutes} from "@/modules/echange/echange.contoller";
import { db } from "./db/mongo";
import { User } from "./global/implements";
import { increaseResources } from "./modules/IncreaseProducts";
import socketio from "socket.io";

export async function initWebServer() {
  // Creation du serveur http
  const app = express();
  const server = http.createServer(app);
  const io = new socketio.Server(server);
  // Utilise le plugin CORS
  app.use(
    cors({
      credentials: true,
      origin: process.env.FRONTEND_URL,
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
  EcahgneRoutes(app);
  EcahgneRoutes(app);

  // All connected client on the website
  const clients = new Map();

  io.on("connection", async (socket) => {
    socket.on("userId", (userId) => {
      clients.set(userId, socket);
    });
    socket.on("disconnect", (userId) => {
      clients.delete(userId);
    });
  });

  const Users = db!.collection<User>("users");
  const users = await Users.find().toArray();

  // Set up a scheduled task to increase resources every second
  setInterval(() => {
    increaseResources(users);

    users.forEach((user) => {
      if (clients.has(user._id.toString())) {
        clients.get(user._id.toString())?.emit("updateProduct", user.products);
        clients.get(user._id.toString())?.emit("updateSuccess", user.success);
      }
    });
  }, 1000);

  app.use(express.static("dist"));

  setInterval(() => {
    console.log("saving products in db...");
    users.forEach(async (user) => {
      await Users.updateOne(
        { _id: user._id },
        { $set: { products: user.products,success: user.success } }
      );
    });
  }, 1000 * 60 * 3);

  // On ecoute sur le port configuré avec le .env
  server.listen(process.env.NODE_PORT, () => {
    console.log(`Listening on http://localhost:${process.env.NODE_PORT}`);
  });

  return app;
}
