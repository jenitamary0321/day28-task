import React from 'react';
import { CartProvider } from './components/CartContext';
import Cart from './components/Cart';

const App = () => {
  return (
    <CartProvider>
      <Cart />
    </CartProvider>
  );
};

export default App;
