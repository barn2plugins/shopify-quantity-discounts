import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('barn2_discounts');
if (container) {
  const root = createRoot(container);
  root.render(<App/>);
}