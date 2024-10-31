import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cart, { CartItem } from "../../types/cart";

// empty cart for local storage
const emptyCart = {
  userId: "",
  items: [],
  total: 0,
};

// function to get cart from local storage
function getFromLocalStorage(): Cart {
  const cart = localStorage.getItem("ecommerceCart");
  if (cart) {
    return JSON.parse(cart);
  }
  return emptyCart;
}

// function to save cart to local storage
function saveToLocalStorage(cart: Cart) {
  localStorage.setItem("ecommerceCart", JSON.stringify(cart));
}

// initial state for cart slice
const initialState: Cart = getFromLocalStorage();

// Cart slice for managing cart state
const cartSlice = createSlice({
  name: "cart",
  initialState,

  // cart updating functions
  reducers: {
    addItemToCart(state, action: PayloadAction<CartItem>) {
      const { quantity, product } = action.payload;
      const existingItem = state.items.find(
        (item) => item.product.id === product.id,
      );
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ product, quantity });
      }
      state.total += parseFloat(product.price) * quantity;
      saveToLocalStorage(state);
    },

    removeItemFromCart(state, action: PayloadAction<number>) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.product.id !== id);
      state.total = state.items.reduce(
        (acc, item) => acc + item.quantity * parseFloat(item.product.price),
        0,
      );
      saveToLocalStorage(state);
    },

    updateItemQuantity(
      state,
      action: PayloadAction<{ id: number; quantity: number }>,
    ) {
      const { id, quantity } = action.payload;
      console.log(quantity, id);
      const item = state.items.find((item) => item.product.id === id);
      if (item) {
        state.total +=
          parseFloat(item.product.price) * (quantity - item.quantity);
        item.quantity = quantity;
      }
      saveToLocalStorage(state);
    },

    incrementItemInCart(state, action: PayloadAction<number>) {
      const id = action.payload;
      const item = state.items.find((item) => item.product.id === id);
      if (item) {
        item.quantity += 1;
        state.total += parseFloat(item.product.price);
      }
      saveToLocalStorage(state);
    },

    decrementItemInCart(state, action: PayloadAction<number>) {
      const id = action.payload;
      const item = state.items.find((item) => item.product.id === id);
      if (item && item.quantity > 0) {
        item.quantity -= 1;
        state.total -= parseFloat(item.product.price);
        if (item.quantity <= 0) {
          state.items = state.items.filter((item) => item.product.id !== id);
        }
      }
      saveToLocalStorage(state);
    },

    clearCart(state) {
      state.items = [];
      state.total = 0;
      saveToLocalStorage(state);
    },

    setCartUserId(state, action: PayloadAction<string>) {
      state.userId = action.payload;
      saveToLocalStorage(state);
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity,
  incrementItemInCart,
  decrementItemInCart,
  clearCart,
  setCartUserId,
} = cartSlice.actions;
export default cartSlice.reducer;
