import express, { urlencoded } from "express";
import userRoutes from "./routes/user.routes";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: false }));
app.use(userRoutes);


export default app;
