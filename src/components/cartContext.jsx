import React, { createContext, useContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}



export const CartProvider = ({ children }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  
  const [cartItems, setCartItems] = useState(() => {
    // Intenta obtener el estado inicial de cartItems desde localStorage o, si no hay, inicia con un arreglo vacío
    const localData = localStorage.getItem('cartItems');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    // Guarda cartItems en localStorage cada vez que cambie
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);

    if (existingProduct) {
      setCartItems(prevCart => {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      });
    } else {
      setCartItems(prevCart => [...prevCart, { ...product, cantidad: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const decreaseQuantity = (productId) => {
    setCartItems(prevCart =>
      prevCart.map(item =>
        item.id === productId && item.cantidad > 0
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, totalPrice, setTotalPrice, addToCart, removeFromCart, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};


export default CartContext;