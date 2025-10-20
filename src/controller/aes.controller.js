import { decryptAES, encryptAES, generateAesKey } from "../services/aes.service.js";
import { errorResponse, successResponse } from "../utils/response.js";

export const generatAESKey = async (req, res, next) => {
    const { secretKey } = req.body;

    try {
        const result = generateAesKey(secretKey);
        successResponse(res, result, 200);
    } catch(error) {
        next(error);
    }
}

export const aesEncrypt = async (req, res, next) => {
    const { text, secretKey } = req.body;

    try {
        const cipherText = encryptAES(text, secretKey);
        successResponse(res, { cipherText }, 200);
    } catch (error) {
        next(error);
    }
}

export const aesDecrypt = async (req, res, next) => {
    const { cipherText, secretKey } = req.body;

    try {
        const text = decryptAES(cipherText, secretKey.trim());
        successResponse(res, { text }, 200);
    } catch (error) {
        next(error);
    }
}

export const aesFileEncrypt = async (req, res, next) => {
    if (!req.file) {
        errorResponse(res, { message: "File is missing" }, 401);
        return;
    }

    const { originalname, buffer } = req.file;
    const { secretKey } = req.body;
    const textString = buffer.toString();

    try {
        const cipherText = encryptAES(textString, secretKey);
        successResponse(res, { encryptedText: cipherText }, 200);
    } catch (error) {
        next(error);
    }
}

export const aesFileDecrypt = async (req, res, next) => {
    if (!req.file) {
        errorResponse(res, { message: "File is missing" }, 200);
        return;
    }

    const { originalname, buffer } = req.file;
    const { secretKey } = req.body;
    const cipherText = buffer.toString();

    try {
        const text = decryptAES(cipherText, secretKey);
        successResponse(res, { decryptedText: text }, 200);
    } catch (error) {
        next(error);
    }
}