// Erstelle einen Code, der eine Verschlüsselung
// mit SALT enthält und erkläre den Code
import crypto from 'crypto';

class Verschluesselung {
    private key: Buffer;
    private iv: Buffer;
    private salt: string;

    constructor(password: string, salt: string) {
        this.salt = salt;
        // Derive a 32-byte key from the password and salt
        this.key = crypto.pbkdf2Sync(password, this.salt, 100000, 32, 'sha512');
        // Generate a new 16-byte IV for each encryption
        this.iv = crypto.randomBytes(16);
    }

    encrypt(data: string): string {
        const cipher = crypto.createCipheriv('aes-256-cbc', this.key, this.iv);
        let encrypted = cipher.update(data, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return this.iv.toString('hex') + ':' + encrypted; // Prepend IV to the ciphertext
    }

    decrypt(data: string): string {
        let parts = data.split(':');
        // @ts-ignore
        this.iv = Buffer.from(parts.shift(), 'hex'); // Extract IV from the ciphertext
        const decipher = crypto.createDecipheriv('aes-256-cbc', this.key, this.iv);
        let decrypted = decipher.update(parts.join(':'), 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }
}

export {Verschluesselung}