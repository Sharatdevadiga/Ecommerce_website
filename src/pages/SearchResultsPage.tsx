import { useEffect, useState } from "react";
import PaginatedCards from "../components/product/PaginatedCards";
import Loader from "../components/ui/Loader";
import { useFetchProductsQuery } from "../features/products/productApiSlice";
import { useAppSelector } from "../app/hooks";
import Product from "../types/product";
import NoSearchProducts from "../components/layouts/NoSearchProducts";

function SearchResultsPage() {
  const { data, isLoading } = useFetchProductsQuery();
  const [filteredData, setFilteredData] = useState<Product[]>([]);
  const searchQuery = useAppSelector((state) => state.search.searchQuery);

  console.log("searchQuery = " + searchQuery);

  useEffect(() => {
    if (data?.length) {
      const filtered = data?.filter((product) => {
        return (
          product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });

      setFilteredData(filtered);
    }
  }, [data, searchQuery]);

  // if no search results found, show NoSearchProducts component
  if (!isLoading && filteredData.length === 0)
    return <NoSearchProducts searchQuery={searchQuery} />;

  // if there are no search results, list them
  if (!isLoading && filteredData.length > 0)
    return (
      <div className="mt-24">
        <div className="mx-auto mt-24 flex w-full flex-col items-center justify-center bg-gradient-to-r from-pink-500 via-red-500 to-orange-400 p-8 text-center text-white">
          <h2 className="text-center text-2xl font-semibold uppercase">
            Found {filteredData.length} item
            {filteredData.length > 1 ? "'s" : ""} for : {searchQuery}
          </h2>
        </div>

        {!isLoading && filteredData.length > 0 ? (
          <PaginatedCards data={filteredData} />
        ) : (
          <Loader />
        )}
      </div>
    );

  return <Loader />;
}

export default SearchResultsPage;
