import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { ImInstagram } from "react-icons/im";
import { FaSquareYoutube } from "react-icons/fa6";
import SocialLink from "../../types/socialLinks";

const socialLinks: SocialLink[] = [
  {
    id: 1,
    icon: FaFacebookSquare,
    path: "https://www.facebook.com",
  },
  {
    id: 2,
    icon: FaSquareXTwitter,
    path: "https://x.com",
  },
  {
    id: 3,
    icon: FaSquareYoutube,
    path: "https://www.youtube.com",
  },
  {
    id: 4,
    icon: ImInstagram,
    path: "https://www.instagram.com",
  },
];

export default socialLinks;
