import React from "react";
import InputField from "./InputField";
function ModalForm(props) {
  const [credentials, setCredentials] = React.useState({});

  return React.Children.map(props.children, (input) =>
    React.cloneElement(input, {
      value: credentials[input.props.name],
      onChange: (e) =>
        setCredentials({
          ...credentials,
          [input.props.name]: e.currentTarget.value,
        }),
    })
  );
}

export default ModalForm;
