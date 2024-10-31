// import { Link } from "react-router-dom";

interface BillProps {
  totalPrice: number;
  itemsCount: number;
}

function Bill({ totalPrice, itemsCount }: BillProps) {
  const discount = totalPrice * 0.1;
  return (
    <div className="flex w-full flex-col items-center border shadow-md sm:w-[500px]">
      <div className="space-y-8 bg-white p-4 py-12">
        <div className="mb-4 text-lg font-semibold text-gray-800">
          PRICE DETAILS ({itemsCount} Items)
        </div>
        <table className="w-full min-w-[250px] text-left text-gray-800 sm:min-w-[350px]">
          <tbody>
            {/* Total MRP */}
            <tr className="border-b">
              <td className="py-2">Total MRP</td>
              <td className="text-right font-semibold">
                ${totalPrice.toFixed(2)}
              </td>
            </tr>
            {/* Discount on MRP */}
            <tr className="border-b">
              <td className="py-2">Discount on MRP</td>
              <td className="text-right text-green-600">
                -${discount.toFixed(2)}
              </td>
            </tr>

            {/* Platform Fee */}
            <tr className="border-b">
              <td className="py-2">Platform Fee</td>
              <td className="text-right text-green-600">FREE</td>
            </tr>

            {/* Shipping Fee */}
            <tr className="border-b">
              <td className="py-2">Shipping Fee</td>
              <td className="text-right">
                <span className="mr-2 text-gray-500 line-through">$3</span>
                <span className="text-green-600">FREE</span>
              </td>
            </tr>

            {/* Total Amount */}
            <tr className="text-lg font-bold">
              <td className="py-4">Total Amount</td>
              <td className="text-right">
                ${(totalPrice - discount).toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
        <button
          className="block w-full rounded-md px-4 py-4 text-center font-bold text-white bg-gradient-orange-RP hover:bg-gradient-pink-RO disabled:cursor-not-allowed disabled:opacity-50"
          // to="/placeOrder"
          disabled={totalPrice === 0}
          onClick={() => {}}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Bill;
