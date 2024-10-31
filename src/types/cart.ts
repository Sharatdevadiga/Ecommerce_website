import Product from "./product";

interface CartItem {
  product: Product;
  quantity: number;
}

interface Cart {
  userId: string;
  items: CartItem[];
  total: number;
}

export type { CartItem };
export default Cart;
