import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import LoginModal from "./LoginModal";
import { connect } from "react-redux";
import { compose } from "redux";
import SignUpModal from "./SignUPModal";
import { authorize, isLoading } from "../../store/actions";

const ModalPortal = connect((state) => ({ toggleModal: state.toggleModal }))(
  (props) => {
    const { toggleModal } = props;
    const [signUp, showSignUp] = React.useState(true);
    const [login, showLogin] = React.useState(false);
    const toggle = () => {
      showLogin(!login);
      showSignUp(!signUp);
    };
    useEffect(() => {
      toggle();
    }, [toggleModal]);
    return ReactDOM.createPortal(
      props.children(signUp, login, toggle),
      document.body
    );
  }
);

const authHOC = (Component) => (props) => {
  const { user, auth, loggedIn, loading } = props;
  useEffect(() => {
    console.log(props);
    auth();
  }, []);
  return (
    <>
      {!user && (
        <ModalPortal>
          {(signUp, login, toggle) => (
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
              <LoginModal show={login} toggle={toggle} />
              <SignUpModal show={signUp} toggle={toggle} />
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
      toggleModal: state.toggleModal,
    }),
    (dispatch) => ({
      auth: (endpoint, param, body) =>
        dispatch(authorize(endpoint, param, body)),
    })
  ),
  authHOC
);
export default composedAuthHOC;
