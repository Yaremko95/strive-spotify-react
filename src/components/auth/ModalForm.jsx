import React from "react";
import InputField, {
  BreakLine,
  CustomButton,
  RememberCheckbox,
  withPropsChange,
} from "./InputField";
const LoginFbButton = withPropsChange(CustomButton);
const LoginButton = withPropsChange(CustomButton);
function ModalForm(props) {
  const [credentials, setCredentials] = React.useState({});

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
      <LoginFbButton {...props.button} />
      <BreakLine />
      <LoginFbButton
        value="Sign up with Facebook"
        from={{ background: "rgba(59, 89, 153, 1)", color: "white" }}
        to={{ background: "rgba(59, 89, 153, 1)", color: "white" }}
      />
    </>
  );
}

export default ModalForm;
