import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import LoginModal from "./LoginModal";
import { connect } from "react-redux";
import { compose } from "redux";
import SignUpModal from "./SignUPModal";
import { createUseStyles } from "react-jss";
const ModalPortal = (props) => {
  const [signUp, showSignUp] = React.useState(true);
  const [login, showLogin] = React.useState(true);
  useEffect(() => {
    if (!signUp) {
      showLogin(true);
    }
    if (!login) {
      showSignUp(true);
    }
  }, [signUp, login]);
  return ReactDOM.createPortal(
    props.children(signUp, showSignUp, login, showLogin),
    document.body
  );
};

// function ModalPortal(props) {
//     return (
//         <div></div>
//     );

const AuthHOC = (Component) => {
  return (props) => {
    return (
      <React.Fragment>
        {!props.user && (
          <ModalPortal>
            {(signUp, showSignUp, login, showLogin) => (
              <div
                style={{
                  position: "fixed",
                  zIndex: "1000",
                  top: "0",
                  left: "0",
                  height: "100vh",
                  width: "100%",
                  backgroundColor: "rgba(255, 255, 255, .1)",
                  backdropFilter: " blur(4px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                aria-modal={true}
                tabIndex={-1}
                role={"dialog"}
              >
                {/*<LoginModal show={login} setShow={showLogin} />*/}
                {!login ? (
                  <SignUpModal show={signUp} setShow={showSignUp} />
                ) : (
                  <LoginModal show={login} setShow={showLogin} />
                )}
              </div>
            )}
          </ModalPortal>
        )}
        <Component />
      </React.Fragment>
    );
  };
};

const composedAuthHOC = compose(
  connect((state) => ({ user: state.user })),
  AuthHOC
);
export default composedAuthHOC;
