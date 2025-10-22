import Joi from "joi";

export const encodeDecodeSchema = Joi.object({
    data: Joi.string()
        .required()
        .messages({
            "any.required": "data is a required field",
            "string.empty": "data cannot be empty",
            "string.base": "data must be a string"
        }),

    dataType: Joi.string()
        .required()
        .valid("utf8", "utf16le", "ucs2", "base64", "hex", "ascii", "latin1", "binary")
        .messages({
            "string.empty": "dataType cannot be empty",
            "string.base": "dataType must be a string",
            "any.only": "Unsupported data type. Use one of the following: utf8, utf16le, ucs2, base64, hex, ascii, latin1, binary",
            "any.required": "dataType is required",
        }),

    encodeType: Joi.string()
        .required()
        .valid("utf8", "utf16le", "ucs2", "base64", "hex", "ascii", "latin1", "binary")
        .messages({
            "any.required": "encodeType is required",
            "string.base": "encodeType must be a string",
            "string.empty": "encodeType cannot be empty",
            "any.only": "Unsupported encode type. Use one of the following: utf8, utf16le, ucs2, base64, hex, ascii, latin1, binary"
        }),
}).required().messages({ "any.required": "Payload is required" });