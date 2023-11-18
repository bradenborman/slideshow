import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './slideshowapp.scss';
import Slideshow from '../slideshow/slideshow';

const SlideshowApp: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Slideshow} />
      </Routes>
    </Router>
  );
};

export default SlideshowApp;
