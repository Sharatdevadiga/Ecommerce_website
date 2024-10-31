import Button from "../ui/Button";
import { IoMdClose } from "react-icons/io";
import { updateItemQuantity } from "../../features/cart/cartSlice";
import { useAppDispatch } from "../../app/hooks";
import { useState } from "react";

// interface for the props
interface OpenModalProps {
  setModalOpen: (open: boolean) => void;
  quantity: number;
  id: number;
}

function QuantityModal({ setModalOpen, quantity = 1, id }: OpenModalProps) {
  const [newQuantity, setQuantity] = useState(quantity);
  const dispatch = useAppDispatch();

  const qty = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  //   updating function
  const handleClick = () => {
    dispatch(updateItemQuantity({ id, quantity: newQuantity }));
    setModalOpen(false);
  };

  return (
    <div
      className={`fixed left-0 top-0 z-50 mx-auto flex h-full w-full flex-col items-center justify-center bg-gray-900 bg-opacity-50 p-4`}
    >
      <div className="relative flex max-w-[350px] flex-col items-center justify-center gap-6 rounded-md bg-white p-4 pt-6 shadow-md shadow-pink-100">
        <p className="font-bold uppercase">Select Quantity</p>
        <div className="flex w-full flex-wrap items-center justify-center gap-4">
          {qty.map((item) => (
            <button
              onClick={() => setQuantity(item)}
              key={item}
              className={`flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 shadow-md transition-all duration-200 hover:bg-pink-100 active:scale-95 ${item === newQuantity ? "scale-90 border border-red-400 bg-red-50 shadow-red-100" : ""}`}
            >
              {item}
            </button>
          ))}
        </div>
        <Button onClick={handleClick} text="Done"></Button>

        {/* close button */}
        <button onClick={() => setModalOpen(false)}>
          <IoMdClose className="fon-light text-md absolute right-2 top-2 text-gray-400" />
        </button>
      </div>
    </div>
  );
}

export default QuantityModal;
