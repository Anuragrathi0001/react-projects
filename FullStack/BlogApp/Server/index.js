import express from "express";
import cors from "cors";
import connectoMongo from "./config/db.js";
import authRoutes from "./routes/blog.js"
const app = express();
const PORT = 9000;
connectoMongo();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.send("API is running...");
});
//Api routes

app.use("/api/v1",authRoutes)

app.listen(PORT, () => {
    console.log(`API is running on http://localhost:${PORT}`);
});