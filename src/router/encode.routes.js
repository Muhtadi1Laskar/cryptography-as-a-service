import express from "express";
import { validate } from "../middleware/validationHandler.js";
import { encodeDecodeSchema } from "../schema/encoding.schema.js";
import { encodeDecode } from "../controller/encoding.controller.js";

const router = express.Router();

router.post("/encode-decode", validate(encodeDecodeSchema), encodeDecode);

export default router;