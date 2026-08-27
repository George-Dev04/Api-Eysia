import { Elysia } from 'elysia'
import { node } from '@elysia/node'
import { homeRoutes } from "./router/home.js";
import dotenv from 'dotenv';
dotenv.config();



const PORTA: number = Number(process.env.PORT) || 9090
const app = new Elysia({ adapter: node() }).use(homeRoutes);

app.onError(({ code, set }) => {
  if (code === "NOT_FOUND") {
    set.status = 404; 
    return { error: "Página não encontrada", status: set.status };
  }
});


export default app;


if (!process.env.VERCEL) {
  app.listen(PORTA, () => {
    console.log(`🦊 Server running http://localhost:${PORTA}`);
  });
}
