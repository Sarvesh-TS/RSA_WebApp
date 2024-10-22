**RSA Encryption App (2048-bit)**

This web application allows users to generate RSA key pairs (public/private), encrypt plaintext messages using the public key, and decrypt ciphertext using the private key. It uses 2048-bit RSA encryption for secure communication. Additionally, it offers a theme toggle for switching between light and dark modes.


**Features**

-> RSA Key Generation: Generate 2048-bit RSA key pairs (public and private) directly in the browser.

-> Encryption: Encrypt plaintext messages using the public key with the RSA-OAEP padding scheme.

-> Decryption: Decrypt RSA-encrypted ciphertext using the private key.	

-> Theme Toggle: Switch between light and dark mode for enhanced user experience.	

-> Key Formats: Display generated public keys in both X.509 and PKCS#8 formats.	


 
**How It Works**

Generate RSA Keys: Click on the "Generate Random Keys" button to generate a public/private key pair.

Encrypt a Message: Enter the plaintext message in the provided input, and click "Encrypt" to generate the ciphertext.

Decrypt a Message: Input the encrypted message and the private key, then click "Decrypt" to retrieve the original plaintext.

Theme Toggle: Switch between light and dark themes using the toggle button at the top of the page.


**Technology Stack**
-> Frontend: HTML, CSS, JavaScript
-> Crypto Library: Uses Forge.js for key generation and encryption/decryption.

