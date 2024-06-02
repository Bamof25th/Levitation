import express from "express";
import { signUp, signIn } from "../controllers/user.js";


const app = express.Router();


// /v1/api/user/signup
app.post("/signup", signUp);


// /v1/api/user/signup
app.post("/login", signIn);

export default app;
