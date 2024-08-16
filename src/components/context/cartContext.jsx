import React, { createContext } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage"

export const CartContext = createContext({
  cartItems: {},
  setCartItems: () => {},
  addProductToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage(
    "shopping-cart",
    []
  );

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  function getItemQuantity(id) {
    return cartItems.find(item => item.id === id)?.quantity || 0;
  };

  function increaseCartQuantity(id) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, {id, quantity: 1}]
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return {...item, quantity: item.quantity + 1}
          } else {
            return item
          }
        })
      }
    })
  };

  function decreaseCartQuantity(id) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id)
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return {...item, quantity: item.quantity - 1}
          } else {
            return item
          }
        })
      }
    })
  };
  
  function setCustomQuantity(id, newQuantity) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) && newQuantity === 0) {
        return currItems.filter(item => item.id !== id)
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return {... item, quantity: newQuantity}
          } else {
            return item
          }
        })
      }
    })
  };


  function removeFromCart(id) {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  };

  return (
    <CartContext.Provider 
      value={{ 
        cartItems,
        cartQuantity,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        setCustomQuantity
      }}>
      {children}
    </CartContext.Provider>
  )
}