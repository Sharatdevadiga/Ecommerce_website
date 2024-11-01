import { useParams } from "react-router-dom";
import { useFetchProductsByCategoryQuery } from "../features/products/productApiSlice";
import Loader from "../components/ui/Loader";
import PaginatedCards from "../components/product/PaginatedCards";

function CategoyPage(): JSX.Element {
  const { category } = useParams<{ category: string }>();

  const { data, isLoading } = useFetchProductsByCategoryQuery(
    category as string,
  );

  return (
    <div>
      <div className="mx-auto mt-24 flex w-full flex-col items-center justify-center bg-gradient-to-r from-pink-500 via-red-500 to-orange-400 px-8 py-4 text-center text-white">
        <h1 className="mb-4 text-2xl font-bold md:text-2xl">
          {category?.toUpperCase()}
        </h1>
      </div>
      {!isLoading && data ? <PaginatedCards data={data} /> : <Loader />}
    </div>
  );
}

export default CategoyPage;
