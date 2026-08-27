import { Elysia } from "elysia";



export const homeRoutes = (app: Elysia) =>
  app.get("/", () => ({
    version: "1.0.0",
    message: "Bem, vindo a minha api",
    status: 200
  }));
