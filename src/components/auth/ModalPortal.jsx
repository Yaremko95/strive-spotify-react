import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import LoginModal from "./LoginModal";
import { connect } from "react-redux";
import { compose } from "redux";
import SignUpModal from "./SignUPModal";
import { authorize, isLoading } from "../../store/actions";

const ModalPortal = (props) => {
  const [signUp, showSignUp] = React.useState(false);
  const [login, showLogin] = React.useState(true);
  const toggle = () => {
    showLogin(!login);
    showSignUp(!signUp);
  };
  // useEffect(() => {
  //   if (!login) {
  //     showLogin(true);
  //     showSignUp(false);
  //   } else {
  //     showLogin(false);
  //     showSignUp(true);
  //   }
  //   // if (!login) {
  //   //   showSignUp(true);
  //   //   showLogin(false);
  //   //   alert("login if");
  //   // } else {
  //   //   showSignUp(false);
  //   //   showLogin(true);
  //   //   alert("login else");
  //   // }
  // }, []);
  return ReactDOM.createPortal(
    props.children(signUp, showSignUp, login, showLogin, toggle),
    document.body
  );
};

const authHOC = (Component) => (props) => {
  const { user, auth, loggedIn, loading } = props;
  useEffect(() => {
    console.log(props);
    auth();
  }, []);
  return (
    <>
      {!loading && !loggedIn && (
        <ModalPortal>
          {(signUp, showSignUp, login, showLogin, toggle) => (
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
              <LoginModal show={login} setShow={showLogin} toggle={toggle} />
              <SignUpModal show={signUp} setShow={showSignUp} toggle={toggle} />
              {/*{!login ? (*/}
              {/*  <SignUpModal show={signUp} setShow={showSignUp} />*/}
              {/*) : (*/}
              {/*  <LoginModal show={login} setShow={showLogin} />*/}
              {/*)}*/}
            </div>
          )}
        </ModalPortal>
      )}
      <Component {...props} />
    </>
  );
};

const composedAuthHOC = compose(
  connect(
    (state) => ({
      user: state.user,
      loggedIn: state.loggedIn,
      loading: state.loading,
    }),
    (dispatch) => ({
      auth: (endpoint, param, body) =>
        dispatch(authorize(endpoint, param, body)),
    })
  ),
  authHOC
);
export default composedAuthHOC;
