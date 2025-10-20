import crypto from "node:crypto";

const generateKey = (password, salt) => {
    return crypto.pbkdf2Sync(password, salt, 200000, 32, "sha256");
};

export const generateAesKey = (password) => {
    try {
        const key = crypto.randomBytes(32);
        const iv = crypto.randomBytes(12);

        return {
            key: key.toString("hex"),
            iv: iv.toString("hex")
        };
    } catch (error) {
        console.error("Failed to generate key and iv: ", error);
        throw new Error("Failed to generate key and iv");
    }
}

export const encryptAES = (text, password) => {
    try {
        const salt = crypto.randomBytes(16);
        const key = generateKey(password, salt);
        const iv = crypto.randomBytes(12);
        const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);
        const encrypted = Buffer.concat([cipher.update(text, "utf8"), cipher.final()]);
        const authTag = cipher.getAuthTag();

        return [
            salt.toString("hex"),
            iv.toString("hex"),
            authTag.toString("hex"),
            encrypted.toString("hex")
        ].join(":");

    } catch (error) {
        console.error("Encryption failed:", error);
        throw new Error("Failed to encrypt the message.");
    }
};

export const decryptAES = (cipherText, password) => {
    try {
        const parts = cipherText.split(":");
        if (parts.length !== 4) {
            throw new Error("Invalid ciphertext format or missing components.");
        }

        const [saltHex, ivHex, authTagHex, encryptedHex] = parts;
        const salt = Buffer.from(saltHex, "hex");
        const iv = Buffer.from(ivHex, "hex");
        const authTag = Buffer.from(authTagHex, "hex");
        const encrypted = Buffer.from(encryptedHex, "hex");
        const key = generateKey(password, salt);
        const decipher = crypto.createDecipheriv("aes-256-gcm", key, iv);

        decipher.setAuthTag(authTag);

        const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()]);

        return decrypted.toString("utf8");

    } catch (error) {
        if (error.message.includes('authenticate data')) {
            throw new Error("Decryption failed. The password may be incorrect, or the data has been corrupted.");
        }
        console.error("Decryption encountered an unexpected error:", error);
        throw new Error("An unexpected error occurred during decryption.");
    }
};