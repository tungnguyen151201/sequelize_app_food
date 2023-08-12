import express from "express";
import cors from "cors";
import rootRoutes from "./Routes/rootRoutes.js";

const app = express();
app.use(express.json()); // hàm gọi middleware chuyển đổi cấu trúc json để backend nhận được

app.use(cors()); // middleware chấp nhận tất FE truy cập vào

app.listen(8080);

app.use("/api", rootRoutes);
