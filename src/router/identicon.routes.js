import express from "express";
import { validate } from "../middleware/validationHandler.js";
import { identiconSchema } from "../schema/identicon.schema.js";
import { generateIdenticon } from "../controller/identicon.controller.js";

const router = express.Router();

router.post("/generate", validate(identiconSchema), generateIdenticon);

export default router;