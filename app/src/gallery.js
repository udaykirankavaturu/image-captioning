import React, { useState } from 'react';
import axios from 'axios';
import './gallery.css';

const API_URL = process.env.REACT_APP_API_URL
const API_KEY = process.env.REACT_APP_API_KEY
const API_TIMEOUT = parseInt(process.env.REACT_APP_API_TIMEOUT, 10) || 20000; // Default timeout of 10 seconds

const Gallery = () => {

    const [responseText, setResponseText] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    const handleImageClick = async (imagePath) => {
        try {
            const controller = new AbortController();
            const signal = controller.signal;

            const imageBlob = await fetch(`./images/${imagePath}`).then((response) => response.blob());


            const timeoutId = setTimeout(() => {
                controller.abort();
                setResponseText(<div>Request timed out. Please try again later.</div>);
            }, API_TIMEOUT);

            setIsLoading(true);

            const response = await axios.post(API_URL, imageBlob, {
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${API_KEY}`,
                    'Content-Type': imageBlob.type
                },
            }, signal);

            clearTimeout(timeoutId);
            setResponseText(response.data[0]['generated_text']);
        } catch (error) {
            console.error('Error uploading image:', error);
        } finally {
            setIsLoading(false);
        }
    };


    const imagePaths = [
        'image1.jpeg',
        'image2.jpeg',
        'image3.jpeg',
        'image4.jpeg',
        'image5.jpeg',
        'image6.jpeg',
        'image7.jpeg',
        'image8.jpeg',
        'image9.jpeg',
        'image10.jpeg',
    ];

    return (
        <div className="gallery">
            <h1>Image Gallery</h1>
            <h4>Click on any image to get explanation </h4>

            <div>
                {isLoading
                    ? (<div className="loader" />)
                    : responseText && <p>Explanation: {responseText}</p>
                }
            </div>

            <div className="image-gallery">
                {imagePaths.map((imagePath, index) => (
                    <img
                        key={index}
                        src={`./images/${imagePath}`}
                        alt={`${index + 1}`}
                        className="gallery-image"
                        onClick={() => handleImageClick(imagePath)}
                    />
                ))}
            </div>


        </div>
    );
};

export default Gallery;
