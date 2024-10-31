import { useParams } from "react-router-dom";
import { useFetchOneProductQuery } from "../features/products/productApiSlice";
import Loader from "../components/ui/Loader";
import CardProductDetails from "../components/product/CardProductDetails";

function ProductPage() {
  const { id = "1" } = useParams();

  const { data, isLoading } = useFetchOneProductQuery(id);
  console.log(data);
  if (isLoading) return <Loader />;
  return (
    <div className="mb-24 mt-36">
      {!isLoading && data ? <CardProductDetails product={data} /> : ""}
    </div>
  );
}

export default ProductPage;
