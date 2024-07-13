import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  cart: {},
  setCart: () => {},
  addProductToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [dislpayQuantity, setDislpayQuantity] = useState();

  const addProductToCart = (product) => {
    setCart([...cart, product]);
  };

  const deleteFromCart = (productId) => {
    setCart((prevState) => prevState.filter((item) => item.id !== productId));
  };

  const decreaseCartProducts = (productId) => {
    setCart((prevState) => 
      prevState.map((item) =>
        item.id === productId && item.qty > 1
          ? {...item, qty: item.qty - 1}
          : item
      ).filter((item) => item.id !== productId || item.qty > 0)
    );
  }

  useEffect(() => {
    setDislpayQuantity(cart.length > 0)
  }, [cart])

  return (
    <CartContext.Provider value={{ cart, addProductToCart, deleteFromCart, decreaseCartProducts, dislpayQuantity }}>
      {children}
    </CartContext.Provider>
  )
}