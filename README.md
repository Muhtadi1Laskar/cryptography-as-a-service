Here is a clean, professional, production-ready **README.md** for your cryptography API.
It’s formatted so you can drop it directly into your GitHub project.

---

# 🛡️ Cryptography API — Node.js

A modular, production-ready cryptography service built with Node.js & Express.
This API provides hashing, HMAC generation/verification, AES encryption/decryption, RSA key operations, encoding/decoding utilities, and identicon generation.

---

## 🚀 Features

### 🔐 **Hashing**

* Hash text (SHA256, SHA512, MD5, etc.)
* Compare text with a hash
* Generate multiple hashes at once
* Hash uploaded files

### 🔑 **HMAC**

* Generate HMAC signatures
* Verify HMAC signatures

### 🧊 **AES Encryption**

* Generate AES keys
* Encrypt & decrypt text
* Encrypt & decrypt file uploads

### 🔏 **RSA Operations**

* Generate RSA public/private keys
* Sign & verify messages
* Encrypt & decrypt data

### 🧬 **Encoding / Decoding**

* Base64, Base32, HEX, URL encode/decode

### 🧱 **Identicon Generator**

* Generate PNG/SVG identicons from input text

---

## 📁 Project Structure

```
src/
 ├── routes/
 │    ├── hash.routes.js
 │    ├── hmac.routes.js
 │    ├── aes.routes.js
 │    ├── rsa.routes.js
 │    ├── other.routes.js
 │    └── identicon.routes.js
 │
 ├── controllers/
 ├── schemas/
 ├── middlewares/
 │    ├── validate.js
 │    └── upload.js
 └── index.js
```

---

## 📌 API Endpoints

---

## 🔐 Hash Routes — `/hash`

### **GET** `/get-hashes`

Returns a list of supported hash algorithms.

### **POST** `/hash-data`

Hash raw text.
**Body:**

```json
{
  "algorithm": "sha256",
  "data": "hello world"
}
```

### **POST** `/compare-hash`

Verify text against a hash.

### **POST** `/multiple-hash`

Apply multiple hash algorithms at once.

### **POST** `/file/hash-data`

Upload a file to generate its hash.

---

## 🔑 HMAC Routes — `/hmac`

### **POST** `/generate-hmac`

Generate HMAC signature.

### **POST** `/verify-hmac`

Verify HMAC signature.

---

## 🧊 AES Routes — `/aes`

### **POST** `/generate-key`

Generate AES key.

### **POST** `/encrypt`

Encrypt text.

### **POST** `/decrypt`

Decrypt text.

### **POST** `/encrypt-file`

Encrypt uploaded file.

### **POST** `/decrypt-file`

Decrypt uploaded file.

---

## 🔏 RSA Routes — `/rsa`

### **POST** `/generate-key`

Generate RSA keypair.

### **POST** `/sign`

Sign text using private key.

### **POST** `/verify`

Verify RSA signature.

### **POST** `/encrypt`

Encrypt using public key.

### **POST** `/decrypt`

Decrypt using private key.

---

## 🧬 Encoding Routes — `/other`

### **POST** `/encode-decode`

Encode or decode:

* Base64
* HEX
* URL encoding
* Base32

---

## 🧱 Identicon Routes — `/identicon`

### **POST** `/generate`

Generate a unique identicon based on input text.

---

## ⚙️ Setup & Installation

### **Clone the repository**

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

## 🧪 API Testing

You can test endpoints using:

* Postman
* Insomnia
* Thunder Client
* cURL

Example:

```sh
curl -X POST http://localhost:5000/hash/hash-data \
  -H "Content-Type: application/json" \
  -d '{"algorithm":"sha256", "data":"hello"}'
```

---

## 🛡️ Security Notes

* Never store private RSA keys in plain text
* Always validate inputs (already implemented via schemas)
* Rate-limit sensitive endpoints depending on production use-case
* Prefer AES-256-GCM for secure encryption

---

## 📄 License

MIT License

---
