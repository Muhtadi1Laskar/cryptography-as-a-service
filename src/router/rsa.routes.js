import express from "express";
import { validate } from "../middleware/validationHandler.js";
import { rsaDecryptionSchema, rsaEncryptionSchema, rsaKeySchema, rsaSignMessageSchema, rsaVerifyMessageScheme } from "../schema/rsa.schema.js";
import { generateKeys, rsaDecrypt, rsaEncrypt, rsaSign, rsaVerify } from "../controller/rsa.controller.js";

const router = express.Router();

router.post("/generateKeys", validate(rsaKeySchema), generateKeys);
router.post("/sign", validate(rsaSignMessageSchema), rsaSign);
router.post("/verify", validate(rsaVerifyMessageScheme), rsaVerify);
router.post("/encrypt", validate(rsaEncryptionSchema), rsaEncrypt);
router.post("/decrypt", validate(rsaDecryptionSchema), rsaDecrypt);

export default router;