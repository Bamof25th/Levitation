import express from "express";
import { connectDB } from "./utils/mongoose.js";
import { config } from "dotenv";
import cors from "cors";

import userRouter from "./routes/user.js";
import billRouter from "./routes/bill.js";

config({
  path: "./.env",
});

const port = process.env.PORT || 4000;
const app = express();
connectDB(process.env.DB_URL);

app.use(express.json());

//CORS policy configuration
app.use(cors());

// routes

app.use("/v1/api/user", userRouter);
app.use("/v1/api/bill", billRouter);

// * error handeling midlleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
