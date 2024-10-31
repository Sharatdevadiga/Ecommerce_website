import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Product from "../../types/product";

interface WishList {
  userId: string;
  items: Product[];
}

// Empty wishlist for local storage
const emptyWishlist: WishList = {
  userId: "",
  items: [],
};

// Function to get wishlist from local storage
function getFromLocalStorage(): WishList {
  const wishlist = localStorage.getItem("ecommerceWishlist");
  if (wishlist) {
    return JSON.parse(wishlist);
  }
  return emptyWishlist;
}

// Function to save wishlist to local storage
function saveToLocalStorage(wishlist: WishList) {
  localStorage.setItem("ecommerceWishlist", JSON.stringify(wishlist));
}

// Initial state for wishlist slice
const initialState: WishList = getFromLocalStorage();

// Wishlist slice for managing wishlist state
const wishListSlice = createSlice({
  name: "wishlist",
  initialState,

  // Wishlist updating functions
  reducers: {
    addItemToWishlist(state, action: PayloadAction<Product>) {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);
      if (!existingItem) {
        state.items.push(product);
        saveToLocalStorage(state);
      }
    },

    removeItemFromWishlist(state, action: PayloadAction<number>) {
      const id = action.payload;
      state.items = state.items.filter((product) => product.id !== id);
      saveToLocalStorage(state);
    },

    clearWishlist(state) {
      state.items = [];
      saveToLocalStorage(state);
    },

    setWishlistUserId(state, action: PayloadAction<string>) {
      state.userId = action.payload;
      saveToLocalStorage(state);
    },
  },
});

export const {
  addItemToWishlist,
  removeItemFromWishlist,
  clearWishlist,
  setWishlistUserId,
} = wishListSlice.actions;
export default wishListSlice.reducer;
