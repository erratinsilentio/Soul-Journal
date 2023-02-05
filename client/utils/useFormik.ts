import { useFormik } from "formik";
import { loginValidationSchema } from "./userSchema";

interface LoginForm {
  mail: string;
}

export const loginActionFormik = (
  handleLogin: (mail: string) => Promise<void>
) => {
  const formik = useFormik<LoginForm>({
    initialValues: {
      mail: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values: LoginForm) => {
      console.log(values);
      handleLogin(values.mail);
    },
  });

  return formik;
};
