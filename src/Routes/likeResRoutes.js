import express from "express";
import { getLike, handleLike } from "../Controllers/likeResController.js";

const likeResRoutes = express.Router();

likeResRoutes.post("/handle-like", handleLike);
likeResRoutes.get("/get-like", getLike);

export default likeResRoutes;
