import { IconType } from "react-icons";

interface UserLink {
  id: number;
  icon: IconType;
  title: string;
  path: string;
  itemsLen?: number;
}

export default UserLink;
