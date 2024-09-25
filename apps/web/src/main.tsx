import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const eleApp = document.getElementById('app');
const root = createRoot(eleApp!);
root.render(
  <>
    <App />
  </>
);
