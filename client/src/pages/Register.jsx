import { Link, Form, redirect, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo, FormRow } from "../components";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/auth/register", data);
    toast.success("Registration Successful", { autoClose: 2000 });
    return redirect("/login");
  } catch (error) {
    toast.error(error?.response?.data?.msg, { autoClose: 2000 });
    return error;
  }
};

const Register = () => {
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="ryan" />
        <FormRow
          type="text"
          name="lastName"
          labetText="last name"
          defaultValue="malaque"
        />
        <FormRow type="text" name="location" defaultValue="lazi" />
        <FormRow type="email" name="email" defaultValue="ryan@gmail.com" />
        <FormRow type="password" name="password" defaultValue="secretoo" />
        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? "submitting..." : "submit"}
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Register;
