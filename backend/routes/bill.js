import express from "express";
import { createBill, createBillItem } from "../controllers/bill.js";


const app = express.Router();


// /v1/api/bill/item/new
app.post("/item/new", createBillItem);

// /v1/api/bill/new
app.post("/new/:id", createBill);



export default app;