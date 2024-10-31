import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import Button from "../components/ui/Button";
import { IoArrowBack } from "react-icons/io5";

function PlaceOrder() {
  const Navigate = useNavigate();
  function handleGoBack() {
    Navigate(-1);
  }

  return (
    <div className="flex h-[90vh] w-full flex-col items-center justify-center gap-6 bg-gray-50">
      <Link to="/login">
        <FaCartShopping className="text-[160px] text-pink-500" />
      </Link>
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-center text-3xl font-semibold text-gradient-pink-RO">
          We will accept orders soon!!
        </h2>
        <Button
          variant="ctaBag"
          Icon={IoArrowBack}
          text={"Go back"}
          onClick={handleGoBack}
        ></Button>
      </div>
    </div>
  );
}

export default PlaceOrder;
