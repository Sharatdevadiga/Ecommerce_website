import auth from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import AuthFormInput from "../types/authFormInput";
import { useState } from "react";
import { FirebaseError } from "firebase/app";

// Functions were taken from the firebase doc and it is integrated with some state for further usage
function useFirebaseSignup({ email, password }: AuthFormInput) {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function Sugnup() {
    setLoading(true);
    setError(null);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res) setData(res);
    } catch (err) {
      if (err instanceof FirebaseError) {
        if (err instanceof FirebaseError) {
          setError(err.message);
        } else {
          setError("Something went wrong. Please try again.");
        }
      } else {
        setError("Something went wrong. Please try again.");
      }
    }

    setLoading(false);
  }

  return {
    data,
    error,
    loading,
    Sugnup,
  };
}

export default useFirebaseSignup;
