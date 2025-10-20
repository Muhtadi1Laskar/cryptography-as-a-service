import { generateRSAKey } from "../services/rsa.service.js";
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