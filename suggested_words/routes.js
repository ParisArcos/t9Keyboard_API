import { Router } from "express";
import { createSuggestedWords } from "./controller.js";

const router = Router();

router.post("/", createSuggestedWords);

export default router;
