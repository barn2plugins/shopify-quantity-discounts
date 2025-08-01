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
  const productFormComponent = document.querySelector('product-form-component');
  const productForm = document.querySelector('form[action="/cart/add"]');
  if (productFormComponent) {
    const appContainer = document.createElement('div');
    appContainer.id = 'barn2_discounts';
    appContainer.classList.add('barn2_discounts');
    productFormComponent.insertBefore(appContainer, productFormComponent.firstChild);
    initializeApp(appContainer);
  } else if(productForm) {
    const appContainer = document.createElement('div');
    appContainer.id = 'barn2_discounts';
    appContainer.classList.add('barn2_discounts');
    productForm.parentNode.insertBefore(appContainer, productForm);
    initializeApp(appContainer);
  }
}