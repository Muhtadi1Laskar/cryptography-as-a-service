import { decryptAES, encryptAES } from "../services/aes.service.js";
import { successResponse } from "../utils/response.js";

export const aesEncrypt = (req, res, next) => {
    const { text, secretKey } = req.body;

    try {
        const cipherText = encryptAES(text, secretKey);
        successResponse(res, { cipherText }, 200);
    } catch (error) {
        next(error);
    }
}

export const aesDecrypt = (req, res, next) => {
    const { cipherText, secretKey } = req.body;

    try {
        const text = decryptAES(cipherText, secretKey.trim());
        successResponse(res, { text }, 200);
    } catch(error) {
        next(error);
    }
}