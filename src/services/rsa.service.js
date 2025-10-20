import crypto from "node:crypto";

export const generateRSAKey = (bits, type, cipherAlgorithm, passphrase) => {
    console.log(bits, type, cipherAlgorithm, passphrase);
    try {
        const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
            modulusLength: bits,
            publicKeyEncoding: {
                type: 'spki',
                format: 'pem'
            },
            privateKeyEncoding: {
                type,
                format: 'pem',
                cipher: cipherAlgorithm,
                passphrase
            }
        });
        return { publicKey, privateKey }
    } catch (error) {
        console.error(error);
        throw new Error("Failed to generate Key");
    }
}