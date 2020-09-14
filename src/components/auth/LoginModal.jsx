import React from "react";
import { createUseStyles } from "react-jss";

import ModalHoc from "./ModalHoc";
import InputField, { LinkButton } from "./InputField";
import ModalForm from "./ModalForm";
import { connect } from "react-redux";
import { authenticate } from "../../store/actions";

function LoginModal(props) {
  const useStyles = createUseStyles({
    elementContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    footer: {
      width: "85%",
      margin: "auto",
      display: "flex",
      marginTop: "3rem",

      alignItems: "center",
      justifyContent: "space-around",
    },
  });
  const classes = useStyles();

  return (
    <ModalHoc {...props}>
      {(toggle) => (
        <>
          <div className={classes.elementContainer}>
            <h2>Music for everyone</h2>
          </div>
          <div className={classes.elementContainer}>
            <ModalForm
              type={"login"}
              button={{
                value: "Log in",
                to: { background: "rgb(122, 189, 0)", color: "white" },
                from: { background: "white", color: "black" },
              }}
            >
              <InputField placeholder={"Email"} name={"email"} />
              <InputField placeholder={"Password"} name={"password"} />
            </ModalForm>
          </div>
          <div className={classes.elementContainer}>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                color: "rgba(240, 240, 240, 0.58)",
              }}
            >
              DON'T HAVE AN ACCOUNT?{" "}
              <LinkButton
                style={{
                  fontSize: "1rem",
                  textDecoration: "underline",
                  fontWeight: "400",
                }}
                onClick={() => toggle()}
              >
                SIGN UP
              </LinkButton>
            </span>
          </div>
          <div className={classes.footer}>
            <LinkButton
              style={{
                fontSize: "0.9rem",
                fontWeight: "200",
                color: "rgba(240, 240, 240, 0.88)",
              }}
            >
              reset password
            </LinkButton>
            <LinkButton
              style={{
                fontSize: "0.9rem",
                fontWeight: "200",
                color: "rgba(240, 240, 240, 0.88)",
              }}
            >
              settings
            </LinkButton>
          </div>
        </>
      )}
    </ModalHoc>
  );
}

export default LoginModal;
