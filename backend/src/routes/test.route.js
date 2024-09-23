import express from "express";
import { testController } from "../controller/test.controller.js";

// router object
const router = express.Router();

// routes
router.get("/test", testController);

export default router;