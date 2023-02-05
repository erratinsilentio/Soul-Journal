"use client";
import { supabase } from "@/supabase";
import { loginActionFormik } from "@/utils/useFormik";

export const LoginForm = () => {
  const handleLogin = async (mail: string) => {
    try {
      const { error } = await supabase.auth.signInWithOtp({ email: mail });
      if (error) throw error;
    } catch (error) {
      console.log(error.error_description || error.message);
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
