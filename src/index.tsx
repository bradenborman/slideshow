import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import SlideshowApp from './components/slideshowapp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <SlideshowApp />
  </React.StrictMode>
);