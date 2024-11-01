import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthFormInput from "../types/authFormInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebaseConfig";
import { toast } from "react-toastify";
import { FirebaseError } from "firebase/app";
import FormInput from "../components/ui/FormInput";

function UserSignupPage(): JSX.Element {
  const [isSigningUp, setIsSigningup] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormInput>();

  // form submitting function
  const onSubmit: SubmitHandler<AuthFormInput> = async (data) => {
    setIsSigningup(true);
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );
      if (res) {
        toast.success("Account created successfully");
        navigate("/");
      }
    } catch (err) {
      if (err instanceof FirebaseError) {
        toast.error(err.message.split("/")[1]);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
    setIsSigningup(false);
  };

  return (
    <div className="mt-24 flex h-[80vh] items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-sm rounded-lg bg-white p-4 shadow-md shadow-pink-100">
        <h2 className="mb-4 text-center text-2xl font-semibold text-gradient-pink-RO">
          Create your account
        </h2>

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
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
              maxLength: {
                value: 20,
                message: "Password cannot exceed 20 characters",
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password must contain letters and numbers, and be 8-20 characters long",
              },
            }}
          />

          <button
            type="submit"
            className="w-full rounded-md py-2 text-white transition-colors bg-gradient-orange-RP hover:bg-gradient-pink-RO active:scale-95"
          >
            {!isSigningUp ? "Sign Up" : "Signing Up..."}
          </button>
        </form>
        {/* Extra Links */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-pink-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserSignupPage;
