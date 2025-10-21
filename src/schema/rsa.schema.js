import Joi from "joi";
import crypto from "node:crypto";

const hashes = crypto.getHashes();
const RSA_HASHES = hashes.filter(hash => hash.startsWith("RSA"));

export const rsaKeySchema = Joi.object({
    bits: Joi.number()
        .valid(2048, 3072, 4096)
        .required()
        .messages({
            "any.only": "Bits must be one of 2048, 3072, or 4096",
            "any.required": "Bits field is required",
        }),

    type: Joi.string()
        .valid("pkcs1", "pkcs8")
        .required()
        .messages({
            "any.only": "Type must be either 'rsa' or 'ec'",
            "any.required": "Key type is required",
        }),

    cipherAlgorithm: Joi.string()
        .valid("aes-256-cbc", "aes-192-cbc", "aes-128-cbc", null, "")
        .default(null)
        .messages({
            "any.only": "Cipher algorithm must be one of 'aes-256-cbc', 'aes-192-cbc', or 'aes-128-cbc'",
        }),

    passphrase: Joi.string()
        .allow("", null)
        .max(256)
        .messages({
            "string.max": "Passphrase cannot exceed 256 characters",
        }),
}).required().messages({ "any.required": "No payload provided" });



export const rsaSignMessageSchema = Joi.object({
    message: Joi.string()
        .min(1)
        .max(10000)
        .required()
        .messages({
            "string.base": "Message must be a string",
            "string.empty": "Message cannot be empty",
            "any.required": "Message is required",
        }),

    signatureAlgorithm: Joi.string()
        .valid(...RSA_HASHES)
        .required()
        .messages({
            "any.only": `Unsupported signature algorithm. Use one of the following: ${RSA_HASHES.join(', ')}`,
            "any.required": "Signature algorithm is required",
        }),

    outputEncoding: Joi.string()
        .valid("hex", "base64", "utf8")
        .default("hex")
        .messages({
            "any.only": "Output encoding must be one of 'hex', 'base64', or 'utf8'",
        }),

    privateKeyString: Joi.string()
        .min(100)
        .required()
        .messages({
            "string.empty": "Private key string cannot be empty",
            "any.required": "Private key string is required",
        }),

    passPhrase: Joi.string()
        .allow("", null)
        .max(256)
        .messages({
            "string.max": "Passphrase cannot exceed 256 characters",
        }),
}).required().messages({ "any.required": "No payload provided" });


export const rsaVerifyMessageScheme = Joi.object({
    message: Joi.string()
        .min(1)
        .max(10000)
        .required()
        .messages({
            "string.base": "Message must be a string",
            "string.empty": "Message cannot be empty",
            "any.required": "Message is required",
        }),
    
    signature: Joi.string()
        .required()
        .messages({
            "any.required": "Signature is required",
            "string.required": "Signature cannot be empty"
        }),

    signatureAlgorithm: Joi.string()
        .valid(...RSA_HASHES)
        .required()
        .messages({
            "any.only": `Unsupported signature algorithm. Use one of the following: ${RSA_HASHES.join(', ')}`,
            "any.required": "Signature algorithm is required",
        }),

    outputEncoding: Joi.string()
        .valid("hex", "base64", "utf8")
        .default("hex")
        .messages({
            "any.only": "Output encoding must be one of 'hex', 'base64', or 'utf8'",
        }),

    publicKeyString: Joi.string()
        .min(100)
        .required()
        .messages({
            "string.empty": "Public key string cannot be empty",
            "any.required": "Public key string is required",
        }),

    passPhrase: Joi.string()
        .allow("", null)
        .max(256)
        .messages({
            "string.max": "Passphrase cannot exceed 256 characters",
        }),
});
