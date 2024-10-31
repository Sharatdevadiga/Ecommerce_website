import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center gap-8 p-12">
      <img src="./public/pageNotFound.png" alt="Page not found" />
      <h1 className="text-center text-3xl font-semibold tracking-tight md:text-5xl">
        Page that you are looking for does not exists yet!!
      </h1>
      <Link
        className="rounded-full border-2 border-pink-400 px-4 py-2 font-semibold shadow-md shadow-red-300 transition-all duration-300 ease-in-out hover:bg-pink-500 hover:text-white active:scale-95"
        to="/"
      >
        Go back to home page
      </Link>
    </div>
  );
}

export default PageNotFound;
