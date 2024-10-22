function showSection(sectionId) {
    document.getElementById('home').classList.add('hidden');
    document.getElementById('encrypt').classList.add('hidden');
    document.getElementById('decrypt').classList.add('hidden');
    document.getElementById(sectionId).classList.remove('hidden');
}

function generateKeys() {
    const keypair = forge.pki.rsa.generateKeyPair({ bits: 2048, e: 0x10001 });
    const publicKeyX509 = forge.pki.publicKeyToPem(keypair.publicKey);
    const publicKeyPKCS8 = forge.pki.publicKeyToPem(keypair.publicKey, 72);
    const privateKey = forge.pki.privateKeyToPem(keypair.privateKey);

    document.getElementById('publicKeyX509').value = publicKeyX509;
    document.getElementById('publicKeyPKCS8').value = publicKeyPKCS8;
    document.getElementById('decryptPublicKey').value = publicKeyX509;
    document.getElementById('privateKey').value = privateKey;
}

function encryptText() {
    const publicKey = forge.pki.publicKeyFromPem(document.getElementById('publicKeyX509').value);
    const plaintext = document.getElementById('plaintext').value;
    const encrypted = publicKey.encrypt(forge.util.encodeUtf8(plaintext), 'RSA-OAEP');
    document.getElementById('ciphertext').value = forge.util.encode64(encrypted);
}

function decryptText() {
    try {
        const privateKey = forge.pki.privateKeyFromPem(document.getElementById('privateKey').value);
        const encrypted = forge.util.decode64(document.getElementById('encryptedText').value);
        const decrypted = privateKey.decrypt(encrypted, 'RSA-OAEP');
        document.getElementById('decryptedText').value = forge.util.decodeUtf8(decrypted);
    } catch (error) {
        alert('Decryption failed. Please check your keys and ciphertext.');
    }
}

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

themeToggle.addEventListener('click', () => {
    if (root.style.getPropertyValue('--bg-color') === '#000000') {
        // Switch to light theme
        root.style.setProperty('--bg-color', '#ffffff');
        root.style.setProperty('--text-color', '#000000');
        root.style.setProperty('--button-bg', '#000000');
        root.style.setProperty('--button-text', '#ffffff');
        root.style.setProperty('--accent-color', '#333333');
    } else {
        // Switch to dark theme
        root.style.setProperty('--bg-color', '#000000');
        root.style.setProperty('--text-color', '#ffffff');
        root.style.setProperty('--button-bg', '#ffffff');
        root.style.setProperty('--button-text', '#000000');
        root.style.setProperty('--accent-color', '#cccccc');
    }
});