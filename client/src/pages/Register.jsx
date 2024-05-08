import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo, FormRow } from "../components";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
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
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
