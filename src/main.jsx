// main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import './ecommerce/ecommerce.css';
import HOME from './ecommerce/HOME';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <HOME />
  </React.StrictMode>
);
