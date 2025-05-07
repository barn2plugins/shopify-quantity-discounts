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
  const productForm = document.querySelector('product-form.product-form');
  if (productForm) {
    const formElement = productForm.querySelector('form');
    if (formElement) {
      const appContainer = document.createElement('div');
      appContainer.id = 'barn2_discounts';
      appContainer.classList.add('barn2_discounts');
      formElement.parentNode.insertBefore(appContainer, formElement);
      initializeApp(appContainer);
    }
  }
}