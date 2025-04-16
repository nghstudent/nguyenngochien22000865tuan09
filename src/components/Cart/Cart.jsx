import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, updateQuantity } from './cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleAddItem = () => {
    const newItem = { id: Date.now(), name: "New Product", price: 100 };
    dispatch(addItem(newItem));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <button onClick={handleAddItem}>Add Random Product</button>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <span>{item.name} - ${item.price}</span>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleUpdateQuantity(item.id, +e.target.value)}
              min="1"
            />
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <h3>Total Quantity: {getTotalQuantity()}</h3>
        <h3>Total Price: ${getTotalPrice()}</h3>
      </div>
    </div>
  );
};

export default Cart;
