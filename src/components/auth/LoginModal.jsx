import React from "react";
import { createUseStyles } from "react-jss";

import ModalHoc from "./ModalHoc";
import InputField from "./InputField";
import ModalForm from "./ModalForm";

function LoginModal(props) {
  const useStyles = createUseStyles({
    elementContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  const classes = useStyles();

  return (
    <ModalHoc>
      <div className={classes.elementContainer}>
        <h2>Music for everyone</h2>
      </div>
      <div className={classes.elementContainer}>
        <ModalForm login={true}>
          <InputField placeholder={"Email"} name={"email"} />
          <InputField placeholder={"Password"} name={"password"} />
        </ModalForm>

        {/*<input placeholder={"Password"} />*/}
      </div>
    </ModalHoc>
  );
}

export default LoginModal;
