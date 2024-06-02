"use client";
import { createSlice } from "@reduxjs/toolkit";

const isBrowser = () => typeof window !== "undefined";

// Obtén los productos guardados en el localStorage al cargar la página
const getCartItemsFromLocalStorage = () => {
  if (!isBrowser()) return [];
  const cartItems = localStorage.getItem("cartItems");
  return cartItems ? JSON.parse(cartItems) : [];
};

const saveCartItemsToLocalStorage = (cartItems) => {
  if (!isBrowser()) return;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: isBrowser() ? getCartItemsFromLocalStorage() : [],
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;

      if (newItem) {
        const existingItem = state.cartItems.find(
          (item) => item.product === newItem.product
        );

        if (existingItem) {
          existingItem.qty = newItem.qty;
        } else {
          state.cartItems.push(newItem);
        }

        saveCartItemsToLocalStorage(state.cartItems);
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      const updatedCartItems = state.cartItems.filter(
        (item) => item.product !== productId
      );
      saveCartItemsToLocalStorage(updatedCartItems);
      state.cartItems = updatedCartItems;
    },
    clearCart: (state) => {
      state.cartItems = [];
      saveCartItemsToLocalStorage(state.cartItems);
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
