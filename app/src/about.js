import React from 'react';
import './about.css';

const About = () => {
    return (
        <div className='about'>
            <h1>About</h1>
            <p>
                This app takes an image as input and explains the contents of the image in text. This is a simple image-to-text app.
                <br />
                <br />
                <b>Tech Stack: </b><br />
                Front end: React JS, HTML, CSS<br />
                <br />
                <br />
                <b>Deployment: </b><br />
                Front end: Google Cloud App Engine<br />
                <br />
                <br />
                <b>Machine Learning Model: </b><br />
                The is Salesforce/blip-image-captioning-large available on HuggingFace. The app consumes this model using the Hosted Inference API authenticated with a user token.
                <br />
                <br />
                <a href='https://huggingface.co/Salesforce/blip-image-captioning-large' target="_blank" rel="noopener noreferrer">Link to the model page</a>
                <br />
                <br />
                <b>Code Repository: </b><br />
                <a href='https://github.com/udaykirankavaturu/image-captioning' target="_blank" rel="noopener noreferrer">Link</a>
                <br />
                <br />
                <b>How to use: </b><br />
                Click on any image in the gallery to see the explanation. Or upload your own image and get an explanation from the model.
                <br />
                <br />
            </p>
        </div>
    );
};

export default About;