import UserLink from "../../types/userlink";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { CgShoppingBag } from "react-icons/cg";

const userLinks: UserLink[] = [
  {
    id: 1,
    title: "profile",
    icon: FaRegUser,
    path: "/login",
  },
  {
    id: 2,
    title: "Wishlist",
    icon: FaRegHeart,
    path: "/wishlist",
  },
  {
    id: 3,
    title: "Bag",
    icon: CgShoppingBag,
    path: "/cart",
  },
];

export { userLinks };
