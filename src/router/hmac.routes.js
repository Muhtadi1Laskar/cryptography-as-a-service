import express from "express";
import { validate } from "../middleware/validationHandler.js";
import { hmacSchema, verifyHmacSchema } from "../schema/hmac.schema.js";
import { checkHmac, getHmac } from "../controller/hmac.controller.js";

const router = express.Router();

router.post("/generate", validate(hmacSchema), getHmac);
router.post("/verify", validate(verifyHmacSchema), checkHmac);

export default router;