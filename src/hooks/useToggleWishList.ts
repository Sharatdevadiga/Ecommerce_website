import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { toast } from "react-toastify";
import Product from "../types/product";
import {
  addItemToWishlist,
  removeItemFromWishlist,
} from "../features/wishList/wishListSlice";
import { useEffect, useState } from "react";

function useToggleWishList({ product }: { product: Product }) {
  const [inWishList, setInWishList] = useState(false);
  const user = useAppSelector((state) => state.auth);
  const wishListItems = useAppSelector((state) => state.wishList.items);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    for (const item of wishListItems) {
      if (item.id === product.id) {
        setInWishList(true);
        return;
      }
    }
  }, []);

  function handleAddToWishlist() {
    if (!user.isLoggedIn) {
      toast.error("You need to be logged in to add items to wishlist");
      navigate("/login");
      return;
    } else {
      dispatch(addItemToWishlist(product));
      setInWishList(true);
    }
  }

  function handleRemoveFromWishlist() {
    if (!user.isLoggedIn) {
      toast.error("You need to be logged in to remove items from wishlist");
      navigate("/login");
      return;
    } else {
      dispatch(removeItemFromWishlist(product.id));
      setInWishList(false);
    }
  }

  return { handleAddToWishlist, inWishList, handleRemoveFromWishlist };
}

export default useToggleWishList;
