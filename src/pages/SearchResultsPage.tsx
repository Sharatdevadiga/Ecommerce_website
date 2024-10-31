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
        <h2 className="text-center text-3xl font-semibold text-gradient-pink-RO">
          Found {filteredData.length} items for "{searchQuery}"
        </h2>
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
