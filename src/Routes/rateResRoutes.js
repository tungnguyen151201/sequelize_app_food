import express from "express";
import { createRate, getRate } from "../Controllers/rateResController.js";

const rateResRoutes = express.Router();

rateResRoutes.post("/create-rate", createRate);
rateResRoutes.get("/get-rate", getRate);

export default rateResRoutes;
