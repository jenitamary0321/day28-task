import React, { useContext } from 'react';
import { CartContext } from 'CartContext';

const Cart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, getTotalQuantity, getTotalAmount } = useContext(CartContext);

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>Price: ${item.price}</span>
            <span>
              Quantity: 
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              {item.quantity}
              <button onClick={() => increaseQuantity(item.id)}>+</button>
            </span>
          </li>
        ))}
      </ul>
      <div>
        <h2>Total Quantity: {getTotalQuantity()}</h2>
        <h2>Total Amount: ${getTotalAmount()}</h2>
      </div>
    </div>
  );
};

export default Cart;
