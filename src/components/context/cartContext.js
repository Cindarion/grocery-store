import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [dislpayQuantity, setDislpayQuantity] = useState();

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  useEffect(() => {
    setDislpayQuantity(cart.length > 0)
  }, [cart])

  return (
    <CartContext.Provider value={{ cart, addToCart, dislpayQuantity }}>
      {children}
    </CartContext.Provider>
  )
}