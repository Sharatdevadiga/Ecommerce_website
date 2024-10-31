import { useRef, useState } from "react";
import { useFetchCategoriesQuery } from "../../features/products/productApiSlice";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import useClickOutside from "../../hooks/useClickOutside";

function CategoryLinks(): JSX.Element {
  const { data: categories, isLoading } = useFetchCategoriesQuery();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLButtonElement>(null);

  //close on clicking outside
  useClickOutside(menuRef, () => setIsOpen(false));

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* for smaller screen */}
      <button ref={menuRef} className="flex sm:hidden" onClick={toggleMenu}>
        <FiMenu className="text-xl" />
      </button>
      {/*  */}
      {isOpen && (
        <div className="absolute left-0 top-full flex flex-col gap-3 rounded-md bg-white p-4 text-xs font-bold shadow-lg sm:hidden">
          {categories && !isLoading ? (
            categories.map((category: string) => (
              <Link
                to={`/category/${category}`}
                key={category}
                onClick={() => setIsOpen(false)} // Close menu on click
                className="rounded-md p-2 hover:text-neutral-600"
              >
                {category.split("'")[0].toUpperCase()}
              </Link>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      )}

      {/* for larger screens */}
      <div className="hidden gap-3 text-xs font-bold sm:flex">
        {categories && !isLoading ? (
          categories.map((category) => (
            <Link to={`category/${category}`} key={category}>
              {category.split("'")[0].toUpperCase()}
            </Link>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default CategoryLinks;
