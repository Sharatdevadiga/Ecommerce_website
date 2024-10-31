import { FaUserLock } from "react-icons/fa";
import { Link } from "react-router-dom";

function RedirectToLogin({ message }: { message: string }) {
  return (
    <div className="flex h-[90vh] w-full flex-col items-center justify-center gap-6 bg-gray-50">
      <Link to="/login">
        <FaUserLock className="text-[160px] text-pink-500" />
      </Link>
      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className="text-center text-3xl font-semibold text-gradient-pink-RO">
          {message}
        </h2>
        <Link
          to="/login"
          className="mt-4 rounded-md px-4 py-2 font-semibold text-white transition-all duration-150 bg-gradient-orange-RP hover:bg-gradient-pink-RO active:scale-95"
        >
          Log In Now
        </Link>
      </div>
    </div>
  );
}

export default RedirectToLogin;
