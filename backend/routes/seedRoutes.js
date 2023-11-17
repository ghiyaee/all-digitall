import express from "express";
import { home } from "../controller/resetDateControl.js";
const seedRouter = express.Router()
seedRouter.get('/',home)
export default seedRouter;