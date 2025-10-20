import express from "express";
import { validate } from "../middleware/validationHandler.js";
import { rsaKeySchema } from "../schema/rsa.schema.js";
import { generateKeys } from "../controller/rsa.controller.js";

const router = express.Router();

router.post("/generateKeys", validate(rsaKeySchema), generateKeys);

export default router;