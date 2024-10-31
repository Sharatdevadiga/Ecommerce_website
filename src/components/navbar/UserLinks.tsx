import { Link, useLocation } from "react-router-dom";
import UserLink from "../../types/userlink";
import { useAppSelector } from "../../app/hooks";

import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { CgShoppingBag } from "react-icons/cg";
import { IoIosLogIn } from "react-icons/io";

function UserLinks() {
  const auth = useAppSelector((state) => state.auth);
  const cartItems = useAppSelector((state) => state.cart.items.length);
  const wishListItems = useAppSelector((state) => state.wishList.items.length);
  const location = useLocation();

  const userLinks: UserLink[] = [
    {
      id: 1,
      title: `${auth.isLoggedIn ? "Profile" : "Login"}`,
      icon: auth.isLoggedIn ? FaRegUser : IoIosLogIn,
      path: `${auth.isLoggedIn ? "/profile" : "/login"}`,
    },
    {
      id: 2,
      title: "Wishlist",
      icon: FaRegHeart,
      path: "/wishlist",
      itemsLen: wishListItems,
    },
    {
      id: 3,
      title: "Bag",
      icon: CgShoppingBag,
      path: "/cart",
      itemsLen: cartItems,
    },
  ];
  return (
    <div className="flex gap-3 pr-2 text-gray-700 md:gap-4">
      {userLinks.map((link) => (
        <Link
          className={`flex flex-col items-center justify-center text-xs sm:text-sm ${location.pathname === link.path ? "text-pink-700" : ""}`}
          to={link.path}
          key={link.id}
        >
          {
            <div className="relative h-auto w-auto">
              <link.icon className="text-lg" />
              {auth.isLoggedIn && link.id !== 1 && (
                <span className="absolute right-[-7px] top-[-13px] rounded-full bg-pink-500 px-1 text-xs font-bold text-white">
                  {link.itemsLen}
                </span>
              )}
            </div>
          }
          <span className="hidden text-[12px] font-bold sm:flex">
            {link.title}
          </span>
        </Link>
      ))}
    </div>
  );
}

export default UserLinks;
