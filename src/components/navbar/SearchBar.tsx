import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useAppDispatch } from "../../app/hooks";
import { setSearchQuery } from "../../features/search/searchSlice";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchKey, setSearchKey] = useState<string>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(setSearchQuery(searchKey));
    setSearchKey("");
    navigate(`/search/${searchKey}`);
  }

  return (
    <form
      onSubmit={handleSearch}
      className="mr-3 flex w-full items-center gap-2 rounded-lg border-2 bg-slate-50 px-2 py-1 hover:bg-white md:py-1"
    >
      <FaSearch className="text-sm text-gray-400" />
      <input
        className="block w-full bg-inherit text-sm outline-none"
        placeholder="Search"
        value={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
      />
    </form>
  );
}

export default SearchBar;
