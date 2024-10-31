import { useAppSelector } from "../app/hooks";
import CardCart from "../components/cart/CardCart";
import EmptyBag from "../components/cart/EmptyBag";
import Bill from "../components/cart/Bill";
import RedirectToLogin from "../components/layouts/RedirectToLogin";
import Loader from "../components/ui/Loader";

function CartPage() {
  const auth = useAppSelector((state) => state.auth);
  const cart = useAppSelector((state) => state.cart);

  console.log(cart);

  // if user is logged in, show their bag items
  if (auth.isLoggedIn)
    return (
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-8 px-4 py-12 lg:grid lg:grid-cols-2 lg:items-start">
        {/* bill in small screen */}
        <div className="lg:hidden">
          <Bill itemsCount={cart.items.length} totalPrice={cart.total} />
        </div>

        {/* items list */}
        <div className="">
          {cart.items.length === 0 ? (
            <EmptyBag />
          ) : (
            <div className="space-y-6">
              {cart?.items.map((item) => (
                <CardCart key={item.product.id} item={item} />
              ))}
            </div>
          )}
        </div>

        {/* bill in large screen */}
        <div className="relative hidden w-full lg:block">
          <Bill itemsCount={cart.items.length} totalPrice={cart.total} />
        </div>
      </div>
    );

  //  if user is not logged in, tell them to login
  if (!auth.isLoggedIn)
    return <RedirectToLogin message="Please login to see your Bag" />;

  return <Loader />;
}

export default CartPage;
