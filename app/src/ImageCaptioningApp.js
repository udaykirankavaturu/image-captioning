import React, { useState } from 'react';
import axios from 'axios';
import './ImageCaptioningApp.css'

const API_URL = process.env.REACT_APP_API_URL
const API_KEY = process.env.REACT_APP_API_KEY

console.log(API_URL)
console.log(API_KEY)

function ImageCaptioningApp() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [caption, setCaption] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            return;
        }

        try {
            setIsLoading(true);

            const response = await axios.post(API_URL, selectedFile, {
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${API_KEY}`,
                    'Content-Type': selectedFile.type
                },
            });
            setCaption(response.data[0]['generated_text']);
        } catch (error) {
            console.error('Error uploading file:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <h1>Upload Image</h1>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button onClick={handleUpload}>Get Explanation</button>
            <div className='explanation-container'>
                {isLoading
                    ? (<div className="loader" />)
                    : caption && <p>Explanation: {caption}</p>
                }
            </div>
        </div>
    );
}

export default ImageCaptioningApp;