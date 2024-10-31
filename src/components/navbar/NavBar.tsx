import { Link } from "react-router-dom";
import CategoryLinks from "./CategoryLinks";
import SearchBar from "./SearchBar";
import UserLinks from "./UserLinks";

function NavBar(): JSX.Element {
  return (
    <div className="h:12 fixed top-0 z-50 flex w-full items-center justify-between gap-4 bg-white bg-opacity-40 px-2 py-2 shadow-md backdrop-blur-md sm:h-16 sm:gap-8 md:px-8 lg:px-10">
      {/* for large screen */}
      <div className="hidden items-center gap-3 sm:flex">
        <Link
          to="/"
          className="flex h-8 w-9 rotate-180 rounded-full bg-pink-100 p-1"
        >
          <img src="./myntraLogo.png" alt="Myntral logo" />
        </Link>
        <CategoryLinks />
      </div>

      {/* for small screen */}
      <div className="flex items-center gap-2 sm:hidden sm:gap-3">
        <CategoryLinks />
        <Link
          to="/"
          className="flex h-8 w-9 rotate-180 rounded-full bg-pink-100 p-1"
        >
          <img src="./myntraLogo.png" alt="Myntral logo" />
        </Link>
      </div>

      <div className="flex w-[80%] items-center gap-2 sm:w-[60%] sm:gap-3">
        <SearchBar />
        <UserLinks />
      </div>
    </div>
  );
}

export default NavBar;
