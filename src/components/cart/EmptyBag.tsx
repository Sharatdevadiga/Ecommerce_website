import { Link } from "react-router-dom";
import { BsFillHandbagFill } from "react-icons/bs";

function EmptyBag() {
  return (
    <div className="flex h-[467px] w-full max-w-[500px] flex-col items-center gap-6 border p-4 py-12 shadow-md md:gap-16">
      <h1 className="text-gradient- mb-4 text-lg font-semibold text-gray-800">
        Your bag is Empty Please add some items first
      </h1>
      <Link to="/" className="max-h-56">
        <BsFillHandbagFill className="text-[150px] text-pink-500" />
      </Link>
      <Link
        className="block w-full max-w-[350px] rounded-md px-4 py-4 text-center font-bold text-white bg-gradient-pink-RO hover:bg-gradient-orange-RP active:scale-95"
        to="/"
        onClick={() => {}}
      >
        Add Items to Bag
      </Link>
    </div>
  );
}

export default EmptyBag;
