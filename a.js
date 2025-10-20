// import { decryptAES, encryptAES } from "./src/services/aes.service.js";

// const secret = "mypassword";
// const text = "Hello world";

// const cipherText = encryptAES(text, secret);
// console.log("CIPHERTEXT:", cipherText);

// const plainText = decryptAES(cipherText.trim(), secret);
// console.log("PLAINTEXT:", plainText);






// --- Example Usage ---
// To test, run this file: node crypto-utils.js
const myPassword = "super-secret-password";
const myMessage = "This is a test message that needs to be kept secure!";

// Encrypt
const encryptedMessage = encryptAES(myMessage, myPassword);
console.log("\nEncrypted Data:", encryptedMessage);

// Decrypt
const decryptedMessage = decryptAES(encryptedMessage, myPassword);
console.log("Decrypted Message:", decryptedMessage);

// Test failure with wrong password
try {
    console.log("\n--- Testing Failed Decryption (Wrong Password) ---");
    decryptAES(encryptedMessage, "incorrect-password");
} catch (e) {
    console.error("Failure expected and caught:", e.message);
}
