import { useAppSelector } from "../app/hooks";
import { FaUserCircle } from "react-icons/fa";
import CustomLink from "../components/ui/CustomLink";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebaseConfig";
import { toast } from "react-toastify";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const userAuth = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  // logout function
  async function logout() {
    try {
      await signOut(auth);
      setTimeout(() => {
        navigate("/");
      }, 200);

      toast.success("Logged out successfully");
    } catch {
      toast.error("Something went wrong");
    }
  }

  return (
    <div className="flex h-[85vh] flex-col items-center justify-center gap-6 bg-gray-50">
      <div>
        <FaUserCircle className="text-[150px] text-pink-500" />
      </div>
      <div>
        <p className="font-semibold">{userAuth.email}</p>
      </div>
      <div className="space-y-2">
        <CustomLink to="/cart">See my bag</CustomLink>
        <CustomLink to="/wishList">See my wishlist</CustomLink>
        <Button text="Logout" width="wide" onClick={logout} />
      </div>
    </div>
  );
}

export default ProfilePage;
