"use client";

import React, { createContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem(process.env.CART_STORAGE_KEY);
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(process.env.CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    // Check if the item is already in the cart
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    // The code above return -1 if the item is not in the cart but if it is it returns the index

    if (existingItemIndex !== -1) {
      // If the item is in the cart, update its quantity
      setCart((prevCart) =>
        prevCart.map((cartItem, index) =>
          index === existingItemIndex
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      // If the item is not in the cart, add it with quantity 1
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    }
  };

  const reduceQuantity = (itemId) => {
    // Check if the item is already in the cart
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === itemId
    );

    // The code above return -1 if the item is not in the cart but if it is it returns the index

    if (existingItemIndex !== -1) {
      // If the item is in the cart, reduce the number its quantity up to 1
      setCart((prevCart) =>
        prevCart.map((cartItem, index) =>
          index === existingItemIndex && cartItem.quantity > 1
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
