import { Link } from "react-router-dom";
import Product from "../../types/product";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdShoppingBag } from "react-icons/md";
import useAddToCart from "../../hooks/useToggleCart";
import useToggleWishList from "../../hooks/useToggleWishList";

interface ProductProp {
  product: Product;
}

function CardProduct({ product }: ProductProp) {
  const { handleAddToCart, inCart, handleRemoveFromCart } = useAddToCart({
    product,
  });
  const { handleAddToWishlist, inWishList, handleRemoveFromWishlist } =
    useToggleWishList({ product });

  function handleToggleWishlist() {
    if (inWishList) {
      handleRemoveFromWishlist();
    } else {
      handleAddToWishlist();
    }
  }

  function handleToggleCart() {
    if (inCart) {
      handleRemoveFromCart();
    } else {
      handleAddToCart();
    }
  }

  return (
    <div className="relative m-4 flex-shrink-0 p-2 shadow-md transition duration-300 hover:scale-105 hover:shadow-lg">
      {/* Gradient border */}
      <div className="absolute inset-0 z-10 rounded-lg border-4 border-transparent bg-gradient-yellow-PR"></div>

      {/* content */}
      <div className="relative z-20 flex h-full w-56 flex-col gap-6 bg-white p-4">
        {/* image */}
        <Link
          to={`/product/${product.id}`}
          className="flex h-56 w-full items-center justify-center"
        >
          <img
            className="relative z-10 h-full object-contain"
            src={product.image}
            alt=""
          />
        </Link>

        {/* title, rating, buttons */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Link
              to={`/product/${product.id}`}
              className="flex items-center gap-2"
            >
              <FaStar className="text-sm text-orange-500" />
              <span className="text-sm">
                {product.rating.rate} | {product.rating.count}
              </span>
            </Link>

            {/* buttons to toggle product in wishlist and cart */}
            <div className="flex gap-2 transition-all duration-300">
              <button onClick={handleToggleWishlist}>
                {inWishList ? (
                  <FaHeart className="text-pink-500 hover:scale-110" />
                ) : (
                  <FaRegHeart className="text-pink-500 hover:scale-110" />
                )}
              </button>
              <button onClick={handleToggleCart}>
                {inCart ? (
                  <MdShoppingBag className="text-red-500 hover:scale-125" />
                ) : (
                  <MdOutlineShoppingBag className="text-red-500 hover:scale-125" />
                )}
              </button>
            </div>
          </div>

          {/* title */}
          <Link to={`/product/${product.id}`}>
            <p className="text-sm font-semibold">
              {product.title.slice(0, 22) + ".."}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
