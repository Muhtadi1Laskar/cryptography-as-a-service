import IdenticonGenerator from "../services/identicon.service.js";
import { successResponse } from "../utils/response.js";

export const generateIdenticon = async (req, res, next) => {
    const { data, hash } = req.body;

    try {
        const identicon = new IdenticonGenerator(data, {
            hashAlgorithm: hash,
            size: 500
        });
        const base64Image = await identicon.generate();
        successResponse(res, { base64Image }, 200);
    } catch (error) {
        next(error);
    }
}