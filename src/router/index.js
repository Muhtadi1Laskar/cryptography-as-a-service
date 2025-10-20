import express from "express";
import hashRoutes from "./hash.routes.js";
import hmacRoutes from "./hmac.routes.js";
import aesRoutes from "./aes.routes.js";
import rsaRoutes from "./rsa.routes.js";

const router = express.Router();

router.use("/hash", hashRoutes);
router.use("/hmac", hmacRoutes);
router.use("/aes", aesRoutes);
router.use("/rsa", rsaRoutes);

export default router;