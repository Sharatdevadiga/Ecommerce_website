import HomeHeader from "../components/home/HomeHeader";
import CardProduct from "../components/product/CardProduct";
import Loader from "../components/ui/Loader";
import { useFetchProductsQuery } from "../features/products/productApiSlice";

function HomePage() {
  const { data, isLoading } = useFetchProductsQuery();

  return (
    <div className="mt-16">
      {!isLoading && data ? (
        <>
          <HomeHeader />
          <div className="mx-auto flex flex-wrap items-center justify-center p-12">
            {data.map((product) => (
              <CardProduct product={product} key={product.id} />
            ))}
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default HomePage;
