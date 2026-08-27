import { Elysia } from "elysia";



export const homeRoutes = (app: Elysia) =>
  app.get("/", () => ({
    message: "Bem, vindo a minha api",
    status: 200
  }));
