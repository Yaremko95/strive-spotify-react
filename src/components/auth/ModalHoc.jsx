import React from "react";
import { createUseStyles } from "react-jss";
import { animated, Transition } from "react-spring/renderprops";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import ReactDOM from "react-dom";

const ModalHoc = ({ children }) => {
  const useStyles = createUseStyles({
    container: {
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
    },
    modal: {
      width: "25%",
      padding: "2.5rem 3rem",
      backgroundColor: "rgba(0,0,0)",
      borderRadius: "10px",
    },
    elementContainer: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  const classes = useStyles();
  const [show, setShow] = React.useState(true);
  React.useEffect(() => {
    setShow(true);
    return () => {
      setShow(false);
    };
  }, [show]);
  return (
    <div className={classes.container}>
      <Transition
        native
        items={show}
        from={{
          o: 0,
          xyz: [-20, 0, 1],
        }}
        enter={[
          {
            o: 1,
            xyz: [0, 0, 1],
          },
        ]}
        leave={{
          o: 0,
          xyz: [0, 0, 0.5],
        }}
      >
        {(show) =>
          show &&
          ((props) => (
            <animated.div
              className={classes.modal}
              style={{
                transform: props.xyz.interpolate(
                  (x, y, z) => `translateX(${x}%) translateY(${y}%) scale(${z})`
                ),
                opacity: props.o.interpolate({
                  range: [0.0, 1, 1.25, 2],
                  output: [0, 1, 0, 0],
                }),
              }}
            >
              <div className={classes.elementContainer}>
                <Image
                  fluid
                  src={"/assets/logo-white.png"}
                  style={{ width: "35%", marginBottom: "3rem" }}
                />
              </div>
              {children}
            </animated.div>
          ))
        }
      </Transition>
    </div>
  );
};

export default ModalHoc;
