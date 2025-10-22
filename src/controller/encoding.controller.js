import { encodeAndDecode } from "../services/encoding.services.js";
import { successResponse } from "../utils/response.js";

export const encodeDecode = async (req, res, next) => {
    const {
        data,
        dataType,
        encodeType
    } = req.body;

    try {
        const result = encodeAndDecode(data, dataType, encodeType);
        successResponse(res, { result }, 200);
    } catch (error) {
        next(error);
    }
}