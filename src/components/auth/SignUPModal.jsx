import React from "react";
import ModalHoc from "./ModalHoc";
import ModalForm from "./ModalForm";
import InputField, { LinkButton } from "./InputField";

function SignUpModal(props) {
  return (
    <ModalHoc {...props}>
      {(show, setShow) => (
        <>
          <button onClick={() => setShow(false)}>Login</button>
        </>
      )}
    </ModalHoc>
  );
}

export default SignUpModal;
