"use client";
import { setError, setSuccess } from "@/store/notificationSlice";
import { supabase } from "@/supabase";
import { loginActionFormik } from "@/utils/useFormik";
import { useDispatch } from "react-redux";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleLogin = async (mail: string) => {
    try {
      const { error } = await supabase.auth.signInWithOtp({ email: mail });
      if (error) throw error;
      dispatch(setSuccess());
    } catch (error) {
      console.log(error.error_description || error.message);
      dispatch(setError());
    }
  };

  const formik = loginActionFormik(handleLogin);

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col">
      <input
        id="mail"
        name="mail"
        type="text"
        placeholder="email..."
        className="input-bordered input-accent input my-5 w-full max-w-xs"
        onChange={formik.handleChange}
        value={formik.values["mail"]}
      />
      <button type="submit" className="btn-wide btn">
        Send Link
      </button>
    </form>
  );
};
