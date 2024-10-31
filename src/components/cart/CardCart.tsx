import { FaStar } from "react-icons/fa";
import { CartItem } from "../../types/cart";
import { IoMdArrowDropdown, IoMdClose } from "react-icons/io";
import { removeItemFromCart } from "../../features/cart/cartSlice";
import { useAppDispatch } from "../../app/hooks";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import QuantityModal from "./QuantityModal";
import { useState, useEffect } from "react";

interface CardCartProps {
  item: CartItem;
}

function CardCart({ item }: CardCartProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const { id, title, price, rating, image } = item.product;
  const dispatch = useAppDispatch();

  // To remove current item from cart
  function handleRemoveFromCart() {
    const shouldDelete = confirm("Remove item from cart?");
    if (shouldDelete) {
      dispatch(removeItemFromCart(id));
      toast.success("Item removed from cart");
    }
  }

  // Toggle modal open state and log for debugging
  function handleQtyBtnClick() {
    setModalOpen(true);
  }

  // Log the modal state to verify the update
  useEffect(() => {
    console.log("Modal Open:", modalOpen);
  }, [modalOpen]);

  return (
    <div className="border-1 relative max-w-[500px] p-2 shadow-md">
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
            {/* quantity button */}
            <button
              onClick={handleQtyBtnClick}
              className="flex items-center justify-center gap-1 bg-gray-200 px-2"
            >
              <p>
                Qty: <span className="font-semibold">{item.quantity}</span>
              </p>
              <IoMdArrowDropdown className="text-lg" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <QuantityModal
          setModalOpen={setModalOpen}
          quantity={item.quantity}
          id={id}
        />
      )}

      {/* remove button */}
      <button onClick={handleRemoveFromCart}>
        <IoMdClose className="text-md absolute right-2 top-2 font-light text-gray-400" />
      </button>
    </div>
  );
}

export default CardCart;
