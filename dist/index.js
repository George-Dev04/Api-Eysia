import { Elysia } from 'elysia';
import { node } from '@elysia/node';
import { homeRoutes } from "./router/home.js";
const PORTA = 3000;
let app = new Elysia({ adapter: node() }).use(homeRoutes);
app.onError(({ code, set }) => {
    if (code === "NOT_FOUND") {
        set.status = 403;
        return { error: "Página não encontrada", status: set.status };
    }
});
app.listen(PORTA);
console.log(`Server running http://localhost:${PORTA}`);
//# sourceMappingURL=index.js.map