import React from 'react';
import ReactDOM from 'react-dom';
import ImageCaptioningApp from './ImageCaptioningApp';
import './index.css';
import About from './about';
import Navbar from './navbar';

ReactDOM.render(
  <React.StrictMode>
    <div className='container'>
      <Navbar />
      <About />
      <ImageCaptioningApp />
    </div>

  </React.StrictMode>,
  document.getElementById('root')
);
