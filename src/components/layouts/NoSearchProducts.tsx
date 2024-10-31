import { Link } from "react-router-dom";
import { IoSearchCircle } from "react-icons/io5";

function NoSearchProducts({ searchQuery }: { searchQuery: string }) {
  return (
    <div className="flex h-[90vh] w-full flex-col items-center justify-center gap-6 bg-gray-50">
      <Link to="/login">
        <IoSearchCircle className="text-[160px] text-pink-500" />
      </Link>

      <h2 className="text-center text-3xl font-semibold text-gradient-pink-RO">
        No results for {searchQuery}. Try something else
      </h2>
    </div>
  );
}

export default NoSearchProducts;
