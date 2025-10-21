import express from "express";
import { validate } from "../middleware/validationHandler.js";
import { rsaKeySchema, rsaSignMessageSchema } from "../schema/rsa.schema.js";
import { generateKeys, rsaSign } from "../controller/rsa.controller.js";

const router = express.Router();

router.post("/generateKeys", validate(rsaKeySchema), generateKeys);
router.post("/sign", validate(rsaSignMessageSchema), rsaSign);

export default router;