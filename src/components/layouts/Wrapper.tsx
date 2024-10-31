import Footer from "./Footer";
import NavBar from "../navbar/NavBar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

interface WrapperProps {
  children: React.ReactNode;
}
function Wrapper({ children }: WrapperProps) {
  return (
    <div>
      <NavBar />
      <div className="mb-16 mt-16 px-4 sm:mt-20 sm:px-8">{children}</div>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
      <Footer />
    </div>
  );
}

export default Wrapper;
