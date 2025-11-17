# 🛡️ Cryptography API — Node.js

A modular, high-performance cryptography service built with Node.js & Express.
This API provides hashing, HMAC operations, AES encryption/decryption, RSA key and signature operations, data encoding/decoding, and identicon generation.

---

# 🚀 Features

### 🔐 Hashing

* Hash text
* Verify hashed values
* Apply multiple hash algorithms at once
* Hash uploaded files
* List supported hash algorithms

### 🔑 HMAC

* Generate HMAC signatures
* Verify HMAC signatures

### 🧊 AES Encryption

* Generate AES keys
* Encrypt/decrypt text
* Encrypt/decrypt files

### 🔏 RSA Cryptography

* Generate RSA keypairs
* Sign & verify messages
* Encrypt & decrypt data

### 🧬 Encoding / Decoding

* Base64, Base32, Hex, URL encoding/decoding

### 🧱 Identicons

* Generate unique PNG/SVG identicons

---

# 📁 Project Structure

```
src/
 ├── routes/
 │    ├── hash.routes.js
 │    ├── hmac.routes.js
 │    ├── aes.routes.js
 │    ├── rsa.routes.js
 │    ├── codec.routes.js
 │    └── identicon.routes.js
 │
 ├── controllers/
 ├── schemas/
 ├── middlewares/
 │    ├── validate.js
 │    └── upload.js
 │
 └── index.js
```

---

# 🔗 API Reference

Below are all improved, REST-friendly, consistent route names.

---

# 🔐 **Hash API — `/hash`**

## **GET** `/hash/algorithms`

Returns all supported hashing algorithms.

---

## **POST** `/hash/text`

Hash raw text.

**Body:**

```json
{
  "algorithm": "sha256",
  "data": "hello world"
}
```

---

## **POST** `/hash/text/verify`

Verify plain text against a hash.

---

## **POST** `/hash/text/multiple`

Generate multiple hashes at once.

---

## **POST** `/hash/file`

Upload a file and generate its hash.

---

# 🔑 **HMAC API — `/hmac`**

## **POST** `/hmac/generate`

Generate HMAC signature.

## **POST** `/hmac/verify`

Verify HMAC signature.

---

# 🧊 **AES API — `/aes`**

## **POST** `/aes/key`

Generate an AES key.

---

## **POST** `/aes/text/encrypt`

Encrypt text.

## **POST** `/aes/text/decrypt`

Decrypt text.

---

## **POST** `/aes/file/encrypt`

Encrypt uploaded file.

## **POST** `/aes/file/decrypt`

Decrypt uploaded file.

---

# 🔏 **RSA API — `/rsa`**

## **POST** `/rsa/keypair`

Generate RSA public/private keypair.

---

## **POST** `/rsa/sign`

Sign a message using the private key.

## **POST** `/rsa/verify`

Verify signature using the public key.

---

## **POST** `/rsa/encrypt`

Encrypt with public key.

## **POST** `/rsa/decrypt`

Decrypt with private key.

---

# 🧬 **Codec API — `/codec`**

## **POST** `/codec`

Encode or decode data (Base64, HEX, URL, Base32, etc.)

**Body:**

```json
{
  "type": "base64",
  "mode": "encode",
  "data": "hello"
}
```

---

# 🧱 **Identicon API — `/identicon`**

## **POST** `/identicon`

Generate identicon from text.

---

# ⚙️ Setup & Installation

### **Clone the repo**

```sh
git clone https://github.com/your/repo.git
cd cryptography-api
```

### **Install dependencies**

```sh
npm install
```

### **Create environment file**

```
PORT=5000
```

### **Run the server**

```sh
npm start
```

---

# 🧪 Testing the API

Use Postman, Insomnia, Thunder Client, or curl.

Example:

```sh
curl -X POST http://localhost:5000/hash/text \
  -H "Content-Type: application/json" \
  -d '{"algorithm": "sha256", "data": "hello"}'
```

---

# 🛡️ Security Notes

* Avoid storing private RSA keys in plaintext
* Always validate inputs (schemas are already implemented)
* Rate limit sensitive endpoints in production
* Use HTTPS to protect in-transit cryptographic operations
* Prefer AES-256-GCM for authenticated encryption

---

# 📄 License

MIT License.

---
