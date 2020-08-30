import React from "react";
import ModalHoc from "./ModalHoc";
import ModalForm from "./ModalForm";
import InputField, { LinkButton } from "./InputField";
import { createUseStyles } from "react-jss";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
function SignUpModal(props) {
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
      marginTop: "2.5rem",

      alignItems: "center",
      justifyContent: "space-around",
    },
  });
  const classes = useStyles();
  return (
    <ModalHoc {...props}>
      {(show, setShow, toggle) => (
        <>
          {/*<button onClick={() => toggle()}>Login</button>*/}
          <div className={classes.elementContainer + " text-center"}>
            <h3>Start listening with free spotify account</h3>
          </div>
          <div className={classes.elementContainer}>
            <ModalForm
              type={"signUp"}
              button={{
                value: "Sign Up",
                to: { background: "rgb(122, 189, 0)", color: "white" },
                from: { background: "rgb(122, 189, 0)", color: "white" },
              }}
            >
              <InputField placeholder={"Email"} name={"email"} />
              <InputField placeholder={"Create password"} name={"password"} />
              <InputField
                placeholder={"What should we call you?"}
                name={"firstName"}
              />
            </ModalForm>
          </div>
          <div
            className={classes.elementContainer}
            style={{ padding: "0 1rem" }}
          >
            <Form.Check type={"checkbox"}>
              <Form.Check.Input type={"checkbox"} />
              <Form.Check.Label style={{ color: "rgba(240, 240, 240, 0.58)" }}>
                I agree to{" "}
                <Link style={{ color: "rgba(240, 240, 240, 0.9)" }} to={"#"}>
                  Spotify Terms and Conditions of Use
                </Link>{" "}
                and{" "}
                <Link style={{ color: "rgba(240, 240, 240, 0.9)" }} to={"#"}>
                  Privacy Policy
                </Link>
              </Form.Check.Label>
            </Form.Check>
          </div>
          <div
            className={classes.elementContainer}
            style={{ paddingTop: "2.5rem" }}
          >
            <LinkButton
              style={{
                fontSize: "1.2rem",
                fontWeight: "400",
              }}
              onClick={() => toggle()}
            >
              BACK
            </LinkButton>
          </div>
          <div className={classes.footer}>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                color: "rgba(240, 240, 240, 0.58)",
              }}
            >
              ALREADY ON SPOTIFY?
              <LinkButton
                style={{
                  fontSize: "1rem",
                  textDecoration: "underline",
                  fontWeight: "400",
                }}
                onClick={() => toggle()}
              >
                LOGIN
              </LinkButton>
            </span>
          </div>
        </>
      )}
    </ModalHoc>
  );
}

export default SignUpModal;
