import React, { Component } from "react";
import { Container, Row, Col, Image, Button, Form } from "react-bootstrap";
import GreenBtn from "../components/buttons/GreenBtn";
import Divider from "../components/Divider";
import LogoFacebook from "react-ionicons/lib/LogoFacebook";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";


const Signup = (props) => {
  const useStyles = createUseStyles({
    loginContent: {
      margin: "0 auto",
      maxWidth: "450px",
      fontFamily: '"Circular", sans-serif',
    },
  });
  const classes = useStyles();
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

          <Col xs={12} className="mt-3">
            <p
              className="text-muted disclaimer text-center"
              style={{ fontSize: "2em" }} >
              Register for free and start listening.
            </p>
          </Col>
          <Col xs={12} className="mt-3 mb-2 text-center font-weight-bold text-muted">
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

          <Col xs={12} className="mt-3">
            <p
              className="text-muted disclaimer text-center"
              style={{ fontSize: ".7em" }}
            >
              I agree to the{" "}
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


          <Col xs={12} className="mt-3">
            <p
              className="text-muted disclaimer text-center"
              style={{ fontSize: "1em" }}>
              Or{" "}

            </p>
            <p
              className="text-muted disclaimer text-center"
              style={{ fontSize: "2em" }}>
              Register by email{" "}

            </p>
          </Col>

          <Col xs={12} className="mb-3 px-1" id="credentials">
            <Form>
              <Form.Group controlId="formBasicEmail" className="text-muted">
                <Form.Label>Your email address</Form.Label>
                <Form.Control type="email" placeholder="Please enter your email address." />
                <Form.Label className="mt-2">Confirm email address</Form.Label>
                <Form.Control type="email" placeholder="Please enter your email address again." />
                <Form.Label className="mt-2">Create a Password</Form.Label>
                <Form.Control type="password" placeholder="Create a Password" />
                <Form.Label className="mt-2">What is the display name?</Form.Label>
                <Form.Control type="text" placeholder="Enter your profile name." />
              </Form.Group>

              <Divider />

              <Form.Label className="text-muted">Birthday</Form.Label>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label className="text-muted">Year</Form.Label>
                  <Form.Control placeholder="YYYY" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label className="text-muted">Moon</Form.Label>
                  <Form.Control as="select" defaultValue="January">
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label className="text-muted">Day</Form.Label>
                  <Form.Control placeholder="DD" />
                </Form.Group>
              </Form.Row>

              <Divider />
              {['checkbox'].map((type) => (
                <div className="mb-3">
                  <Form.Check className=" text-muted"

                    inline
                    label="Male"
                    type={type}
                    id={`custom-inline-${type}-1`}
                  />
                  <Form.Check className=" text-muted"
                    custom
                    inline
                    label="Female"
                    type={type}
                    id={`custom-inline-${type}-2`}
                  />
                  <Form.Check className=" text-muted"
                    custom
                    inline
                    label="Non-binary"
                    type={type}
                    id={`custom-inline-${type}-2`}
                  />

                </div>
              ))}

              {['checkbox'].map((type) => (
                <div className="mb-3">

                  <Form.Check className="ml-0 mt-2 d-flex  text-muted"

                    type={type}
                    label="Share your registration data with Spotify content providers for marketing purposes."
                  />
                  <Form.Check className="ml-0 mt-2 d-flex text-muted"

                    type={type}
                    label="I agree to the Spotify Terms of Service and Privacy Policy ."
                  />
                </div>
              ))}

            </Form>
          </Col>

          <Col xs={12} sm={12} className="px-0 mt-3 mt-md-0">
            <Link to="/home">
              <GreenBtn text="Sign up" />
            </Link>
          </Col>

          <Col xs={12} className="text-center mt-3">
            <p className="text-muted"> Do you have an account?
              <a
                id="reset-password-link"
                href="https://www.spotify.com/password-reset/"
              >
                Login.
              </a>
            </p>
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
export default Signup;
