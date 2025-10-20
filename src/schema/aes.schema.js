import Joi from "joi";

export const aesEncryptSchema = Joi.object({
    text: Joi.string()
        .required()
        .messages({
            "any.required": "text is a required field",
            "string.empty": "text cannot be empty"
        }),

    secretKey: Joi.string()
        .required()
        .messages({
            "string.empty": "secretKey cannot be empty",
            "any.required": "secretKey is a required field"
        })
}).required().messages({ "any.required": "Payload is required" });


export const aesDecryptSchema = Joi.object({
    cipherText: Joi.string()
        .required()
        .messages({
            "string.empty": "cipherText cannot be empty",
            "any.required": "cipherText is a required field"
        }),

    secretKey: Joi.string()
        .required()
        .messages({
            "string.empty": "secretKey cannot be empty",
            "any.required": "secretKey is a required field"
        })
}).required().messages({ "any.required": "Payload is required" });

