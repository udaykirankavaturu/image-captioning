import React, { useState } from 'react';
import axios from 'axios';
import FormData from 'form-data';

const API_URL = "https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-large";
const API_KEY = "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";

function ImageCaptioningApp() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [caption, setCaption] = useState('');

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            console.log(formData.get('file'))
            console.log(selectedFile)
            const response = await axios.post(API_URL, selectedFile, {
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${API_KEY}`,
                    'Content-Type': selectedFile.type
                },
            });
            console.log({ response })
            setCaption(response.data[0]['generated_text']);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div>
            <h1>Image Captioning App</h1>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload and Get Caption</button>
            {caption && <p>Caption: {caption}</p>}
        </div>
    );
}

export default ImageCaptioningApp;