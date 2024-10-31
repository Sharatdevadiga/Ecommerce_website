import Product from "../../types/product";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdShoppingBag } from "react-icons/md";
import Button from "../ui/Button";

import useToggleCart from "../../hooks/useToggleCart";
import useToggleWishList from "../../hooks/useToggleWishList";
interface CardProps {
  product: Product;
}

function CardProductDetails({ product }: CardProps) {
  const { handleAddToCart, inCart, handleRemoveFromCart } = useToggleCart({
    product,
  });
  const { handleAddToWishlist, inWishList, handleRemoveFromWishlist } =
    useToggleWishList({ product });

  console.log(product);
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-full max-w-[1000px] flex-shrink-0 p-2 shadow-md transition duration-300 hover:shadow-lg">
        {/* Gradient border */}
        <div className="absolute inset-0 z-10 rounded-lg border-4 border-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div>

        {/* image and content */}
        <div className="relative z-20 flex h-full flex-col items-center justify-center gap-12 bg-white p-4 py-8 sm:flex-row sm:items-start">
          {/* image */}
          <img
            className="relative z-10 max-h-64 object-contain"
            src={product.image}
            alt=""
          />

          {/* Content */}
          <div className="max-w-[350px] space-y-4">
            <div>
              <p className="mb-2 text-sm font-bold">
                {product.title.toUpperCase()}
              </p>
            </div>

            {/* product rating and MRP */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <FaStar className="text-sm text-pink-500" />
                <span className="text-sm">
                  {product.rating.rate} | {product.rating.count}
                </span>
              </div>
              <p>
                MRP: <span className="font-semibold">${product.price}</span>
              </p>
            </div>
            <p>
              <span className="font-semibold">Descreption: </span>
              {product.description}
            </p>

            {/* buttons to add product to cart an dwishlist */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                variant="ctaWishList"
                Icon={inWishList ? FaHeart : FaRegHeart}
                text="Wishlist"
                onClick={
                  inWishList ? handleRemoveFromWishlist : handleAddToWishlist
                }
              ></Button>
              <Button
                variant="ctaBag"
                Icon={inCart ? MdShoppingBag : MdOutlineShoppingBag}
                text={inCart ? "Remove from bag" : "Add to bag"}
                onClick={inCart ? handleRemoveFromCart : handleAddToCart}
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProductDetails;
