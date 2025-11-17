🔐 Cryptographic Utilities API

Project Overview

The Cryptographic Utilities API provides a robust suite of endpoints for handling common cryptographic tasks, including hashing, symmetric encryption (AES), asymmetric encryption (RSA), digital signing, and general data encoding. This service is designed to be a reliable backend utility for applications requiring secure data handling, integrity checks, and identity management.

🚀 Key Features

Hashing: Generate and verify hashes using various algorithms (e.g., SHA-256, MD5). Supports both string and file hashing.

HMAC (Message Authentication Code): Generate and verify HMACs for authenticated data integrity.

AES Symmetric Encryption: Generate keys and perform high-speed encryption/decryption for both string data and files.

RSA Asymmetric Cryptography: Generate public/private key pairs, perform digital signing/verification, and handle public key encryption/decryption.

Data Encoding: Utilities for basic data transformation (e.g., Base64, Hex).

Identicon Generation: Generate unique, visual representations (Identicons) from input seed data.

🗺️ API Structure and Routing

The API is logically organized into modules based on the cryptographic function. All routes are prefixed with the base API URL (e.g., https://api.yourdomain.com).

Main Route

Functionality

/hash

One-way hashing, hash comparison, and file integrity checks.

/hmac

HMAC generation and verification using secret keys.

/aes

Symmetric encryption (key generation, data/file encrypt/decrypt).

/rsa

Asymmetric cryptography (key generation, signing, encryption).

/other

General encoding and decoding utilities.

/identicon

Generates unique visual identifiers (Identicons).

⚡ Quick Reference: Core Endpoints

Here is a quick overview of the most commonly used endpoints. For detailed input schemas and response bodies, please refer to the dedicated API documentation file (api_documentation.md).

Module

Method

Path

Action

Hash

POST

/hash/hash-data

Generates a hash for a given string.

Hash

POST

/hash/file/hash-data

Generates a hash for an uploaded file.

HMAC

POST

/hmac/generate-hmac

Creates an HMAC with a secret key.

AES

POST

/aes/encrypt

Encrypts string data.

AES

POST

/aes/encrypt-file

Encrypts an uploaded file.

RSA

POST

/rsa/generate-key

Generates a new RSA key pair.

RSA

POST

/rsa/sign

Creates a digital signature for data.

Identicon

POST

/identicon/generate

Creates a visual hash avatar.

🤝 Contribution and Contact

For issues, feature requests, or technical support, please contact the development team.

License: [MIT/Apache 2.0/Proprietary]