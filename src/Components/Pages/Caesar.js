import React, { useState } from 'react'
import './Caesar.css'

const Caesar = () => {

const [inputText, setInputText] = useState('');
const [outputText, setOutputText] = useState('');
const [key, setKey] = useState('');

const handleEncrypt = () => {
    const encryptedText = caesarEnkripsi(inputText.toLowerCase(), parseInt(key, 26));
    setOutputText(encryptedText);
}

const handleDecrypt = () => {
    const decryptedText = caesarDekripsi(inputText.toLowerCase(), parseInt(key, 26));
    setOutputText(decryptedText);
}

var caesarEnkripsi = function (plaintext, kunci) {
    let ciphertext = "";
    let abc = /[a-z]/;
    for(let i=0; i<plaintext.length; i++){
        if(abc.test(plaintext.charAt(i))) ciphertext += String.fromCharCode((plaintext.charCodeAt(i) - 97 + kunci)%26 + 97);
        else ciphertext += plaintext.charAt(i);
    }
    return ciphertext;
}

var caesarDekripsi = function (ciphertext, kunci) {
    let plaintext = ""; 
    let abc = /[a-z]/;
    for(let i=0; i<ciphertext.length; i++){
        if(abc.test(ciphertext.charAt(i))) plaintext += String.fromCharCode((ciphertext.charCodeAt(i) - 97 + 26 - kunci)%26 +97);
        else plaintext += ciphertext.charAt(i);
    }
    return plaintext;
}

    return (
        <div>
        <div>
            <form>
                <label>
                    Input Text:
                    <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
                </label>
                <label>
                    Key:
                    <input type="number" value={key} onChange={(e) => setKey(e.target.value)} />
                </label>
                <button type="button" onClick={handleEncrypt}>Encrypt</button>
                <button type="button" onClick={handleDecrypt}>Decrypt</button>
            </form>
        </div>
        <div>
            <label>
                Output Text:
                <textarea value={outputText} readOnly />
            </label>
        </div>
    </div> 
    )
}

export default Caesar