import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import db from "./db.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Backend is alive!");
});

app.listen(3606, () => console.log("Backend running on port 3606"));

db.query("SELECT 1 + 1 AS solution", (err, results) => {
  if (err) {
    console.error("DB connection test failed:", err);
  } else {
    console.log("DB connection test result:", results[0].solution);
  }
});
