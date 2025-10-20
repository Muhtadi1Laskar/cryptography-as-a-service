import express from "express";
import { validate } from "../middleware/validationHandler.js";
import { aesDecryptSchema, aesEncryptSchema } from "../schema/aes.schema.js";
import { aesDecrypt, aesEncrypt } from "../controller/aes.controller.js";

const router = express.Router();

router.post("/encrypt", validate(aesEncryptSchema), aesEncrypt);
router.post("/decrypt", validate(aesDecryptSchema), aesDecrypt);

export default router;