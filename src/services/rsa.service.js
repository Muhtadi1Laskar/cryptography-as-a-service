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

export const rsaSignMessage = (message, signatureAlgorithm, outputEncoding, privateKeyString, passPhrase) => {
    const clearnPrivateString = privateKeyString.replace(/\\n/g, "\n");

    if (!isValidPrivateKey(clearnPrivateString, passPhrase)) {
        throw new Error("Invalid Private Key");
    }

    try {
        const privateKey = crypto.createPrivateKey({
            key: clearnPrivateString,
            passphrase: passPhrase
        });
        const signer = crypto.createSign(signatureAlgorithm);
        signer.update(message);
        signer.end()

        const signature = signer.sign(privateKey, outputEncoding);
        return signature;
    } catch (error) {
        console.error("ERROR", error);
        throw new Error(error);
    }

}


const isValidPrivateKey = (key, passphrase) => {
    try {
        const privateKey = crypto.createPrivateKey({ key, passphrase });
        const dataToSign = Buffer.from("test data");
        const signature = crypto.sign("sha256", dataToSign, privateKey);
        const publicKey = crypto.createPublicKey(privateKey);
        const isVerified = crypto.verify("sha256", dataToSign, publicKey, signature);

        return isVerified;
    } catch (error) {
        console.error("Invalid RSA Private Key: ", error.message);
        return false;
    }
}