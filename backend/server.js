import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import cookieParser from "cookie-parser";
import productRoutes from "./Routes/productRoutes.js"

dotenv.config();
connectDb();
const app = express();

app.use(express.json());
app.use(cookieParser());

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("ArtOgram");
});

app.use("/api/products", productRoutes);

app.listen(port, () => {
  console.log(`ArtOgram listening on port ${port}`);
});
