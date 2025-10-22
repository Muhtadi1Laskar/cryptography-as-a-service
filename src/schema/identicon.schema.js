import Joi from "joi";
import crypto from "node:crypto";

const HASHES = crypto.getHashes();

export const identiconSchema = Joi.object({
    data: Joi.string()
        .required()
        .messages({
            "any.required": "data is a required field",
            "string.empty": "data cannot be empty",
            "string.base": "data must be a string"
        }),

    hash: Joi.string()
        .valid(...HASHES)
        .required()
        .messages({
            "any.string.": "Hash algorithm is required",
            "any.only": `Invalid hash algorithm. Use one of: ${HASHES.join(', ')}`
        }),

}).required().messages({ "any.required": "Payload is required" });