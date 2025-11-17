import express from "express";
import { getAllHash, hashData, hashFile, multipleHash, verifyHash } from "../controller/hash.controller.js";
import { validate } from "../middleware/validationHandler.js";
import { hashDataSchema, hashFileSchema, multipleHashSchema, verifyHashSchema } from "../schema/hash.schema.js";
import { uploadSingle } from "../middleware/fileHandler.js";

const router = express.Router();

router.get("/algortihms", getAllHash);
router.post("/text", validate(hashDataSchema), hashData);
router.post("/text/verify", validate(verifyHashSchema), verifyHash);
router.post("/text/multiple", validate(multipleHashSchema), multipleHash);
router.post("/file", uploadSingle, validate(hashFileSchema), hashFile);

export default router;