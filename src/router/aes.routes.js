import express from "express";
import { validate } from "../middleware/validationHandler.js";
import { aesDecryptSchema, aesEncryptSchema, aesFileEncryptionScheme } from "../schema/aes.schema.js";
import { aesDecrypt, aesEncrypt, aesFileDecrypt, aesFileEncrypt, generatAESKey } from "../controller/aes.controller.js";
import { uploadSingle } from "../middleware/fileHandler.js";

const router = express.Router();

router.post("/generate-key", validate(aesFileEncryptionScheme), generatAESKey);
router.post("/encrypt", validate(aesEncryptSchema), aesEncrypt);
router.post("/decrypt", validate(aesDecryptSchema), aesDecrypt);
router.post("/encrypt-file", uploadSingle, validate(aesFileEncryptionScheme), aesFileEncrypt);
router.post("/decrypt-file", uploadSingle, validate(aesFileEncryptionScheme), aesFileDecrypt);

export default router;