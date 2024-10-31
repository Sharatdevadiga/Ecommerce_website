function Loader({ type = "page" }) {
  if (type === "page")
    return (
      <div className="flex h-[70vh] w-[100vw] items-center justify-center">
        <div className="rounded-full p-4 shadow-lg">
          <div className="rotate h-16 w-16 animate-spin rounded-full border-4 border-pink-500 border-b-white transition-all ease-in-out"></div>
        </div>
      </div>
    );

  return (
    <div>
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-pink-500 border-b-white p-2 transition-all ease-in-out"></div>
    </div>
  );
}

export default Loader;
