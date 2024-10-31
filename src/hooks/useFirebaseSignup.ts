import auth from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import AuthFormInput from "../types/authFormInput";
import { useState } from "react";

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
      setError(err.message);
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
