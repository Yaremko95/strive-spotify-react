import React, { Component, useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import GreenBtn from "../components/buttons/GreenBtn";
import Divider from "../components/Divider";
import LogoFacebook from "react-ionicons/lib/LogoFacebook";
import LogoApple from "react-ionicons/lib/LogoApple";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { connect } from "react-redux";
import { authenticate } from "../store/actions";

const Login = (props) => {
  const useStyles = createUseStyles({
    loginContent: {
      margin: "0 auto",
      maxWidth: "450px",
      fontFamily: '"Circular", sans-serif',
    },
  });
  const classes = useStyles();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { login } = props;
  const handleLogin = () => {
    login(`http://localhost:3001/users`, "login", credentials);
  };
  return (
    <>
      <Container>
        <Row>
          <Image
            id="login-logo"
            style={{ width: "200px" }}
            className="mt-3 mx-auto"
            src="https://github.com/luisanton-io/react-spotify/blob/master/public/assets/logos/logo-black.png?raw=true"
          />
        </Row>
      </Container>

      <hr />

      <Container fluid className={classes.loginContent}>
        <Row>
          <Col xs={12} className="mt-3 mb-2 text-center font-weight-bold">
            <span>To continue, log in to Spotify.</span>
          </Col>
          <Col xs={12} className="my-1 px-0">
            <Button className="btn-fb rounded-pill w-100 text-uppercase d-flex justify-content-center align-content-center">
              <LogoFacebook
                color="white"
                className="mr-2"
                style={{ marginTop: "-2px" }}
              />
              Continue with Facebook
            </Button>
          </Col>
          <Col xs={12} className="my-1 px-0">
            <Button
              variant="dark"
              className="rounded-pill w-100 text-uppercase d-flex justify-content-center align-content-center"
            >
              <LogoApple
                color="white"
                className="mr-2"
                style={{ marginTop: "-2px" }}
              />
              Continue with Apple
            </Button>
          </Col>

          <Divider text="or" />

          <Col xs={12} className="mb-3 px-1" id="credentials">
            <input
              type="text"
              className="form-control input-with-feedback my-1"
              name="username"
              id="login-username"
              placeholder="Email address or username"
              value={credentials.email}
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
            />
            <input
              type="password"
              className="form-control input-with-feedback my-1"
              name="password"
              id="login-password"
              placeholder="Password"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />
          </Col>

          <Col xs={12} sm={6} className="d-flex align-items-center pl-0">
            <div className="ml-0 mt-2 d-flex align-content-center text-muted">
              <label className="checkbox mr-2">
                <input type="checkbox" />
              </label>
              <span className="mb-2">Remember Me</span>
            </div>
          </Col>

          <Col xs={12} sm={6} className="px-0 mt-3 mt-md-0">
            <Link to="/home">
              <GreenBtn text="Sign up" />
            </Link>
          </Col>

          <Col xs={12} className="text-center mt-3">
            <p>
              <a
                id="reset-password-link"
                href="https://www.spotify.com/password-reset/"
              >
                Forgot your password?
              </a>
            </p>
          </Col>

          <Divider />

          <Col xs={12} className="mt-3 mb-1 text-center">
            <h5 style={{ fontWeight: 800 }}>Don't have an account?</h5>
          </Col>

          <Col xs={12} className="text-center my-3">
            <Button
              variant="outline-secondary"
              className="rounded-pill w-100 text-uppercase"
              style={{ borderWidth: "2px" }}
              onClick={handleLogin}
            >
              Sign in for Spotify
            </Button>
          </Col>

          <Divider />

          <Col xs={12} className="mt-3">
            <p
              className="text-muted disclaimer text-center"
              style={{ fontSize: ".7em" }}
            >
              If you click "Log in with Facebook" and are not a Spotify user,
              you will be registered and you agree to Spotify's{" "}
              <a
                href="https://www.spotify.com/legal/end-user-agreement/plain/"
                target="_blank"
              >
                Terms &amp; Conditions
              </a>{" "}
              and{" "}
              <a
                href="https://www.spotify.com/legal/privacy-policy/plain/"
                target="_blank"
              >
                Privacy Policy
              </a>
              .
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default connect(
  (state) => ({ ...state }),
  (dispatch) => ({
    login: (endpoint, param, body) =>
      dispatch(authenticate(endpoint, param, body)),
  })
)(Login);
