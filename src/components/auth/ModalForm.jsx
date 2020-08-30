import React from "react";
import InputField, {
  BreakLine,
  CustomButton,
  RememberCheckbox,
  withPropsChange,
} from "./InputField";
import { connect } from "react-redux";
import { authenticate } from "../../store/actions";
const LoginFbButton = withPropsChange(CustomButton);
const LoginButton = withPropsChange(CustomButton);
function ModalForm(props) {
  const [credentials, setCredentials] = React.useState({});
  const { login } = props;
  const handleLogin = () => {
    alert("ok");
    login(`http://localhost:3001/users`, "login", credentials);
  };
  return (
    <>
      {React.Children.map(props.children, (input) =>
        React.cloneElement(input, {
          value: credentials[input.props.name],
          onChange: (e) =>
            setCredentials({
              ...credentials,
              [input.props.name]: e.currentTarget.value,
            }),
        })
      )}
      {props.login && <RememberCheckbox />}
      <LoginButton {...props.button} onClick={handleLogin} />
      <BreakLine />
      <LoginFbButton
        value="Sign up with Facebook"
        from={{ background: "rgba(59, 89, 153, 1)", color: "white" }}
        to={{ background: "rgba(59, 89, 153, 1)", color: "white" }}
      />
    </>
  );
}

// export default ModalForm;
export default connect(
  (state) => ({ ...state }),
  (dispatch) => ({
    login: (endpoint, param, body) =>
      dispatch(authenticate(endpoint, param, body)),
  })
)(ModalForm);
