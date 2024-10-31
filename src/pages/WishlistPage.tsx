import { useAppSelector } from "../app/hooks";
import EmptyWishList from "../components/wishlist/EmptyWishList";
import CardWishList from "../components/wishlist/cardWishList";
import RedirectToLogin from "../components/layouts/RedirectToLogin";
import Loader from "../components/ui/Loader";

function WishListPage() {
  const auth = useAppSelector((state) => state.auth);
  const wishList = useAppSelector((state) => state.wishList);

  // if user is logged in and has no items in their bag, show empty bag component
  if (auth.isLoggedIn && wishList.items.length === 0)
    return (
      <div className="flex flex-col flex-wrap items-center justify-center gap-16 pt-12">
        <EmptyWishList />
      </div>
    );

  //   if user is logged in, show their bag items
  if (auth.isLoggedIn)
    return (
      <div className="flex flex-col flex-wrap items-center justify-center gap-16 pt-12">
        {wishList.items.map((product) => (
          <CardWishList item={product} key={product.id} />
        ))}
      </div>
    );

  //  if user is not logged in, tell them to login
  if (!auth.isLoggedIn)
    return <RedirectToLogin message="Please login to see your WishList" />;

  return <Loader />;
}

export default WishListPage;
