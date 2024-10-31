// function HomeHeader() {
//   return (
//     <div className="mx-auto flex w-full flex-col items-center justify-center bg-gradient-to-r from-pink-600 via-red-500 to-yellow-500 bg-clip-text p-8 text-center text-transparent">
//       <h1 className="mb-4 font-serif text-3xl font-bold">
//         Discover Fashion That Fits Your Style!
//       </h1>
//       <p className="text-lg font-semibold">
//         Exclusive 30% - 60% OFF on Top Brands
//       </p>
//       <p className="mb-6 text-sm italic">Limited time only – don’t miss out!</p>
//     </div>
//   );
// }

// export default HomeHeader;

function HomeHeader() {
  return (
    <div className="mx-auto mt-24 flex w-full flex-col items-center justify-center bg-gradient-to-r from-pink-500 via-red-500 to-orange-400 p-8 text-center text-white">
      <h1 className="mb-4 text-3xl font-bold md:text-5xl">
        Discover Fashion That Fits Your Style!
      </h1>
      <p className="mb-1 text-lg">Exclusive 30% - 60% OFF on Top Brands</p>
      <p className="mb-6 text-sm italic">Limited time only – don’t miss out!</p>
      {/* <button className="rounded-full bg-white px-6 py-2 font-semibold text-red-500 shadow-md transition hover:bg-red-100">
        Shop Now
      </button> */}
    </div>
  );
}

export default HomeHeader;
