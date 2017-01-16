/**
 * Created by prism on 1/11/17.
 */

export default class Crypt {
    static encrypt(text, key, iv) {
        var cipher = forge.cipher.createCipher('AES-CBC', key);
        cipher.start({iv: iv});
        cipher.update(forge.util.createBuffer(text));
        cipher.finish();
        var encrypted = cipher.output;
        return encrypted.toHex();
    }

    static decrypt(encryptedHex, key, iv) {
        try {
            var decipher = forge.cipher.createDecipher('AES-CBC', key);
        } catch (e) {
            sweetAlert("Error", "Secret key is not valid!", "error");
        }
        decipher.start({iv: forge.util.hexToBytes(iv)});
        decipher.update(forge.util.hexToBytes(encryptedHex));
        decipher.finish();
        return decipher.output.data;
    }
}