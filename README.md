Here is a **README.md** file for the RSA Encryption App project:  

```markdown
# RSA Encryption App (2048-bit)

An RSA encryption and decryption app built entirely using **HTML**, **CSS**, and **JavaScript**, with a focus on providing secure cryptographic functionalities and an intuitive interface.

## Features

- **Encryption and Decryption**:  
  - Generate random 2048-bit RSA keys.
  - Encrypt text using the RSA public key (X.509 format).
  - Decrypt encrypted text using the RSA private key.

- **Key Display**:  
  - View the public key in both X.509 and PKCS8 formats.

- **Interactive Interface**:  
  - Toggle between sections for encryption and decryption.
  - Smooth animations for transitions.

- **Light/Dark Theme Toggle**:  
  - Easily switch between light and dark themes for better usability.

## Technologies Used

- **HTML**: Structure of the web page.
- **CSS**: Styling and responsive design.
- **JavaScript**: 
  - Key generation, encryption, and decryption using [Forge.js](https://github.com/digitalbazaar/forge).
  - Theme toggle functionality.

## Setup and Usage

1. Clone the repository:  
   ```bash
   git clone https://github.com/Sarvesh-TS/RSA-WebApp.git
   ```
2. Navigate to the project folder:
   ```bash
   cd rsa-encryption-app
   ```

3. Open `index.html` in your browser.

4. Explore the app:
   - Generate RSA keys by clicking **Generate Random Keys**.
   - Encrypt plaintext using the public key.
   - Decrypt ciphertext using the private key.

## Project Structure

```
rsa-encryption-app/
├── index.html         # Main HTML file
├── styles.css         # CSS styles
└── script.js          # JavaScript functionality
```

## Screenshots

### Home Page
- A clean interface to select between **Encryption** and **Decryption** functionalities.
  ![image](https://github.com/user-attachments/assets/f6d80d54-5bb8-48ff-a4b6-2e070346a0d9)
  ![image](https://github.com/user-attachments/assets/0fa11586-661b-49a0-80c6-ee937b5ffcd9)



### Encryption Page
- Generate random RSA keys.
- Encrypt plaintext securely.
  ![image](https://github.com/user-attachments/assets/96f83b8d-191c-4708-a571-4749d614ed82)


### Decryption Page
- Input public and private keys for secure decryption.
  ![image](https://github.com/user-attachments/assets/7c3b8984-171b-4ce1-8ace-1760ae969d45)


## Key Functionalities

### Generate Keys
```javascript
const keypair = forge.pki.rsa.generateKeyPair({ bits: 2048, e: 0x10001 });
const publicKeyX509 = forge.pki.publicKeyToPem(keypair.publicKey);
const privateKey = forge.pki.privateKeyToPem(keypair.privateKey);
```

### Encrypt Text
```javascript
const encrypted = publicKey.encrypt(forge.util.encodeUtf8(plaintext), 'RSA-OAEP');
```

### Decrypt Text
```javascript
const decrypted = privateKey.decrypt(encrypted, 'RSA-OAEP');
```

## Light/Dark Theme Toggle
The app supports theme toggling with the following logic:
```javascript
if (root.style.getPropertyValue('--bg-color') === '#000000') {
    // Switch to light theme
    root.style.setProperty('--bg-color', '#ffffff');
} else {
    // Switch to dark theme
    root.style.setProperty('--bg-color', '#000000');
}
```



