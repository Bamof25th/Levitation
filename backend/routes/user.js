import express from "express";
import { signUp, signIn, signOut } from "../controllers/user.js";

const app = express.Router();

// /v1/api/user/signup
app.post("/signup", signUp);

// /v1/api/user/signout
app.post("/signout", signOut);

// /v1/api/user/signup
app.post("/login", signIn);

export default app;
