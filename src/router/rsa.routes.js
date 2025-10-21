import express from "express";
import { validate } from "../middleware/validationHandler.js";
import { rsaEncryptionSchema, rsaKeySchema, rsaSignMessageSchema, rsaVerifyMessageScheme } from "../schema/rsa.schema.js";
import { generateKeys, rsaEncrypt, rsaSign, rsaVerify } from "../controller/rsa.controller.js";

const router = express.Router();

router.post("/generateKeys", validate(rsaKeySchema), generateKeys);
router.post("/sign", validate(rsaSignMessageSchema), rsaSign);
router.post("/verify", validate(rsaVerifyMessageScheme), rsaVerify);
router.post("/encrypt", validate(rsaEncryptionSchema), rsaEncrypt);

export default router;