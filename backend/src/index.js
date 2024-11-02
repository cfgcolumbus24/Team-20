import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import matchingRoutes from "./routes/match.routes.js";
import eventRoutes from "./routes/info.routes.js";
import infoRoutes from "./routes/info.routes.js";

dotenv.config();

// configure app
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", authRoutes);
app.use("/api/match", matchingRoutes);
app.use("/api/event", eventRoutes);
app.use("/api/info", infoRoutes);

// start app
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

export default app;
