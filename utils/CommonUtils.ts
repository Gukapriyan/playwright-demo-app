import cryptoJs from 'crypto-js';

export default class CommonUtils {

    private secretKey?: string;

    constructor() {

        // Accept both correct name and a commonly mistyped variant for compatibility
        const envSecret = process.env.SECRET_KEY || process.env.SECRECT_KEY;
        this.secretKey = envSecret;
    }

    public encryptData(data: string) {
        if (!this.secretKey) {
            throw new Error("SECRET_KEY environment variable is required to encrypt data.");
        }

        const encryptData = cryptoJs.AES.encrypt(
            data,this.secretKey.toString()
        );

        console.log("Encrypted data: " + encryptData);

        return encryptData.toString();
    }


    public decryptData(encryptedData: string) {
        if (!encryptedData.startsWith('U2FsdGVkX1')) {
            return encryptedData;
        }

        if (!this.secretKey) {
            throw new Error("SECRET_KEY environment variable is required to decrypt encrypted data.");
        }

        const bytes = cryptoJs.AES.decrypt(encryptedData, this.secretKey.toString());
        const decryptedData = bytes.toString(cryptoJs.enc.Utf8);    

        if (!decryptedData) {
            throw new Error("Unable to decrypt data. Check that SECRET_KEY matches the encrypted value.");
        }

        return decryptedData;
}
}
