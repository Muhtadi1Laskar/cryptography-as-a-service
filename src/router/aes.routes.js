import express from "express";
import { validate } from "../middleware/validationHandler.js";
import { aesDecryptSchema, aesEncryptSchema, aesFileEncryptionScheme } from "../schema/aes.schema.js";
import { aesDecrypt, aesEncrypt, aesFileDecrypt, aesFileEncrypt, generatAESKey } from "../controller/aes.controller.js";
import { uploadSingle } from "../middleware/fileHandler.js";

const router = express.Router();

router.post("/key", validate(aesFileEncryptionScheme), generatAESKey);
router.post("/text/encrypt", validate(aesEncryptSchema), aesEncrypt);
router.post("/text/decrypt", validate(aesDecryptSchema), aesDecrypt);
router.post("/file/encrypt", uploadSingle, validate(aesFileEncryptionScheme), aesFileEncrypt);
router.post("/file/decrypt", uploadSingle, validate(aesFileEncryptionScheme), aesFileDecrypt);

export default router;