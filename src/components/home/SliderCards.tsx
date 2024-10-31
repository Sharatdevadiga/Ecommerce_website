import { useFetchProductsQuery } from "../../features/products/productApiSlice";
import CardProduct from "../product/CardProduct";
import Loader from "../ui/Loader";
import { useState } from "react";

function SliderCards() {
  const { data: products, isLoading } = useFetchProductsQuery();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4; // Number of products per page

  // Calculate the products to show on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products?.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  // Calculate total pages
  const totalPages = products
    ? Math.ceil(products.length / productsPerPage)
    : 0;

  // Handlers for pagination buttons
  const handleNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handlePreviousPage = () =>
    setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div>
      <div className="mx-auto flex flex-wrap items-center justify-center gap-8 p-12">
        {isLoading ? (
          <Loader />
        ) : (
          currentProducts?.map((product) => (
            <CardProduct product={product} key={product.id}></CardProduct>
          ))
        )}
        <div />
      </div>
      {/* Pagination Controls */}
      <div className="mt-12 flex items-center justify-center gap-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="w-20 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-orange-400 px-4 py-1 font-bold text-white disabled:opacity-70 sm:w-24"
        >
          Prev
        </button>
        <span className="font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="w-20 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-400 px-4 py-1 font-bold text-white disabled:opacity-50 sm:w-24"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default SliderCards;
