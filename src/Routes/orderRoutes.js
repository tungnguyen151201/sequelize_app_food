import express from "express";
import { createOrder } from "../Controllers/orderController.js";

const orderRoutes = express.Router();

orderRoutes.post("/create-order/:userId", createOrder);

export default orderRoutes;
