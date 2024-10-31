import { useEffect, useState } from "react";
import Product from "../../types/product";
import CardProduct from "./CardProduct";

interface PaginatedCardsProps {
  data: Product[];
}

function PaginatedCards({ data }: PaginatedCardsProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 4;

  const indexOfFirstProduct = (currentPage - 1) * productPerPage;
  const indexOfLastProduct = indexOfFirstProduct + productPerPage;
  const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(data.length / productPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [data]);

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mx-auto flex flex-wrap items-center justify-center py-12 lg:p-12">
        {currentProducts?.map((product) => (
          <CardProduct product={product} key={product.id}></CardProduct>
        ))}
        <div />
      </div>
      {/* Pagination Controls */}
      <div className="mt-12 flex items-center justify-center gap-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="w-20 rounded-full px-4 py-1 font-bold text-white transition-all duration-300 bg-gradient-orange-RP hover:bg-gradient-pink-RO disabled:opacity-70 sm:w-24"
        >
          Prev
        </button>
        <span className="font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="w-20 rounded-full px-4 py-1 font-bold text-white transition-all duration-300 bg-gradient-pink-RO hover:bg-gradient-orange-RP disabled:opacity-50 sm:w-24"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PaginatedCards;
