import express from "express";
import userRoutes from "./userRoutes.js";
import likeResRoutes from "./likeResRoutes.js";
import rateResRoutes from "./rateResRoutes.js";
import orderRoutes from "./orderRoutes.js";

const rootRoutes = express.Router();

rootRoutes.use("/user", userRoutes);
rootRoutes.use("/like-res", likeResRoutes);
rootRoutes.use("/rate-res", rateResRoutes);
rootRoutes.use("/order", orderRoutes);

export default rootRoutes;
