import React from 'react';
import ReactDOM from 'react-dom/client';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import 'swiper/css/effect-cube';
import 'swiper/css/autoplay';
import './styles/normalize.scss';
import './styles/vars.scss';
import './styles/index.scss';
import './styles/app.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
