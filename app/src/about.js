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
                <a href='https://huggingface.co/Salesforce/blip-image-captioning-large' target="_blank" rel="noopener noreferrer">Link to the model</a>
                <br />
                <br />

                <b>Code Repository: </b><br />
                <a href='https://github.com/udaykirankavaturu/lstm-stock-price-predictor' target="_blank" rel="noopener noreferrer">Link</a>

                <br />
                <br />
                <b>Detailed explanation: </b><br />
                <a href='https://udaykiran.tech/predicting-stock-prices-through-deep-learning' target="_blank" rel="noopener noreferrer">Predicting Stock Prices Through Deep Learning.</a>

                <br />
                <br />
                <b>How to use: </b><br />
                Select any exchange from the dropdown. Type a stock symbol like INFY or SBIN and press enter.
                <br />
                <br />
                <b>Note:</b><br /> Results could take a minute initially as the cloud function needs to wake up.
                <br />
                <br />
                <b>Disclaimer: </b><br />
                This is a mathematical experiment and should not be used as an investment/trading tool.


            </p>
        </div>
    );
};

export default About;