import React from "react";
import { createUseStyles } from "react-jss";
import { animated, Transition } from "react-spring/renderprops";
import Image from "react-bootstrap/Image";

const ModalHoc = ({ children, ...props }) => {
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
    },
    modal: {
      width: "25%",
      padding: "2.5rem 3rem",
      backgroundColor: "rgba(0,0,0)",
      borderRadius: "10px",
      position: "absolute",
      margin: "auto",
    },
    elementContainer: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  const classes = useStyles();
  const { show, setShow, toggle } = props;

  return (
    <Transition
      native
      // items={signUp}
      items={show}
      from={{
        o: 0,
        xyz: [-20, 0, 1],
        zIndex: 1000,
      }}
      enter={[
        {
          o: 1,
          xyz: [0, 0, 1],
          zIndex: 2000,
          delay: 200,
        },
      ]}
      leave={{
        o: 0,
        xyz: [0, 0, 0.5],
        zIndex: 1000,
      }}
    >
      {(item) =>
        item &&
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
              zIndex: props.zIndex,
            }}
          >
            <div className={classes.elementContainer}>
              <Image
                fluid
                src={"/assets/logo-white.png"}
                style={{ width: "35%", marginBottom: "3rem" }}
              />
            </div>
            {children(show, setShow, toggle)}
          </animated.div>
        ))
      }
    </Transition>
  );
};

export default ModalHoc;
