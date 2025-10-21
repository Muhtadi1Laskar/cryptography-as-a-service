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

export const verifyMessage = (message, signature, signatureAlgorithm, outputEncoding, publicKeyString, passPhrase) => {
    const cleanPublicKeyString = publicKeyString.replace(/\\n/g, "\n");

    if(!isValidPublicKey(cleanPublicKeyString)) {
        throw new Error("Invalid Public Key");
    }

    try {
        const publicKey = crypto.createPublicKey(cleanPublicKeyString);
        const verifier = crypto.createVerify(signatureAlgorithm);
        verifier.update(message);
        verifier.end();

        const isVerified = verifier.verify(publicKey, signature, outputEncoding);
        return isVerified
    } catch (error) {
        console.error(error);
        throw new Error(error);
    }
}

export const rsaEncryption = (data, publicKeyString, hash, outputEncoding) => {
    const cleanPublicKeyString = publicKeyString.replace(/\\n/g, "\n");

    if(!isValidPublicKey(cleanPublicKeyString)) {
        throw new Error("Invalid Public Key");
    }

    try {
        const buffer = Buffer.from(data, "utf8");
        const encrypted = crypto.publicEncrypt(
            {
                key: cleanPublicKeyString,
                padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
                oaepHash: hash
            },
            buffer
        );

        return encrypted.toString(outputEncoding);
    } catch (error) {
        console.error(error);
        throw new Error("Failed to encrypt data");
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

const isValidPublicKey = (publicKeyString) => {
    try {
        const keyObject = crypto.createPublicKey(publicKeyString);
        return keyObject.type === "public" && keyObject.asymmetricKeyType === "rsa";
    } catch (error) {
        console.error("Key validation error: ", error.message);
        return error;
    }
}