import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './slideshowapp.scss';

const SlideshowApp: FC = () => {
  return (
    <Router>
      <div className="slideshow-app">
        <header className="header">          
        </header>
      </div>
    </Router>
  );
};

export default SlideshowApp;
