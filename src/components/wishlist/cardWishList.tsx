import { FaStar } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useAppDispatch } from "../../app/hooks";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Product from "../../types/product";
import { removeItemFromWishlist } from "../../features/wishList/wishListSlice";
import Button from "../ui/Button";
import useAddToCart from "../../hooks/useToggleCart";

interface CardWishListProps {
  item: Product;
}

function CardWishList({ item }: CardWishListProps) {
  const { id, title, price, rating, image } = item;
  const dispatch = useAppDispatch();
  const { handleAddToCart } = useAddToCart({ product: item });

  // To remove current item from cart
  function handleRemoveFromWishList() {
    const shouldDelete = confirm("Remove item from Wishlist?");
    if (shouldDelete) {
      dispatch(removeItemFromWishlist(id));
      toast.success("Item removed from Wishlist");
    }
  }

  return (
    <div className="border-1 relative w-full max-w-[500px] p-2 shadow-md">
      <div className="z-20 grid grid-cols-2 bg-white pr-2">
        {/* image */}
        <Link
          to={`/product/${id}`}
          className="flex h-44 w-32 place-content-center justify-self-center p-2 sm:h-44 sm:w-32"
        >
          <img className="object-contain" src={image} alt={title} />
        </Link>

        {/* text and quantity */}
        <div className="flex flex-col gap-3 py-4 pt-8 text-xs md:text-sm">
          <div>
            <p className="mb-2 font-bold">{title.toUpperCase()}</p>
          </div>
          <div className="space-y-4">
            <div className="flex flex-col gap-3 sm:flex-row md:items-center">
              <span className="flex items-center md:justify-center">
                <FaStar className="mr-1 text-pink-500" />
                {rating.rate} | {rating.count}
              </span>
              <p>
                MRP: <span className="font-semibold">${price}</span>
              </p>
            </div>
            {/* adding to cartt */}
            <Button onClick={handleAddToCart} text="Add to Cart" />
          </div>
        </div>
      </div>

      {/* remove button */}
      <button onClick={handleRemoveFromWishList}>
        <IoMdClose className="text-md absolute right-2 top-2 font-light text-gray-400" />
      </button>
    </div>
  );
}

export default CardWishList;
