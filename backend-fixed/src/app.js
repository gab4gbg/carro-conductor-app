import express from "express";
import cors    from "cors";
import carroRoutes from "./infrastructure/config/routes/carroRoutes.js";
import conductorRoutes from "./infrastructure/config/routes/conductorRoutes.js";
import { carroController, conductorController } from "./infrastructure/config/container.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(carroRoutes(carroController));
app.use(conductorRoutes(conductorController));

export default app;