import { useForm, SubmitHandler } from "react-hook-form";
import FormInput from "../components/ui/FormInput";
import auth from "../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FirebaseError } from "firebase/app";

// Interface to define the form inputs
interface FormInputs {
  email: string;
  password: string;
}

function LoginPage(): JSX.Element {
  const [isLogingIn, setIsLogingIn] = useState(false);

  // navigator to navigate to home page after login
  const navigate = useNavigate();

  // React-hook-form to handle form submission and validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  // onsubmit function to handle form submission
  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setIsLogingIn(true);
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );
      if (res) {
        toast.success("login successful");
        setTimeout(() => {
          navigate("/");
        }, 500);
      }
    } catch (err) {
      if (err instanceof FirebaseError) {
        toast.error(err.message.split("/")[1]);
      } else {
        toast.error("An unexpected error occurred");
      }
    } finally {
      setIsLogingIn(false);
    }
  };

  return (
    <div className="mt-24 flex h-[80vh] items-center justify-center bg-gray-50 p-4">
      <div className="w-full min-w-[250px] max-w-sm rounded-lg bg-white p-4 shadow-md shadow-pink-100">
        <h2 className="mb-4 text-center text-2xl font-semibold text-gradient-pink-RO">
          Login to your account
        </h2>

        {/* form */}
        <form action="" className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            id="email"
            label="Email"
            type="email"
            register={register}
            error={errors.email}
            validationRules={{
              required: "Email is required",
            }}
          />
          <FormInput
            id="password"
            label="Password"
            type="password"
            register={register}
            error={errors.password}
            validationRules={{
              required: "Password is required",
            }}
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-md py-2 text-white transition-colors bg-gradient-orange-RP hover:bg-gradient-pink-RO"
          >
            {isLogingIn ? "Logging In..." : "Login"}
          </button>
        </form>
        {/* Extra Links */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-pink-600 hover:underline">
              Sign up
            </Link>
          </p>
          <p className="text-sm text-gray-600">
            <Link
              to="/forgotPassword"
              className="text-pink-600 hover:underline"
            >
              Forgot password?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
