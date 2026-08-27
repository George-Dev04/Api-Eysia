import { Elysia } from "elysia";
export const homeRoutes = (app) => app.get("/", () => ({
    message: "Bem, vindo a minha api",
    status: 200
}));
//# sourceMappingURL=home.js.map