import { createContext, useEffect, useState } from 'react';

// Create the context
export const ItemImg = createContext();

// Create the context
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [Items, setItems] = useState(() => {
    // Lazy initializer to load from localStorage only once
    const storedCart = window.localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : { items: [] };
  });

  // Save items to localStorage whenever the `Items` state changes
  useEffect(() => {
    if (Items && Items.items.length > 0) {
      window.localStorage.setItem("cartItems", JSON.stringify(Items));
    }
  }, [Items]);

  return (
    <CartContext.Provider value={{ Items, setItems }}>
      {children}
    </CartContext.Provider>
  );
};
