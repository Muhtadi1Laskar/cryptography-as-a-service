import { generateRSAKey, rsaEncryption, rsaSignMessage, verifyMessage } from "../services/rsa.service.js";
import { successResponse } from "../utils/response.js";

export const generateKeys = async (req, res, next) => {
    const {
        bits,
        type,
        cipherAlgorithm,
        passphrase
    } = req.body;

    try {
        const { publicKey, privateKey } = generateRSAKey(bits, type, cipherAlgorithm, passphrase);
        successResponse(res, {
            message: "Successfully generated the keys",
            publicKey,
            privateKey
        },
            200);
    } catch (error) {
        next(error);
    }
}

export const rsaSign = async (req, res, next) => {
    const {
        message,
        signatureAlgorithm,
        outputEncoding,
        privateKeyString,
        passPhrase
    } = req.body;

    try {
        const signature = rsaSignMessage(message, signatureAlgorithm, outputEncoding, privateKeyString, passPhrase);
        successResponse(res, { signature: signature }, 200);
    } catch (error) {
        next(error);
    }
}

export const rsaVerify = async (req, res, next) => {
    const {
        message,
        signature,
        signatureAlgorithm,
        outputEncoding,
        publicKeyString
    } = req.body;

    try {

        const isVerified = verifyMessage(message, signature, signatureAlgorithm, outputEncoding, publicKeyString, outputEncoding);
        successResponse(res, { isVerified }, 200);
    } catch (error) {
        next(error);
    }
}

export const rsaEncrypt = async (req, res, next) => {
    const {
        data,
        publicKeyString,
        hash,
        outputEncoding
    } = req.body;

    try {
        const encryptedData = rsaEncryption(data, publicKeyString, hash, outputEncoding);
        successResponse(res, { encryptedData }, 200);
    } catch (error) {
        next(error);
    }
}