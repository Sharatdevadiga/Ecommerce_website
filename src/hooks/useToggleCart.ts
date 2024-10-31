import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { toast } from "react-toastify";
import { CartItem } from "../types/cart";
import { addItemToCart, removeItemFromCart } from "../features/cart/cartSlice";
import Product from "../types/product";
import { useEffect, useState } from "react";

function useToogleCart({ product }: { product: Product }) {
  const [inCart, setinCart] = useState(false);
  const CartItems = useAppSelector((state) => state.cart.items);
  const user = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    for (const item of CartItems) {
      if (item.product.id === product.id) {
        setinCart(true);
      }
    }
  }, []);

  function handleAddToCart() {
    if (!user.isLoggedIn) {
      toast.error("You need to be logged in to add items to Bag");
      navigate("/login");
      return;
    } else {
      const data: CartItem = {
        product,
        quantity: 1,
      };
      dispatch(addItemToCart(data));
      setinCart(true);
    }
  }

  function handleRemoveFromCart() {
    if (!user.isLoggedIn) {
      toast.error("You need to be logged in to remove items from Bag");
      navigate("/login");
      return;
    } else {
      dispatch(removeItemFromCart(product.id));
      setinCart(false);
    }
  }

  return { handleAddToCart, inCart, handleRemoveFromCart };
}

export default useToogleCart;
