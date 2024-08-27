import React, { createContext, FC } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage"

interface CartContextType {
  cartItems: [];
  getCartQuantity: () => number;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  setCustomQuantity: (id: number, newQuantity: number) => void;
  removeFromCart: (id: number) => void;
}

export const CartContext = createContext<CartContextType | undefined> (undefined);

export const CartProvider: FC<{children: React.ReactNode}> = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage(
    "shopping-cart",
    []
  );

  function getCartQuantity(): number {
    const cartQuantity = cartItems.reduce(
      (quantity: number, item: React.ComponentState) => item.quantity + quantity,
      0
    );
    return cartQuantity
  };

  function getItemQuantity(id: number) {
    return cartItems.find((item: { id: number; }) => item.id === id)?.quantity || 0;
  };

  function increaseCartQuantity(id: number) {
    setCartItems((currItems: any[]) => {
      if (currItems.find((item: { id: number; }) => item.id === id) == null) {
        return [...currItems, {id, quantity: 1}]
      } else {
        return currItems.map((item: { id: number; quantity: number; }) => {
          if (item.id === id) {
            return {...item, quantity: item.quantity + 1}
          } else {
            return item
          }
        })
      }
    })
  };

  function decreaseCartQuantity(id: number) {
    setCartItems((currItems: any[]) => {
      if (currItems.find((item: { id: number; }) => item.id === id)?.quantity === 1) {
        return currItems.filter((item: { id: number; }) => item.id !== id)
      } else {
        return currItems.map((item: { id: number; quantity: number; }) => {
          if (item.id === id) {
            return {...item, quantity: item.quantity - 1}
          } else {
            return item
          }
        })
      }
    })
  };
  
  function setCustomQuantity(id: number, newQuantity: number) {
    setCartItems((currItems: any[]) => {
      if (currItems.find((item: { id: number; }) => item.id === id) && newQuantity === 0) {
        return currItems.filter((item: { id: number; }) => item.id !== id)
      } else {
        return currItems.map((item: { id: number; }) => {
          if (item.id === id) {
            return {...item, quantity: newQuantity}
          } else { 
            return item
          }
        })
      }
    })
  };

  function removeFromCart(id: number) {
    setCartItems((currItems: any[]) => {
      return currItems.filter((item: { id: number; }) => item.id !== id)
    })
  };

  return (
    <CartContext.Provider 
      value={{ 
        cartItems,
        getCartQuantity,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        setCustomQuantity,
        removeFromCart,
      }}>
      {children}
    </CartContext.Provider>
  );
}