import { Elysia } from "elysia";



export const homeRoutes = (app: Elysia) =>
  app.get("/", () => ({
    version: "1.0.0",
    message: "Testando esse novo framework",
    status: 200
  }));
