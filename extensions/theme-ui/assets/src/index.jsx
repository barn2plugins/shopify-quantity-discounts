import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const initializeApp = (container) => {
  const root = createRoot(container);
  root.render(<App/>);
}

// First check for the block element
const barn2Block = document.getElementById('barn2_discounts_block');
if (barn2Block) {
  initializeApp(barn2Block);
} else {
  // If block not found, look for quantity input
  const quantityInput = document.querySelector('product-form.product-form');
  if (quantityInput) {
    const appContainer = document.createElement('div');
    appContainer.id = 'barn2_discounts';
    appContainer.classList.add('barn2_discounts');
    quantityInput.parentNode.insertBefore(appContainer, quantityInput.nextSibling);
    initializeApp(appContainer);
  }
}